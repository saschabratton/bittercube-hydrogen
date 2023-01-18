import { useEffect, useState } from "react"

export default function PrintButton() {






  useEffect(() => {
    const print = window.print
    // print()
  }, [])

  return (
    <button
      onClick={print}
      className="mx-0 mt-8 btn btn-action print:hidden">
        Print Recipe
    </button>
  )
}
