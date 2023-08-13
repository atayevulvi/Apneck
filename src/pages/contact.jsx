

const contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shopp-details text-center align-items-center">
                <h1 className="text-white">Reach Out to Us</h1>
                <p className="text-white fs-3">We are only a step away from you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-warpper-details p-5">
        <div className="conatiner-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <map>
                  <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76852907147!2d49.69014691275964!3d40.39473700832512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1691937453821!5m2!1str!2saz" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade`}></iframe>
                </map>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
