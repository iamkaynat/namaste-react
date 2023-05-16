import { CDN_URL } from '../utils/constant';
const RestrauntCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data;
    const link = CDN_URL + cloudinaryImageId;
    return (
        <div className="res-card">
            <img className="res-logo" src={link} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4> {avgRating} stars</h4>
            <h4>Rs. {costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>

    );
};
export default RestrauntCard;