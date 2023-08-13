import { Link } from "react-router-dom"

const footerUp = () => {
  return (
    <>
      <div className="col-12 d-flex background mb-5">
              <div className="col-md-6 text-center mb-3">
               <div className="d-flex flex-column align-items-center">
               <h2 className="mb-3">Sign Up for a newsletter</h2>
                <h5>Get email updates on all our <Link>special offers</Link></h5>
               </div>
              </div>
              <div className="col-md-6 details d-flex flex-column justify-content-center">
             <div className="input-group inputt">
             <input type="text" id="news-input" className="form-control" placeholder="@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button style={{width:'100px'}} className="input-group-text" id="basic-addon2">Submit</button>
             </div>
              </div>
            </div> 
    </>
  )
}

export default footerUp
