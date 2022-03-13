import React,{useState,useEffect} from 'react';

import ResortItem from "./ResortItem";


const Bestseller = () => {

  //creating my state
  const [resorts , setResorts] = useState([{
    id:0,
    title:"",
    price: 0,
    imageSrc : null
  }]);


  useEffect(()=>{

    const URL = 'http://localhost:5000/properties'
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
     

      setResorts(json.results)
    })
    .catch(err=>console.log(err))

  }, [])
  return (
    <section id="section-resort-list">
      <div className= "container">
      
          <h1>Bestseller</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {resorts.map(resort=>
              resort.bestSellers?
              <ResortItem id={resort._id} title={resort.propertyTitle} image ={resort.propertyPhotoURL} price={resort.propertyRentalPrice} />
              :<></>
              )}
  
          </div>

      </div>

    </section>

  );
};

export default Bestseller;