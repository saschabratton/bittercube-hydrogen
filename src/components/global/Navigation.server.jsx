import { Link, Image } from "@shopify/hydrogen"


export default function Navigation(){


  return(
    <>
      <div className="">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
      </div>
      <header
        role="banner"
        className="absolute top-0 z-40 flex items-center justify-between w-full h-16 gap-4 p-6 antialiased leading-none transition md:p-8 lg:p-12"
      >
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <span className="sr-only">
              Bittercube
            </span>
            <Image src='/logos/wordmark-reversed.svg' width={170} height={36} alt="Bittercube" />
          </Link>
          <div className="flex gap-12">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/places">
              Places
            </Link>
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}