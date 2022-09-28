import { Layout } from "../components/Layout.server"
import ImageHero from "../components/headers/ImageHero.client"
import AlternatingTextImage from "../components/sections/AlternatingTextImage.client";

import { Link } from "@shopify/hydrogen";

const HeaderText = ("places headline goes here, okay!")

const alternatingContent = [
  {'title': 'The bittercube bar', 'description': '', 'cta': 'go to the bar',  'ctaLink': '/'},
  {'title': 'Mosler’s Vault', 'description': '', 'cta': 'Go to Moslers',  'ctaLink': '/'},
]

export default function Places() {
  return (
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container max-w-2xl text-center">
        <h2>a places headline that introduces all your spaces will go right here</h2>
      </div>
      <AlternatingTextImage content={alternatingContent} />
      <div className="container mx-auto my-10 border-2 max-w-screen-2xl border-gold">
        hello
      </div>


      <div className="section bg-dark">
        <div className="container grid grid-cols-2 gap-6">
          <div className="max-w-md text-center">
            <span className="label">Cheers with company</span>
            <h2>Events with Bittercube</h2>
            <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <a to="/" className="py-3 mx-auto ml-0 border-t-2 btn btn-arrow border-gold w-60">Private Event Inquiry</a>
          </div>
          <div className="max-w-md text-center">


            <dl>
              <dt className="label">Event Types</dt>
              <hr className="my-6" />
              <dd className="label">cocktail classes</dd>
              <dd className="label">Facitily Tours</dd>
              <dd className="label">Private Events</dd>
              <dd className="label">And More!</dd>
            </dl>
            <a href="/" target="_blank" rel="noopener" className="btn btn-action">Events Portal</a>
          </div>
        </div>
      </div>


    </Layout>
  )
}