import { Layout } from "../../components/Layout.server"
// import ImageHero from "../../components/headers/ImageHero.server"
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import ImageHero from "../../components/headers/ImageHero.server";
import { Link, Image } from "@shopify/hydrogen";

const HeaderText = ("places headline goes here, okay!")

import image from '../../assets/bittercube-cocktail.jpg';

const alternatingContent = [
  {'title': 'The bittercube bar', 'description': '', 'cta': 'go to the bar',  'ctaLink': '/'},
  {'title': 'Mosler’s Vault', 'description': '', 'cta': 'Go to Moslers',  'ctaLink': '/places/moslers'},
]

export default function Places() {
  return (
    <Layout>
       <ImageHero content={HeaderText} />
      <div className="container max-w-2xl text-center">
        <h2>a places headline that introduces all your spaces will go right here</h2>
      </div>
      <div className="container">
        <AlternatingTextImage content={alternatingContent} />
      </div>












      <div className="container relative flex py-0 mx-auto my-20 border-2 border-gold md:grid md:grid-cols-8">
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recipe Collection
        </div>
        <ul className="flex flex-col items-center justify-center col-span-1 pr-6 text-center border-r-2 border-gold">
          <li className="label">Locally Made Goods</li>
          <li className="label text-ornament">partner products</li>
          <li className="label text-ornament">bar and cocktail supplies</li>
          <li className="label text-ornament">crafted favorites and more</li>
        </ul>
        <Image src={image} width={460} height={555} className="object-cover col-span-3 p-16 mx-auto rounded-jumbo aspect-4/5" alt="A cocktail made with Bittercube Bitters w-full h-full" />
        <div className="flex flex-col items-center justify-center col-span-4 gap-6 text-center border-l-2 p-36 border-gold">
          <h2>shop the local milwaukee bazaar</h2>
          <p>
            Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.
          </p>
          <Link to="/" className="btn btn-action">Shop for local Pick-up</Link>
        </div>
      </div>


      <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Cheers with company</span>
              <h2>Events with Bittercube</h2>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <a to="/" className="py-3 mx-auto ml-0 border-t-2 btn btn-arrow border-gold w-60">Private Event Inquiry</a>
            </div>
            <div className="max-w-md text-center">
              <dl>
                <dt className="label">Event Types</dt>
                <hr className="my-6 border-t-2 border-gold" />
                <dd className="label">cocktail classes</dd>
                <dd className="label">Facitily Tours</dd>
                <dd className="label">Private Events</dd>
                <dd className="label">And More!</dd>
              </dl>
              <a href="/" target="_blank" rel="noopener" className="btn btn-action">Events Portal</a>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  )
}