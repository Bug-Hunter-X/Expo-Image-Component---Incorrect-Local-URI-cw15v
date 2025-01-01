import * as React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  // Incorrect URI (missing file:// and/or using relative path)
  const incorrectURI = './assets/myImage.jpg'; 

  // Correct URI (using absolute path and file://)
  const correctURI = 'file:///path/to/your/assets/myImage.jpg'; //Replace with your actual path

  return (
    <>
      <Image source={{ uri: incorrectURI }} style={{ width: 200, height: 200 }} />
      {/* This image will likely not display because of the incorrect URI  */}
      <Image source={{ uri: correctURI }} style={{ width: 200, height: 200 }} />
    </> 
  );
};
export default MyComponent;