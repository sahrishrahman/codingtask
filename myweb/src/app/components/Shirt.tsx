
import Image from "next/image";
import man1 from "@/app/components/assets/man1.png"
import neaker1 from "@/app/components/assets/neaker1.png"
import girl1 from "@/app/components/assets/girl1.png"
import pants1 from "@/app/components/assets/pants1.png";


{/*const Shirt= () => {
	return (
	
 
 <div className="bg-gray-100">
  <div className="container mx-auto py-8">
   <h4 className="text-4xl font-bold text-center mb-8">
    Gear UP
   </h4>
   <div className="flex  gap-8">

   
    <div className="bg-white p-6 rounded-lg shadow-md"> 
      <Image src={man1} alt='' width={500} height={300} />
     <h2 className="text-lg font-semibold mb-2">
      T-shirt with Tape Details
     </h2>
     <div className="flex items-center mb-2">
      <div className="flex text-yellow-500">
      </div>
    
     </div>
     <p className="text-xl font-bold">
      $120
     </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
       <Image src={neaker1} alt='' width={500} height={300} />
     <h2 className="text-lg font-semibold mb-2">
      Skinny Fit Jeans
     </h2>
     <div className="flex items-center mb-2">
      <div className="flex text-yellow-500">
    
     </div>
     
     <p className="text-xl font-bold">
      $240
      <span className="line-through text-gray-500">
       $260
      </span>
      <span className="text-red-500">
       -20%
      </span>
     </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
     <Image src={girl1} alt='' width={500} height={300} />
     <h2 className="text-lg font-semibold mb-2">
      Checkered Shirt
     </h2>
     <div className="flex items-center mb-2">
      <div className="flex text-yellow-500">
       
      </div>
    
     </div>
     <p className="text-xl font-bold">
      $180
     </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Image src={pants1} alt='' width={500} height={300}/>
     <h2 className="text-lg font-semibold mb-2">
      Sleeve Striped T-shirt
     </h2>
     <div className="flex items-center mb-2">
      <div className="flex text-yellow-500">
       
      </div>
    
     </div>
     <p className="text-xl font-bold">
      $130
    
     </p>
    </div>
   </div>
   <div className="text-center mt-8">
    <button className="bg-white text-black py-2 px-4 rounded-full shadow-md">
     View All
    </button>
   </div>
  </div>
  </div>
  </div>
    );
}*/}
export default function Shirt(){
    return(
    <div>
        <h4>The Essentials</h4>
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      {/* Images Section */}
      <div className="flex space-x-4 mb-6">
        <Image src={man1} alt={''} width={400} height={500}/>
        <Image src={neaker1} alt={''} width={400} height={500}/>
        <Image src={girl1} alt={''} width={400} height={500}/>
        <Image src={pants1} alt={''} width={400} height={500}/>

        
        
        
      </div>

    
      </div>
    </div>
    )
}

