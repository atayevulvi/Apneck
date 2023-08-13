import { Link } from "react-router-dom"
import FooterUp from "../components/footerUp"
import ShopItems from "../components/shopItems"
const shop = () => {
  return (
    <>
      <section className="shop-baner p-2">
        <div className="container-xxl">
          <div className="row  justify-content-center align-items-center">
            <div className="repair-details text-center p-2">
              <h2 className="text-white "><span><b className="text-success mx-2">100%</b>Off On All Products</span></h2>
            </div>
            <div>
              <p className="text-white text-center">Make your orders we will deliver..</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-product p-5">
        <div className="container-xxl">
          <div className="row ">
            <ShopItems />
          </div>
        </div>
      </section>

      <section className="pagination p-3">
        <div className="conatiner-xxl">
          <div className="row ">
            <div className="col-12 d-flex align-items-center justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="conatiner-xxl">
          <div className="row">
            <FooterUp />
          </div>
        </div>
      </section>
    </>
  )
}

export default shop
