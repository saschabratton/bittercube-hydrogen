import { Layout } from "../../../components/Layout.server"
import PatternHero from "../../../components/headers/PatternHero.server"
import SubNav from "../../../components/global/SubNav.server"
import Card from "../../../components/global/Card.client"
import WholesaleBitters from "../../../components/sections/WholesaleBitters"
import SplitBgVert from "../../../components/sections/SplitBgVert.client"
import DropDown from "../../../components/global/DropDown.client"

const HeaderText = ("Bittercube Bitters")
const pageNav = [
  { label: 'Bitters', link: '/shop/bitters'},
  { label: 'Curated Kits', link: '/shop/bitters'},
  { label: 'Special Editions & Collaborations', link: '/shop/bitters'},
  { label: 'Accesories', link: '/shop/bitters'},
  { label: 'Shop All', link: '/shop/bitters'}
]
const SplitBgContent = {
  'topLabel': 'FEELING SPIRITED?',
  'topHeadline': 'Shop Our Local Milwaukee Bazaar',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '/',
  'bottomLabel': 'Get more from Bittercube',
  'bottomHeadline': 'Subscription Plans',
  'bottomCtaLabel': 'See Plans',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'dark',
  'padding': '12',
  'bottomHtml': ''
}


export default function Index(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <div className="container flex items-center gap-2 pt-0 pb-6">
        <span className="label">Sort By:</span>
        <DropDown />
      </div>
      <hr />
      <div className="container grid grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />
    </Layout>
  )
}