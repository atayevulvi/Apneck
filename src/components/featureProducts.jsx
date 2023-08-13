import { PRODUCTS } from './products'
const featureProducts = () => {
    return (
        <>
            <div className="row up">
                {PRODUCTS.slice(2, 6).map(product => (
                    <div key={product.id} className="col-3">
                        <div className='card h-100 m-auto p-3'>
                            <img src={product.image} alt="" className=' card-img-top img-fluid m-auto p-3' />
                            <div className="card-details">
                                <div className="tittle mb-3">
                                    <span className='name'>{product.brand}</span>
                                    <h6 className='text-center'>{product.name}</h6>
                                </div>
                            </div>
                            <div className="card-footer text-center mb-3">
                                <p>{product.status}</p>
                                <p className='text-danger'><strike className='text-danger'>{product.rate}</strike></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default featureProducts
