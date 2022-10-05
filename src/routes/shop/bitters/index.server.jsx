import { Layout } from "../../../components/Layout.server"
import PatternHero from "../../../components/headers/PatternHero.server"
import SubNav from "../../../components/global/SubNav.server"
import Card from "../../../components/global/Card.client"
import WholesaleBitters from "../../../components/sections/WholesaleBitters"



const HeaderText = ("Bittercube Bitters")
const pageNav = [
  { label: 'Bitters', link: '/shop/bitters'},
  { label: 'Curated Kits', link: '/'},
  { label: 'Special Editions & Collaborations', link: '/'},
  { label: 'Accesories', link: '/'},
  { label: 'Shop All', link: '/'}
]

export default function Index(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />
      <div className="container grid grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <WholesaleBitters />

    </Layout>
  )
}