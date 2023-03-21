import ImageComponent from "./ImageComponent";
import PopularCategories from "./PopularCategories";
import ListedJobs from "./ListedJobs";

export default function HomePage(){
    return(
        <div className="home-container">
            <ImageComponent/>
            <PopularCategories/>
            <ListedJobs/>
        </div>
    )
}