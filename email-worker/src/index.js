import { WorkerMailer } from 'worker-mailer';

const corsHeaders = (origin) => ({
  'Access-Control-Allow-Origin': origin || '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin');
    const allowedOrigins = env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(',') : [];
    
    // Check CORS (allow if in allowedOrigins, or if wildcard is needed for dev)
    const allowOrigin = allowedOrigins.includes(origin) ? origin : (allowedOrigins[0] || '*');

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(allowOrigin),
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders(allowOrigin) });
    }

    try {
      if (!env.SMTP_USERNAME || !env.SMTP_PASSWORD) {
        return new Response(JSON.stringify({ error: 'Configuration Error', details: 'SMTP_USERNAME or SMTP_PASSWORD is not set in Cloudflare Secrets.' }), {
          status: 500,
          headers: { ...corsHeaders(allowOrigin), 'Content-Type': 'application/json' },
        });
      }

      const body = await request.json();
      const { name, email, subject, message } = body;

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { ...corsHeaders(allowOrigin), 'Content-Type': 'application/json' },
        });
      }

      // Connect to SMTP server via worker-mailer
      const mailer = await WorkerMailer.connect({
        host: env.SMTP_HOST,
        port: Number(env.SMTP_PORT),
        secure: Number(env.SMTP_PORT) === 465, // True for 465, usually false for 587
        authType: 'plain', // Updated to 'plain' as it's the most common default
        credentials: {
          username: env.SMTP_USERNAME,
          password: env.SMTP_PASSWORD,
        },
      });

      // Construct email content
      const htmlContent = `
        <h2>New Contact Form Submission (TOP)</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;

      // Send email
      await mailer.send({
        from: {
          name: env.FROM_NAME,
          email: env.FROM_EMAIL,
        },
        to: env.TO_EMAIL,
        reply: {
          name: name,
          email: email
        },
        subject: `[TOP Website] ${subject || 'New Contact Request'}`,
        html: htmlContent,
      });

      return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
        status: 200,
        headers: { ...corsHeaders(allowOrigin), 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), {
        status: 500,
        headers: { ...corsHeaders(allowOrigin), 'Content-Type': 'application/json' },
      });
    }
  },
};
