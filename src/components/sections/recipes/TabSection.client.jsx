import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RecipeIngredients from "./RecipeIngredients.client";

export default function TabSection({ activeRecipe }){
  const { instructions, supplies } = activeRecipe

  return(
    <Tabs>
      <div className="h-fit">
      <TabList>
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
          {supplies &&
          <Tab>Supplies</Tab>
          }
      </TabList>
      <TabPanel>
        <div className="relative pt-8">
          <RecipeIngredients activeRecipe={ activeRecipe } />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="relative pt-8" dangerouslySetInnerHTML={{__html: instructions}}>
          {/* {JSON.stringify(instructions)} */}
          {/* {parse(instructions, {htmlparser2: {xmlMode: true}
        })} */}
        </div>
      </TabPanel>
      {supplies &&
        <TabPanel>
          <div className="relative pt-8">
              {JSON.stringify(supplies)}
          </div>
        </TabPanel>
      }

      </div>
    </Tabs>
  )
}