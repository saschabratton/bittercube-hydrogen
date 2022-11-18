import { Layout } from '@components/all.server'
import { Suspense } from "react";
import PatternHero from "../../components/headers/PatternHero.server";
import SplitBgVertBlue from "../../components/sections/SplitBgVertBlue.client";
import WholesaleBitters from "../../components/sections/WholesaleBitters";
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import CardCarousel from "../../components/sections/CardCarousel.client";
import { Link, Image } from "@shopify/hydrogen";
import CollectionsNav from "../../components/headers/CollectionsNav.server";
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client";
import BittersBundles from "../../components/BittersBundles.server";


const HeaderText = ("The most distinct lineup of bitters in the world")

const alternatingContent = [
  {
    'title': 'slow-crafted bitters',
    'description': 'Bold, balanced, densely flavored bitters made by hand. Shop the most distinctive lineup of aromatic, spicy, and citrus bitters.',
    'cta': 'Shop Bitters',
    'ctaLink': 'shop/bitters',
    'image': '/images/shop-bitters.jpg',
  },
  {
    'title': 'Curated cocktail kits',
    'description': 'Curated cocktail kits contain the necessary ingredients to create a number of unique cocktails, including syrups, bitters, recipes, and instructions.',
    'cta': 'Shop Kits',
    'ctaLink': 'shop/curated-kits',
    'image': '/images/kit-hotchocolate.png',
  },
  {
    'title': 'Special Editions & Collaborations',
    'description': 'Unique collection of special edition bitters, as well as collaborations with restaurant groups, bars, and other brands. ',
    'cta': 'Special Editions',
    'ctaLink': '/shop/special-editions-and-collaborations',
    'image': '/images/shop-collab.jpg'
  },
]

export default function Home() {
  return (
    <Layout>
      <PatternHero content={HeaderText} />
      <Suspense>
        <CollectionsNav />
      </Suspense>
      <div className="container">
        <div className="grid grid-cols-1 gap-6 pb-16 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-5xl capitalize h1">Shop the Full Bittercube Store</h2>
            <Link to="/shop/all" className="flex items-center gap-2 label group w-fit">Explore All Products
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex justify-end text-center">
            <Image src="/images/handwritten/shop-madewrealbotanicals.svg" alt=" " width={200} height={111}  role="presentation" />
          </div>
        </div>
        <div className="relative">
          <div className="center-absolute top-1/3">
            <Image src='/emblems/currated-cocktails.svg' width={101} height={111} alt=" " role="presentation" />
          </div>
          <AlternatingTextImage content={alternatingContent} />
        </div>
      </div>

      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Bitters Bundles
      </div>
      <BittersBundles />
      </div>
      <CardCarousel />

      <SplitBgVertBlue />
      <WholesaleBitters />
    </Layout>
  )
}