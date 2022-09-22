import CardItemDetails from "./CardItemDetails";
import SearchDisplay from "./SearchDisplay";

import { Heading, FeaturedBox } from "./FeaturedItemStyle";
import { CardItem } from "./styles";
import { featuredContent } from "../../resources/String";

export const FeaturedItems: React.FC = () => {
  return (
    <FeaturedBox>
      <Heading>{featuredContent.heading}</Heading>
      <CardItem>
        {CardItemDetails.map((product) => {
          return (
            <div key={product.id}>
              {product.isFeatured && (
                <>
                  <SearchDisplay
                    name={product.productName}
                    brand={product.productBrand}
                    price={product.productPrice}
                    rating={product.productRating}
                    image={product.productImage}
                  />
                </>
              )}
            </div>
          );
        })}
      </CardItem>
    </FeaturedBox>
  );
};
