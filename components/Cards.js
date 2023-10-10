import Card from "./Card";
import fetchData from "./ResponseData";


const Cards = async() => {
    const response= await fetchData();
    const data= response.donationData; 
    // console.log(data);
    
    return (
        <div>

            <Card data={data}/>
            
        </div>
    );
};

export default Cards;