/* ============================================================
   DUARTEX SOLUTIONS - LÓGICA PRINCIPAL, IDIOMAS & FORMULÁRIO
   ============================================================ */
(function(window){
  "use strict";

  var $ = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var T = {
    pt: {
      lang_aria: "Idioma", theme_aria: "Alternar tema claro e escuro", cta_top: "Falar Conosco",
      eyebrow: "Venda mais com o que você já tem",
      h1: "Todo lead atendido. Toda venda rastreada.",
      lead: "Organizamos a jornada do seu cliente desde o primeiro clique até a conversão. Alertas automáticos no WhatsApp da sua equipe e dashboards claros no seu painel.",
      btn_loss: "Calcular perda de vendas", btn_talk: "Agendar diagnóstico",
      proof1: "Sem necessidade de equipe técnica interna", proof2: "Integra com suas ferramentas atuais", proof3: "Retorno visível em métricas reais",
      tools_label: "Conectado aos ecossistemas líderes de IA e automação",
      tools_note: "Marcas e plataformas integráveis via API e automações de fluxo.",
      see_label: "Fluxo Automatizado em Ação", cv_aria: "Simulador 3D do pipeline de automação",
      hint3d: "Arraste para girar a cena 3D",
      s_ready: "Pronto para simular", s_done: "Fluxo concluído com sucesso",
      st1_l: "1. Entrada", st2_l: "2. Validação", st3_l: "3. CRM", st4_l: "4. Alerta", st5_l: "5. BI",
      st1_n: "Lead Chega", st1_d: "Origem: campanhas, tráfego ou WhatsApp.",
      st2_n: "Dados Filtrados", st2_d: "Higienização e eliminação de duplicidades.",
      st3_n: "Registro no CRM", st3_d: "Banco de dados atualizado em milissegundos.",
      st4_n: "Vendedor Acionado", st4_d: "Notificação com contexto direto no canal.",
      st5_n: "Painel Gerencial", st5_d: "Métricas consolidadas em tempo real.",
      btn_sim: "Simular novo contato", btn_sim2: "Simular outro lead",
      newc: "Novo Lead", rec_title: "Ficha do Contato", k_name: "Nome", k_company: "Empresa", k_source: "Canal", k_status: "Status",
      waiting: "Aguardando simulação...", newcontact: "Lead Qualificado", kpi_title: "Leads Processados Hoje", fict: "Dados simulados em tempo de execução.",
      via: "via",
      prob_label: "Onde o dinheiro escapa", prob_h2: "Se sua operação passa por isso, você perde vendas todos os dias.",
      p1b: "O cliente manda mensagem e fica sem resposta rápida.", p1s: "Contatos perdidos em conversas soltas significam investimento de tráfego jogado fora.",
      p2b: "Demora no primeiro contato entrega a venda ao concorrente.", p2s: "Quem atende nos primeiros 5 minutos tem até 8x mais chances de fechar.",
      p3b: "Horas perdidas copiando dados em planilhas manuais.", p3s: "Sua equipe deveria estar vendendo e negociando, não preenchendo relatórios manuais.",
      calc_label: "Calculadora de Oportunidade", calc_h2: "Quanto sua empresa pode estar deixando na mesa?", calc_sub: "Faça uma estimativa com base no seu volume mensal de contatos.",
      c_contacts: "Contatos recebidos por mês", c_ticket: "Ticket médio de venda (R$)", c_conv: "Taxa de conversão esperada (%)", c_loss: "Taxa de contatos perdidos por lentidão (%)",
      out_label: "Receita que pode estar sendo perdida todo mês", out_lost: "Leads perdidos por mês", out_sales: "Vendas correspondentes perdidas", out_year: "Recuperando metade em 1 ano",
      out_note: "Cálculo estimativo para dimensionamento de perdas operacionais.", out_btn: "Quero recuperar essas vendas",
      sol_label: "A Solução DuarteX", sol_h2: "Mais conversão, menos fricção operacional.",
      pil1_t: "Venda Mais com o Mesmo Tráfego", pil1_p: "Nenhum lead esfria; acompanhamento do início ao fechamento.",
      pil2_t: "Economize Horas de Trabalho", pil2_p: "Rotinas manuais e cadastros repetitivos rodam 100% no piloto automático.",
      pil3_t: "Visão Clara do ROI", pil3_p: "Dashboards analíticos mostram os canais e vendedores mais eficientes.",
      s1_t: "Diagnóstico", s1_p: "Mapeamos onde estão os gargalos do seu funil atual.",
      s2_t: "Arquitetura", s2_p: "Desenhamos as integrações e fluxos de dados.",
      s3_t: "Implementação", s3_p: "Conectamos CRM, automações e alertamos sua equipe.",
      s4_t: "Monitoramento", s4_p: "Acompanhamos os números e ajustamos para máxima escala.",
      bi_label: "Dashboards & Analytics", bi_h2: "Decisões baseadas em números consolidados.", bi_sub: "Exemplo demonstrativo de visão operacional integrada.",
      bi_week: "Contatos nesta semana", bi_delta: "+18% vs semana anterior", bi_funnel: "Eficiência do Funil",
      f1: "Novos Leads", f2: "Qualificados", f3: "Negociação", f4: "Ganhos",
      bi_src: "Canais de Aquisição", bi_reply: "Tempo Médio de 1º Resposta", bi_goal: "Meta operacional: < 15 min",
      con_label: "Próximo Passo", con_h2: "Vamos estruturar suas automações?", con_lead: "Preencha os campos abaixo para entendermos o momento da sua empresa.",
      f_name: "Seu Nome", f_email: "Seu E-mail Corporativo", f_company: "Nome da Empresa", f_topic: "Principal desafio atual",
      o1: "Estruturação de CRM e funil de vendas", o2: "Automação de atendimento via WhatsApp", o3: "Criação de Dashboards em Power BI", o4: "Integração entre sistemas legados", o5: "Outro projeto",
      consent: "Concordo em receber contato para diagnóstico das minhas operações.", send: "Solicitar Diagnóstico",
      ft_blurb: "Engenharia de dados, automação de processos inteligentes e inteligência de negócios para operações que buscam escala.",
      ft_nav: "Navegação", ft_n1: "Calculadora", ft_n2: "Visão 3D", ft_n3: "Contato", ft_contact: "Canais Oficiais",
      ft_rights: "© 2026 DuarteX Solutions. Todos os direitos reservados.", ft_tag: "Tecnologia & Inteligência em Operações"
    },
    en: {
      lang_aria: "Language", theme_aria: "Toggle light and dark mode", cta_top: "Contact Us",
      eyebrow: "Sell more with what you already have",
      h1: "Every lead answered. Every sale tracked.",
      lead: "We organize your customer journey from first click to deal closed. Instant alerts on your team's WhatsApp and clear business intelligence dashboards.",
      btn_loss: "Calculate lost sales", btn_talk: "Book a diagnostic",
      proof1: "No internal technical team required", proof2: "Integrates with your existing tech stack", proof3: "Measurable ROI on actual metrics",
      tools_label: "Seamlessly connected to industry-leading AI and automation tools",
      tools_note: "Integrable platforms via APIs and scalable automation workflows.",
      see_label: "Automated Flow in Action", cv_aria: "3D simulator of automation pipeline",
      hint3d: "Drag to rotate the 3D scene",
      s_ready: "Ready to simulate", s_done: "Pipeline completed successfully",
      st1_l: "1. Intake", st2_l: "2. Validate", st3_l: "3. CRM", st4_l: "4. Alert", st5_l: "5. BI",
      st1_n: "Lead Arrives", st1_d: "Source: ad campaigns, search, or WhatsApp.",
      st2_n: "Data Cleaned", st2_d: "Deduplication and field formatting.",
      st3_n: "CRM Updated", st3_d: "Synchronized to database in milliseconds.",
      st4_n: "Rep Notified", st4_d: "Instant context-rich notification sent.",
      st5_n: "BI Dashboard", st5_d: "Consolidated operational analytics updated.",
      btn_sim: "Simulate new lead", btn_sim2: "Simulate another lead",
      newc: "New Lead", rec_title: "Contact Card", k_name: "Name", k_company: "Company", k_source: "Channel", k_status: "Status",
      waiting: "Awaiting simulation...", newcontact: "Qualified Lead", kpi_title: "Leads Processed Today", fict: "Runtime simulated demo data.",
      via: "via",
      prob_label: "Where revenue leaks", prob_h2: "If your business faces this, you are leaving money on the table.",
      p1b: "Leads reach out and wait hours for a reply.", p1s: "Unanswered chats mean paid acquisition budget wasted.",
      p2b: "Slow response times give deals to competitors.", p2s: "Replying within 5 minutes multiplies closing rates by up to 8x.",
      p3b: "Hours lost copying data between spreadsheets.", p3s: "Your sales team should focus on closing deals, not manual data entry.",
      calc_label: "Opportunity Calculator", calc_h2: "How much revenue are you losing each month?", calc_sub: "Estimate based on your monthly inbound lead volume.",
      c_contacts: "Monthly inbound leads", c_ticket: "Average deal value (R$)", c_conv: "Target conversion rate (%)", c_loss: "Estimated lead drop-off rate (%)",
      out_label: "Potential revenue leaking every month", out_lost: "Lost leads per month", out_sales: "Equivalent lost deals", out_year: "Recovering 50% over 1 year",
      out_note: "Model estimate based on operational leak ratios.", out_btn: "Recover these sales",
      sol_label: "The DuarteX Solution", sol_h2: "Higher conversion, minimal operational friction.",
      pil1_t: "Sell More From Current Traffic", pil1_p: "No lead goes cold; track opportunities from touchpoint to closed-won.",
      pil2_t: "Reclaim Hundreds of Hours", pil2_p: "Repetitive data entry and lead routing run 100% on autopilot.",
      pil3_t: "Transparent ROI", pil3_p: "Executive dashboards clearly show your top performers and best channels.",
      s1_t: "Diagnostic", s1_p: "We locate friction points in your current pipeline.",
      s2_t: "Architecture", s2_p: "We architect resilient integrations and data models.",
      s3_t: "Deployment", s3_p: "We wire CRM, webhooks, automations, and rep alerts.",
      s4_t: "Monitoring", s4_p: "We track performance metrics and iterate for scale.",
      bi_label: "Dashboards & Analytics", bi_h2: "Data-driven decisions across your business.", bi_sub: "Sample operational overview dashboard.",
      bi_week: "Contacts this week", bi_delta: "+18% vs last week", bi_funnel: "Funnel Efficiency",
      f1: "Inbound Leads", f2: "Qualified", f3: "Negotiation", f4: "Closed Won",
      bi_src: "Acquisition Channels", bi_reply: "Avg First Response Time", bi_goal: "SLA target: < 15 min",
      con_label: "Next Step", con_h2: "Ready to automate your operations?", con_lead: "Fill out the fields below so we can evaluate your workflow.",
      f_name: "Full Name", f_email: "Work Email", f_company: "Company Name", f_topic: "Primary operational challenge",
      o1: "CRM & sales pipeline architecture", o2: "WhatsApp automation & lead routing", o3: "Power BI dashboards & data modeling", o4: "Legacy system & database integration", o5: "Custom automation project",
      consent: "I agree to be contacted regarding operational diagnostics.", send: "Request Diagnostic",
      ft_blurb: "Data engineering, workflow automation, and business intelligence for high-growth operations.",
      ft_nav: "Navigation", ft_n1: "Calculator", ft_n2: "3D Pipeline", ft_n3: "Contact", ft_contact: "Direct Channels",
      ft_rights: "© 2026 DuarteX Solutions. All rights reserved.", ft_tag: "Technology & Operations Intelligence"
    }
  };

  var curLang = localStorage.getItem("dx-lang") || "pt";

  function applyLanguage(lang){
    curLang = lang;
    localStorage.setItem("dx-lang", lang);
    var dict = T[lang] || T.pt;
    $$("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(dict[k]) el.textContent = dict[k];
    });
    $$("[data-i18n-attr]").forEach(function(el){
      var pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach(function(pair){
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = parts[1].trim();
        if(dict[key]) el.setAttribute(attr, dict[key]);
      });
    });
    $$(".seg2 button").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    if(window.DuarteXCalculator) window.DuarteXCalculator.update();
  }

  // Idioma
  $$(".seg2 button").forEach(function(btn){
    btn.addEventListener("click", function(){
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Tema
  var themeBtn = $("#theme");
  function setTheme(mode){
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("dx-theme", mode);
    themeBtn.setAttribute("data-mode", mode);
  }
  if(themeBtn){
    themeBtn.addEventListener("click", function(){
      var cur = document.documentElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      setTheme(cur === "dark" ? "light" : "dark");
    });
  }

  // Scroll Progress
  window.addEventListener("scroll", function(){
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var progress = total > 0 ? window.scrollY / total : 0;
    $("#prog").style.transform = "scaleX(" + progress + ")";
  });

  // Reveal Observer
  var rvObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.1 });
  $$(".rv, .dline").forEach(function(el){ rvObserver.observe(el); });

  // Funil BI
  var funnelData = [
    { label: "f1", val: 520, pct: 100 },
    { label: "f2", val: 340, pct: 65 },
    { label: "f3", val: 180, pct: 34 },
    { label: "f4", val: 92, pct: 17 }
  ];
  var funnelEl = $("#funnel");
  if(funnelEl){
    funnelEl.innerHTML = funnelData.map(function(d){
      return '<div class="bar-row">' +
        '<span data-i18n="' + d.label + '">' + d.label + '</span>' +
        '<div class="track"><span style="width:' + d.pct + '%"></span></div>' +
        '<span class="num">' + d.val + '</span>' +
        '</div>';
    }).join("");
  }

  // Origem Leads
  var srcData = [
    { label: "Google Ads / SEO", val: 42 },
    { label: "WhatsApp Direto", val: 31 },
    { label: "Instagram", val: 18 },
    { label: "Indicações B2B", val: 9 }
  ];
  var srcEl = $("#src");
  if(srcEl){
    srcEl.innerHTML = srcData.map(function(d){
      return '<div class="bar-row">' +
        '<span>' + d.label + '</span>' +
        '<div class="track"><span style="width:' + d.val + '%"></span></div>' +
        '<span class="num">' + d.val + '%</span>' +
        '</div>';
    }).join("");
  }

  // Gráfico de Barras Semanal
  var colsEl = $("#cols");
  var colslEl = $("#colsl");
  if(colsEl && colslEl){
    var days = ["S", "T", "Q", "Q", "S", "S", "D"];
    var vals = [28, 44, 38, 52, 60, 32, 18];
    var maxV = Math.max.apply(null, vals);
    colsEl.innerHTML = vals.map(function(v, i){
      var isHl = i === 4 ? " hl" : "";
      var h = (v / maxV) * 100;
      return '<div class="' + isHl + '"><span style="height:' + h + '%"></span></div>';
    }).join("");
    colslEl.innerHTML = days.map(function(d){ return '<span>' + d + '</span>'; }).join("");
  }

  // Linha Canvas Flow
  var flowCv = $("#flow-cv");
  if(flowCv){
    var fCtx = flowCv.getContext("2d");
    var flowT = 0;
    function resizeFlow(){
      flowCv.width = flowCv.offsetWidth;
      flowCv.height = flowCv.offsetHeight;
    }
    resizeFlow();
    window.addEventListener("resize", resizeFlow);

    function drawFlow(){
      if(!fCtx) return;
      fCtx.clearRect(0, 0, flowCv.width, flowCv.height);
      fCtx.lineWidth = 2;
      var grad = fCtx.createLinearGradient(0, 0, flowCv.width, 0);
      grad.addColorStop(0, "rgba(10,124,153,0.1)");
      grad.addColorStop(0.5, "rgba(217,74,34,0.6)");
      grad.addColorStop(1, "rgba(37,99,201,0.1)");
      fCtx.strokeStyle = grad;
      fCtx.beginPath();
      var midY = flowCv.height / 2;
      for(var x = 0; x <= flowCv.width; x += 10){
        var y = midY + Math.sin(x * 0.01 + flowT) * 15;
        if(x === 0) fCtx.moveTo(x, y);
        else fCtx.lineTo(x, y);
      }
      fCtx.stroke();
      flowT += 0.03;
      requestAnimationFrame(drawFlow);
    }
    drawFlow();
  }

  // Simulação de Leads
  var names = ["Carlos Mendes", "Camila Albuquerque", "Rodrigo Dantas", "Juliana Vasconcelos", "Lucas Moreira"];
  var companies = ["Mendes Logística", "Clínica Albuquerque", "Dantas Engenharia", "JV Imóveis", "Recife Tech"];
  var sources = ["Google Ads", "WhatsApp Orgânico", "Instagram Reels", "Indicação B2B", "LinkedIn Direct"];

  var goBtn = $("#go");
  var statusEl = $("#status");
  var segBars = $$("#seg i");
  var kpiVal = 38;

  function triggerSimulation(){
    if(!window.DuarteXPipeline3D.startSimulation()) return;
    goBtn.disabled = true;

    var rand = Math.floor(Math.random() * names.length);
    $("#wn").textContent = names[rand];
    $("#av").textContent = names[rand].charAt(0);
    $("#wd").textContent = " • " + companies[rand];

    var dict = T[curLang];
    statusEl.textContent = dict.st1_n + "...";
    segBars.forEach(function(b){ b.className = ""; });

    $("#hs").innerHTML =
      "<dt>" + dict.k_name + "</dt><dd>" + names[rand] + "</dd>" +
      "<dt>" + dict.k_company + "</dt><dd>" + companies[rand] + "</dd>" +
      "<dt>" + dict.k_source + "</dt><dd>" + sources[rand] + "</dd>" +
      "<dt>" + dict.k_status + "</dt><dd style='color:var(--accent)'>" + dict.st1_n + "</dd>";
  }

  if(goBtn) goBtn.addEventListener("click", triggerSimulation);

  window.DuarteX = {
    updateSimulationUI: function(p){
      var dict = T[curLang];
      var stageIndex = Math.min(4, Math.floor(p * 5));
      segBars.forEach(function(b, i){
        if(i < stageIndex) b.className = "done";
        else if(i === stageIndex) b.className = "run";
        else b.className = "";
      });
      var statusKeys = [dict.st1_n, dict.st2_n, dict.st3_n, dict.st4_n, dict.st5_n];
      statusEl.textContent = statusKeys[stageIndex];
    },
    onSimulationComplete: function(){
      var dict = T[curLang];
      statusEl.textContent = dict.s_done;
      segBars.forEach(function(b){ b.className = "done"; });
      goBtn.disabled = false;
      goBtn.textContent = dict.btn_sim2;

      kpiVal += 1;
      $("#kpi").textContent = kpiVal;
      $("#hs dd:last-child").textContent = dict.newcontact;
      $("#hs dd:last-child").style.color = "var(--ok)";
    }
  };

  // Formulário de Leads
  var leadForm = $("#lead");
  var msgEl = $("#msg");
  var sendBtn = $("#send");

  if(leadForm){
    leadForm.addEventListener("submit", function(e){
      e.preventDefault();
      msgEl.className = "";
      msgEl.textContent = curLang === "pt" ? "Enviando dados..." : "Submitting...";
      sendBtn.disabled = true;

      var payload = {
        nome: $("#nome").value,
        email: $("#email").value,
        telefone: $("#telefone").value,
        empresa: $("#empresa").value,
        mensagem: $("#mensagem").value,
        idioma: curLang,
        origem: "Landing DuarteX",
        timestamp: new Date().toISOString()
      };

      fetch("https://api.duartexsolutions.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(function(res){
        if(res.ok) return res.json();
        throw new Error("Falha no envio");
      })
      .then(function(){
        msgEl.className = "ok";
        msgEl.textContent = curLang === "pt" ? "Recebido! Em breve entraremos em contato." : "Received! We'll get in touch soon.";
        leadForm.reset();
      })
      .catch(function(){
        msgEl.className = "ok";
        msgEl.textContent = curLang === "pt" ? "Conectando ao WhatsApp do consultor..." : "Connecting to WhatsApp...";
        var waText = encodeURIComponent(
          "Olá! Vim pelo site da DuarteX Solutions.\n\n" +
          "Nome: " + payload.nome + "\n" +
          "Empresa: " + payload.empresa + "\n" +
          "E-mail: " + payload.email + "\n" +
          "Desafio: " + payload.mensagem
        );
        setTimeout(function(){
          window.open("https://wa.me/5581997515390?text=" + waText, "_blank");
        }, 800);
      })
      .finally(function(){
        sendBtn.disabled = false;
      });
    });
  }

  // Inicializações
  applyLanguage(curLang);
  if(window.DuarteXPipeline3D) window.DuarteXPipeline3D.init();
  if(window.DuarteXCalculator) window.DuarteXCalculator.init();

})(window);
