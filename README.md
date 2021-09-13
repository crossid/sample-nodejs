# sample-nodejs

A nodejs example, with crossid authentication

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/crossid/sample-nodejs/tree/main)

## running locally

```bash
npm install
SECRET=anyRandomSecret \
BASE_URL=https://localhost \
ISSUER_BASE_URL=https://<tenant>.crossid.io/oauth2 \
CLIENT_ID=<client_id> \
CLIENT_SECRET=<client_secret> \
npm start
```
