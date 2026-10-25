/* ============================================================
   DUARTEX SOLUTIONS - PIPELINE 3D (THREE.JS)
   ============================================================ */
(function(window){
  "use strict";

  var stage = document.querySelector("#stage");
  var cv3d = document.querySelector("#cv");
  if (!stage || !cv3d) return;

  var scene, camera, renderer;
  var nodeObjects = [];
  var packetMesh;
  var isSimulating = false;
  var simProgress = 0;
  var simSpeed = 0.008;
  var curvePath;

  var nodePositions = [
    new THREE.Vector3(-6.0, -0.2, 0),
    new THREE.Vector3(-3.0, 0.8, -0.5),
    new THREE.Vector3(0.0, -0.4, 0.5),
    new THREE.Vector3(3.0, 0.7, -0.2),
    new THREE.Vector3(6.0, 0.0, 0)
  ];

  function init3D(){
    var width = stage.clientWidth;
    var height = stage.clientHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 13);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas: cv3d, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    var ambLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambLight);

    var dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    var pointLight = new THREE.PointLight(0xff7d52, 1.5, 20);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    var colors = [0x1F6F8B, 0x2563C9, 0x62B5D2, 0xD94A22, 0x2E7D4F];
    var sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);

    nodePositions.forEach(function(pos, idx){
      var mat = new THREE.MeshStandardMaterial({
        color: colors[idx],
        roughness: 0.25,
        metalness: 0.2,
        emissive: colors[idx],
        emissiveIntensity: 0.2
      });
      var mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.copy(pos);
      mesh.userData = { index: idx };
      scene.add(mesh);
      nodeObjects.push(mesh);

      var ringGeo = new THREE.TorusGeometry(0.8, 0.02, 16, 64);
      var ringMat = new THREE.MeshBasicMaterial({ color: colors[idx], transparent: true, opacity: 0.35 });
      var ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.5;
      mesh.add(ring);
    });

    curvePath = new THREE.CatmullRomCurve3(nodePositions);
    var tubeGeo = new THREE.TubeGeometry(curvePath, 100, 0.08, 12, false);
    var tubeMat = new THREE.MeshStandardMaterial({
      color: 0x454B5C,
      transparent: true,
      opacity: 0.45,
      roughness: 0.5
    });
    var tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tubeMesh);

    var packetGeo = new THREE.SphereGeometry(0.28, 24, 24);
    var packetMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xff7d52,
      emissiveIntensity: 1.0,
      roughness: 0.1
    });
    packetMesh = new THREE.Mesh(packetGeo, packetMat);
    packetMesh.position.copy(nodePositions[0]);
    scene.add(packetMesh);

    // Mouse drag rotate
    var isDragging = false;
    var prevMouseX = 0;
    var prevMouseY = 0;

    cv3d.addEventListener("mousedown", function(e){
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });
    window.addEventListener("mouseup", function(){ isDragging = false; });
    window.addEventListener("mousemove", function(e){
      if(isDragging){
        var dx = e.clientX - prevMouseX;
        var dy = e.clientY - prevMouseY;
        scene.rotation.y += dx * 0.005;
        scene.rotation.x += dy * 0.003;
        scene.rotation.x = Math.max(-0.4, Math.min(0.4, scene.rotation.x));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    });

    // Touch mobile
    cv3d.addEventListener("touchstart", function(e){
      if(e.touches.length === 1){
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    });
    window.addEventListener("touchend", function(){ isDragging = false; });
    window.addEventListener("touchmove", function(e){
      if(isDragging && e.touches.length === 1){
        var dx = e.touches[0].clientX - prevMouseX;
        var dy = e.touches[0].clientY - prevMouseY;
        scene.rotation.y += dx * 0.006;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    });

    window.addEventListener("resize", onWindowResize);
    updateNodeLabels();
  }

  function onWindowResize(){
    if(!camera || !renderer) return;
    var w = stage.clientWidth;
    var h = stage.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function updateNodeLabels(){
    if(!camera) return;
    nodeObjects.forEach(function(node, i){
      var wp = new THREE.Vector3();
      node.getWorldPosition(wp);
      wp.y += 0.85;
      wp.project(camera);
      var x = (wp.x * 0.5 + 0.5) * stage.clientWidth;
      var y = (-(wp.y * 0.5) + 0.5) * stage.clientHeight;
      var lbl = document.querySelector("#lbl-" + i);
      if(lbl){
        lbl.style.left = x + "px";
        lbl.style.top = y + "px";
      }
    });
  }

  function animate3D(){
    requestAnimationFrame(animate3D);

    var time = Date.now() * 0.002;
    nodeObjects.forEach(function(node, i){
      var s = 1 + Math.sin(time + i * 1.5) * 0.04;
      node.scale.set(s, s, s);
    });

    if(isSimulating && curvePath && packetMesh){
      simProgress += simSpeed;
      if(simProgress >= 1){
        simProgress = 1;
        isSimulating = false;
        if(window.DuarteX && window.DuarteX.onSimulationComplete){
          window.DuarteX.onSimulationComplete();
        }
      }
      var pt = curvePath.getPointAt(simProgress);
      packetMesh.position.copy(pt);

      var activeIdx = Math.min(4, Math.floor(simProgress * 5));
      nodeObjects.forEach(function(node, idx){
        var lbl = document.querySelector("#lbl-" + idx);
        if(idx <= activeIdx){
          node.material.emissiveIntensity = 0.8;
          if(lbl) lbl.classList.add("on");
        } else {
          node.material.emissiveIntensity = 0.2;
          if(lbl) lbl.classList.remove("on");
        }
      });

      if(window.DuarteX && window.DuarteX.updateSimulationUI){
        window.DuarteX.updateSimulationUI(simProgress);
      }
    }

    updateNodeLabels();
    renderer.render(scene, camera);
  }

  window.DuarteXPipeline3D = {
    init: function(){
      init3D();
      animate3D();
    },
    startSimulation: function(){
      if(isSimulating) return false;
      isSimulating = true;
      simProgress = 0;
      return true;
    }
  };
})(window);
