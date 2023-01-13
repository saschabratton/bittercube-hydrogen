import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { makeKey } from "../../utilities/helpers"

export default function TabSection({ content }){
  return(
    <Tabs>
      <div className="h-fit">
      <TabList>
        {content && content.map((content) => (
          <Tab key={makeKey(content.label)}>
            {content.label}
          </Tab>
        ))}
      </TabList>
      {content && content.map((content) => (
        <TabPanel key={makeKey(content.label)}>
          <div className="relative pt-8">
            <div className="relative z-10">
              <div className="pt-6 prose text-dark text-md" dangerouslySetInnerHTML={{__html: content.contentHtml}}/>
            </div>
          </div>
        </TabPanel>
      ))}
      </div>
    </Tabs>
  )
}