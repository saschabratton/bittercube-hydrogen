import { Layout } from "../components/Layout.server";
import PatternHeader from "../components/headers/PatternHeader.client";
import SubNav from "../components/global/SubNav.server";
import BuyCta from "../components/sections/BuyCta.client";
import WholesaleBitters from "../components/sections/WholesaleBitters";

import { Link, Image } from "@shopify/hydrogen";

const HeaderText = ("Shop")


const pageNav = [
  { label: 'Bitters', link: '/'},
  { label: 'Curated Kits', link: '/'},
  { label: 'Special Editions & Collaborations', link: '/'},
  { label: 'Accesories', link: '/'},
  { label: 'Shop All', link: '/'}
]


export default function Home() {
  return (
    <Layout>
      <PatternHeader content={HeaderText} />
      <div className="container max-w-5xl">
        <SubNav navigation={pageNav} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
          <div>
            <h2 className="h1 text-5xl capitalize max-w-md">General shop headline goes here</h2>
            <Link to="/">Shop All</Link>
          </div>
          <div className="flex justify-center items-center text-center">
            <span className="font-decorative text-gold text-4xl">Made With<br />Real Botanicals</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
          <div className="text-center flex flex-col gap-6 max-w-sm">
            <h3 className="h2">artisnal bitters</h3>
            <p className="text-ornament">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
          <div className="text-center flex flex-col gap-6 max-w-sm order-last">
            <h3 className="h2">artisnal bitters</h3>
            <p className="text-ornament">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>
          </div>
          <div></div>
        </div>
      </div>
      <BuyCta />
      <WholesaleBitters />
    </Layout>
  )
}