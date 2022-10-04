import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


export default function TabSection(){
  return(
    <Tabs className="grid grid-cols-2 py-20">
      <div>
        image
      </div>
      <div className="grid gap-12">
      <TabList>
        <Tab>Dropper VS Dash</Tab>
        <Tab>Shaking & Stirring</Tab>
        <Tab>Experimentation</Tab>
      </TabList>

      <TabPanel>
        <p>In general, both a dash (from Bittercube 1.7 oz or 5 oz bottles) or dropper (from Bittercube 1 oz bottles) are equivalent to slightly less than one ml of bitters. However, follow the instructions below for an accurate measurement.

        DISPENSING BITTERS FROM A 1 OZ BOTTLE
        Squeeze the bulb of the dropper twice, filling it to about three-quarters of its capacity. The bitters should not enter the bulb. Release the bitters by squeezing the bulb repeatedly until the dropper is empty.

        DISPENSING BITTERS FROM A 1.7 OZ OR 5 OZ BOTTLE
        Holding the neck of the bottle and using one fluid movement, swing the bottle until upside down. With a downward thrust, expel a dash of bitters from the bottle.</p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>Any content 3</TabPanel>
      </div>

    </Tabs>
  )
}