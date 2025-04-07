import { CDN_URL } from "../utils/constants";




const RestaurantCard =(props)=>{
    // console.log(props);//gives object were there is resName and cuisesnen 
   const {resData} = props; 
  
   const
  
    {name,cuisines,avgRating,areaName,deliveryTime,costForTwo,cloudinaryImageId} = resData?.data;
  
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
  
        <img className="res-logo" 
        alt ="res-logo"
        src={CDN_URL+cloudinaryImageId }>
        </img>
   
      <h3>{name } </h3>
      <h4>{ cuisines.join(",") }</h4>
      <h4>{ avgRating } stars </h4>
      <h4>{ areaName }</h4>
      <h4>{ deliveryTime }</h4>
      <h4>{ costForTwo}</h4> 
      </div>
    )
  }

  
  export default RestaurantCard;



