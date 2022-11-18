import { Image, CacheLong, Seo } from "@shopify/hydrogen"
import { Layout, PatternHero } from '@server'
import { HorizontalSeperator } from '@client'
// ----------------------------------------------------------------------

const customSeo = {
    name: 'We respond to every email we recieve • Bittercube',
  }

export default function Contact({response}) {
  response.cache(CacheLong())
  return (
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PatternHero content={"Contact Us"} />
      <div className="container grid grid-cols-1 gap-6 text-center md:grid-cols-2">
        <div>
          <h2>Drop Us a line</h2>
          <div className="my-16 text-ornament"></div>
          <div className="pt-4 my-8">
            <HorizontalSeperator />
          </div>
          <div className="flex flex-col gap-12">
            <div className="grid gap-3">
              <h3>GENERAL INQUIRIES OR QUESTIONS</h3>
              <a href="mailto:INFO@BITTERCUBE.COM" className="font-bold">INFO@BITTERCUBE.COM</a>
            </div>
            <div className="grid gap-3">
              <h3>WHOLESALE INQUIRIES</h3>
              <p className="mb-1"><a href="mailto:WHOLESALE@BITTERCUBE.COM" className="inline-block">Email us</a> to set up an account and order direct or order wholesale using the portal below.</p>
              <a href="https://bittercube.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_9p9jssa6xt" className="flex gap-2 mx-auto label group w-fit" target='_blank'>
                Wholesale Information
                <div className="btn-arrow"></div>
              </a>
            </div>
            <div className="grid gap-3">
              <h3>HEADQUARTERS</h3>
              <p className="mb-1">4828 W Lisbon Ave<br />Milwaukee, WI 53210</p>
              <a href="mailto:INFO@BITTERCUBE.COM" className="font-bold">414.207.6262</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-20">
          <Image src='images/contact.jpg' className="object-cover mx-auto aspect-4/5" alt="A cocktail made with Bittercube Bitters" width={360} height={455} />
          <Image src="/images/handwritten/contact-weanswer.svg" alt=" " className="mx-auto" width={200} height={96}  role="presentation" />
        </div>
      </div>
      <hr />
    </Layout>
  )
}