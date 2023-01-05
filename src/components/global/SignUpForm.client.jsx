import {useNavigate, Link} from '@shopify/hydrogen/client'
import * as Yup from 'yup'
import { Formik, Form, Field, } from 'formik'
import EmailInput from "../fields/EmailInput"

export default function SignUpForm(){
  // const { showSuccess, showError } = useNotifications()
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Required'),
  })
  const initialValues = {
    email: "",
  }

  const handleSubmit = async ({ values, resetForm }) => {
    const {email} = values
    try {
      const res = await fetch(`/account/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      })
      if (res.status === 200) {
        navigate('/account')
      } else {
        // TODO: Throw a toast message
        // resetForm()
        console.log(res.json())
        showSuccess("Please check your email for account verification")
        // return res.json()
      }
    } catch (error) {
      console.log(error.toString())
    }
  }


  return(
    <>
      {/* <div id="rj-subscribe"></div> */}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({ values, resetForm })
        }}
      >
        {({ values, dirty, errors, isSubmitting, submitCount, setFieldValue, resetForm }) => (
          <Form className="flex w-full">
            <Field
              name="email"
              type="text"
              hint="Enter your primary email"
              component={EmailInput}
              placeholder="___@___.___"
              label="Email"
            />

            <button
              type="submit"
              disabled={dirty ? false : true}
              className="px-6 text-sm font-bold tracking-widest uppercase transition duration-300 border-2 border-l-0 text-dark border-gold rounded-r-md whitespace-nowrap hover:bg-paper-action">
              Sign-Up
            </button>
             {/* <div className="mt-10 mb-3">
              <p>By signing up, I agree to the <Link to={'/policies/privacy-policy'} className="text-primary">Privacy Policy</Link> and <Link to={'/policies/terms-of-service'} className="text-primary">Terms of Service</Link></p>
            </div> */}
          </Form>
        )}
      </Formik>
    </>
  )
}