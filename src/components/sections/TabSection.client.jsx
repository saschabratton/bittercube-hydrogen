import parse from 'html-react-parser';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Image } from "@shopify/hydrogen";
import { makeKey } from "../../utilities/helpers";

export default function TabSection({ content }){
  const { label, contentHtml } = content
  return(
    <Tabs>
      <div className="h-fit">
      <TabList>
        {content && content.map((content) => (
          <Tab key={makeKey(content.label + '-tab')}>
            <span className="whitespace-nowrap">
              {content.label}
            </span>
          </Tab>
        ))}
      </TabList>
      {content && content.map((content) => (
        <TabPanel key={makeKey(content.label)}>
          <div className="relative pt-8">
            <div className="relative z-10">
              {parse(content.contentHtml)}
            </div>
          </div>
        </TabPanel>
      ))}
      </div>
    </Tabs>
  )
}