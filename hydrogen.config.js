import { defineConfig } from '@shopify/hydrogen/config'

export default defineConfig({
  shopify: {
    storeDomain: 'bittercube.myshopify.com',
    /* Your app's public Storefront API access token. Authenticates browser and client requests. */
    // storefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
    // storefrontToken: process?.env['PUBLIC_STOREFRONT_API_TOKEN'],
    storefrontToken: '6798b103a3a251b7e12bacebe00bd5a8',
    // /* Your app's private Storefront API server (delegate access) token. Authenticates server requests. */
    // // privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
    /* The Storefront API version that your app uses */
    storefrontApiVersion: '2022-10',
    // /* (Optional) The unique ID for the storefront. Only gets assigned by Oxygen */
    // storefrontId: process?.env['PUBLIC_STOREFRONT_ID']
  },
  /* A path to a custom page to render when the server encounters an unhandled exception */
  // serverErrorPage: '/src/Error.server.jsx',
  logger: {
    showQueryTiming: true
  }
})
