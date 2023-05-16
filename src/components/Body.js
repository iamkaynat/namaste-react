import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import resList from "../utils/MockData";



function Body() {
    const [listOfRestraunts, setListOfRestraunts] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestraunts(filteredList);


                    }}

                >
                    Top rated Restaurants
                </button>

            </div>
            <div className="res-container">

                {listOfRestraunts.map(restraunt => <RestrauntCard key={restraunt.data.id} resData={restraunt} />)}


            </div>


        </div>

    );

}
export default Body;