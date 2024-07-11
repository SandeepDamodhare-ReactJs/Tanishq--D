import React, { useState } from 'react'
import { UploadButton } from "@bytescale/upload-widget-react";



const Image = () => {
const [image, setImage] = useState("")
    const options = {
        apiKey: "free", // Get API key: https://www.bytescale.com/get-started
        maxFileCount: 1
      };

console.log("image", image);



  return (
    <>
    <div>Image page</div>
   {image &&  <img src={image} alt="" />}
    <UploadButton options={options}
                onComplete={files => setImage(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file...
      </button>
    }
  </UploadButton>
    </>

  )
}

export default Image