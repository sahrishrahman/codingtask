
import Image from "next/image"
import hero from "@/app/components/assets/hero.png"


export default function Hero(){
    return(
        <div>

<div className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    
      <Image src={hero} alt={''} width={1344} height={700}/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Nike Air Max Pulse
      </h1>
      <p className="mb-8 leading-relaxed">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      < br />designed to push you past your limits and help you go to the max.
      </p>
     </div>
     </div>
     </div>
    
    <div className="flex space-x-4 justify-center items-center" >
      {/* Notify Me Button */}
      <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
        Notify Me
      </button>

      {/* Shop Air Max Button */}
      <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
        Shop Air Max
      </button>
    </div>
    </div>
    );
}

