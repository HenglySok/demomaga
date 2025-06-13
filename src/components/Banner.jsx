import banner1 from '../assets/img/banner/banner1.png';
import banner2 from '../assets/img/banner/banner2.png';
import banner3 from '../assets/img/banner/banner3.png';


export const Banner = () => {
    return (
        <div className="w-full pb-15 px-10 pt-8 bg-gradient-to-t from-bg-black to-[#00000075] 
        relative "
        >
            <div className="flex justify-between items-center overflow-x-auto scroll-auto max-w-screen-2xl mx-auto ">
                <img src={banner1}
                    className='w-[435px] h-[230px]'
                    alt="" />
                <img src={banner2}
                    className='w-[435px] h-[230px]'
                    alt="" />
                <img src={banner3}
                    className='w-[435px] h-[230px]'
                    alt="" />
            </div>
            <span className="absolute bottom-5 right-0 text-text-100 flex justify-center items-center gap-2 bg-black 
            px-2 mx-10 
            py-1 rounded-[23px]">
                <div className='w-[25px] h-[10px] bg-secondary-75 rounded-[23%]'></div>
                <div className='w-[10px] h-[10px] bg-text-50 rounded-[50%]'></div>
                <div className='w-[10px] h-[10px] bg-text-50 rounded-[50%]'></div>
            </span>
        </div>

    )
}