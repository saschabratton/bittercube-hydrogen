import { Link, Image, fetchSync } from "@shopify/hydrogen"



// TODO: pull in data from bartender api

export default function FeaturedBartenders(){
  const person = fetchSync('https://api.bittercube.com/api/bartenders.json').json()
  const featuredPerson = person.filter(person => person.featured == true)
  console.log(featuredPerson)


  return(
    <>
    {featuredPerson.map((person) => {
      return (
     <section className="py-12 bg-dark" id="featured-bartender">
        <div className="border-y-2 border-gold">
          <div className="container grid max-w-5xl col-span-1 gap-6 lg:grid-cols-7 lg:gap-16">
            <div className="flex flex-col justify-center col-span-1 gap-4 lg:col-span-4">

              <span className="label">Featured Bartender</span>
              <h3 className="max-w-sm tracking-normal text-gold">{person.name} from {person.employer}</h3>
              <p>Anthony Valenti is an intuitive modern bartender with classic sensibilities. His philosophy of tradition and imagination have allowed him to fit into a variety of rolls within the world of mixology: from high volume service to highbrow experiences. Each libation created and served by Anthony is meticulously prepared with the intent to delight the senses. </p>
              <h4 className="mt-6 label">SIGNATURE RECIPE</h4>
              <p>{person.featured_recipe_text}</p>

              <Link to={person.featured_recipe} className="flex justify-between pt-4 border-t-2 w-fit lg:w-60 label group border-gold">Go to recipe
                <div className="btn-arrow btn-arrow-gold"></div>
              </Link>

            </div>
            <div className="col-span-1 lg:col-span-3">
              <Image src={person.image} width={460} height={555} className="object-cover mx-auto aspect-4/5 rounded-jumbo" alt={person.name} />
            </div>
          </div>

        </div>
      </section>
      )
    })}
    </>
  )
}