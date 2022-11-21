import { fetchSync, Image, Link, Head, Seo, CacheLong } from "@shopify/hydrogen"
import parse from 'html-react-parser'
import { Layout, PatternHero, RecipesMenu } from '@server'
import { HorizontalSeperator } from "@client"
import { makeKey } from "@utils"
// ----------------------------------------------------------------------

const syrupsApi = 'https://lavish-turnip.cloudvent.net/api/syrups.json'

const customSeo = {
  title: 'Making Syrups',
  description: 'Syrups are a foundational ingredient in cocktails. The possibilities are endless, use teas and other spices to flavor your syrups, or combine different sweeteners to create unique variations that can elevate your cocktails even further.'
}


export default function Syrups(){
  const recipes = fetchSync(syrupsApi, {
    cache: CacheLong(),
    preload: false
  }).json()


  const groupIt = (recipes) => {
    let result = {}

    recipes.forEach((recipe) => {
      let currentWord = recipe.name
      let firstChar = currentWord[0].toLowerCase()
      let innerArr = []
      if (result[firstChar] === undefined) {
        innerArr.push(recipe)
        result[firstChar] = innerArr
      } else {
        result[firstChar].push(recipe)
      }
    })
    return result
  }
  const syrupGroups = groupIt(recipes)

  const customSeo = {
    name: 'Syrup Recipes • Bittercube',
  }

  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PatternHero content={"Syrups"} />
      <RecipesMenu />
      <hr />
      <div className="container relative z-10 grid max-w-6xl grid-cols-1 gap-6 py-16 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 text-center lg:p-28">
          <span className="label">FOR SWEETNESS AND BALANCE</span>
          <h2 className="h1">Making Syrup</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:p-16">
          <p className="md:max-w-lg">Syrups are a foundational ingredient in cocktails. The possibilities are endless, use teas and other spices to flavor your syrups, or combine different sweeteners to create unique variations that can elevate your cocktails even further.</p>
        </div>
        <div>
          <Image src='/images/recipes-syrups.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters"  />
        </div>
        <div className="flex flex-col max-w-md gap-2 mx-auto text-center">
          <span className="text-2xl font-decorative text-gold">Use this recipe<br />with any type of sugar</span>
          <h3 className="h2">Simple Syrup</h3>
          <HorizontalSeperator />
          <div className="flex flex-col gap-6 text-left text-ornament">
            <dl>
              <dt>Ingredients</dt>
              <dd>Equal parts granulated sugar and water</dd>
            </dl>
            <dl>
              <dt>Instructions</dt>
              <dd>Combine equal parts of granulated sugar and boiling water removed from heat.</dd>
              <dd>Stir until dissolved, let cool before using.</dd>
              <dd>Keep covered and refrigerated for up to 2 weeks.</dd>
              <dd>Be creative! Use botanical tea instead of plain water to create a flavored syrup. For a more robust syrup, try turbinado sugar.</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="w-11/12 p-8 mx-auto border-2 border-gold">
        <div className="container grid gap-6 md:gap-16 md:grid-cols-2">

          {recipes?.length > 0 && recipes.map ((recipe) => {
            return(
              <div className="text-center" id={recipe.slug}>
                <h4 className="tracking-normal h2">{recipe.name}</h4>
                <HorizontalSeperator />
                <div className="flex flex-col gap-6 text-left text-ornament">
                <dl>
                  <dt>Ingredients</dt>
                  <table>
                    <tbody>
                    {recipe.ingredients.length > 0 && recipe.ingredients.map(({ name, quantity, link }) =>
                      <tr key={makeKey(name)}>
                        <td><dd>{quantity}</dd></td>
                        <td><dd>
                          {link &&
                          <Link to={link} className="text-gold hover:text-gold/50">
                            {name}
                          </Link>
                          }
                          {!link &&
                            <span>{name}</span>
                          }
                        </dd></td>
                      </tr>
                    )}
                  </tbody>
                </table>
                </dl>
                <dl>
                  <dt>Instructions</dt>
                  <dd>
                    {parse(recipe.instructions)}
                  </dd>
                </dl>
              </div>
              </div>
            )
          })}

        </div>
      </div>
    </Layout>
  )
}