import React from 'react'

export default function Team() {
    return (
        <section className="py-20 bg-blueGray-50">
            <div className="container">
                <div className="max-w-lg mx-auto mb-12 text-center">
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>Our Team</span>
                    <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                        Meet our awesome contributor</h2>
                    <p className="text-blueGray-400 leading-loose wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 py-5 md:px-5 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                        <div className="px-6 py-10 bg-white shadow rounded">
                            <div className="flex items-center mb-4">
                                <img className="h-16 w-16 rounded-full object-cover" src="/imgs/placeholders/img-1.png" alt="" />
                                <div className="pl-4">
                                    <p className="text-lg font-bold">David Santoso</p>
                                    <p className="text-blue-600">Frontend Designer</p>
                                </div>
                            </div>
                            <p className="leading-loose text-blueGray-400 mb-5 text-sm">Donec consequat tortor risus, at
                                auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                                pulvinar. Vestibulum non quam velit.</p>
                            <div className="flex space-x-2">
                                <a href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 py-5 md:px-5 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                        <div className="px-6 py-10 bg-white shadow rounded">
                            <div className="flex items-center mb-4">
                                <img className="h-16 w-16 rounded-full object-cover" src="/imgs/placeholders/img-2.png" alt="" />
                                <div className="pl-4">
                                    <p className="text-lg font-bold">Denis Arsatya</p>
                                    <p className="text-blue-600 text-sm">Backend Developer</p>
                                </div>
                            </div>
                            <p className="leading-loose text-blueGray-400 mb-5 text-sm">Donec consequat tortor risus, at
                                auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                                pulvinar. Vestibulum non quam velit.</p>
                            <div className="flex space-x-2">
                                <a href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 py-5 md:px-5 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                        <div className="px-6 py-10 bg-white shadow rounded">
                            <div className="flex items-center mb-4">
                                <img className="h-16 w-16 rounded-full object-cover" src="/imgs/placeholders/img-1.png" alt="" />
                                <div className="pl-4">
                                    <p className="text-lg font-bold">Lendra</p>
                                    <p className="text-blue-600">Frontend Designer</p>
                                </div>
                            </div>
                            <p className="leading-loose text-blueGray-400 mb-5 text-sm">Donec consequat tortor risus, at
                                auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                                pulvinar. Vestibulum non quam velit.</p>
                            <div className="flex space-x-2">
                                <a href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a href="#">
                                    <img src="/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 py-5 md:px-5 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                        <div className="px-6 py-10 bg-white shadow rounded">
                            <div className="flex items-center mb-4">
                                <img className="h-16 w-16 rounded-full object-cover" src="/imgs/placeholders/img-2.png" alt="" />
                                <div className="pl-4">
                                    <p className="text-lg font-bold">Hanif Dwi Putra</p>
                                    <p className="text-blue-600 text-sm">Backend Developer</p>
                                </div>
                            </div>
                            <p className="leading-loose text-blueGray-400 mb-5 text-sm">Donec consequat tortor risus, at
                                auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                                pulvinar. Vestibulum non quam velit.</p>
                            <div className="flex space-x-2">
                                <a href="#">
                                    <img src="/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a href="#">
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
