import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { collection, getDocs , getFirestore } from "firebase/firestore";

function Dashboard(props) {

  const [ads,setAds] = useState([])

  const db = getFirestore()

  useEffect(() => {
    // var user = firebase.auth().currentUser
    setAds([])
    fetchRecords()
  
  }, [])

  const fetchRecords = async () => {
    
    const querySnapshot = await getDocs(collection(db, "ads"));
    const docAds = [];
    querySnapshot.forEach((doc) => {
      docAds.push(doc.data());
    });
    setAds(docAds)
  }
  


  return (
    <><div class="banner">
    <img
      class="img-fluid"
      src="https://www.olx.com.pk/assets/wallpaper.6416002a042322099dbfec286d7574f4.jpg"
      alt=""
    />
  </div>
      <div className="my_ads container mt-5 mb-5">
      
        <h5 className="">My ADS</h5>
        <div className=" row">

        {ads && 
          ads.map((item,key) => {
            return (
              <Post
              key={key}
            image={item.image ? item.image : "https://via.placeholder.com/170"}
            price={item.price}
            title={item.title}
            created_at="7 Feb 22"
            onClick={props.onClick} 
          />
            )
           
          })
          
        }
          

        </div>
      </div>
    </>
  );
}

export default Dashboard;
