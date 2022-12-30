import React from 'react'

export default function Header() {
    return (
        <>
            {/* Desktop */}
            <header className="mt-4 bg-transparent sticky-bar">
                <div className="container bg-transparent">
                    <nav className="flex items-center justify-between py-3 bg-transparent">
                        <a className="text-3xl font-semibold leading-none" href="index.html">
                            <img className="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </a>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="pt-4 pb-4">
                                <a href="index.html"
                                    className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Beranda</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    href="fitur.html">Fitur</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    href="forum.html">Forum</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    href="showcase.html">Showcase</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    href="team.html">Team</a>
                            </li>
                            <li className="relative pt-4 pb-4 group has-child">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#">Blog</a>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <a href="blog.html"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Category
                                            1</a>
                                    </li>
                                    <li>
                                        <a href="blog-2.html"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Category
                                            2</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Single
                                            1</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-2.html"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Single
                                            2</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="hidden lg:block">
                            <a className="btn-accent hover-up-2" href="login.html">Masuk</a>
                            <a className="btn-primary hover-up-2" href="signup.html">Daftar</a>
                        </div>
                        <div className="lg:hidden">
                            <button
                                className="flex items-center px-3 py-2 text-blue-500 border border-blue-200 rounded navbar-burger hover:text-blue-700 hover:border-blue-300">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            {/* Mobile */}
            <div className="relative z-50 hidden transition duration-300 navbar-menu">
                <div className="fixed inset-0 opacity-25 navbar-backdrop bg-blueGray-800"></div>
                <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto transition duration-300 bg-white border-r">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-semibold leading-none" href="#">
                            <img className="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </a>
                        <button className="navbar-close">
                            <svg className="w-6 h-6 cursor-pointer text-blueGray-400 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className="mb-1 rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" href="#">Home</a>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" href="about.html">Forum</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="services.html">Showcase</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="team.html">Team</a>
                            </li>
                            <li className="mb-1 menu-item-has-children rounded-xl"><span className="menu-expand">+</span><span className="menu-expand">+</span>
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="team.html">Blog</a>
                                <ul className="pl-5 dropdown" style={{ display: 'none' }}>
                                    <li>
                                        <a href="blog.html" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                            1</a>
                                    </li>
                                    <li>
                                        <a href="blog-2.html" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                            2</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                            1</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-2.html" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                            2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="faqs.html">Faqs</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <div className="pt-6 mt-4 border-t border-blueGray-100">
                            <a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded hover:bg-blue-500" href="#">Sign Up</a>
                            <a className="block px-4 py-3 mb-2 text-xs font-semibold leading-none text-center text-blue-500 border border-blue-200 rounded hover:text-blue-700 hover:border-blue-300" href="#">Log In</a>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>
                            <a className="text-blue-500 underline hover:text-blue-500" href="#">contact@gachanetwork.com</a>
                        </p>
                        <a className="inline-block px-1" href="#">
                            <img src="/imgs/icons/facebook-blue.svg" alt="" />
                        </a>
                        <a className="inline-block px-1" href="#">
                            <img src="/imgs/icons/twitter-blue.svg" alt="" />
                        </a>
                        <a className="inline-block px-1" href="#">
                            <img src="/imgs/icons/instagram-blue.svg" alt="" />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}
