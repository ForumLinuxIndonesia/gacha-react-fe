import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <section>
            <div class="container">
                <div class="flex w-full lg:h-full">
                    <div class="flex-1 lg:pr-32 py-20 lg:py-16 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>
                        <div class="max-w-2xl px-4 mx-auto lg:ml-0">
                            <h3 class="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
                                style={{ visibility: 'hidden', animationName: 'none' }}>Faqs</h3>
                        </div>
                    </div>
                    <div class="hidden lg:block lg:relative lg:w-1/3 bg-blue-500 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>
                        <div class="absolute left-0 md:-mr-32 mt-24 flex items-center">
                            <img class="jump lg:max-w-lg" src="/imgs/illustrations/faqs.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
