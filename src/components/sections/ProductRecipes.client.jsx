import { useState, useEffect } from 'react'
import { Link, Image, fetchSync } from "@shopify/hydrogen";
import Arrow from '../animations/Arrow.client'
import { makeKey } from "../../utilities/helpers";

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'


export default function ProductRecipes({ content, links }) {
  const recipes = fetchSync(recipesApi,{
    preload: false
  }).json()

  const [suggestedRecipes, setSuggestedRecipes] = useState([])

  useEffect(() => {
    if (!recipes.length) return
    const getRecommendation = () => {
      let recommendation = []

      times(4)(() => {
        const index = Math.floor((Math.random() * recipes.length) + 0)
        const suggestion = recipes[index]
        recommendation.push(suggestion)
      })
      setSuggestedRecipes(recommendation)
    }
    getRecommendation()
  },[])

  const times = x => f => {
    if (x > 0) {
      f()
      times(x - 1)(f)
    }
  }


  const {headline, description, ctaLabel, ctaLink, image, background, navHeadline, padding, border} = content
  const {linkLabel, link} = links
  return (
    <section className={`py-12 bg-forest`}>
      <div className={`border-y-2 border-gold`}>
        <div className="container max-w-screen-xl !py-20 mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-16">
          <div className="flex flex-col gap-6 py-16 md:col-span-3 lg:order-2 lg:col-span-2">
            <h2 className="font-sans uppercase !text-gold">{headline}</h2>
            <p>{description}</p>
            {ctaLink &&
              <Link to={ctaLink} className="mx-0 mb-0 btn btn-action">{ctaLabel}</Link>
            }
          </div>
          <div className="md:col-span-3 lg:col-span-3 lg:order-3">
            {image &&
              <Image src={image} width={460} height={555} className="object-cover mx-auto aspect-4/5 rounded-jumbo" alt={headline} />
            }
          </div>
          <div className="py-16 md:col-span-6 lg:order-1 lg:col-span-2">
            <dl className="grid gap-8">
              <dt className="h3 text-gold">{navHeadline}</dt>
              {suggestedRecipes && suggestedRecipes.map((recipe, i) => (
                <dd key={makeKey(recipe.name)}>
                  <span className="font-bold tracking-wide text-gold">0{i + 1}</span>
                  <hr className="my-2 border text-gold" />
                  <Link to={`/recipes/${recipe.slug}`} className="flex items-center justify-between w-full gap-2 mx-auto label group">{recipe.name} <div className="btn-arrow btn-arrow-gold"></div></Link>
                </dd>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}