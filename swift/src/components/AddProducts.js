import React from 'react';
import { useState } from 'react';
import { auth, db, storage } from '../config/config';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export const AddProducts = () => {
     const[title,setTitle]=useState('');
     const[description,setDescription]=useState('');
     const[price,setPrice]=useState('');
     const[image,setimage]=useState('');
     const[imageerror,setImageError]=useState('');
     const[successMsg, setSuccessmsg]=useState('');
     const[uploaderror,setuploaderror]=useState('');

     const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };

    const types = ['image/jpg' , 'image/png' , 'image/jpeg','image/PNG'];
    const handleProductImg=(e)=>{
      let selectedFile=e.target.files[0];
      if(selectedFile){
        if(selectedFile&&types.includes(selectedFile.type)){
           setimage(selectedFile);
           setImageError('');
        }else{
          setimage(null);
          setImageError('please select a valid image file type (png or jpg)')
        }
      }else{
        console.log('please select your file');

      }
    }

    // const handleAddProducts=(e)=>{
    //   e.preventDefault();
    //   const uploadTask = storage.ref(`product-image/$(image.name)`);
    //   uploadTask.on('state_changed',snapshot=>{
    //     const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    //     console.log(progress);
    //   },error=>setuploaderror(error.message),()=>{
    //  storage.ref('product-image').child(image.name).getDownloadURL().then(url=>{
    //    db.collection('Products').add({
    //     title,
    //     description,
    //     price:Number(price),
    //     url
    //    }).then(()=>{
    //     setSuccessmsg('product added successfully');
    //     setTitle('');
    //     setDescription('');
    //     setPrice('');
    //     document.getElementById('file').value='';
    //     setImageError('');
    //     setuploaderror('');
    //     setTimeout(()=>{
    //       setSuccessmsg('');
    //     },3000)
    //    }).catch(error=>setuploaderror(error.message));      
    //  })
    //   })
    // }
// ...Other imports and code...

const handleAddProducts = (e) => {
  e.preventDefault();
  if (!image) {
    setuploaderror("Please select an image");
    return;
  }
  
  const uploadTask = firebase.storage().ref(`product-image/${image.name}`);
  uploadTask.put(image).on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    },
    (error) => setuploaderror(error.message),
    () => {
      uploadTask.getDownloadURL().then((url) => {
        db.collection("Products")
          .add({
            title,
            description,
            price: Number(price),
            url,
          })
          .then(() => {
            setSuccessmsg("product added successfully");
            setTitle("");
            setDescription("");
            setPrice("");
            setimage(null);
            setImageError("");
            setuploaderror("");
            setTimeout(() => {
              setSuccessmsg("");
            }, 3000);
          })
          .catch((error) => setuploaderror(error.message));
      });
    }
  );
};

// ...Rest of the code...


  return (
    <div className='container'>
      <br />
      <br />
      <h1> Add Products</h1>
      <hr />
      {successMsg&&<>
      <div className='success-msg'>{successMsg}</div>
      </>}
      <form autoComplete='off' className='form-group' onSubmit={handleAddProducts}>
        <label>Product Title</label>
        <input type='text' className='form-control' required 
        onChange={handleTitleChange} value={title}/>
        <br />
        <label>Product Description</label>
        <input type='text' className='form-control' required 
        onChange={handleDescriptionChange} value={description}/>
        <br />
        <label>Product Price</label>
        <input type='number' className='form-control' required
        onChange={handlePriceChange} value={price} />
        <br />
        <div className="upload-btn-wrapper">
          <label htmlFor="file" className="btn">Upload Product Image</label>
          <input type="file" id="file" required 
          onChange={handleProductImg}/>
      
          {imageerror&&<>
            <br></br>
          <div className='error-msg'>{imageerror}</div>
          </>}
          <br></br>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type='submit'>
            SUBMIT
          </button>
        </div>
      </form>
      {uploaderror&&<>
        <br></br>
      <div className='error-msg'>{uploaderror}</div>
      </>}
    </div>
  );
};
