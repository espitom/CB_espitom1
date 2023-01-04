import React from 'react';
import Slider from '../inc/Slider'
import {Link} from 'react-router-dom'
import VMC from './inc/Vmc'
import Service1 from '../images/comlearn.jpg'

function Home() {
    return (
        <div>
            <Slider/>
        
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"> </div>
                            <p>
                                To provide adaptable, cheap, and career-relevant online learning to people and organizations around the world, Coursera collaborates with more than 20 top universities and businesses. We provide a variety of learning options, ranging from practical projects and classes to degree and certificate programs that prepare students for employment.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More...</Link>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Vision Mission */}
            <VMC/>

            {/* Services */}
            <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Core Values</h3>
                        <div className="underline mx-auto"> </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src={Services1} className="w-100 border-bottom" alt="Services"  />
                            <div className="card-body">
                                <h6>Services 1</h6>
                                <div className="underline"></div>
                                <p>
                                With expert-curated, AI-driven learning programs, promote transformative learning.
                                Facilitate experiential learning to promote quick skill acquisition.
                                Keep track of your skill progress and compare your proficiency to others in your sector.
                                </p>
                                <Link to="/services" className="btn btn link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src={Services1} className="w-100 border-bottom" alt="Services"  />
                            <div className="card-body">
                                <h6>Services 2</h6>
                                <div className="underline"></div>
                                <p>
                                With expert-curated, AI-driven learning programs, promote transformative learning.
                                Facilitate experiential learning to promote quick skill acquisition.
                                Keep track of your skill progress and compare your proficiency to others in your sector.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src={Services1} className="w-100 border-bottom" alt="Services"  />
                            <div className="card-body">
                                <h6>Services 3</h6>
                                <div className="underline"></div>
                                <p>
                                With expert-curated, AI-driven learning programs, promote transformative learning.
                                Facilitate experiential learning to promote quick skill acquisition.
                                Keep track of your skill progress and compare your proficiency to others in your sector.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
        </div>
    );
}

export default Home;