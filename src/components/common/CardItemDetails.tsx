import { image } from "../../resources/Images";
import { productDetails } from "../../resources/String";
const CardItemDetails:{
    id:number,
    productName:string,
    isFeatured:boolean,
    productBrand:string,
    productRating:number,
    productImage?: String,
    productPrice:number

}[]=[
{
    id:1,
    productName:productDetails.appleWatchName,
    isFeatured:false,
    productBrand:productDetails.appleBrand,
    productRating:productDetails.appleWatchRating,
    productPrice:productDetails.appleWatchPrice,
    productImage:image.appleAirpods,

},

{
    id:2,
    productName:productDetails.fasttrackWatchName,
    isFeatured:false,
    productBrand:productDetails.fastTrackBrand,
    productRating:productDetails.fastTrackWatchRating,
    productPrice:productDetails.fastTrackWatchPrice,
    productImage:image.fastTrackWatch,

},
{
    id:3,
    productName:productDetails.casioWatchName,
    isFeatured:true,
    productBrand:productDetails.casioBrand,
    productRating:productDetails.casioWatchRating,
    productPrice:productDetails.casioWatchPrice,
    productImage:image.casioWatch,

},
{
    id:4,
    productName:productDetails.appleMobileName,
    isFeatured:true,
    productBrand:productDetails.appleBrand,
    productRating:productDetails.appleMobileRating,
    productPrice:productDetails.appleMobilePrice,
    productImage:image.appleMobile,

},{
    id:5,
    productName:productDetails.vivoMobileName,
    isFeatured:false,
    productBrand:productDetails.vivoBrand,
    productRating:productDetails.vivoMobileRating,
    productPrice:productDetails.vivoMobilePrice,
    productImage:image.vivoMobile,

},
{
    id:6,
    productName:productDetails.oneplusMobileName,
    isFeatured:false,
    productBrand:productDetails.oneplusBrand,
    productRating:productDetails.oneplusMobileRating,
    productPrice:productDetails.oneplusMobilePrice,
    productImage:image.oneplusMobile,

},
{
    id:7,
    productName:productDetails.appleLapName,
    isFeatured:true,
    productBrand:productDetails.appleBrand,
    productRating:productDetails.appleLapRating,
    productPrice:productDetails.appleLapPrice,
    productImage:image.appleLaptop,

},
{
    id:8,
    productName:productDetails.dellLapName,
    isFeatured:false,
    productBrand:productDetails.dellBrand,
    productRating:productDetails.dellLapRating,
    productPrice:productDetails.dellLapPrice,
    productImage:image.dellLaptop,

},
{
    id:9,
    productName:productDetails.lenovoLapName,
    isFeatured:false,
    productBrand:productDetails.lenovoBrand,
    productRating:productDetails.lenovoLapRating,
    productPrice:productDetails.lenovoLapPrice,
    productImage:image.lenovoLaptop,

},
{
    id:10,
    productName:productDetails.appleAirpodName,
    isFeatured:false,
    productBrand:productDetails.appleBrand,
    productRating:productDetails.appleAirpodRating,
    productPrice:productDetails.appleAirpodPrice,
    productImage:image.appleAirpods,

},
{
    id:11,
    productName:productDetails.boatAirpodName,
    isFeatured:false,
    productBrand:productDetails.boatBrand,
    productRating:productDetails.boatAirpodRating,
    productPrice:productDetails.boatAirpodPrice,
    productImage:image.boatAirpods,

},
{
    id:12,
    productName:productDetails.jblAirpodName,
    isFeatured:true,
    productBrand:productDetails.jblBrand,
    productRating:productDetails.jblAirpodRating,
    productPrice:productDetails.jblAirpodPrice,
    productImage:image.jblAirpods,

},
{
    id:13,
    productName:productDetails.miTvName,
    isFeatured:false,
    productBrand:productDetails.miBrand,
    productRating:productDetails.miTvRating,
    productPrice:productDetails.miTvPrice,
    productImage:image.miTv,

},
{
    id:14,
    productName:productDetails.sonyTvName,
    isFeatured:false,
    productBrand:productDetails.sonyBrand,
    productRating:productDetails.sonyTvRating,
    productPrice:productDetails.sonyTvPrice,
    productImage:image.sonyTv,

},
{
    id:15,
    productName:productDetails.samsungTvName,
    isFeatured:false,
    productBrand:productDetails.samsungBrand,
    productRating:productDetails.samsungTvRating,
    productPrice:productDetails.samsungTvPrice,
    productImage:image.samsungTv,

}

]
export default CardItemDetails;
