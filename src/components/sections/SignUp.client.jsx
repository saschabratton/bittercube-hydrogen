import { Link, Image } from '@shopify/hydrogen';
import SignUpForm from "../../components/global/SignUpForm.client";
import parse from 'html-react-parser';


export default function SignUp({ content }){
  const { contentHtml, ctaLabel, ctaLink } = content
  return(
    <>
    <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-2">
      <div className="flex flex-col justify-center max-w-md mx-auto text-center">
        <div className="text-ornament"></div>
        <h2>Gain access to limited-run products</h2>
        <p>Subscribers receive first access to limited products, and curated playlists for your next cocktail party.</p>
        {ctaLabel &&
        <a href={ctaLink} className="btn btn-action" target="_blank" rel="noopener">{ctaLabel}</a>
        }
      </div>
      <div className="flex flex-col items-center justify-center max-w-lg gap-8 mx-auto mt-8">
        <h4 className="max-w-md text-center">
          Find out about new products, collaborations, upcoming events, and seasonal recipes
        </h4>
        <SignUpForm />
      </div>
    </div>
    <hr />
    </>
  )
}