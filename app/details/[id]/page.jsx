


const resData=async(id)=>{
    const response= await fetch (`https://theskyfoundation.vercel.app/api/donation/${id}`, { cache: 'no-store' })  
    return response.json();

}

const page = async({params}) => {
    // const {id}=params;
   
    const id=params.id;
     console.log(id);
    const res= await resData(id);
    const data=res.donationData;
    console.log(data);
    return (
        <div>

            <h1>Hello</h1>
            
        </div>
    );
};

export default page;