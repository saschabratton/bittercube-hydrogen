import { Layout } from "../components/Layout.server"
import Arrow from '../components/animations/Arrow.client'
import PatternHero from "../components/headers/PatternHero.server"

const HeaderText = ("Privacy Policy")

export default function PrivacyPolicy() {

  return (
    <Layout>
      <PatternHero content={HeaderText} />
      <section>
        <div className="container flex flex-col max-w-5xl gap-6">
          <h2 className="mx-auto">Bittercube's Privacy Policy</h2>
          <div className="max-w-md mx-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar finibus eleifend. Aliquam tristique tincidunt risus, nec tempor nibh lobortis in. Nullam aliquet, risus vel fermentum congue, quam urna viverra nisl, congue molestie purus sapien a nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae ultrices urna. Aenean auctor, justo quis sagittis lobortis, lectus quam sagittis nisi, egestas consectetur massa orci at mi. Nam aliquam, purus id elementum lobortis, ligula odio imperdiet risus, vitae suscipit augue lacus vel urna. Aliquam in magna vel ligula semper scelerisque a ut eros. Curabitur dignissim nulla leo, ac egestas sem cursus ac. Quisque massa risus, pretium sit amet elementum nec, mattis sed libero. Phasellus eu egestas lectus.</p>
            <p>Donec scelerisque ac sapien ut feugiat. Donec et facilisis enim. Phasellus lobortis dapibus fermentum. Nunc placerat, lorem a ultricies sagittis, erat lacus venenatis risus, vel scelerisque nibh dui nec massa. Morbi sollicitudin nec odio vel tempor. Aenean pharetra, libero quis finibus malesuada, diam risus fringilla nisi, in iaculis ex leo ut augue. Cras vulputate neque orci, ut cursus diam convallis at. Curabitur vestibulum cursus mattis. Sed id est et dui venenatis pellentesque aliquam id erat. Integer risus tortor, ornare id condimentum dictum, consequat at augue. Cras eget consequat risus. Donec molestie scelerisque arcu et fringilla. Praesent suscipit tellus vitae nulla gravida egestas.</p>
            <p>Maecenas vel odio in sem semper aliquet sit amet molestie orci. Fusce quam arcu, rhoncus quis lobortis ut, lacinia at elit. Donec risus odio, tincidunt vitae imperdiet vel, eleifend non purus. Maecenas vestibulum sapien sit amet mi mattis, nec dignissim ligula pellentesque. Nam laoreet neque purus. Nunc nec ante mi. Donec orci quam, facilisis nec hendrerit rhoncus, aliquet suscipit dui. Nullam dictum vitae mauris sed porttitor. Phasellus imperdiet risus a ultrices congue. Vestibulum a ipsum quam. Maecenas vulputate quis nisi id consectetur. Fusce a efficitur arcu. Nullam scelerisque vel dui ac finibus. Proin vulputate suscipit nisi at placerat. Etiam egestas justo a neque molestie egestas.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
