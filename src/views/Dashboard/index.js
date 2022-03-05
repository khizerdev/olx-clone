import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../config/firebase";
import { updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";


function Dashboard(props) {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();
  const db = getFirestore();
  const [user, setUser] = useState([]);

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [image , setImage] = useState('');
  const storage = getStorage();
  const auth = useSelector(state => state.user)
  console.log('from dashboard' , auth)


  useEffect(() => {
    // var user = firebase.auth().currentUser
    setAds([]);
    fetchRecords();
  }, []);

  useEffect(async () => {
    //call firebase get function here
    const response = await getUser();
    // console.log(response);
    setUser(response);
    setName(response.name)
    setEmail(response.email)
    setPhone(response.phone)
  }, []);

  const fetchRecords = async () => {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const docAds = [];
    querySnapshot.forEach((doc) => {
      docAds.push({ ...doc.data(), id: doc.id });
    });
    setAds(docAds);
  };

  const updateProfile = async () => {
    
     
      const storageRef = ref(storage, `ads/${image[0].name}`);
      const responses = await uploadBytes(storageRef , image[0])
      const url = await getDownloadURL(responses.ref)
      console.log(url)

    // }
    // const storageRef = ref(storage, `profile/${image.name}`);
    // const responses = await uploadBytes(storageRef , image)
    // const url = await getDownloadURL(responses.ref);

    const response = doc(db, "users", "8HJUzcW9NMPQWkUSryqSYpfwEAy1");

    // Set the "capital" field of the city 'DC'

    try {
      await updateDoc(response, {
        name,
        email,
        phone,
        profile: url
      });
  
      alert('Updated')
    } catch (error) {
      console.log(error.message)
    }

  
  }

  return (
    <>
      <div className="banner">
        <img
          className="img-fluid"
          src="https://www.olx.com.pk/assets/wallpaper.6416002a042322099dbfec286d7574f4.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="my_ads container mt-5 mb-5">
              <h5 className="">My ADS</h5>
              <div className=" row">
                {ads &&
                  ads.map((item, key) => {
                    return (
                      <Post
                        key={key}
                        image={
                          item.images
                            ? item.images
                            : "https://via.placeholder.com/170"
                        }
                        price={item.price}
                        title={item.title}
                        created_at="7 Feb 22"
                        onClick={() => {
                          navigate(`/detail/${item.id}`);
                        }}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-5 mb-5 w-100">
              <div className="card-header">
                <h5>Account Details</h5>
              </div>
              <div className="card-body">
            
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        required=""
                        className="form-control square"
                        name="fname"
                        value={name}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        Change Profile Picture{" "}
                        <span className="required">*</span>
                      </label>
                      <input
                      onChange={(e) => setImage(e.target.files)}
                        className="form-control square"
                        name="image"
                        type="file"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        required=""
                        className="form-control square"
                        name="email"
                        type="email"
                        value={email}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control square"
                        name="mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="col-md-12">
                      <button
                      onClick={updateProfile}
                        type="submit"
                        className="btn btn-primary"
                        name="submit"
                        value="Submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
