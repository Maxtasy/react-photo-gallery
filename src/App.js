import React, { useState } from 'react';
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import UploadForm from "./components/UploadForm";
import Modal from "./components/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header/>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
