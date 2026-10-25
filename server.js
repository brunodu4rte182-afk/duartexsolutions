const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');

const app = express();
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());

// Rota de Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', brand: 'DuarteX Solutions', timestamp: new Date() });
});

// Endpoint de Recepção de Leads
app.post('/api/leads', async (req, res) => {
  const { nome, email, telefone, empresa, mensagem, idioma, timestamp } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e E-mail são obrigatórios.' });
  }

  try {
    // 1. Notificação via Webhook (Discord / Slack ou n8n)
    if (process.env.DISCORD_WEBHOOK_URL) {
      await axios.post(process.env.DISCORD_WEBHOOK_URL, {
        embeds: [{
          title: '🚀 Novo Lead Capturado - DuarteX Solutions',
          color: 0xD94A22,
          fields: [
            { name: 'Nome', value: nome, inline: true },
            { name: 'Empresa', value: empresa || 'N/A', inline: true },
            { name: 'E-mail', value: email, inline: false },
            { name: 'WhatsApp', value: telefone || 'N/A', inline: true },
            { name: 'Desafio', value: mensagem, inline: false },
            { name: 'Idioma', value: idioma ? idioma.toUpperCase() : 'PT', inline: true }
          ],
          timestamp: timestamp || new Date()
        }]
      });
    }

    // 2. Integração com banco de dados (ex: Supabase, PostgreSQL)
    // await db.insert({ nome, email, telefone, empresa, mensagem, timestamp });

    return res.status(201).json({ success: true, message: 'Lead registrado com sucesso.' });
  } catch (err) {
    console.error('Erro ao processar lead:', err.message);
    return res.status(500).json({ error: 'Erro interno ao salvar lead.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[DuarteX API] Rodando na porta ${PORT}`);
});
