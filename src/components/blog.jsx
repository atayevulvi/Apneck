import blog1 from '../images/shirts/blog1.jpg'
import blog2 from '../images/shirts/blog2.jpg'
import blog3 from '../images/shirts/blog3.jpg'
import blog4 from '../images/shirts/blog4.jpg'

const blog = () => {
  return (
    <>
      <div className="col-3">
        <div className="card">
            <img src={blog1} alt="" className='card-img-top img-fluid mb-3 p-3'/>
            <div className="card-body">
                <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
            <img src={blog2} alt="" className='card-img-top img-fluid mb-3 p-3'/>
            <div className="card-body">
                <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
            <img src={blog3} alt="" className='card-img-top img-fluid mb-3 p-3'/>
            <div className="card-body">
                <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
            <img src={blog4} alt="" className='card-img-top img-fluid mb-3 p-3'/>
            <div className="card-body">
                <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default blog
