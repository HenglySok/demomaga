import './App.css'
import { CartList } from './components/Cart'
import { HottestCartList } from './components/HottestCart'

function App() {


  return (
    <section className='  w-[90%] mx-auto'>
      <div className=' flex  justify-between gap-[26px]'>
        <CartList />
        <HottestCartList />
      </div>
    </section>
  )
}

export default App
