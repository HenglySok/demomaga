import './App.css'
import Cart from './components/Cart'
import { CartList } from './components/Cart'
import HottestCart, { HottestCartList } from './components/HottestCart'

function App() {


  return (
    <section className='flex gap-2 w-[95%] mx-auto'>
      <div className='flex gap-1 w-fit mx-auto'>
        <CartList />
      </div>
      <HottestCartList />
    </section>
  )
}

export default App
