# Frontend environments

Angular build configurations are available as npm scripts:

```powershell
npm run build:dev
npm run build:staging
npm run build:uat
npm run build:preprod
npm run build:prod
```

Each hosted static site must set `API_URL` to its matching backend `/api` URL.
The Render build injects `API_URL` into `src/api-config.ts` and uses
`ANGULAR_CONFIGURATION` (`development`, `staging`, `uat`, `preprod`, or
`production`) to select the Angular build. The current Render static site
defaults to `production` and its existing backend URL.

Create separate static sites for dev, staging, UAT, and preprod, and set each
site's `API_URL` and `ANGULAR_CONFIGURATION` independently. Add each site's
exact origin to the matching backend service's `FRONTEND_URL`.
