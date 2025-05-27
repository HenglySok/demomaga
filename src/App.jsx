import './App.css'
import Cart from './components/Cart'
import { CartList } from './components/Cart'
import HottestCart from './components/HottestCart'

function App() {


  return (
    <>
      <div className='flex gap-1 w-fit mx-auto'>
        <CartList />
      </div>
      <HottestCart />
    </>
  )
}

export default App
