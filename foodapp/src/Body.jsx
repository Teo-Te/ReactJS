import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Body.css";

const Body = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            .then(res => {
                console.log(res.data);
                setMeals(res.data.meals);
            })
            .catch(err => console.log(err))
    }, []);

    const mealList = meals.map(meal => {
        return (
            <div>
                <p className="">{meal.strMeal}</p>
                <img className="" src={meal.strMealThumb} alt={meal.strMeal} />
                    
            </div>
        );
    });

    return (
    
    <div className="grid grid-cols-3 m-2 gap-6 bg-slate-100">
       
        {mealList}
       
    </div>
    );
}

export default Body;