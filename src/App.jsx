import './App.css'
import { Banner } from './components/Banner'
import { CartList } from './components/Cart'
import { HottestCartList } from './components/HottestCart'
import NavBar from './components/NavBar'
import SocialMediaBanner from './components/SocialMediaBanner'
import Test from './components/Test'



function App() {

  // <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-[26px]'>
  //         <div className="col-span-2">
  //           <CartList />
  //         </div>
  //         <div className='flex flex-col gap-3'>
  //           {/*socal media banner*/}
  //           <SocialMediaBanner />
  //           <HottestCartList />
  //         </div>
  //       </div>


  return (
    <section className='w-full  '>
      <NavBar />
      <Banner />
      <div className='w-[90%] mx-auto'>

        <div className='flex md:justify-center lg:justify-center md:gap-3 w-full'>
          <div className='w-ful'>
            <CartList />
          </div>
          <div className='max-w-[350px] flex flex-col gap-5'>
            <SocialMediaBanner />
            <HottestCartList />
          </div>

        </div>

      </div>

    </section>
  )
}

export default App
