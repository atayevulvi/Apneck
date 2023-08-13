import girl from '../images/shirts/blog-girl.jpg'
import girls from '../images/shirts/blog-girls.jpg'
import shop from '../images/shirts/blog-shop.jpg'
import girls2 from '../images/shirts/blog-girls2.jpg'
const blog = () => {
  return (
    <>
      <section className="blog-wrapper">
        <div className="conatiner-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white ">#Read More</h1>
                <h1 className="text-white fs-3 ">Get to know what our trusted customers say...</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="conatiner-xxl container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1 className="mb-3">Explore more in our library</h1>
              <p className="mb-4">Why we have trending Outfits Everywhere</p>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={girl} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>Marvel Clein</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam tempore unde aperiam, consectetur harum a eum error,
                        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                      <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={girls} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>Marvel Clein</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam tempore unde aperiam, consectetur harum a eum error,
                        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                      <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={shop} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>Marvel Clein</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam tempore unde aperiam, consectetur harum a eum error,
                        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                      <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={girls2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>Marvel Clein</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam tempore unde aperiam, consectetur harum a eum error,
                        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                      <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={girl} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>Marvel Clein</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam tempore unde aperiam, consectetur harum a eum error,
                        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                      <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default blog
