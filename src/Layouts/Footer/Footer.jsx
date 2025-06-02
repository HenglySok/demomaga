import React from 'react'
import SocialMediaBanner from '../../components/SocialMediaBanner'
import { list } from './listFooter'
import footer from '../../assets/img/footer.png'

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-black to-primary-75 to-100% p-20 border-t-1 border-text-100'>
            <div className='w-full lg:w-[80%] mx-auto flex items-center justify-center flex-col gap-10'>
                <span className='w-fit'>
                    <SocialMediaBanner />
                </span>
                <ul className='flex flex-col lg:flex-row justify-between items-center w-full text-text-100 text-[14px] flex-wrap space-x-8'>
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex gap-5 items-center'>
                    <img src={footer} alt="" className='w-[70px]' />
                    <p className='text-text-100 text-[11px]'>ABJ Mark is a registered trademark (Registration No.10921042)
                        Indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check https://aebs.or.jp/.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
