import { Layout } from "../components/Layout.server"
import ImageHero from "../components/headers/ImageHero.client"

const HeaderText = ("Recipes headline goes here, okay!")

export default function Recipes() {
  return (
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container max-w-2xl text-center">
        <h2 className="capitalize h1">a places headline that introduces all your spaces will go right here</h2>
      </div>
      <div className="container">
        <h1>places</h1>
      </div>
    </Layout>
  )
}