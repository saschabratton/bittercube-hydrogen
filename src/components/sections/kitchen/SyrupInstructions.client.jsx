import parse from 'html-react-parser'

export default function SyrupInstructions({ instructions }){
  return(
    <>
      {parse(instructions)}
    </>
  )
}