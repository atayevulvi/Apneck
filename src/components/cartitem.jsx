import { ShopContext } from "./shopContext";
import { useContext } from "react";
const cartItem = (props) => {  // Renamed the component to follow the convention of capitalizing component names
const { id, name, image, price, brand } = props.data;
const { viewProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext);
return (
    <>

        <tbody key={id}>
            <tr>
                <td >
                    <img src={image} alt="" className="img-fluid mb-3" />
                </td>
                <td >
                    <p>Product Brand:<span className="price">{brand}</span></p>
                    <p>Product Name:<h5 className="price">{name}</h5></p>
                    <p>Product Price:<span className="price">{price}</span></p>
                    <p>Items In Stock:<span className="text-danger">1000</span></p>
                </td>
                <td>
                    <button className="add-btn mx-2" onClick={() => { addToCart(id) }}>+

                    </button>
                    <input type="text" value={cartItem[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className="add-btn mx-2" onClick={() => { removeToCart(id) }}>
                        -
                    </button>
                </td>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter coupon code ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="input-group-text" id="basic-addon2">Search</button>
                </div>
            </tr>
            <hr />
        </tbody>




    </>
)
}

export default cartItem // Export the component with the corrected name
