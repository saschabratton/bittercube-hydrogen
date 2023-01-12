import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config'

export default defineConfig({
  shopify: {
    // storeDomain: Oxygen?.env?.PUBLIC_STORE_DOMAIN || 'bittercube.myshopify.com',
    storeDomain: process?.env['PUBLIC_STORE_DOMAIN'] || 'bittercube.myshopify.com',
    /* Your app's public Storefront API access token. Authenticates browser and client requests. */
    // storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN || '6798b103a3a251b7e12bacebe00bd5a8',
    storefrontToken: process?.env['PUBLIC_STOREFRONT_API_TOKEN'] || '6798b103a3a251b7e12bacebe00bd5a8',
    /* Your app's private Storefront API server (delegate access) token. Authenticates server requests. */
    // privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    privateStorefrontToken: process?.env['PRIVATE_STOREFRONT_API_TOKEN'],
    /* The Storefront API version that your app uses */
    storefrontApiVersion: '2022-10',
    // /* (Optional) The unique ID for the storefront. Only gets assigned by Oxygen */
    // storefrontId: process?.env['PUBLIC_STOREFRONT_ID']
  },
  /* A path to a custom page to render when the server encounters an unhandled exception */
  // serverErrorPage: '/src/Error.server.jsx',
  logger: {
    showQueryTiming: true,
    // showUnusedQueryProperties: true
  },
  /* The default session storage mechanism for Hydrogen. */
  session: CookieSessionStorage('__session', {
    /* Tells the browser that the cookie should only be sent to the server if it's within the defined path.  */
    path: '/',
    /* Whether to secure the cookie so that client-side JavaScript can't read the cookie. */
    httpOnly: false,
    /* Whether to secure the cookie so that the browser only sends the cookie over HTTPS.  */
    secure: import.meta.env.PROD,
    /* Declares that the cookie should be restricted to a first-party or same-site context.  */
    sameSite: 'strict',
    /* The number of seconds until the cookie expires. */
    maxAge: 60 * 60 * 24 * 30,
  })
})
