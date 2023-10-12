'use client'

import Image from "next/image";
import Link from "next/link";


const Donation = ({data}) => {

//  console.log(data);
    return (
        <>
            <main className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10  '>
            {/* <main className='flex w-full flex-wrap gap-10'> */}
                

            
            {
                data && data.map((item)=>{
                    return(
                        <section key={item.id} className=" w-full  flex  border-2 items-center">

                        <div>
                        <Image
                         src={item.img}
                        height={200}
                        width={200}
                        alt={item.title}
                        priority
                        className='w-60 h-60 rounded-b-xl'/>

                        </div>
                        <div className={`${item.bgColor}  p-5`}>
                            <button className={`${item.categoryColor}`}>{item.category} </button>
                            <h1 className="font-bold text-2xl">{item.title}</h1>
                            <p className="mb-3">${item.price}</p>
                            <Link href={"/"}>
                                <button className={`${item.btnColor} bg-green-300 text-green-700 px-5 py-2`}>View Details</button>
                            </Link>
                        </div>
                    </section>
                    )
                })
            }
            </main>
        </>
    );
};

export default Donation;