import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImages(prev => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
      return reader;
    });
  };

  const handleUpload = () => {
    const formData = new FormData();
    images.forEach(image => {
      formData.append('images', image);
    });

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      alert('Files Uploaded!');
      console.log(data);
    })
    .catch(error => {
      console.error('Error uploading files:', error);
    });
  };

  const handleModify = () => {
    setImages([]);
    setPreviewImages([]);
  };

  return (
    <div>
      <h1>Upload Images</h1>
      <form id="upload-form" action="/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="images" accept="image/*" multiple onChange={handleFileChange} />
        <button type="button" onClick={handleUpload}>Upload</button>
        <button type="button" onClick={handleModify}>Modify</button>
      </form>
      <div id="image-preview">
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index}`} style={{ maxWidth: '100px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
