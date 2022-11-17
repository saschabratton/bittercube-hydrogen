import Arrow from '../components/animations/Arrow.client'
import RecomendedRecipes from "../components/sections/recipes/RecomendedRecipes.client"


const recipes = [
  {
  'slug': 'a-better-manhattan',
  'name': 'A Miami Manhattan',
  'flavors': ["Spirit Forward","Bitter","Herbaceous","Aromatic"]
},
{
  'slug': 'black-manhattan',
  'name': 'Black Manhattan',
  'flavors': ["Spirit Forward","Bitter","Herbaceous","Aromatic","Winter"]
},
{
  'slug': 'bogart',
  'name': 'Bogart',
  'flavors': ["Bitter","Aromatic","Spirit Forward"]
},
]

const activeRecipe = {
  'slug': 'a-better-manhattan',
  'name': 'A Miami Manhattan',
  'flavors': ["Spirit Forward","Bitter","Herbaceous","Aromatic"]
}

export default function Sandbox() {

  return (
    <section>
      <div className="container flex flex-col gap-6">
        <RecomendedRecipes recipes={recipes} activeRecipe={activeRecipe}/>
      </div>
    </section>
  )
}
