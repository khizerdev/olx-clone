import React from "react";

function Detail() {
  return (
    <>
      <div class="viewParentDiv">
        <div class="imageShowDiv">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fsuzuki%20mehran.jpg?alt=media&amp;token=6b490fe6-7313-42ae-b4b9-61b5cbdd58ed"
            alt=""
          />
        </div>
        <div class="rightSection">
          <div class="productDetails">
            <p>Rs. 40000 </p>
            <span>Suuzuki</span>
            <p>Cars</p>
            <span>Fri Nov 05 2021</span>
          </div>
          <div class="productDescription">
            <p class="p-bold">Product Description</p>
            <p>Suzuki Mehran 2021</p>
          </div>
          <div class="contactDetails">
            <p class="p-bold">Seller details</p>
            <p>Name : admin</p>
            <p>Phone : 0214578996</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
