import { Suspense } from "react"
import Footer from "./global/Footer.client"
// ----------------------------------------------------------------------

export default function Layout({ children }) {

  return (
    <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
      <main role="main" id="mainContent" className="relative flex-grow bg-paper">
        <Suspense>
          {children}
        </Suspense>
      </main>
      <div className="fixed bottom-0 left-0 z-10 flex justify-center w-full p-8 bg-dark">
          <span className="text-gold label">BLACK FRIDAY - 25% OFF BITTERS AND KITS + FREE SHIPPING ON $45+ ORDERS</span>
      </div>
      <Footer />
    </div>
  )
}
