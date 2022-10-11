import React from 'react';

const Blogs = () => {
    return (
        <div>
           
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />



            <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
            <div class="container">
                <div class="flex flex-wrap justify-center -mx-4">
                    <div class="w-full px-4">
                        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        
                        <h2
                            class="
                            font-bold
                            text-3xl
                            sm:text-4xl
                            md:text-[40px]
                            text-dark
                            mb-4
                            "
                            >
                             Questions Asked By Jhanker Mahbub
                        </h2>
                        <p class="text-base text-body-color">
                          The answers might not be absolutely correct. But I Tried the best of my knowledge. Determined to do well in the near future.
                        </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div class="max-w-[370px] mx-auto mb-10">
                        <div class="rounded overflow-hidden mb-8">
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--vtI2NHvd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0lj87mz6whntv2zbxdm.png"
                                alt="image"
                                class="w-full"
                                />
                        </div>
                        <div>
                            
                            <h3>
                                <p
                                    
                                    className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    "
                                    >
                                The Purpose Of React Routers
                                </p>
                            </h3>
                            <p class="text-base text-body-color">
                                React router is a library, which is used to navigate through react components with any reload. Which keeps the UI flawless.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div class="max-w-[370px] mx-auto mb-10">
                        <div class="rounded overflow-hidden mb-8">
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qj17HL0m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emdosd9tj8bfly5is35y.png"
                                alt="image"
                                class="w-full"
                                />
                        </div>
                        <div>
                          
                            <h3>
                                <p
                                    
                                    className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    "
                                    >
                               React Context API, How It Works
                                </p>
                            </h3>
                            <p class="text-base text-body-color">
                                Context API creates a global variable that can be passed to any child without any nesting. It allows us to pass props directly to the component required.

                                Context API returns a consumer and a provider. Provider is used to The parent of all the components. Which can be accessed form any child component.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div class="max-w-[370px] mx-auto mb-10">
                        <div class="rounded overflow-hidden mb-8">
                            <img
                                src='https://i.ytimg.com/vi/ZGL9XiveFHs/maxresdefault.jpg' 
                                className='w-full'
                                />
                        </div>
                        <div>
                          
                            <h3>
                                <p
                                    
                                    className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    "
                                    >
                                The UseRef Hook, Details.
                                </p>
                            </h3>
                            <p class="text-base text-body-color">
                                A REST API is known as RESTful Api. It conforms the constraints of the REST architecture style and allows for interaction with RESTful web services. REST Stands for REPRESENTATIONAL STATE TRANSFER . It was created by computer scientist Roy Fielding.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
    );
};

export default Blogs;