import React,{useState,useEffect} from 'react';
import ListItem from './ListItem';

import ResortItem from "./ResortItem";
import { useParams } from 'react-router-dom';


const ResortList = () => {

  //creating my state
  const [resorts , setResorts] = useState([{
    id:0,
    title:"",
    price: 0,
    imageSrc : null
  }]);
  const {type} = useParams()


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
        <h2>{type ? type : "All Resorts"}</h2>
        {resorts.map((v) => {
          if(!type)
          return  <ListItem item={v} />
          else return type === v.propertyType ? <ListItem item={v} /> : <></>
        })}
      </div>

    </section>

  );
};

export default ResortList;
