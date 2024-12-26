
import Image from "next/image";
import React from "react";
import essential1 from "@/app/components/assets/essential1.png"
import essential2 from "@/app/components/assets/essential2.png"
import essential3 from "@/app/components/assets/essential3.png"

export default function Essential(){
    return(
    <div>
        <h4>The Essentials</h4>
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      {/* Images Section */}
      <div className="flex space-x-4 mb-6">
        <Image src={essential1} alt={''} width={400} height={500}/>
        <Image src={essential2} alt={''} width={400} height={500}/>
        <Image src={essential3} alt={''} width={400} height={500}/>
        
        
        
      </div>

    
      </div>
    </div>
    
    
  );
};

