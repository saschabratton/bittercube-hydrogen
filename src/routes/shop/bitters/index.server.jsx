import { Layout } from "../../../components/Layout.server"
import PatternHero from "../../../components/headers/PatternHero.server"
import SubNav from "../../../components/global/SubNav.server"
import Card from "../../../components/global/Card.client"
import WholesaleBitters from "../../../components/sections/WholesaleBitters"
import SplitBgVert from "../../../components/sections/SplitBgVert.client"


const HeaderText = ("Bittercube Bitters")
const pageNav = [
  { label: 'Bitters', link: '/shop/bitters'},
  { label: 'Curated Kits', link: '/'},
  { label: 'Special Editions & Collaborations', link: '/'},
  { label: 'Accesories', link: '/'},
  { label: 'Shop All', link: '/'}
]
const SplitBgContent = {
  'topLabel': 'FEELING SPIRITED?',
  'topHeadline': 'Shop our local Milwaukee Bazaaz',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '/',
  'bottomLabel': 'Get more from Bittercube',
  'bottomHeadline': 'Subscription Plans',
  'bottomCtaLabel': 'See Plans',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'dark',
  'padding': '12'
}


export default function Index(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <div className="container pt-0 pb-6">
        <div className="label">Sort By: [ Formik ]</div>
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