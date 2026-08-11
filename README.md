# DeviceOps Automations — Version-Controlled n8n Incident Workflows

Version-controlled n8n integration adapter for the DeviceOps synthetic reference implementation. Core authorization, incident state, idempotency, and audit truth remain in `deviceops-ai-copilot`.

> Source available for portfolio review; all rights reserved; no permission to reuse or redistribute.

## Overview

This repository contains version-controlled n8n workflows that handle external integration tasks:
1. Receiving a signed incident envelope from core `deviceops-ai-copilot`.
2. Verifying HMAC-SHA256 signature, timestamp, nonce, and delivery ID.
3. Sending notifications via Mailpit SMTP server to the on-call team.
4. Posting a signed acknowledgement back to core `/api/v1/webhooks/n8n/ack`.
5. Error handling and dead-letter routing for transient notification failures.

The exported workflow is an importable contract, not a hosted production service. Configure `N8N_WEBHOOK_SECRET`, Mailpit SMTP, and the core API URL as n8n credentials/environment values. The workflow must never contain a fallback secret or credentials in JSON.

## Contract Synchronization

```bash
npm run verify
```

Validates that `contracts/contract-manifest.json` is present and matches the core contract version hash.
