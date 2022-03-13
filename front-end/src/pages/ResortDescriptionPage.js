import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';

const ResortDescriptionPage = () => {

   const [resort, setResort] = useState({
       id:0,
       title:"",
       imageSrc:"",
       price:"",
       description:""
   });

   const {id} = useParams()

   

   useEffect(()=>{

 

    const URL = `http://localhost:5000/properties/${id}`
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
        setResort(json.result)
    })
    .catch(err=>console.log(err))


   },[])

  return (
    <div className="grid" id="main-container">

    <Header/>
    <main>
        <section id="resort-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img src={resort.propertyPhotoURL} alt=""/>
            
                <div className="resort-description-content-area" style={{marginLeft: '96px'}}>
                    <h2>{resort.propertyTitle}</h2>
                    <p>Price: ${resort.propertyRentalPrice}per night</p>
                    <h3>Details</h3>
                    <p>{resort.propertyDescription}</p>
                    <p>Type: {resort.propertyType}</p>
                    <h3>Rules:</h3>
                    <ul>
                        { resort.houseRules ? resort.houseRules.map((r)=>{
                            return<li>{r}</li>
                        }): ''}
                    </ul>
                    <p>Location: {resort.location}</p>
                    <h3>Amenities:</h3>
                    <ul>
                        {resort.amenities?resort.amenities.map((r)=>{
                            return<li>{r}</li>
                        }): ''}
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <Footer/>

</div>
  )
}

export default ResortDescriptionPage