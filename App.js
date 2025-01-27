import './App.css';
import SearchBar from '../searchbar/SearchBar';
import BusinessList from '../Business_list/BusinessList';
import React, {useState} from 'react';

function App() {
  const Business_object = {
    imageSRC: "https://ih1.redbubble.net/image.4983736396.9465/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    name: "Pepino's Pizza",
    addres: "04 Mama Mia lane",
    city: "Rome",
    state: "Italy",
    zipcode: "4578 OW",
    category: 'Italian',
    rating: 4,
    reviewCount: 69
  }

  const Business_object2 = {
    imageSRC: "https://static.wikia.nocookie.net/f6f87d1a-743f-4a72-9983-0d337af72c25/scale-to-width/755",
    name: "Knuckles dentistry",
    addres: "04 Mama Mia lane",
    city: "Rome",
    state: "Italy",
    zipcode: "4578 OW",
    category: 'Italian',
    rating: 5,
    reviewCount: 100
  }

  const Business_object3 = {
    imageSRC: "https://ih1.redbubble.net/image.4983736396.9465/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    name: "Pepino's pizza",
    addres: "04 Mama Mia lane",
    city: "Rome",
    state: "Italy",
    zipcode: "4578 OW",
    category: 'Italian',
    rating: 5,
    reviewCount: 20
  }
    
  const [Businesses,setBusinesses] = useState([Business_object,Business_object2,Business_object3])

  const joost = (search, paramiter) => {
    let sortedBusinesses = [...Businesses]
    const filterdBusinesses = sortedBusinesses.filter(n => {
      return n.name === search
    })


      if (paramiter === "Rating") {
        console.log("joost")
        filterdBusinesses.sort((a,b)=> b.rating - a.rating);
        setBusinesses([...sortedBusinesses])
      

      }

      if (paramiter === "Review_Count") {
        console.log("thomas")
        filterdBusinesses.sort((a,b)=> b.reviewCount - a.reviewCount)
        setBusinesses([...sortedBusinesses])
      }
  }

 



  return (
   <div>
    <SearchBar bob = {joost}/>
    <BusinessList businesses = {Businesses}/>
   </div>
  );
}

export default App;
