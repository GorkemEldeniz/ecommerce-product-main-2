import React, { ReactComponentElement, useState, useContext, useEffect } from 'react'
import { Context } from '../Context/Context';
import thumbnailFirst from "../images/image-product-1-thumbnail.jpg";
import thumbnailSecond from "../images/image-product-2-thumbnail.jpg";
import thumbnailThird from "../images/image-product-3-thumbnail.jpg";
import thumbnailFourth from "../images/image-product-4-thumbnail.jpg";
import productImageFirst from "../images/image-product-1.jpg";
import productImageSecond from "../images/image-product-2.jpg";
import productImageThird from "../images/image-product-3.jpg";
import productImageFourth from "../images/image-product-4.jpg";

// interface Ithumbnail {
//   id : number;
//   isSelected : boolean;
//   productImageUrl : string;
//   thumbnailUrl : string;
// }

// interface ContextType {
//   prodcutId : number;
//   setProductId :  Dispatch<SetStateAction<number>>;
// }


function Image() {

  const {prodcutId,setProductId} = useContext(Context);

  const [thumbnailImages,setThumbnailImages] = useState([
    {id : 0 , isSelected : true , productImageUrl : productImageFirst, thumbnailUrl : thumbnailFirst},
    {id : 1 , isSelected : false, productImageUrl :productImageSecond, thumbnailUrl : thumbnailSecond},
    {id : 2 , isSelected : false, productImageUrl : productImageThird, thumbnailUrl : thumbnailThird},
    {id : 3 , isSelected : false, productImageUrl : productImageFourth, thumbnailUrl : thumbnailFourth},
  ])

  const handleSelect = (id) => {
    const updatedThumbnails = thumbnailImages.map(thumbnail => {
      if(thumbnail.id === id) thumbnail.isSelected = true;
      else thumbnail.isSelected = false;
      return thumbnail;
    })
    setProductId(id);
    setThumbnailImages(updatedThumbnails);
  }

  useEffect(() => {
    const updatedThumbnails = thumbnailImages.map(thumbnail => {
      if(thumbnail.id === prodcutId) thumbnail.isSelected = true;
      else thumbnail.isSelected = false;
      return thumbnail;
    })
    setThumbnailImages(updatedThumbnails);
  },[prodcutId])

  return (
    <div className='images'>
      <picture>
        <img src={thumbnailImages[prodcutId].productImageUrl} alt="Product-Image" />
        <source />
      </picture>

      <div className="image-btn">
        {thumbnailImages.map((thumbnail,id) => 
        <img 
          key={id}
          className={`${thumbnail.isSelected ? "selected" : ""}`}
          onClick={() => handleSelect(thumbnail.id)} 
          id={`${thumbnail.id}`} 
          src={thumbnail.thumbnailUrl} 
          alt="Product-thumbnai" 
        />)}
      </div>
    </div>
  )
}

export default Image