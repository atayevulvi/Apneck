import  { useContext } from "react";
import { ShopContext } from "../components/shopContext";
import { PRODUCTS, PRODUCTS1 } from "./products";

const ProductDetails = () => {
    const { addToCart, updateCartItemCount, removeToCart, cartItems,  selectedProduct } = useContext(ShopContext);

    // Set selectedProduct to null
    const productId = selectedProduct || null;
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);

    return (
        <div className="d-flex">
            <div className="col-6 card">
                <img src={product.image} alt="" className="img-fluid p-5" />
            </div>
            <div className="col-6 card p-3">
                <div className="p-4">
                    <span>{product.brand}</span>
                    <h3 className="my-3">{product.name}</h3>
                    <div className="card-details">
                        <p>
                            was
                            <strike className="text-danger">{product.price * 2}</strike>
                            Now<span className="price">${product.price}</span>
                        </p>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    </div>
                    <button className="add-btn mx-2" onClick={() => addToCart(product.id)}>
                        +
                    </button>
                    <input
                        type="text"
                        value={cartItems[product.id] || ""}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                    />
                    <button className="add-btn mx-2" onClick={() => removeToCart(product.id)}>
                        -
                    </button>
                    <div className="input-group p-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter coupon code ..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <button className="input-group-text" id="basic-addon2">
                            Search
                        </button>
                    </div>
                    <div className="card-footer">
                        <h3 className="price my-3 text-center">More Products of the same</h3>
                        <div className="row up">
                            {PRODUCTS.slice(2, 6).map((product) => (
                                <div key={product.id} className="col-3">
                                    <div className="card h-100 m-auto p-3">
                                        <img src={product.image} alt="" className="card-img-top img-fluid m-auto p-3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row up">
                            {PRODUCTS1.slice(2, 6).map((product) => (
                                <div key={product.id} className="col-3">
                                    <div className="card h-100 m-auto p-3">
                                        <img src={product.image} alt="" className="card-img-top img-fluid m-auto p-3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
