import "../styles/PopularCategories.css";
import { GrTechnology } from "react-icons/gr";
export default function PopularCategories(){
    return(
        <div className="pc-container">
            <div className="popularcategories">Popular Categories</div>
            <div className="categoriespart">
            <div claasName= "categories-top">
                    <div className="category technology">
                        <GrTechnology/>
                        Technology
                    </div>
                </div>
                <div className= "categories-bottom">
                    <div className="category technology">
                        <GrTechnology/>
                        Technology
                    </div>
                </div>
            </div>
        </div>
    )
}