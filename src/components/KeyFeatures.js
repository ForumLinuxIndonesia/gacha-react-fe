import React from 'react'

export default function KeyFeatures() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-wrap lg:max-w-sm mx-auto">
                        <img className="jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn"
                            data-wow-delay=".5s" src="/imgs/illustrations/tasks.svg" alt=""
                            style={{ visibility: 'hidden', animationDelay: '0.5s', animationName: 'none' }} />
                    </div>
                    <div className="w-full lg:w-auto">
                        <div className="lg:pl-32">
                            <div className="mb-4">
                                <span
                                    className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                    style={{ visibility: 'hidden', animationDelay: '0.1s', animationName: 'none' }}>Why choose
                                    us</span>
                                <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                    style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>Key
                                    Features</h2>
                            </div>
                            <div className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                                style={{ visibility: 'hidden', animationDelay: '0.5s', animationName: 'none' }}>
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading">Tingkatkan Pengetahuan</h3>
                                    <p className="text-blueGray-400 leading-loose">Cari informasi terbaik yang di bagikan
                                        oleh orang seluruh dunia.</p>
                                </div>
                            </div>
                            <div className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".7s"
                                style={{ visibility: 'hidden', animationDelay: '0.7s', animationName: 'none' }}>
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading">Mengembangkan Ketrampilan</h3>
                                    <p className="text-blueGray-400 leading-loose">Temukan artikel-artikel terbaik untuk
                                        mengembangkan ketrampilan.</p>
                                </div>
                            </div>
                            <div className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".9s"
                                style={{ visibility: 'hidden', animationDelay: '0.9s', animationName: 'none' }}>
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading">Mencari Pemecahan Masalah</h3>
                                    <p className="text-blueGray-400 leading-loose">Bertanya di forum publik jika anda butuh
                                        bantuan!.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
