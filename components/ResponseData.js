const fetchData=async()=>{
    const response= await fetch("https://theskyfoundation.vercel.app/api/donation")
    const result= response.json();
    return  result;

}
export default fetchData;