import React from 'react'

export default function Footer() {
    return (
        <section class="relative footer-2 border-t border-gray-100">
            <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
            <div class="container">
                <div class="relative flex flex-wrap -mx-4">
                    <div class="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                        <a class="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" href="index.html" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                            <img class="h-10" src="/imgs/logos/logo.svg" alt="" />
                        </a>
                        <div class="mt-12 mb-16">
                            <p class="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>Mari bergabung
                                dengan luasnya komunitas dunia</p>
                        </div>
                        <div class="hidden lg:block wow animate__ animate__fadeInUp animated animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                            <p class="text-xs text-blueGray-400">© 2022. All rights reserved.</p>
                            <div class="-mx-2 mt-4">
                                <a class="inline-block px-2" href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a class="inline-block px-2" href="#">
                                    <img src="/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a class="inline-block px-2" href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                        <div class="flex flex-row flex-wrap justify-around mb-12">
                            <div class="w-1/2 lg:w-auto mb-12 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                                <h5 class="mb-6 text-lg font-bold font-heading">About</h5>
                                <ul class="space-y-3">
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="about.html">About us</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-1/2 lg:w-auto mb-12 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                <h5 class="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                <ul class="space-y-3">
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="pricing.html">Showcase</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="testimonials.html">Forum</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="faqs.html">Faqs</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-auto mb-4 wow animate__ animate__fadeInUp animated animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                <h5 class="mb-6 text-lg font-bold font-heading">Blog</h5>
                                <ul class="space-y-3">
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog.html">Bussiness</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-2.html">Marketing</a>
                                    </li>
                                    <li>
                                        <a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-single.html">Single</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:hidden text-center">
                            <p class="text-xs text-blueGray-400">© 2022. All rights reserved.</p>
                            <div class="-mx-2 mt-4">
                                <a class="inline-block px-2" href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a class="inline-block px-2" href="#">
                                    <img src="/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a class="inline-block px-2" href="#">
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
