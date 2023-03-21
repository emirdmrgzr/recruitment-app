import "../styles/ListedJobs.css";
import { GiSpikesFull } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { BsArrowRightCircle } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
export default function ListedJobs(){
    return(
        <div className="lj-container">
            <h1>All Popular Listed Jobs</h1>
            <div className="jobslist">
                <div className="job">
                    <div className="firm-logo">
                        <p>J</p>
                    </div>
                    <div className="job-info">
                        <div className="firm-name"><p>Match Company Limited</p></div>
                        <div className="job-name"><p>Fresher UI/UX Designer (3 Year Exp.)</p></div>
                        <div className="job-details">
                            <div className="job-location">
                                <GrLocation /> 
                                <span>Nairobi, Kenya</span>
                                
                            </div>
                            <div className="job-type">
                                <GiSpikesFull/>
                                <span>Full Time</span>
                            </div>
                            <div className="job-salary">$ 150,000</div>
                        </div>
                    </div>
                    <div className="view-details">
                        <button>View Details</button>
                    </div>
                </div>
                <div className="job">
                    <div className="firm-logo">
                        <p>J</p>
                    </div>
                    <div className="job-info">
                        <div className="firm-name"><p>Match Company Limited</p></div>
                        <div className="job-name"><p>Fresher UI/UX Designer (3 Year Exp.)</p></div>
                        <div className="job-details">
                            <div className="job-location">
                                <GrLocation /> 
                                <span>Nairobi, Kenya</span>
                                
                            </div>
                            <div className="job-type">
                                <GiSpikesFull/>
                                <span>Full Time</span>
                            </div>
                            <div className="job-salary">$ 150,000</div>
                        </div>
                    </div>
                    <div className="view-details">
                        <button>View Details</button>
                    </div>
                </div>
                <div className="job">
                    <div className="firm-logo">
                        <p>J</p>
                    </div>
                    <div className="job-info">
                        <div className="firm-name"><p>Match Company Limited</p></div>
                        <div className="job-name"><p>Fresher UI/UX Designer (3 Year Exp.)</p></div>
                        <div className="job-details">
                            <div className="job-location">
                                <GrLocation /> 
                                <span>Nairobi, Kenya</span>
                                
                            </div>
                            <div className="job-type">
                                <GiSpikesFull/>
                                <span>Full Time</span>
                            </div>
                            <div className="job-salary">$ 150,000</div>
                        </div>
                    </div>
                    <div className="view-details">
                        <button>View Details</button>
                    </div>
                </div>
                <div className="job">
                    <div className="firm-logo">
                        <p>J</p>
                    </div>
                    <div className="job-info">
                        <div className="firm-name"><p>Match Company Limited</p></div>
                        <div className="job-name"><p>Fresher UI/UX Designer (3 Year Exp.)</p></div>
                        <div className="job-details">
                            <div className="job-location">
                                <GrLocation /> 
                                <span>Nairobi, Kenya</span>
                                
                            </div>
                            <div className="job-type">
                                <GiSpikesFull/>
                                <span>Full Time</span>
                            </div>
                            <div className="job-salary">$ 150,000</div>
                        </div>
                    </div>
                    <div className="view-details">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div className="view-more"><button><span>View More</span> <BsArrowRightCircle/></button></div>
            <div className="footer">
                <p> <span><RiCopyrightLine/></span> 2022 Jobs Portal. Designed By Emir Demirgezer</p>
            </div>
        </div>
    )
}