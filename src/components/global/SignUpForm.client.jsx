import { Formik } from "formik"

export default function SignUpForm(){
  return(
    <Formik>
      <form className="flex">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="h-12 p-3 border-2 w-96 rounded-l-md bg-paper border-gold"
        />
        <button className="px-6 text-sm font-bold tracking-widest uppercase transition duration-300 border-2 border-l-0 text-dark border-gold rounded-r-md whitespace-nowrap hover:bg-paper-action">
          Sign-up
        </button>
      </form>
    </Formik>
  )
}