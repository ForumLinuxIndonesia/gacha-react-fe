import React from 'react'

export default function Footer() {
    return (
        <section className="relative footer-2 border-t border-gray-100">
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
            <div className="container">
                <div className="relative flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                        <a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" href="/" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                            <img className="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </a>
                        <div className="mt-12 mb-16">
                            <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>Mari bergabung
                                dengan luasnya komunitas dunia</p>
                        </div>
                        <div className="hidden lg:block wow animate__ animate__fadeInUp animated animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                            <p className="text-xs text-blueGray-400">© 2022. All rights reserved.</p>
                            <div className="-mx-2 mt-4">
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                        <div className="flex flex-row flex-wrap justify-around mb-12">
                            <div className="w-1/2 lg:w-auto mb-12 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                                <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                                <ul className="space-y-3">
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/about">About us</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/portfolio">Portfolio</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/services">Services</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-auto mb-12 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                <ul className="space-y-3">
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/tim">Team</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/showcase">Showcase</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/forum">Forum</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/faqs">Faqs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-auto mb-4 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                                <ul className="space-y-3">
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/blog/bussiness">Bussiness</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/blog/marketing">Marketing</a>
                                    </li>
                                    <li>
                                        <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="/blog/single">Single</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:hidden text-center">
                            <p className="text-xs text-blueGray-400">© 2022. All rights reserved.</p>
                            <div className="-mx-2 mt-4">
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
