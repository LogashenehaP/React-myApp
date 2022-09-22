import CardItemDetails from "./CardItemDetails";
import React from "react";
import SearchDisplay from "./SearchDisplay";

import {
  Input,
  SearchSpace,
  SortSpace,
  FilterSpace,
  FilterDivison,
  CardItem,
  Container,
} from './styles';

import {sortSpace, filterSpace, productDetails } from "../../resources/String";
import { FaSearch, FaSort, FaFilter } from "react-icons/fa";

export const Search: React.FC = () => {
  const [text, setText] = React.useState("");

  //   const [productList, setProductList] = React.useState<
  //     | {
  //         productId: number;
  //         productName: string;
  //         isFeatured: boolean;
  //         productBrand: string;
  //         productRating: number;
  //         productImage?: String;
  //         productPrice: Number;
  //       }[]
  //     | undefined
  //   >(CardItemDetails);
let c=0;
  return (
    <>
      <Container>
        <FilterDivison>
          <SearchSpace>
            <Input
              type="text"
              placeholder="Search Product"
              onChange={(e) => setText(e.target.value)}
            ></Input>
            <FaSearch />
          </SearchSpace>
          <SortSpace>
            {sortSpace.sortHeading}
            <FaSort />
          </SortSpace>
          <FilterSpace>
            {filterSpace.filterHeading}
            <FaFilter />
          </FilterSpace>
        </FilterDivison>
        <CardItem>
          {
          CardItemDetails.filter((product) =>
            product.productName.toLowerCase().includes(text.toLowerCase())
          ).map((product) => {
            c=1;
            return (
              <div key={product.id}>
                <SearchDisplay
                  name={product?.productName}
                  brand={product?.productBrand}
                  price={product?.productPrice}
                  rating={product?.productRating}
                  image={product?.productImage}
                />
              </div>
            );
            
          }
         )
  
       
          }
          
       
        </CardItem>
       
      </Container>
     
      
    
     
    </>
  );
};

/*

 CardItemDetails.filter((product) =>
         
          product.productName.toLowerCase().includes(text.toLowerCase())
        ).map((product) => {
          return (
           
            <div key={product.id}>
              
            <SearchDisplay
              name={product?.productName}
              brand={product?.productBrand}
              price={product?.productPrice}
              rating={product?.productRating}
              image={product?.productImage}
            /></div>
          );
         
        })*/
