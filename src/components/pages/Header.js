import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            {/* Desktop */}
            <header className="mt-4 bg-transparent sticky-bar">
                <div className="container bg-transparent">
                    <nav className="flex items-center justify-between py-3 bg-transparent">
                        <NavLink className="text-3xl font-semibold leading-none" href="index.html">
                            <img className="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </NavLink>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="pt-4 pb-4">
                                <NavLink to="/"
                                    className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Beranda</NavLink>
                            </li>
                            <li className="pt-4 pb-4">
                                <NavLink className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    to="/fitur">Fitur</NavLink>
                            </li>
                            <li className="pt-4 pb-4">
                                <NavLink className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    to="/forum">Forum</NavLink>
                            </li>
                            <li className="pt-4 pb-4">
                                <NavLink className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    to="/showcase">Showcase</NavLink>
                            </li>
                            <li className="pt-4 pb-4">
                                <NavLink className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                                    to="/tim">Team</NavLink>
                            </li>
                            <li className="relative pt-4 pb-4 group has-child">
                                <NavLink className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" to="/#">Blog</NavLink>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <NavLink to="/blog"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Category
                                            1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-2"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Category
                                            2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-single"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Single
                                            1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-single-2"
                                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">Single
                                            2</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="hidden lg:block">
                            <NavLink className="btn-accent hover-up-2" to="/masuk">Masuk</NavLink>
                            <NavLink className="btn-primary hover-up-2" to="/daftar">Daftar</NavLink>
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
                        <NavLink className="mr-auto text-3xl font-semibold leading-none" to="#">
                            <img className="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </NavLink>
                        <button className="navbar-close">
                            <svg className="w-6 h-6 cursor-pointer text-blueGray-400 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className="mb-1 rounded-xl">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" to="/">Home</NavLink>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" to="/forum">Forum</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" to="/showcase">Showcase</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" to="/tim">Team</NavLink>
                            </li>
                            <li className="mb-1 menu-item-has-children rounded-xl"><span className="menu-expand">+</span><span className="menu-expand">+</span>
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" to="/blog">Blog</NavLink>
                                <ul className="pl-5 dropdown" style={{ display: 'none' }}>
                                    <li>
                                        <NavLink to="/blog" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                            1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-2" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                            2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-single" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                            1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog-single-2" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                            2</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" to="/faqs">Faqs</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="pt-6 mt-4 border-t border-blueGray-100">
                            <NavLink className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded hover:bg-blue-500" to="#">Sign Up</NavLink>
                            <NavLink className="block px-4 py-3 mb-2 text-xs font-semibold leading-none text-center text-blue-500 border border-blue-200 rounded hover:text-blue-700 hover:border-blue-300" to="#">Log In</NavLink>
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
