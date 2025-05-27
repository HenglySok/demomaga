// Cart.jsx
import cartList from "../services/cartList";

function Cart({ id, title, author, image, chapter, views }) {
    return (
        <article className="relative w-[193px] h-[276px] mx-auto rounded-b-xl overflow-hidden">
            <span className="absolute top-[29px] left-[-30px] w-[60px] py-2 px-10 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold text-center rotate-[-45deg] origin-top-left z-10 shadow-md">
                <span>UP</span>
            </span>
            <div className="w-full relative h-full">
                <img src={image} alt={`${title} thumbnail`} className="w-full h-full rounded-b-xl" />
                <div className="absolute bottom-0 text-white w-full">
                    <div className="bg-gradient-to-t from-black to-#2D2C2C">
                        <div className="group px-[5px] pt-[5px] transition-all duration-300 ease-in-out hover:py-7 hover:scale-[1.02] hover:bg-muted rounded-md cursor-pointer">
                            <h3 className="text-text-100 text-[18px] font-bold transition-colors duration-300 group-hover:text-yellow-400">
                                {title}
                            </h3>
                            <p className="text-text-50 text-[12px]">{author}</p>
                        </div>

                    </div>
                    <div className="bg-black relative rounded-b-xl border-t-white border-t-1 transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-black to-primary-75 hover:border-primary-75">

                        <div className="px-[5px] pb-[30px]  ">
                            <div className="flex justify-between items-center">
                                <h3 className="text-text-100 text-[18px] font-bold">#{id}</h3>
                                <div className="flex items-center justify-between text-text-50 text-[14px] gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                    </svg>
                                    <h3 className="text-text-50 text-[12px]">{views}</h3>
                                </div>
                            </div>
                            <p className="text-text-50 text-[12px]">Chapter {chapter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export function CartList() {
    return (
        <div className=" relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[33px] bg-gradient-to-b from-[#000000] to-[#252424] to-80% pt-20 px-5 w-[911px]">
            <div className="absolute top-0 left- ps-5 pt-2 flex justify-between items-center w-full">
                <span className="text-text-100 0 text-[28px] ">Recently Update</span>
                <span className="flex items-center gap-3 justify-between px-5 py-2 bg-secondary-100 rounded-s-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:rounded-s-[20px] hover:px-[20px] hover:pe-10">
                    <button className="cursor-pointer">
                        All Update
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                </span>
            </div>
            {cartList.map(manga => (
                <Cart
                    key={manga.id}
                    id={manga.id}
                    title={manga.title}
                    author={manga.author}
                    image={manga.image}
                    chapter={manga.chapter}
                    views={manga.views}
                />
            ))}
        </div>
    );
}

export default Cart;