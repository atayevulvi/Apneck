import { Link } from "react-router-dom"
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import google from '../images/googlePlay.jpg'
import download from '../images/download.jpg'
import umumi from '../images/qarisiq.png'
const footer = () => {
  return (
    <>
      <div className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <div className="contact">
                <h3 className="mb-3">Contact</h3>
              </div>
              <div className="medium">
                <p className="mb-3 fs-6 address"><b className="fs-6">Address:</b>Thika town, Naltex building, 2nd floor</p>
                <p className="mb-3"><b className="fs-6">Phone:</b><Link className="call mx-2">Call us at +1 (234) 567-890</Link></p>
                <p className="mb-3 fs-6"><b className="fs-6">Hours:</b>From 8 a.m To 6 p.m</p>
                <p className="mb-3 fs-6 follow">Follow the developer</p>
              </div>
              <div className="icons mb-3 d-flex justify-content-around">
                <Link><FaInstagram className="fs-5" /></Link>
                <Link><AiOutlineTwitter className="fs-5" /></Link>
                <Link><BiLogoFacebookCircle className="fs-5" /></Link>
                <Link><BiLogoLinkedinSquare className="fs-5" /></Link>
              </div>
            </div>
            <div className="col-2">
              <div className="mb-3">
                <h3>About</h3>
              </div>
              <div className="footer-under d-flex flex-column">
                <Link className="mb-3 text-dark">About Us</Link>
                <Link className="mb-3 text-dark">Delivery</Link>
                <Link className="mb-3 text-dark">Privacy Policy</Link>
                <Link className="mb-3 text-dark">Terms & Conditions</Link>
                <Link className="mb-3 text-dark">Fee Policy</Link>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-up">
                <h3>Account</h3>
              </div>
              <div className="footer-under d-flex flex-column">
                <Link className="mb-3 text-dark">Profile</Link>
                <Link className="mb-3 text-dark">View Cart</Link>
                <Link className="mb-3 text-dark">Help</Link>
                <Link className="mb-3 text-dark">Payments</Link>
                <Link className="mb-3 text-dark">My Wishlist</Link>
                <Link className="mb-3 text-dark">Coupons</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-up">
                <h3>Install App</h3>
              </div>
              <div className="footer-under">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay">
                  <Link>
                    <img src={google} className="img-fluid p-3" alt="" />
                  </Link>
                  <Link>
                    <img src={download} className="img-fluid p-3" alt="" />
                  </Link>
                </div>
                <p>Payment Methods</p>
                <div>
                  <Link className="pay">
                    <img src={umumi} alt="" className="img-fluid p-3" />
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex justify-content-between">
              <div className=" col-3 text-success d-flex aligin-items-center">
                <p><Link className="text-success"><SiCplusplus /></Link><b>Developed by Eclar Developers 2023</b></p>
              </div>
              <div className="col-3 Privacy d-flex justify-content-around">
                <Link className="text-black">Privacy Policy</Link>
                <Link className="text-black">Terms of Use</Link>
                <Link className="text-black">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default footer
