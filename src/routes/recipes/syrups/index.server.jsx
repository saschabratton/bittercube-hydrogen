import { Layout } from "../../../components/Layout.server";
import PatternHero from "../../../components/headers/PatternHero.server";
import SubNav from "../../../components/global/SubNav.server";
import Card from "../../../components/global/Card.client";
import { fetchSync, Image, Link } from "@shopify/hydrogen";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";
import RecipesNav from "../../../components/headers/RecipesNav.server";

const HeaderText = ("Syrups")
const syrupsApi = 'https://lavish-turnip.cloudvent.net/api/syrups.json'


const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

export default function Cocktails(){
  const recipes = fetchSync(syrupsApi,{
    preload: false,
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

// console.log(syrupGroups)

{syrupGroups && Object.entries(syrupGroups).forEach(([key, value]) => {
  // console.log(`${key}: ${value}`);
  // console.log(value)
})}



// for (const [key, value] of Object.entries(syrupGroups)) {
//   console.log(`${key}: ${value}`);
// }

  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <RecipesNav />
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
          <Image src='/images/heirloom.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters"  />
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
          <div className="md:col-span-2">
            <div className="flex items-center justify-center w-16 h-16 border-2 label border-gold">A</div>
          </div>

          {/* {Object.entries(syrupGroups)

          } */}


          {recipes?.length > 0 && recipes.map ((recipe) => {
            return(
              <div className="text-center">
                <h4 className="tracking-normal h2">{recipe.name}</h4>
                <HorizontalSeperator />
                <div className="flex flex-col gap-6 text-left text-ornament">
                <dl>
                  <dt>Ingredients</dt>
                  <dd>3 cups organic agave nectar</dd>
                  <dd>2 cups water</dd>
                </dl>
                <dl>
                  <dt>Instructions</dt>
                  <dd>Combine ingredients and whisk together until fully amalgamated.</dd>
                  <dd>Bottle and refrigerate for up to one month.</dd>
                </dl>
              </div>
              </div>
            )
            })}


          <div className="wrappe">
            {syrupGroups && Object.entries(syrupGroups).forEach(([key, value]) => {
                return(
                  <>
                    <h1>{key}</h1>
                    {value?.length > 0 && value.map((recipe) => {
                      return(
                        <>
                        <h2>{recipe.name}</h2>
                        </>
                      )
                    })}
                  </>
                )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}