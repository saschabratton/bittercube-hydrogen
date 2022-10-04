import Arrow from '../components/animations/Arrow.client'



export default function Sandbox() {

  return (
    <section>
      <div className="container flex flex-col gap-6">
        <h2>Sandbox</h2>



        <Arrow />
        <Arrow />
        </div>

        <div className="h-screen max-w-2xl mx-auto rounded-lg bg-paper">

            <div className="w-6 mx-auto transition bg-forest">

            </div>

        </div>


    </section>
  )
}
