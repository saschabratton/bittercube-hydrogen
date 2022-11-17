import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, Image } from "@shopify/hydrogen"

export default function RecipeCard({ recipe }){
  const { slug, name, description, spirit, images, bitters } = recipe

  const { ref: viewRef, inView } = useInView({
    threshold: 0
  })

  return(
    <Link to={`/recipes/all/${slug}`}>
      <div className="grid gap-2 group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          {/* <Image src={ images[0].url } width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" /> */}
          <div ref={viewRef}>
            {inView ?
                <Image src={ images[0].url } width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
            :
              <><div className="w-full bg-dark h-96"></div></>


            }
          </div>
        </div>

          <div className="overflow-x-scroll capitalize label">
            <p className="mb-0 whitespace-nowrap text-gold">
              {bitters.length > 0 && bitters.map(bitters => {
                  const { name, index } = bitters
                  return (
                    <span>{ (index ? ', ' : '') + name } Bitters</span>
                  )
                })
              }
            </p>
          </div>
          {/* <div className="text-dark">
             { spirit }
          </div> */}

        <hr />
        <div className="flex items-center justify-between w-full gap-2 mx-auto label group">
          <p className="mb-0 font-bold tracking-widest uppercase">{ name }</p>
          <div className="btn-arrow"></div>
        </div>
        { description &&
          <div className="overflow-x-hidden transition duration-700 opacity-0 group-hover:opacity-100 group-hover:flex text-dark line-clamp-1 group-hover:line-clamp-1">
            { description }
          </div>
        }
      </div>
    </Link>
  )
}