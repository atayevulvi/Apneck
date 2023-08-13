import { PRODUCTS1 } from './products'
const newProducts = () => {
  return (
    <div>
       <div className="row up">
                {PRODUCTS1.slice(2,6).map(product => (
                    <div key={product.id} className="col-3">
                        <div className='card '>
                            <img src={product.image} alt="" className=' card-img-top img-fluid m-auto p-3' />
                            <span className='name'>{product.brand}</span>
                            <h6 className='text-center'>{product.name}</h6>
                            <p>{product.status}</p>
                            <p className='text-danger'><strike className='text-danger'>{product.rate}</strike></p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default newProducts
