import React from 'react'

export default function RecommendedFor() {
    return (
        <section class="py-12">
            <div class="container py-12 mx-auto">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 px-3 order-1 md:order-0">
                        <div class="max-w-md">
                            <h3 class="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__ animate__fadeInUp  animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>Di
                                Rekomendasikan untuk?</h3>
                            <p class="mb-6 leading-loose text-blueGray-400 wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s' }}>Gacha adalah
                                jaringan sosial dengan konsep untuk mengembangkan platform yang dapat memberikan
                                informasi terbaik untuk para pegiat teknologi.</p>
                            <ul>
                                <li class="py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '0.7s' }}>
                                    <span class="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                    <span>Ingin Menambah Pengetahuan</span>
                                </li>
                                <li class="py-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".9s" style={{ visibility: 'visible', animationDelay: '0.9s' }}>
                                    <span class="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                    <span>Berbagi Ilmu</span>
                                </li>
                                <li class="pt-4 wow animate__ animate__fadeInUp animated" data-wow-delay=".11s" style={{ visibility: 'visible', animationDelay: 'unset' }}>
                                    <span class="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                    <span>Bertanya kepada para ahli</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__ animate__fadeIn  animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                        <img class="sm:max-w-sm lg:max-w-full mx-auto" src="/imgs/illustrations/share.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
