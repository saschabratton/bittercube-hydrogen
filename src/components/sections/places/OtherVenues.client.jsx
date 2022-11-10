import { Link } from "@shopify/hydrogen"
import SignUpForm from "../../global/SignUpForm.client"

export default function OtherVenues() {
  return(
    <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex">
                <Link to="/places/moslers" className="btn btn-action">Bittercube Bar</Link>
                <a href="https://www.crowdcast.io/bittercube"  className="btn btn-action">Events portal</a>
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-6 text-center">
              <h4 className="tracking-wide text-white">Enjoy new recipes and the latest<br />news and events</h4>
              <p>Subscribers receive first access to limited products, and curated playlists for your next cocktail party.</p>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
  )
}