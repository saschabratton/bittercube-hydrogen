
export default function SyrupInstructions({ instructions }){
  return(
    <>
      <div className="pt-6 prose text-dark text-md" dangerouslySetInnerHTML={{__html: instructions}}/>
    </>
  )
}