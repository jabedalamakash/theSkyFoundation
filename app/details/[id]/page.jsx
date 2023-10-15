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
    console.log(data);
    return (
        <>
        <section className='w-full sm:w-[80%] mx-auto px-5 my-32 sm:px-0'>


        <div className=" mt-32">
            <h1 className="text-2xl font-bold ">{data[0]?.title}</h1>
            <p className="leading-relaxed">{data[0]?.desc}</p>
            </div>
            <div className=" relative mb-20">
                <Image
                src={data[0].img}
                width={2000}
                height={2000}
                alt={data[0].title}
                priority
                className=" w-full h-[500px] absolute object-cover"
                />

            <div className="relative bg-black/30 p-5 sm:p-10  rounded-b-xl bottom-0 left-0 ">
                <button className={`${data[0].btnColor} rounded-lg font-bold px-5 py-2`}>Donate ${data[0].price}</button>
                </div>

            </div>



            </section>
            
        </>
    );
};

export default page;