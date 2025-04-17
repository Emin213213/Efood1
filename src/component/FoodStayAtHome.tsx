const HeroSection = () => {
    return (
        <section   className="flex  items-center justify-evenly px-8  mb-20  " id='3' >

            <div className=" lg:w-1/2 mb-10 lg:mb-0 flex justify-center ml-18  "   >
                <img

                    src={'./src/Icon-Img/food delivery 4.png'}
                    alt="Delivery illustration"

                />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl">
                <h1 className="text-4xl font-bold leading-tight mb-4">
                    <span className="text-orange-500">Stay</span> At Home, We Will <br />
                    Provide <span className="text-orange-500">Good Food</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    We provide tasty food and superfast delivery at<br/> your home. Let’s use
                    our services right now and<br/> get discounts of up to 50%.
                </p>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-800 text-lg  ">
                        <span className="text-orange-500 text-2xl">🚀</span>
                        Fasted Delivery in 30 Minutes
                    </li>
                    <li className="flex items-center gap-3 text-gray-800  text-lg    ">
                        <span className="text-blue-400 text-2xl">👨‍🍳</span>
                        300+ Delivery Men
                    </li>
                    <li className="flex items-center gap-3 text-gray-800  text-lg    ">
                        <span className="text-red-400 text-2xl">🍽️</span>
                        500+ Restaurant & Cafe Shop
                    </li>
                </ul>

                <button className="bg-orange-500 text-white px-10 py-4 rounded-full shadow-lg hover:bg-orange-600 transition">
                    See more
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
