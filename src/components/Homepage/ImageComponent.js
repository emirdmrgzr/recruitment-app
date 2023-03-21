import ".././styles/ImageComponent.css";
export default function ImageComponent(){
    return(
        <div className="image-component">
            <div className="homepage-banner">
                <div className="huge-text">
                    <p>Find A <span className="matchesjob">Job</span> That <span className="matchesjob">Matches</span> Your Passion</p>      
                </div>
                <div className="small-text">
                    <p>Hand-picked opportunuties to work from home, remotely, freelance, full-time, part-time and internships.</p>
                </div>
                <div className="search-bar">
                    <form>
                        <input type="text" placeholder="Search by job title..........."/>
                        <button type="submit" onClick={(e)=>{e.preventDefault()}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}