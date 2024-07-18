// import React, { useEffect, useState } from "react";
import React from "react";
import "./ImagePanel.css";

// EVENTUALLY HAVE IMAGE PATHS BE PASSED IN PROPS AND RENDER IT USING MAP
const ImagePanel: React.FC = () => {
  const width = 200;
  //   const [windowWidth, setWindowWidth] = useState(40);

  //   useEffect(()=>{
  //     const windowWidthHandler = () =>{

  //     }
  //   },[])
  return (
    <section className="image-panel">
      <div className="image-row">
        <img src="/macarons/orange-mac.png" alt="orange macron" width={width} />
        <img src="/macarons/orange-mac.png" alt="orange macron" width={width} />
        <img src="/macarons/orange-mac.png" alt="orange macron" width={width} />
        <img src="/macarons/orange-mac.png" alt="orange macron" width={width} />
      </div>
    </section>
  );
};
export default ImagePanel;
