'use client'

import Image from "next/image";
import Link from "next/link";


const Donation = ({data}) => {

//  console.log(data);
    return (
        <>
            <main className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10  '>
                   
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
                        className='w-[220px] h-[200px] object-cover object-center rounded-b-xl'/>

                        </div>
                        <div className={`${item.bgColor} w-full p-5 sm:p-10`}>
                            <button className={`${item.categoryColor} mb-3 `}>{item.category} </button>
                            <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
                            <p className={`${item.titleColor} mb-3`}>${item.price}</p>
         
                            <Link href={`/details/${item.id}`}>
                                <button className={`${item.btnColor} text-white px-4 py-2 mb-3 rounded-lg`}>View Details</button>
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