import './App.css'
import { Banner } from './components/Banner'
import { CartList } from './components/Cart'
import Footer from './Layouts/Footer/Footer'
import { HottestCartList } from './components/HottestCart'
import NavBar from './Layouts/NavBar/NavBar'
import SocialMediaBanner from './components/SocialMediaBanner'



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
    <section className='w-full '>
      <Banner />
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 w-full mb-5">

          {/* Main Content */}
          <div>
            <CartList />
          </div>

          {/* Sticky Sidebar */}
          <div className="sticky top-6 self-start h-fit">
            <div className="bg-[#363A4C] w-full rounded-[10px] mb-5">
              <SocialMediaBanner />
            </div>
            <HottestCartList />
          </div>

        </div>
      </div>
    </section>
  )
}

export default App
