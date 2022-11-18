import { Layout } from '@components/all.server'

export default function NotFound({ response }) {
  if (response) {
    // response.status = 404
    // response.statusText = 'Not found'
  }

  return (
    <Layout>
      <section className="py-40 lg:py-48">
        <div className="container">
          <h1>404 Error Page</h1>
        </div>
      </section>
    </Layout>
  )
}
