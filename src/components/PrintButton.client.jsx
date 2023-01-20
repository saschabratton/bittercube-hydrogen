import { useEffect, useState } from "react"

export default function PrintButton() {
  // const [print, setPrint] = useState(false)




  useEffect(() => {
    const print = window.print
    // print()
  }, [])

  return (
    <button
      // onClick={print}
      // onClick={() => window ? window.print : console.log('PRINT')}
      className="mx-0 mt-8 btn btn-action print:hidden">
        Print Recipe
    </button>
  )
}
