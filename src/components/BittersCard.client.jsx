import { Link, Image } from "@shopify/hydrogen"

export default function BittersCard({ bitters }){
  const { name, image, flavor, description, link} = bitters

  console.log(bitters)
  return(
    <div className="flex flex-1 h-full p-8 transition duration-700 border-2 lg:p-12 hover:border-gold border-gold/0 rounded-jumbo-sm">
      <div className="flex flex-col justify-between gap-2 text-center">
        <div>
          <Image src={image} width={460} height={555} className="w-full" alt="Bitters" />
          <span className="text-xl text-gold font-decorative">{ flavor }</span>
          <h3>{ name }</h3>
          <p className="text-ornament">{ description }</p>
        </div>
        <Link to={link} className="flex items-center gap-2 mx-auto label group w-fit">Shop Product<div className="btn-arrow"></div></Link>
      </div>
    </div>
  )
}