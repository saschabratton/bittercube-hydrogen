
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown } from "react-icons/hi";


export default function CocktailBasics(){
  return(
    <Tabs>
      <div className="h-fit">
      <TabList>
          <Tab>
            <span className="whitespace-nowrap">
              Dropper VS Dash
            </span>
          </Tab>
          <Tab>
            <span className="whitespace-nowrap">
              Shaking & Stirring
            </span>
          </Tab>
          <Tab>
            <span className="whitespace-nowrap">
              Experimentation
            </span>
          </Tab>
      </TabList>
        <TabPanel>
          <div className="relative pt-8">
            <div className="relative z-10">
              <dl><dt></dt><dd>When we use the term one dash or one dropper, we are referencing a measurement of just less than one ml of bitters. For an accurate measurement when using a dasher or dropper bottle, follow the instructions below.s</dd></dl>
              <div className="flex flex-col gap-4">
                <Disclosure>
                  <div className="border-b-2 border-gold">
                  <Disclosure.Button className="flex justify-between w-full pb-3 text-lg text-left h4">
                    Dispensing bitters from a 1 oz bottle
                    <HiChevronDown className="w-5 h-5 text-gold" />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <p>
                        While holding the bottle in one hand, unscrew the eye dropper cap and squeeze the bulb of the dropper twice, filling it to about three-quarters of its capacity. The bitters should not enter the bulb. Release the bitters by squeezing the bulb repeatedly until the dropper is empty.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                  </div>
                </Disclosure>

                <Disclosure>
                  <div className="border-b-2 border-gold">
                  <Disclosure.Button className="flex justify-between w-full pb-3 text-lg text-left h4">
                    Dispensing bitters from a 1.7 oz bottle
                    <HiChevronDown className="w-5 h-5 text-gold" />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <p>
                        Remove the cap from the bottle. Holding the neck of the bottle and using one fluid movement, swing the bottle until upside down. With a downward thrust, expel a dash of bitters from the bottle.
                      </p>
                      <p>When using a full bottle, the liquid level will be in the neck and you will need eight to ten dashes to expel the appropriate amount of bitters. This seems like a lot, but only a very little comes out each dash. Once the liquid level falls to the shoulders of the bottle, six dashes is sufficient to achieve one serving. By the time the liquid level has reached approximately an inch from the bottom of the bottle (or lower), three dashes will be necessary.</p>
                      <p>When dispensing two or more dashes of bitters into a cocktail at once, don’t swing the bottle back around, just thrust back up and then down to dispense another dash.</p>
                    </Disclosure.Panel>
                  </Transition>
                  </div>
                </Disclosure>

                <Disclosure>
                  <div className="border-b-2 border-gold">
                  <Disclosure.Button className="flex justify-between w-full pb-3 text-lg text-left h4">
                    DISPENSING BITTERS FROM A 5 and 10 OZ BOTTLE
                    <HiChevronDown className="w-5 h-5 text-gold" />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <p>
                        Remove the cap from the bottle. Holding the neck of the bottle and using one fluid movement, swing the bottle until upside down. With a downward thrust, expel a dash of bitters from the bottle.
                      </p>
                      <p>As long as the liquid level in the bottle lies between the top of the label and within an inch of the bottom of the bottle, a dash will produce a nearly identical amount of bitters as the dropper from a one-ounce bottle. </p>
                      <p>When using a full bottle, the liquid level will be in the neck. You will need three or four dashes to expel the appropriate amount of bitters. Once the liquid level falls to the shoulders of the bottle, two dashes should be sufficient. By the time the liquid level has reached approximately an inch from the bottom of the bottle (or lower), three dashes will be necessary.</p>
                      <p>When dispensing two or more dashes of bitters into a cocktail at once, don’t swing the bottle back around, just thrust back up and then down to dispense another dash.
  </p>
                    </Disclosure.Panel>
                  </Transition>
                  </div>
                </Disclosure>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative pt-8">
            <div className="relative z-10">
              <dl><dt></dt><dd>Shaking and stirring each have particular effects on a cocktail. Some basics of these techniques</dd></dl><dl><dt>SHAKING</dt><dd>Aims to chill, aerate, and add water to a cocktail. The ingredients to be shaken are combined (almost always with ice) in your preferred cocktail shaker. The shake should be firm and energetic, and the ice should strike each end of the tin as the shaker moves back and forth. "Double strain" with a hawthorne strainer and a tea strainer after shaking to catch tiny ice chips.</dd></dl><dl><dt>STIRRING</dt><dd>Is used to amalgamate, chill, and add water to a cocktail without aeration. This is done in a stirring vessel with a bar spoon. The aim is to smoothly spin the ingredients—without causing air bubbles—until proper dilution and temperature are achieved. Strain with a julep strainer, but if you don’t have one a hawthorne strainer can be substituted.</dd></dl>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative pt-8">
            <div className="relative z-10">
              <dl><dt>Experimentation Is Key</dt><dd>Try the classics, but don’t be afraid to experiment. Train your palate to recognize a well-balanced cocktail. Swap lemon and lime, spirits, syrups, and-or bitters to create many cocktail variations.</dd></dl><dl><dt>BEYOND COCKTAILS</dt><dd>Bitters are concentrated complex flavors, and their use isn’t limited to cocktails. Use Orange Bitters in a wheat beer; try Cherry Bark Vanilla as a replacement for vanilla extract; put Jamaican No. 2 in a vinaigrette; add Jamaican No. 1 to gingerbread. The possibilities are endless!</dd></dl>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}