import { Layout } from "../components/Layout.server"
import PatternHero from "../components/headers/PatternHero.server"
import AlternatingTextImage from "../components/sections/AlternatingTextImage.client";
import HorizontalSeperator from "../components/headers/HorizontalSeperator.client";

import { Image, Link } from "@shopify/hydrogen";

const HeaderText = ("Contact Us")


export default function Contact() {
  return (
    <Layout>
      <PatternHero content={HeaderText} />
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
              <p className="mb-1">Email us to set up an account or order wholesale using the portal below.</p>
              <a href="mailto:INFO@BITTERCUBE.COM" className="font-bold">WHOLESALE@BITTERCUBE.COM</a>
              <a href="https://bittercube.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_9p9jssa6xt" className="flex gap-2 mx-auto label group w-fit">
                Wholesale Information
                <div className="btn-arrow"></div>
              </a>
            </div>
            <div className="grid gap-3">
              <h3>HEADQUARTERS</h3>
              <p className="mb-1">4828 W Lisbon Ave<br />Milwaukee WI 53210</p>
              <a href="mailto:INFO@BITTERCUBE.COM" className="font-bold">414.207.6262</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-20">
          <Image src='images/bittercube-cocktail.jpg' className="object-cover mx-auto aspect-4/5" alt="A cocktail made with Bittercube Bitters" width={360} height={455} />
          <p className="max-w-xs mx-auto text-3xl font-decorative text-gold ">
            Some little zippy closer  here
          </p>
        </div>
      </div>
      <hr />
    </Layout>
  )
}