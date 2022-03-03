import React , {useState} from "react";
import { doc, getFirestore } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref } from "firebase/storage";
import { uploadMultipleImage } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
function Sell() {

  const [category , setCategory] = useState('');
  const [title , setTitle] = useState('');
  const [desc , setDesc] = useState('');
  const [price , setPrice] = useState('');
  const [images , setImages] = useState([]);

  let navigate = useNavigate();

  // Create a root reference
  const storage = getStorage();
  const db = getFirestore()

  const onPost = async () => {

    const response = await uploadMultipleImage(images);
    addDoc(collection(db, "ads"), {
      category,
      title,
      desc,
      price,
      images : response.join()
    }).then(() => {
    
      setCategory('')
      setTitle('')
      setDesc('')
      setPrice('')
      alert('Ad created successfully')
      navigate('/dashboard')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    })

  }

  return (
    <>
      <div className="create py-md-4">
        <h2 class="text-center">POST YOUR AD</h2>
        <div className="create_parentDiv mx-auto">
          <div className="create_details mx-auto">
            <h3>INCLUDE SOME DETAILS</h3>
            <div className="fields">
              <select onChange={(e) => setCategory(e.target.value)} class="form-control mb-2" name="Category" value={category}>
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
            <div className="fields">
              <div className="field">
                <label for="title">Ad Title *</label>
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                  required=""
                  type="text"
                  name=""
                  id="title"
                  maxlength="70"
                />
                <div className="p">
                  <p>
                    Mention the key features of your item (e.g. brand, model,
                    age, type)
                  </p>
                  <p>
                    <span>0 / 70</span>
                  </p>
                </div>
              </div>
              <div className="field-textarea">
                <label for="">Description *</label>
                <textarea
               
                onChange={(e) => setDesc(e.target.value)}
                  required=""
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  value={desc}
                > {desc}</textarea>
                <div className="p">
                  <p>Include condition, features and reason for selling</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="set-price">
              <h3>SET A PRICE</h3>
              <div className="field">
                <label for="">Price *</label>
                <input
                onChange={(e) => setPrice(e.target.value)}
                  required=""
                  className="foo"
                  id="price"
                  type="text"
                  inputmode="numeric"
                  value={price}
                />
              </div>
            </div>
            <hr />
            <div className="upload-photos">
              <h3>UPLOAD PHOTOS</h3>
              <div className="pictures row ml-0">
                <input
                  onChange={(e) => setImages(e.target.files)}
                  name="files[]"
                  type="file"
                  class="form-control"
                  multiple
                />
              </div>
            </div>
            <hr />
            <div className="post-btn">
              <button onClick={onPost}>Post now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sell;
