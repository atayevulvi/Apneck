import shopbasket from '../images/shirts/shop-basket.jpg'
import blog1 from '../images/shirts/blog1.jpg'
import blog2 from '../images/shirts/blog2.jpg'
import blog3 from '../images/shirts/blog3.jpg'
import blog4 from '../images/shirts/blog4.jpg'
import video from '../images/video/apneck-video.mp4'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

import koynek from '../images/koynek.png'
import car from '../images/car.png'
import hand from '../images/hand.png'
import shirt from '../images/shirt.png'
import caculyator from '../images/caculyator.png'
const about = () => {
  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shopp-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us p-5 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <img src={shopbasket} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>Who are we?</h1>
            <p className='card-text mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tempore unde aperiam, consectetur harum a eum error,
              libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tempore unde aperiam, consectetur harum a eum error,
              libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
          </div>
        </div>
      </section>

      <section className="about-app p-5">
        <h2 className='fs-1 text-center mb-4 text-success'>Download our <Link href="/about">App</Link></h2>
        <div className="col-12 p-5 col-md-8 mx-auto">
          <video loop autoPlay  src={video} className='w-100'></video>
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className='mb-3'>What our customers say...</h1>
              <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog1} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog1} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>Marvel Clein</h5>
                      <p className='card-text mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus maxime consequatur, ipsam architecto incidunt volup
                        tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className='card-text'><small className='text-body-secondry'>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marque">
        <div className="contanier-xxl">
          <div className="row">
            <div className="col-12 p-3">
              <Marquee className='p-2 slide'>
              <div className="card text-center">
                <img src={koynek} alt="" className='img-fluid'/>
                <p className='card-text'>Fast Orders</p>
              </div>
              <div className="card text-center">
                <img src={car} alt="" className='img-fluid'/>
                <p className='card-text'>Quick Shipping</p>
              </div>
              <div className="card text-center">
                <img src={hand} alt="" className='img-fluid'/>
                <p className='card-text'>High Saves</p>
              </div>
              <div className="card text-center">
                <img src={shirt} alt="" className='img-fluid'/>
                <p className='card-text'>24/7 Support</p>
              </div>
              <div className="card text-center">
                <img src={caculyator} alt="" className='img-fluid'/>
                <p className='card-text'>Online Orders</p>
              </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
