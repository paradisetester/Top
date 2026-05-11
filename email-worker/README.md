# TOP Contact Email Worker

A Cloudflare Worker that receives contact form submissions and sends them to `team@top-ae.com` via SMTP.

## Setup

### 1. Install dependencies
```bash
cd email-worker
npm install
```

### 2. Configure secrets
Set your SMTP credentials as Cloudflare Worker secrets (never stored in code):

```bash
npx wrangler secret put SMTP_USERNAME
# Enter: team@top-ae.com

npx wrangler secret put SMTP_PASSWORD
# Enter: your email password
```

### 3. Deploy
```bash
npx wrangler deploy
```

### 4. Update frontend
After deploying, copy the worker URL (e.g. `https://top-email-worker.your-account.workers.dev`) and update the `WORKER_URL` in `ContactForm.jsx`.

## Environment Variables (set in wrangler.toml)
- `SMTP_HOST` — SiteGround SMTP host
- `SMTP_PORT` — SMTP port (usually 465)
- `TO_EMAIL` — Recipient email address
- `FROM_EMAIL` — Sender email address
- `ALLOWED_ORIGIN` — Frontend domain for CORS

## Secrets (set via `wrangler secret put`)
- `SMTP_USERNAME` — SMTP login
- `SMTP_PASSWORD` — SMTP password
