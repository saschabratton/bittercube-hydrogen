import { useEffect, useState } from "react"

export default function PrintButton() {






  useEffect(() => {
    const print = window.print
    // print()
  }, [])

  return (
    <button
      onClick={print}
      className="btn btn-action">
        Print Recipe
    </button>
  )
}
