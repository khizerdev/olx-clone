import React from "react";

function Banner() {
  return (
    <>
      <div class="bannerParentDiv container-fluid">
        <div className="row">
          <div className="col-12">
            <div class="bannerChildDiv">
              <div class="menuBar">
                <div class="categoryMenu">
                  <select class="form-control" name="Category">
                    <option value="null">ALL CATEGORIES</option>
                    <option value="Cars">Cars</option>
                    <option value="Cameras &amp; Lenses">
                      Cameras &amp; Lenses
                    </option>
                    <option value="Computers &amp; Laptops">
                      Computers &amp; Laptops
                    </option>
                    <option value="Mobile Phones">Mobile Phones</option>
                    <option value="Motorcycles">Motorcycles</option>
                    <option value="Tablets">Tablets</option>
                  </select>
                </div>
                <div class="otherQuickOptions">
                  <span>Cars</span>
                  <span>Cameras &amp; Lenses</span>
                  <span>Computers &amp; Laptops</span>
                  <span>Mobile Phones</span>
                  <span>Motorcycles</span>
                  <span>Tablets</span>
                </div>
              </div>
              <div class="banner">
                <img
                  class="img-fluid"
                  src="https://www.olx.com.pk/assets/wallpaper.6416002a042322099dbfec286d7574f4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
