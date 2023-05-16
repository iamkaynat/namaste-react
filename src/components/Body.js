import RestrauntCard from "./RestrauntCard";
import resList from "../utils/MockData";


function Body() {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">

                {resList.map(restraunt => <RestrauntCard key={restraunt.data.id} resData={restraunt} />)}


            </div>


        </div>

    );

}
export default Body;