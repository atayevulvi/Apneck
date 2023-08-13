import koynek from '../images/koynek.png'
import car from '../images/car.png'
import hand from '../images/hand.png'
import shirt from '../images/shirt.png'
import caculyator from '../images/caculyator.png'
const icons = () => {
    return (
        <>
            <section className='hero p-4'>
                <div className="container-xxl iconslar">
                    <div className="row">
                        <div className="hero-details d-flex justify-content-around text-center mx-5">
                            <div className="card p-2 col-lg-2 col-md-5">
                                <div className="card-details mx-3">
                                    <img src={koynek} alt="" className='img-fluid m-auto' />
                                    <p>Fast Orders</p>
                                </div>
                            </div>
                            <div className="card mx-3 col-lg-2 col-md-5">
                                <div className="card-details p-2">
                                    <img src={car} alt="" className='img-fluid m-auto' />
                                    <p>Quick Shipping</p>
                                </div>
                            </div>
                            <div className="card mx-3 col-lg-2 col-md-5">
                                <div className="card-details p-2">
                                    <img src={hand} alt="" />
                                    <p>High Saves</p>
                                </div>
                            </div>
                            <div className="card mx-3 col-lg-2 col-md-5">
                                <div className="card-details p-2">
                                    <img src={shirt} alt="" />
                                    <p>24/7 Support</p>
                                </div>
                            </div>
                            <div className="card mx-3 col-lg-2 col-md-5">
                                <div className="card-details p-2">
                                    <img src={caculyator} alt="" />
                                    <p>Online Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default icons
