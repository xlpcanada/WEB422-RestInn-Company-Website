import React,{useState,useEffect} from 'react';
import img1 from '../assets/img/resort1.webp';
import img2 from '../assets/img/resort2.webp';
import img3 from '../assets/img/resort3.webp';
import img4 from '../assets/img/resort4.webp';
import { Link } from 'react-router-dom';
const images = [img1, img2, img3, img4];

const TypeItem = ({id,title,image,price}) => {
  
  return  (
    <div className="resort-card">

      <Link to = {`/resorts/${title}`}> 
          <img src={image} alt=""/>   
      </Link> 

      <div className="resortContent">
          <h3>{title}</h3>
      </div>

  </div>

  );
};


const ResortTypes = () => {

  //creating my state
  const [types , setTypes] = useState(['']);


  useEffect(()=>{

    const URL = 'http://localhost:5000/properties/types'
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
      let t = [];
      console.log(json)
      for(const result of json.results){
          if(t.includes(result.propertyType)) continue;
          else t.push(result.propertyType)
      }
      setTypes(t)
    })
    .catch(err=>console.log(err))

  }, [])
  return (
    <section id="section-resort-list">
      <div className= "container">
      
          <h1>Types</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {types.map((t,i)=>
              <TypeItem title={t} image={images[i%4]} />
              )}
  
          </div>
      </div>

    </section>

  );
};

export default ResortTypes;