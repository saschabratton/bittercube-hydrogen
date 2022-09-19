import { Link } from "@shopify/hydrogen";

export default function VisitOurPlaces() {
  return (
    <section className="bg-dark py-12">
      <div className="border-y-2 border-gold py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-28">
          <div className="col-span-2">
            <h3 className="text-gold">Visit our places</h3>
            <ol>
              <li className="font-sans py-6">
                <span className="text-gold font-bold tracking-wide">01</span>
                <hr className="text-gold my-3 border" />
                <Link to="/" className="uppercase font-bold tracking-wide text-white">The Bazaar</Link>
              </li>
              <li className="font-sans py-6">
                <span className="text-gold font-bold tracking-wide">01</span>
                <hr className="text-gold my-3 border" />
                <Link to="/" className="uppercase font-bold tracking-wide text-white">Bittercube Bar at North Ave</Link>
              </li>
              <li className="font-sans py-6">
                <span className="text-gold font-bold tracking-wide">01</span>
                <hr className="text-gold my-3 border" />
                <Link to="/" className="uppercase font-bold tracking-wide text-white">The Apothecary</Link>
              </li>
            </ol>
          </div>
          <div className="col-span-2">
            <h2 className="text-gold">General places headline goes right here</h2>
          </div>
        </div>
      </div>
    </section>
  );
}