 
import './App.css'
import Products from './Products'

const products = [
  {
    id: 1, name : 'Product A', price: 50
  },
  {
    id: 2, name : 'Product B', price: 20
  },
  {
    id: 3, name : 'Product C', price: 30
  },
]

function App() {

  return (
    <div className='max-w-4/5 pt-25 mx-auto'>
       <h1 className='text-3xl font-bold py-6'>Product List</h1>

       <div className='grid  md:grid-cols-3 gap-6'>
        {
          products.map(product => <Products
        key={product.id}
         name={product.name}
          price={product.price} 
          /> )
        }
       </div>
        
    </div>
     
  )
}

export default App
