
import Image from "next/image";
import jog1 from "@/app/components/assets/jog1.png";
import jog3 from "@/app/components/assets/jog3.png"



{/*export default function SneakerCards() {
    const sneakers = [
      {
        id: 1,
        title: "Nike Air Max 97",
        price: "₹12,995.00",
        image: "jog1"
      },
      {
        id: 2,
        title: "Nike Air Force 1",
        price: "₹8,695.00",
        image: "jog1"
      },
      {
        id: 3,
        title: "Nike Dunk Low",
        price: "₹10,495.00",
        image: "jog2"
      },
    ];
  
    return (
      <div className="bg-white py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sneakers.map((sneaker) => (
            <div
              key={sneaker.id}
              className="bg-gray-100 rounded-lg shadow-md p-5 flex flex-col items-center"
            >
              <img
                src={sneaker.image}
                alt={sneaker.title}
                className="h-48 w-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {sneaker.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{sneaker.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
    */}
    export default function Cards(){
        return(
        <div>
            <h4>The Essentials</h4>
        <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
          {/* Images Section */}
          <div className="flex space-x-4 mb-6">
            <Image src={jog1} alt={''} width={400} height={500}/>
            <Image src={jog1} alt={''} width={400} height={500}/>
            <Image src={jog3} alt={''} width={400} height={500}/>
            
            
            
          </div>
    
        
          </div>
        </div>
        
        
      );
    };
  