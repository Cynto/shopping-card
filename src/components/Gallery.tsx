import React from 'react';

function Gallery(props: any) {
  const {currentProduct, img1Class, img2Class, setActiveImg} = props
  return (
    <div className="gallery-container">
      <img
        src={currentProduct.img[0]}
        alt={currentProduct.alt}
        className={img1Class}
        onClick={(e) => setActiveImg(e)}
        onMouseEnter={(e) => setActiveImg(e)}
      />
      <img
        src={currentProduct.img[1]}
        alt={currentProduct.alt}
        className={img2Class}
        onClick={(e) => setActiveImg(e)}
        onMouseEnter={(e) => setActiveImg(e)}
      />
    </div>
  );
}

export default Gallery;
