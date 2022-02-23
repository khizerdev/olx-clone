import React, { useState } from "react";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAdDetail } from "../../config/firebase";
function Detail() {
  const params = useParams()
  const[ad,setAd] = useState([])

  useEffect(async  () => {
    //call firebase get function here
    const ad = await getAdDetail(params.adId)
    setAd(ad)
  },[])



  return (
    <>
      <div class="viewParentDiv">
        <div class="imageShowDiv">
          <img
            src={ad.image ? ad.image : "https://dummyimage.com/640x360/fff/aaa"}
            alt=""
          />
        </div>
        <div class="rightSection">
          <div class="productDetails">
            <p>Rs.{ad.price}</p>
      
            <p>{ad.category}</p>
          
          </div>
          <div class="productDescription">
            <p class="p-bold">Title</p>
            <p>{ad.title}</p>
          </div>
         
        </div>
      </div>
      <div className="container-fluid">
      <div className="row">
          <div className="col-12">
          <div class="productDescription">
            <p class="p-bold">Description</p>
            <p>{ad.desc}</p>
          </div>
          </div>
        </div>
      </div>
        
    </>
  );
}

export default Detail;
