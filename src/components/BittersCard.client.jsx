import { Link, Image } from "@shopify/hydrogen"

export default function BittersCard(){
  return(
    <div className="block p-8 transition duration-700 border-2 lg:p-12 hover:border-gold border-gold/0 rounded-jumbo">
      <div className="grid gap-2 text-center">
          <Image src='/images/bitters-eg.png' width={460} height={555} className="w-full" alt="Bitters" />
          <span className="text-xl text-gold font-decorative">Grapefruit</span>
          <h3>Jamacican No.2</h3>
        <p className="text-ornament">Donec rhoncus mattis volutpat. Suspendisse volutpat nulla dolor, a euismod ligula gravida a. Donec vitae tincidunt diam. Duis ultrices sagittis risus, maximus semper nisl dictum eget. Donec dictum, purus quis tincidunt.</p>
        <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
        <div className="btn-arrow"></div>
        </Link>
      </div>
    </div>
  )
}