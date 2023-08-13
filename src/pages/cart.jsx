/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { PRODUCTS, PRODUCTS1 } from "../components/products"
import React, { useContext } from "react"
import { ShopContext } from "../components/shopContext"
import CartItem from "../components/cartitem"
import { Link } from "react-router-dom"
const cart = () => {
  const { getTotalCartAmount, getTotalCartProducts, ClearCart, CartItem } = useContext(ShopContext)
  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts()
  return (
    <>
      {TotalAmount > 0 ?
        <section className="cart-item p-5">
          <div className="conatiner-xxl">
            <div className="row">
              <table>
                <thead className="my-2">
                  <th className="col-3">Product Image</th>
                  <th className="col-3">Product Details</th>
                  <th className="col-3">Edit</th>
                  <th className="col-3">Coupons</th>
                </thead>


                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (CartItem[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />
                  }
                })}
                <div className="mb-3 text-center p-3">
                  <Link onClick={() => ClearCart(id)}>Clear cart</Link>
                </div>
              </table>
            </div>
          </div>
          <hr />

          <div className="mt-4 p-3 cart-total d-flex justify-content-between">
            <div>
              <button>Continue Shopping</button>
            </div>
            <div>
              <h3>Total</h3>
              <p className="my-">Total Products :<span className="price">{totalProducts}</span></p>
              <p className="price mb-4">${TotalAmount}</p>
              <button>Check Out</button>
            </div>
          </div>
        </section>
        :
        <section className="p-3">
          <div className="conatiner-xxl">
            <div className="row">
              <div className="text-center">
                <h3>Your Cart Is Empty</h3>
                <p>click here to <Link to={'/shop'}>add items</Link></p>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default cart
