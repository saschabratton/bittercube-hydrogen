import { PrimaryMenu } from "@client"
// ----------------------------------------------------------------------
export default function PatternHero({ content }) {

  return (
     <div className="relative bg-dark bg-pattern header-dark">
      <PrimaryMenu dark={true} />
      <div className="container relative text-center h-[550px]">
        <div className="flex flex-col justify-center h-full">
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
          <h1 className="max-w-2xl py-4 mx-auto normal-case text-outline">{ content }</h1>
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
        </div>
      </div>
    </div>
  )
}
