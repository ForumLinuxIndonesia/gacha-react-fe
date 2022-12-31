import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <section>
            <div className="container">
                <div className="flex w-full lg:h-full">
                    <div className="flex-1 lg:pr-32 py-20 lg:py-16 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>
                        <div className="max-w-2xl px-4 mx-auto lg:ml-0">
                            <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
                                style={{ visibility: 'hidden', animationName: 'none' }}>Faqs</h3>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:relative lg:w-1/3 bg-blue-500 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>
                        <div className="absolute left-0 md:-mr-32 mt-24 flex items-center">
                            <img className="jump lg:max-w-lg" src="/imgs/illustrations/faqs.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
