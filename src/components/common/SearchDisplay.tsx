import {
  IndividualCard,
  ImageWrapper,
  ProductImage,
  ParaTag,
  HeadingTag,
} from "./styles";

import { FaStar } from "react-icons/fa";

function SearchDisplay({ name, brand, price, rating, image }:any) 
{
  return (
    <IndividualCard>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>
      <HeadingTag>{name}</HeadingTag>
      <ParaTag>Brand:{brand}</ParaTag>
      <ParaTag>${price}</ParaTag>
      <ParaTag>
        <FaStar /> {rating}
      </ParaTag>
    </IndividualCard>
  );
  }
 export default SearchDisplay;
