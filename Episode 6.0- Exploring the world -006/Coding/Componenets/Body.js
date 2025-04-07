import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import  resList from "../utils/mockData"


const Body = ()=>{
  //local state variable - Super powerful variable
  const [ListOfRestaurant, setListOfRestaurant] = useState(resList) // whenever setListofResstaurant  get call react will find out the diff(difference) between virtual DOMS and update the ui
//normal js variable
  // let ListOfRestaurant =[]


  useEffect(()=>{
     fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
   console.log(json);
// ListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

    return(
        <div className="Body">
        <div className="filter">
        <button className="filter-btn"
         onClick={()=>{
        const filteredList = ListOfRestaurant.filter((es)=>es.data.avgRating>4);
       setListOfRestaurant(filteredList);
        }
        }>
        Top Rated Restaurants</button>
        </div>
        <div className="res-container"> 
     {
     ListOfRestaurant.map((restaurant)=>(
      //not using keys( not acceptable)<<<<<<< index as key <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< unique key is (best practice)
      <RestaurantCard key={restaurant.info} resData={restaurant}/>
     ))
     }
      


     
        </div>
      </div>
    );
}

export default Body;


