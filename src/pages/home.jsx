import { Link } from "react-router-dom"
import Icons from '../components/icons'
import FeatureProducts from "../components/featureProducts"
import NewProducts from "../components/newProducts"
import girl from '../images/shirts/girl.jpg'
import shirts from '../images/shirts/shirts.jpg'
import Blogs from '../components/blog'
import FooterUp from "../components/footerUp"
const home = () => {
  return (
    <>
      <section className="baner">
        <div className="container-l">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 banner-details">
              <div className="d-flex flex-column justify-content-center">
                <div id="carouselExampInterval" className="carusel-slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="back-details">
                      <span className=" p-3 text-primariy1 fs-6">Trade in offer</span>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>
                      <span className="p-3">Save more today with Apneck</span>
                      <Link className="button-link mb-3 mx-3">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Icons />

      <section className="products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center ups">
              <h1 className="featured">Featured Products</h1>
              <p className="text-primary1">All Weather New Modern Designs</p>
            </div>
            <FeatureProducts />
          </div>
        </div>
      </section>

      <section className="gloses">
        <div className="container-xxl">
          <div className="row">
            <div className="picture text-center d-flex flex-column align-items-center p-3">
              <p className="text-white mt-1">Repair Services</p>
              <h3 className="text-white">On 70% Off on All Products And Accessories</h3>
              <div className="mt-3">
                <button className="button-repair">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center ups">
              <h1 className="featured">New Arrivals</h1>
              <p className="text-primary1">Your Best Designer Outfits</p>
            </div>
            <NewProducts />
          </div>
        </div>
      </section>

      <section className="deals">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6  p-5">
              <div className="card row left">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img src={girl} alt="" className="img-fluid rounded-start p-2 h-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>Hot Deals</h5>
                      <h5 className="card-title">Buy One get One free.</h5>
                      <p><small className="text-muted">The latest best collection in our closet</small></p>
                      <p><small className="text-muted">Feel Cute with our outfits</small></p>
                      <button className="button-deals mt-3">
                        <p>Learn More</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  p-5">
              <div className="card row right">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img src={shirts} alt="" className="img-fluid rounded-start p-2 h-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>Season-In</h5>
                      <h5 className="card-title">All Weather Attire</h5>
                      <p><small className="text-muted">It never matter which season it is</small></p>
                      <p><small className="text-muted">We got you covered</small></p>
                      <button className="button-deals mt-3">
                        <p>Learn More</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog p-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="text-center ups">
              <h1 className="featured mb-3">What our customers say...</h1>
              <p className="text-primary1 mb-4">Our customers never miss a bit on providing feedback</p>
            </div>
            <Blogs />
          </div>
        </div>
      </section>

      <section className="footerUp">
        <div className="container-xxl">
          <div className="row g-3">
            <FooterUp />
          </div>
        </div>
      </section>
    </>
  )
}

export default home
