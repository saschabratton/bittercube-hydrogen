import { makeKey } from "../../../utilities/helpers"
import { Link } from "@shopify/hydrogen"

export default function RecipeIngredients({activeRecipe}) {
  const { ingredients, glass, garnish } = activeRecipe


  return(
    <div>
      <dl>
        <dt>Mix</dt>
        <table>
          <tbody>
          {ingredients.length > 0 && ingredients.map(({ name, quantity, link }) =>
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