const fetchFunc=async(url)=>{
    const respon= await fetch (url, { cache: 'no-store' })
    const result= respon.json();
    return  result;

}
export  default fetchFunc;