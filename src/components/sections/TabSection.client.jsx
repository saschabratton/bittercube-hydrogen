import parse from 'html-react-parser';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Illustraion from "../../assets/illustration.svg"
import { Image } from "@shopify/hydrogen";
// import 'react-tabs/style/react-tabs.css';


export default function TabSection({ content }){
  const { label, contentHtml } = content
  return(
    <Tabs>
      <div>
      <TabList>
        {content && content.map((content) => (
          <Tab>{content.label}</Tab>
        ))}
      </TabList>
      {content && content.map((content) => (
        <TabPanel>
          <div className="relative pt-8 h-[500px]">
            <div className="relative z-10">
              {parse(content.contentHtml)}
            </div>
            <Image src={Illustraion} width="390" height="399" role="presentation" className="absolute inset-0 h-full -translate-x-1/2 translate-y-40 bottom-20 left-1/2" alt="A cocktail made with Bittercube Bitters" />
          </div>
        </TabPanel>
      ))}
      </div>
    </Tabs>
  )
}