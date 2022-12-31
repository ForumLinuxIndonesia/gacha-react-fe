import React from 'react'

export default function RecommendedFor() {
    return (
        <section className="py-12">
            <div className="container py-12 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                        <div className="max-w-md">
                            <h3 className="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__ animate__fadeInUp  animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>Di
                                Rekomendasikan untuk?</h3>
                            <p className="mb-6 leading-loose text-blueGray-400 wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>Gacha adalah
                                jaringan sosial dengan konsep untuk mengembangkan platform yang dapat memberikan
                                informasi terbaik untuk para pegiat teknologi.</p>
                            <ul>
                                <li className="py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '0.7s' }}>
                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                    <span>Ingin Menambah Pengetahuan</span>
                                </li>
                                <li className="py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".9s" style={{ visibility: 'visible', animationDelay: '0.9s' }}>
                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                    <span>Berbagi Ilmu</span>
                                </li>
                                <li className="pt-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".11s" style={{ visibility: 'visible', animationDelay: 'unset' }}>
                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                    <span>Bertanya kepada para ahli</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__ animate__fadeIn  animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                        <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/imgs/illustrations/share.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
