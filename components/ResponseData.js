
 const fetchData=async()=>{
    const response= await fetch ("https://theskyfoundation.vercel.app/api/donation", { cache: 'no-store' })
    const result= response.json();
    return  result;

}
 export default fetchData;

