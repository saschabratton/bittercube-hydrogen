import { Link } from "@shopify/hydrogen"
import HorizontalSeperator from "../../headers/HorizontalSeperator.client"


export default function Events() {
  return(
    <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-1 gap-48 md:gap-16 md:grid-cols-2 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="block mb-4 label">Cheers with company</span>
              <h2>Events with Bittercube</h2>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <a to="/" className="flex justify-between pt-4 mx-auto mt-10 border-t-2 w-fit lg:w-60 label group border-gold">Private Event Inquiry<div className="btn-arrow btn-arrow-gold"></div></a>
            </div>
            <div className="max-w-md mx-auto text-center">
              <dl>
                <dt className="label">Event Types</dt>
                <div className="my-10 w-96">
                  <HorizontalSeperator />
                </div>
                <dd className="label">cocktail classes</dd>
                <dd className="label">Facitily Tours</dd>
                <dd className="label">Private Events</dd>
                <dd className="label">And More!</dd>
              </dl>
              <a href="https://www.crowdcast.io/bittercube" target="_blank" rel="noopener" className="mt-10 btn btn-action">Events Portal</a>
            </div>
          </div>
        </div>
      </div>
  )
}