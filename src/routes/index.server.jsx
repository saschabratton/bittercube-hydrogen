import { Layout } from "../components/Layout.server";
import FeaturedCollections from "../components/FeaturedCollections.server";
import Hero from "../components/Hero.client";
import ScrollingBanner from "../components/ScrollingBanner.client";
import VisitOurPlaces from "../components/sections/VisitOurPlaces.client";
import { Link } from "@shopify/hydrogen";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <ScrollingBanner />

      <section>
        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex justify-center items-center flex-col gap-6 text-center md:p-36">
            <h2>Slow-crafted<br />and artisnal bitters</h2>
            <span>Established 2009</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-6 text-center md:p-16">
            <p className="md:max-w-lg">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
            <Link to="/" className="btn btn-arrow">About Us</Link>
          </div>
        </div>
      </section>

      <section>
        <p className="uppercase text-center text-4xl">Slow-crafted and artisnal bitters</p>
        <FeaturedCollections />
      </section>
      <VisitOurPlaces />

    </Layout>
  );
}
