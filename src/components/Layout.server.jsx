import { Suspense } from "react"
import { MetaPixel, Footer } from '@client'
// ----------------------------------------------------------------------

export default function Layout({ children }) {

  return (
    <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
      <main role="main" id="mainContent" className="flex-grow bg-paper">
        <Suspense>
          {children}
        </Suspense>
      </main>
      <Footer />
      <MetaPixel />
    </div>
  )
}
