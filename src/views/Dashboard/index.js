import React from "react";
import Post from "../../components/Post";

function Dashboard(props) {
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
          <Post
            image="https://demo2.drfuri.com/martfury17/wp-content/uploads/sites/58/elementor/thumbs/c1-o8k9olcyrwe8m5dunmsk1org093wzb8ajrg7wzbc4k.jpg"
            price="21,500"
            title="INTERIOR"
            created_at="7 Feb 22"
            onClick={props.onClick} 
          />

          <Post
            image="https://demo2.drfuri.com/martfury17/wp-content/uploads/sites/58/2018/08/c5.jpg"
            price="11,500"
            title="Procar – Evolution Seat, Driver, Vinyl"
            created_at="8 Feb 22"
            onClick={props.onClick} 
          />
          <Post
            image="https://demo2.drfuri.com/martfury17/wp-content/uploads/sites/58/elementor/thumbs/c3-o8k9olcyrwe8m5dunmsk1org093wzb8ajrg7wzbc4k.jpg"
            price="14,500"
            title="Evolution Sport Drilled Brake Kit"
            created_at="9 Feb 22"
            onClick={props.onClick} 
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
