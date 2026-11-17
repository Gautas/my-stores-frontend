# My Stores Web

Angular storefront with customer accounts, a separate owner-seller sign-in, product discovery, orders, seller product/store management, and the catalog assistant.

## Run locally

Run `npm install` and `npm start`. The default API base URL is `http://localhost:8080/api`.

## Render environment

Set `API_URL` to the deployed Spring API base URL including `/api`. The Render build command writes this value to `src/api-config.ts` before building the static site.
