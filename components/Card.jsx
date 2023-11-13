
import Image from 'next/image';

const Card = ({data}) => {

    return (
        <>
            <section className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10  '>

            
            {
                data && data.map((item)=>{
                    return <main key={item.id} className='w-full rounded-xl' >

                        <div>
                        <Image
                        src={item.img}
                        height={300}
                        width={300}
                        alt={item.title}
                        priority
                        className='w-[100%] h-[100%] '
                        />

                        </div>

                        <div className={`${item.bgColor} p-5  rounded-b-lg`}>

                            <button className={`${item.categoryColor}`}>{item.category} </button>
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