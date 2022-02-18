import React from "react";
import Banner from "../../components/Banner";
import Post from "../../components/Post";

function Home(props) {
  return (
    <>
      <Banner />
      <div className="container recommendation-heading py-4">
        <h3>Fresh Recommendations</h3>
      </div>
      <section className="w-100 py-md-4">
        <div className="container recommendations-container">
          <div className="row row-cols-1 row-cols-md-3">
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
      </section>
    </>
  );
}

export default Home;
