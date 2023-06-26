import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI";



function Body() {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5010274&lng=77.4257319&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");

        const json = await data.json();
        console.log(json);
        setListOfRestraunts(json?.data?.cards);


    };



    return listOfRestraunts.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts.filter(
                            (res) => res.data.data.avgRating > 4
                        );
                        setListOfRestraunts(filteredList);


                    }}

                >
                    Top rated Restaurants
                </button>

            </div>
            <div className="res-container">

                {listOfRestraunts.map(restraunt => <RestrauntCard key={restraunt.data.data.id} resData={restraunt} />)}


            </div>


        </div>

    );

}
export default Body;