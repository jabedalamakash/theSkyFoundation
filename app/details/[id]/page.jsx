import Image from "next/image";


const resData=async(id)=>{
    const response= await fetch (`https://theskyfoundation.vercel.app/api/donation/${id}`, { cache: 'no-store' })  
    return response.json();

}

const page = async({params}) => {
   
    const id=params.id;
    //  console.log(id);
    const res= await resData(id);
    const data=res.data;
    // console.log(data);
    return (
        <>

        <section className='w-full sm:w-[80%] h-screen mx-auto px-5 my-20 sm:my-32 sm:px-0'>


        <main>
          
            <div className=" relative  mb-20">
                <Image
                src={data[0].img}
                width={500}
                height={500}
                alt={data[0].title}
                priority
                className=" w-full relative h-[400px] sm:h-[700px] rounded-b-xl  -mb-20"/>

            <div className="absolute bg-black/30 p-5 sm:p-10 
            bottom-0 rounded-b-xl  left-0  w-full z-10 ">
                <button className={`${data[0].btnColor} rounded-lg
                font-bold text-white  px-5 py-2`}>Donate ${data[0].price}</button>      
            </div>
            </div>
           



            </main>
      
            <article className="w-full py-20 sm:py-30 h-auto">
            <h1 className="text-3xl mb-10  tracking-wide font-bold ">{data[0]?.title}</h1>
            <p className="leading-loose">{data[0]?.desc}</p>
            </article>

            </section>

            </>


            
    );
};

export default page;
