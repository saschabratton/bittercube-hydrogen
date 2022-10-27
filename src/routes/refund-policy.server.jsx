import { Layout } from "../components/Layout.server"
import Arrow from '../components/animations/Arrow.client'
import PatternHero from "../components/headers/PatternHero.server"

const HeaderText = ("Refund Policy")

export default function RefundPolicy() {

  return (
    <Layout>
      <PatternHero content={HeaderText} />
      <section>
        <div className="container flex flex-col max-w-6xl gap-6">
          <p className="mx-auto text-center h2">Thank you for your purchase. We hope you are happy with your purchase. However, if you are not satisfied with your purchase, you may return it to us for a full refund or an exchange</p>
          <div className="flex flex-col max-w-2xl gap-8 mx-auto">
            <p className="h3">
              Bitters or other grocery items cannot be returned if the seal is broken, but a refund or exchange can still be initiated in certain instances. Please see below for more information on our return policy.
            </p>
           <div>
            <h3 className="mb-2 text-base label">RETURNS</h3>
            <p>All returns must be initiated within 30 days of the purchase date. All returned items must be in new and unused condition.</p>
           </div>
           <div>
            <h3 className="mb-2 text-base label">Return Process</h3>
            <p>To return an item, request a refund or request an exchange, please email customer service at orders@bittercube.com and include the order number and reason for return/refund/exchange. A company representative will contact you within two business days to provide return instructions. Please note, you will be responsible for all return shipping charges. We strongly recommend that you use a trackable method to mail your return.</p>
           </div>
           <div>
            <h3 className="mb-2 text-base label">REFUNDS</h3>
            <p>After receiving your return and inspecting the condition of your item, we will process your return, refund or exchange. Please allow at least two business days from the receipt of your item to process your request. Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your return has been processed.</p>
           </div>
           <div>
            <h3 className="mb-2 text-base label">Damaged Goods</h3>
            <p>For damaged products, please initiate a claim with Route by opening your email from Route or find the Route link within your order confirmation email. To resolve the issue, you will need the Route Order ID.</p>
           </div>
           <div>
            <h3 className="mb-2 text-base label">QUESTIONS</h3>
            <p>If you have any questions concerning our return policy, please contact us at:414-207-6262 <br />orders@bittercube.com</p>
           </div>

          </div>
        </div>
      </section>
      <hr />
    </Layout>
  )
}
