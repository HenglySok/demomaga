import './App.css'
import { Banner } from './components/Banner'
import { CartList } from './components/Cart'
import { HottestCartList } from './components/HottestCart'


function App() {


  return (
    <section className='w-full'>
      <Banner />
      <div className='w-full  md:w-[90%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-[26px] mx-auto'>
          <div className="col-span-2">
            <CartList />
          </div>
          <HottestCartList />
        </div>
      </div>
    </section>
  )
}

export default App
