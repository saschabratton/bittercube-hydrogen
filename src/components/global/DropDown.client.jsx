import { Formik, Field } from "formik"

export default function DropDown() {
  return(
    <Formik>
      <Field name="color" as="select" className="px-2 py-1 tracking-widest uppercase border-2 rounded-md border-gold bg-paper">
          <option value="lowestPrice">Price Lowest</option>
        </Field>
    </Formik>
  )
}