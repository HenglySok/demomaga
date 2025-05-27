import './App.css'
import Cart from './components/Cart'
import { CartList } from './components/Cart'
import HottestCart, { HottestCartList } from './components/HottestCart'

function App() {


  return (
    <section className='flex gap-[26px] w-[90%] mx-auto'>
      <div className='flex justify-between gap-1 w-full mx-auto'>
        <CartList />
        <HottestCartList />
      </div>

    </section>
  )
}

export default App
