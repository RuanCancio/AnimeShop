'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [menu, setMenu] = useState(false)

    const [search, setSearch] = useState("")

    const [login, setLogin] = useState(true)

    console.log(search)

    const links = [
        {
            "name": "Animes",
            "url": "/animes"
        },
        {
            "name": "Figures",
            "url": "/figures"
        },
        {
            "name": "Clothes",
            "url": "/clothes"
        },
        {
            "name": "Acessories",
            "url": "/acessories"
        },
        {
            "name": "Mangas",
            "url": "/mangas"
        },
        {
            "name": "Collections",
            "url": "/collections"
        },
        {
            "name": "Oferrs",
            "url": "/oferrs"
        }
    ]

    return (
        <section className="absolute">
            <section className="flex flex-col items-center justify-center md:hidden">
                <section className="flex justify-between items-center w-screen pt-5 px-5">
                    <div>
                        {menu ? <div className="bg-[#083272] py-3 pr-2 rounded-tl-2xl rounded-tr-2xl">
                            <button onClick={() => setMenu(!menu)} >
                                <Image src="/Src/MenuOpen.svg" alt="menu" width={40} height={40} />
                            </button>
                            <div className=" z-5000 absolute bg-[#083272] pt-2 pb-5 px-4 my-3 gap-2 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl ease-in flex flex-col justify-between items-start text-m text-white font-bold">
                                {links.map(item => (
                                    <Link key={item.name} href={item.url} className="hover:text-[#92bcfa]">{item.name}</Link>
                                ))}
                                <h2 className="text-white hover:text-[#2ceea7] ease-in">Login</h2>
                                <Link href="/" className={`flex justify-between items-center gap-1 hover:scale-105 ease-in transition ${login ? "block" : "hidden"}`}>
                                    <Image src="/Src/favoritesicon.svg" alt="favorites" width={20} height={20} />
                                    <h2 className="text-white hover:text-[#2ceea7] ease-in">Favorites</h2>
                                </Link>
                                <Link href="/" className={`flex justify-between items-center gap-1 hover:scale-105 ease-in transition ${login ? "block" : "hidden"}`}>
                                    <Image src="/Src/Cart.svg" alt="Cart" width={20} height={20} />
                                    <h2 className="text-white hover:text-[#2ceea7] ease-in">Cart</h2>
                                </Link>
                            </div>
                        </div> : <button onClick={() => setMenu(!menu)}><Image src="/Src/MenuClose.svg" alt="menu" width={40} height={40} /></button>}
                    </div>
                    <Link href="/" className="text-white flex justify-center items-center gap-1">
                        <Image src="/Src/pokeIcon.png" alt="pokeIcon" loading="eager" width={50} height={50} className="scale-x-[-1]" />
                        <h1 className="text-3xl font-bold">Anime<span className="text-[#0066FF]">Shop</span></h1>
                    </Link>
                    <div>
                        <Image src="/Src/Cart.svg" alt="Cart" width={40} height={40} />
                    </div>
                </section>
                <form className="flex justify-between items-center gap-3 px-5 py-2 mt-3 bg-gray-900 rounded-xl" onSubmit={a => setSearch(a.target.value)} >
                    <input type="text" className="text-white w-full bg-gray-900 px-2 py-1 outline-none" placeholder="Search Products..." />
                    <button type="submit" className="cursor-pointer"><Image src="/Src/Magnifier.svg" alt="search" width={30} height={30} /></button>
                </form>
            </section>


            <section className="hidden flex-col md:flex">
                <section className=" w-screen md:flex items-center justify-between py-5 px-10">
                    <div className="flex gap-20 items-center w-[80%]">
                        <Link href="/" className="text-white flex justify-center items-center gap-1">
                            <Image src="/Src/pokeIcon.png" loading="eager" alt="pokeIcon" width={80} height={80} className="scale-x-[-1]" />
                            <h1 className="text-5xl font-bold">Anime<span className="text-[#0066FF]">Shop</span></h1>
                        </Link>
                        <form className="flex w-[60%] justify-between items-center gap-3 px-5 py-2 mt-3 bg-gray-900 rounded-xl" onSubmit={a => setSearch(a.target.value)}>
                            <input type="text" className="text-white w-full bg-gray-900 px-2 py-1 outline-none" placeholder="Search Products..." />
                            <button type="submit" className="cursor-pointer"><Image src="/Src/Magnifier.svg" alt="search" width={30} height={30} /></button>
                        </form>
                    </div>
                    <section className="flex gap-10">
                        <Link href="/" className="flex justify-between items-center gap-1 hover:scale-105 ease-in transition">
                            <Image src="/Src/loginIcon.svg" alt="login" width={30} height={30} />
                            <h2 className="text-white hover:text-[#2ceea7] ease-in">Login</h2>
                        </Link>
                        <Link href="/" className={`flex justify-between items-center gap-1 hover:scale-105 ease-in transition ${login ? "block" : "hidden"}`}>
                            <Image src="/Src/favoritesicon.svg" alt="favorites" width={30} height={30} />
                            <h2 className="text-white hover:text-[#2ceea7] ease-in">Favorites</h2>
                        </Link>
                        <Link href="/" className={`flex justify-between items-center gap-1 hover:scale-105 ease-in transition ${login ? "block" : "hidden"}`}>
                            <Image src="/Src/Cart.svg" alt="Cart" width={30} height={30} />
                            <h2 className="text-white hover:text-[#2ceea7] ease-in">Cart</h2>
                        </Link>
                    </section>
                </section>
                <div className=" flex justify-between items-center py-5 pl-50 pr-60 text-2xl text-white font-bold w-screen bg-[#083272]">
                    {links.map(item => (
                        <Link key={item.name} href={item.url} className="hover:text-[#92bcfa] transition">{item.name}</Link>
                    ))}
                </div>
            </section>
        </section>
    )
}