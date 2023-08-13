import Prod from './prod'
import {PRODUCTS,PRODUCTS1} from './products'
const shopItems = () => {
  return (
    <>
      <div className="row">
        {[...PRODUCTS,...PRODUCTS1].map((product) =>(
          <Prod key={product.id} data={product}/>
        ))}
      </div>
    </>
  )
}

export default shopItems
