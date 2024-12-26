
import Image from "next/image"
import jogg from "@/app/components/assets/jogg.png"


export default function Feature(){
    return(
        <div>

<div className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    
      <Image src={jogg} alt={''} width={1344} height={700}/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      STEP INTO WHAT FEELS GOOD
      </h1>
      <p className="mb-8 leading-relaxed">
      Cause everyone should know the feeling of running in that perfect pair.
      </p>
     </div>
     </div>
     </div>
    
    <div className="flex space-x-4 justify-center items-center" >
      {/* Notify Me Button */}
      <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
        Find your shoe
      </button>

    
    </div>
    </div>
    );
}