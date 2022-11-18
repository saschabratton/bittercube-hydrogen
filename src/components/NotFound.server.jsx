import { Seo, Link } from "@shopify/hydrogen"
import { Layout } from '@server'
import { HorizontalSeperator, PrimaryMenu } from "@client"
// ----------------------------------------------------------------------
export default function NotFound({ response }) {
  if (response) {
    // response.status = 404
    // response.statusText = 'Not found'
  }

  return (
    <Layout>
      <Seo type="page" data={{
        title: "Oh, geez",
      }} />
      <section className="relative flex flex-col flex-1 h-full py-28 bg-dark bg-pattern header-dark">
        <PrimaryMenu dark={true} />
        <div className="container max-w-5xl text-center">
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward mb-8"></div>
          <h1>Oh, geez.<br />You took a few too many dashes in the wrong direction.</h1>
          <div className="max-w-sm mx-auto mt-8">
            <HorizontalSeperator />
          </div>
          <p className="mt-16 label text-ornament text-gold">
            looks like a 404 error, but we’re not bitter about it.
          </p>
          <div className="mx-auto mt-8 md:w-60">
            <Link to="/" className="w-full btn btn-action">Take me back home</Link>
            <Link to="/" className="w-full btn btn-action">Take me shopping</Link>
          </div>


        </div>
      </section>
    </Layout>
  )
}
