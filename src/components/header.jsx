import { useContext } from "react";
import { Link,useLocation } from "react-router-dom";
import { LuPhoneCall } from 'react-icons/lu';
import { GoMail } from 'react-icons/go';
import logo from '../images/logo.png';
import { HiOutlineInbox } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import { ShopContext } from "./shopContext";

const Header = () => {
    const location = useLocation();
    const {getTotalCartProducts} = useContext(ShopContext);
    const totalProducts=getTotalCartProducts()
    return (
        <>
            <header>
                <div className="navbar-top p-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
                                <div className="col-md-8 me-auto">
                                    <p>The trending outfits at 100% off</p>
                                </div>
                                <div className="col-md-2"><Link href="tel:+1 (234) 567-890">Call us at +1 (234) 567-890</Link></div>
                                <div className="col-md">
                                    <Link className="fs-4 mx-4" to="/"><GoMail /></Link>
                                    <Link className="fs-4 mx-4" to="/"><LuPhoneCall /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
                <div className="container-xxl">
                    <div className="row align-items-center m-0">
                        <div className="col-md-2 d-flex justify-content-center">
                            <Link to='/'><img src={logo} alt="" className="img-fluid logo" /></Link>
                        </div>
                        <div className="col-md-10 row col-lg-10">
                            <div className="col-md-3 m-auto">
                                <di className="input-group d-none d-md-flex">
                                    <input type="text" className="form-control" placeholder="Find products..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text" id="basic-addon3">Search</button>
                                </di>
                            </div>
                            <div className="col-md-6 m-auto mb-md-2 mb-lg-2 nav-links">
                                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                                   <div className="ms-auto gap-3">
                                   <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
                                   </div>
                                   <div  className="ms-auto gap-3">
                                   <Link to={'/shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>SHOP</Link>
                                   </div>
                                  <div  className="ms-auto gap-3">
                                  <Link to={'/blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>BLOG</Link>
                                  </div>
                                  <div  className="ms-auto gap-3">
                                  <Link to={'/about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>ABOUT</Link>
                                  </div>
                                  <div  className="ms-auto gap-3">
                                  <Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>CONTACT</Link>
                                  </div>
                                </div>
                            </div>
                            <div className="nav-link-nav col-3 d-flex justify-content-around align-items-center">
                                <Link to={'/wishlist'} className={location.pathname === '/wishlist' ? 'active' : 'inactive'}>
                                    <div className="d-flex">
                                        <HiOutlineInbox className="fs-5 mx-1" />
                                        
                                    </div>
                                </Link>
                                <Link to={'/login'} className={location.pathname === '/login' ? 'active' : 'inactive'}>
                                    <div className="d-flex">
                                        <VscAccount className="fs-5 mx-1" />
                                       
                                    </div>
                                </Link>
                                <Link to={'cart'} className={location.pathname === '/cart' ? 'active' : 'inactive'}>
                                    <div className="d-flex">
                                       <span>
                                       <FiShoppingCart className="fs-5 mx-1" />
                                       </span>
                                        <p>Cart 
                                       <span className="text-primary">
                                       {totalProducts > 0 && `(${totalProducts})`}
                                       </span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
