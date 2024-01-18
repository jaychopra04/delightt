// import React, { useState } from 'react';

// const CloudinaryMultiImageUpload = () => {

//     const [image, setImage] = useState('');

//     const submitImage =()=> {
//         const formData = new FormData();
//         formData.append("file", image[0]);
//         formData.append("upload_preset", "delight_uploads");
//         formData.append("cloud_name", "dmla4qc5l");
//         fetch("https://api.cloudinary.com/v1_1/dmla4qc5l/image/upload", {
//             method: "post",
//             body: formData
//         }).then(res=>res.json())
//         .then(data=>console.log(formData))
    
//         .catch(err=>console.log(err))
//     }
//  return (
// <div>
//     <input type="file" onChange={(e)=>setImage(e.target.files)} />
//     <button onClick={submitImage}>Upload</button>
// </div>
//     );
// };

// export default CloudinaryMultiImageUpload;



// ///2
// import React, { useState } from 'react';

// const CloudinaryImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//     setUploadStatus('');
//   };

//   const handleImageUpload = () => {
//     if (!image) {
//       setUploadStatus('No image selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', image);
//     formData.append('upload_preset', 'delight_uploads');
//     formData.append('cloud_name', 'dmla4qc5l');

//     fetch('https://api.cloudinary.com/v1_1/dmla4qc5l/image/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUploadStatus('Image uploaded successfully!');
//         // Handle success or update UI accordingly
//       })
//       .catch((error) => {
//         setUploadStatus('Error uploading image. Please try again.');
//         // Handle error or update UI accordingly
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleImageUpload}>Upload</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </div>
//   );
// };

// export default CloudinaryImageUpload;








// //////   3

// import React, { useState } from 'react';

// const CloudinaryImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//     setUploadStatus('');
//   };

//   const handleImageUpload = () => {
//     if (!image) {
//       setUploadStatus('No image selected');
//       return;
//     }

//     setUploadStatus('Uploading...');

//     const formData = new FormData();
//     formData.append('file', image);
//     formData.append('upload_preset', 'delight_uploads');
//     formData.append('cloud_name', 'dmla4qc5l');

//     fetch('https://api.cloudinary.com/v1_1/dmla4qc5l/image/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUploadStatus('Uploaded successfully!');
//         // Handle success or update UI accordingly
//       })
//       .catch((error) => {
//         setUploadStatus('Error uploading image. Please try again.');
//         // Handle error or update UI accordingly
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button
//         onClick={handleImageUpload}
//         style={{
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           padding: '10px 20px',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           transition: 'background-color 0.3s',
//         }}
//       >
//         {uploadStatus || 'Upload'}
//       </button>
//     </div>
//   );
// };

// export default CloudinaryImageUpload;



// /////// 4

// import React, { useState } from 'react';

// const CloudinaryImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [dragging, setDragging] = useState(false);

//   const handleFileChange = (e) => {
//     handleFiles(e.target.files);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragging(false);
//     handleFiles(e.dataTransfer.files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = () => {
//     setDragging(false);
//   };

//   const handleFiles = (files) => {
//     setUploadStatus('');
//     setImage(files[0]);
//   };

//   const handleImageUpload = () => {
//     if (!image) {
//       setUploadStatus('No image selected');
//       return;
//     }

//     setUploadStatus('Uploading...');

//     const formData = new FormData();
//     formData.append('file', image);
//     formData.append('upload_preset', 'delight_uploads');
//     formData.append('cloud_name', 'dmla4qc5l');

//     fetch('https://api.cloudinary.com/v1_1/dmla4qc5l/image/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUploadStatus('Uploaded successfully!');
//         // Handle success or update UI accordingly
//       })
//       .catch((error) => {
//         setUploadStatus('Error uploading image. Please try again.');
//         // Handle error or update UI accordingly
//       });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <label
//         htmlFor="fileInput"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         style={{
//           width: '100%',
//           minHeight: '100px',
//           border: dragging ? '2px dashed #4CAF50' : '2px dashed #aaaaaa',
//           borderRadius: '8px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           cursor: 'pointer',
//           transition: 'border 0.3s',
//         }}
//       >
//         {dragging ? 'Drop here' : 'Drag & Drop Images or Click to Choose'}
//       </label>
//       <input
//         type="file"
//         id="fileInput"
//         onChange={handleFileChange}
//         style={{
//           display: 'none',
//         }}
//       />
//       <button
//         onClick={handleImageUpload}
//         style={{
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           padding: '10px 20px',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           transition: 'background-color 0.3s',
//           marginTop: '10px',
//         }}
//       >
//         {uploadStatus || 'Upload'}
//       </button>
//       {uploadStatus && <p style={{ marginTop: '10px' }}>{uploadStatus}</p>}
//     </div>
//   );
// };

// export default CloudinaryImageUpload;




// ///// 5

// import React, { useState } from 'react';

// const CloudinaryImageUpload = () => {
//   const [images, setImages] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [dragging, setDragging] = useState(false);

//   const handleFileChange = (e) => {
//     handleFiles(e.target.files);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragging(false);
//     handleFiles(e.dataTransfer.files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = () => {
//     setDragging(false);
//   };

//   const handleFiles = (files) => {
//     setUploadStatus('');
//     setImages([...images, ...files]);
//   };

//   const handleImageUpload = () => {

//     if (images.length === 0) {
//       setUploadStatus('No images selected');
//       return;
//     }

//     setUploadStatus('Uploading...');

//     const formData = new FormData();
//     images.forEach((image) => formData.append('file', image));
//     formData.append('upload_preset', 'delight_uploads');
//     formData.append('cloud_name', 'dmla4qc5l');

//     fetch('https://api.cloudinary.com/v1_1/dmla4qc5l/image/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUploadStatus('Uploaded successfully!');
//         // Handle success or update UI accordingly
//       })
//       .catch((error) => {
//         setUploadStatus('Error uploading images. Please try again.');
//         // Handle error or update UI accordingly
//       });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px',
//       }}
//     >
//       <label
//         htmlFor="fileInput"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         style={{
//           width: '100%',
//           minHeight: '100px',
//           border: dragging ? '2px dashed #4CAF50' : '2px dashed #aaaaaa',
//           borderRadius: '8px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           cursor: 'pointer',
//           transition: 'border 0.3s',
//           padding: '20px',
//         }}
//       >
//         {dragging ? 'Drop here' : 'Drag & Drop Images or Click to Choose'}
//       </label>
//       <input
//         type="file"
//         id="fileInput"
//         onChange={handleFileChange}
//         style={{
//           display: 'none',
//         }}
//         multiple
//       />
//       {images.length > 0 && (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '10px',
//           }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={URL.createObjectURL(image)}
//               alt={`Uploaded Preview ${index + 1}`}
//               style={{
//                 width: '80px',
//                 height: '80px',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//                 margin: '5px',
//               }}
//             />
//           ))}
//         </div>
//       )}
//       <button
//         onClick={handleImageUpload}
//         style={{
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           padding: '10px 20px',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           transition: 'background-color 0.3s',
//           marginTop: '10px',
//         }}
//       >
//         {uploadStatus || 'Upload'}
//       </button>
//       {uploadStatus && <p style={{ marginTop: '10px', color: 'red' }}>{uploadStatus}</p>}
//     </div>
//   );
// };

// export default CloudinaryImageUpload;


// ////// 6