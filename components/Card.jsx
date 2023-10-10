// "use client"
import Image from 'next/image';

const Card = ({data}) => {
console.log(data);
    return (
        <>
            <section className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 place-content-center '>

            
            {
                data && data.map((item)=>{
                    return <main key={item.id} >
                        <Image
                        src={item.img}
                        height={300}
                        width={300}
                        alt={item.title}
                        className=''
                        
                        
                        />
                        <div className={`${item.bgColor} p-5 rounded-b-lg `}>

                        {/* <button className={`${item.categoryColor} px-3 py-2 mb-2`}>{item.category}</button> */}
                        <h1 className={`${item.titleColor}`}>{item.title}</h1>

                        </div>



                    </main>
                })
            }
        </section>
        </>
    );
};

export default Card;