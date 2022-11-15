import { makeKey } from "../../../utilities/helpers"

export default function RecipeIngredients({activeRecipe}) {
  const { ingredients, glass, garnish } = activeRecipe


  return(
    <div>
      <dl>
        <dt>Mix</dt>
        <table>
        {ingredients.length > 0 && ingredients.map(({ name, quantity }) =>
          <tr>
            <td><dd>{quantity}</dd></td>
            <td><dd>{name}</dd></td>
          </tr>
        )}
        </table>
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