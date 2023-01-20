import React from 'react'
import { makeKey } from "@utils"
import { RecipeIngredients, HorizontalSeperator }from "@client";
import { Image } from "@shopify/hydrogen";

export default function PrintRecipe({ activeRecipe }) {
  return (
    <div className="flex-col justify-center hidden w-full gap-8 print:flex">
      <Image src='/logos/wordmark.svg' width={170} height={36} alt="Bittercube" className="py-3 mx-auto" />
        <div className="mx-auto"  style={{width: 550}}>
          <p className="text-base label">cocktail style:<br />
            {activeRecipe.flavors.slice(0, 2)
            .map((flavor, index) => (
                <span key={makeKey(flavor)}>{index != 0 ? ', ' : ''}{flavor}</span>
            ))}
          </p>
          <h1>{activeRecipe.name}</h1>
          {activeRecipe.description &&
            <p>{activeRecipe.description}</p>
          }
        <h3>Make the cocktail</h3>
        <div className="grid grid-cols-2 gap-6 mt-4">
        <div>
          <RecipeIngredients activeRecipe={ activeRecipe } />
        </div>
        <div>
          <span className="label text-dark">How to craft</span>
          <div dangerouslySetInnerHTML={{__html: activeRecipe.instructions}}></div>
        </div>
        </div>
        </div>

      </div>
  )
}
