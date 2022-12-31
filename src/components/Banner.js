import React from 'react'

export default function Banner() {
    return (
        <section className="relative pt-24 pb-8 -mt-24 bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/imgs/backgrounds/intersect.svg)' }}>
            <div className="absolute top-0 left-0 hidden mt-32 md:block">
                <img className="h-64 lg:h-56 jump" src="/imgs/illustrations/community.svg" alt="" />
            </div>
            <div className="absolute top-0 right-0 hidden mt-32 md:block">
                <img className="h-64 lg:h-56 jump" src="/imgs/illustrations/chat.svg" alt="" />
            </div>
            <div className="container">
                <div className="mt-12 mb-12">
                    <div className="max-w-lg mx-auto mb-8 text-center">
                        <span className="inline-block px-3 py-2 text-xs font-semibold text-blue-500 uppercase bg-blue-200 rounded-full">What
                            Is Gacha</span>
                        <h2 className="mt-4 mb-4 text-3xl font-bold md:text-4xl font-heading">
                            <span>Tempat Berbagi</span>
                            <span className="text-blue-600"> Pengalaman</span>
                            <br />
                            <span>dan informasi.</span>
                        </h2>
                        <p className="leading-relaxed text-blueGray-400 wow animate__ animate__fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>Sosial Media <strong className="text-blue-500">Gacha</strong>, tempat untuk <span className="typewrite d-inline text-brand" data-period="3000" data-type="[&quot;cari Informasi&quot;, &quot;sharing Informasi&quot; ]"><span className="wrap">sharing Informasi</span></span></p>
                    </div>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="flex w-full gap-4 lg:w-auto">
                                <a className="block w-full px-8 py-4 mb-2 mr-2 text-xs font-semibold leading-none text-white bg-blue-500 rounded lg:w-auto hover:bg-blue-700" href="#">Masuk</a>
                                <a className="block w-full px-8 py-4 mb-2 ml-2 text-xs font-semibold leading-none text-blue-500 bg-white border border-gray-900 rounded lg:w-auto hover:text-white hover:bg-blue-700" href="#">Daftar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center max-w-4xl pb-4 mx-auto">
                    <div className="w-1/2 px-8 mb-8 md:w-1/3 lg:w-1/5 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                        <img className="mx-auto" src="/imgs/logos/brands/brand-8.png" alt="" />
                    </div>
                    <div className="w-1/2 px-8 mb-8 md:w-1/3 lg:w-1/5 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <img className="mx-auto" src="/imgs/logos/brands/brand-7.png" alt="" />
                    </div>
                    <div className="w-1/2 px-8 mb-8 md:w-1/3 lg:w-1/5 wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                        <img className="mx-auto" src="/imgs/logos/brands/brand-6.png" alt="" />
                    </div>
                    <div className="w-1/2 px-8 mb-8 md:w-1/3 lg:w-1/5 wow animate__ animate__fadeInUp animated" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                        <img className="mx-auto" src="/imgs/logos/brands/brand-9.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
