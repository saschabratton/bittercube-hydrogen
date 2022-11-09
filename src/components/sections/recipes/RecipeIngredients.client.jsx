import { makeKey } from "../../../utilities/helpers"

export default function RecipeIngredients({activeRecipe}) {
  const { ingredients, glass, garnish } = activeRecipe


  return(
    <div>
      <dl>
        <dt>Mix</dt>
        {ingredients.length > 0 && ingredients.map(({ name, quantity }) =>
          <dd>
            {quantity}{' '}{name}
          </dd>
        )}
        </dl>
        <dl>
        <dt>Glass</dt>
        <dd>{ glass }</dd>
        </dl>
        <dl>
        <dt>Garnish</dt>
        <dd>{ garnish }</dd>
      </dl>
    </div>
  )
}