import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { firestore } from "./API/firebase";

import "./App.css";

import NavbarComponent from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import SearchBa from "./Components/Searchba";
import Images from "./Components/Image";
import AdminLogin from "./Components/Adminlog";
import ImageGallery from './Components/ImageGallery'; // Import the ImageGallery component

const App = () => {
  const [images, setImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  // const folderUrl = './public/'; // Replace with your folder URL

  useEffect(() => {
    firestore
      .collection("images")
      .get()
      .then((images) => {
        const allImages = [];
        images.forEach((img) => {
          allImages.push({ data: img.data(), id: img.id });
        });

        setAllImages(allImages);
        setImages(allImages);
      });
  }, []);

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AdminLogin/>} />
          <Route path="/Navbar" element={ 
            <div>
              <NavbarComponent 
                images={allImages}
                setImages={setImages}
                setAllImages={setAllImages}/>
              <SearchBar 
                images={allImages} 
                setImages={setImages} /> 
              <Images 
                images={images}
                allImages={allImages}
                setAllImages={setAllImages}
                setImages={setImages}/>
            </div>} />
          <Route path="/GCOEY_Gallery" element={
            <div>
              <SearchBa 
                images={allImages} 
                setImages={setImages} /> 
              <ImageGallery
                images={allImages}
                allImages={allImages}
                setImages={setImages}
                setAllImages={setAllImages}/>
              </div> }
            />
        </Routes>
      </div>
    </Router>
      {/* <AdminLogin/>    
      <NavbarComponent
        images={allImages}
        setImages={setImages}
        setAllImages={setAllImages}
      />
      <SearchBar images={allImages} setImages={setImages} />
      <Images
        images={images}
        allImages={allImages}
        setAllImages={setAllImages}
        setImages={setImages}
      /> */}
    </>
  );
};

export default App;

////////////////////





