


const FoodDelivery = () => {



    return (
        <section className="flex flex-col lg:flex-row items-center justify-evenly gap-15 px-10 lg:px-10 py-16 bg-white      ">

            <div className="max-w-lg">
                <h2 className="text-5xl font-bold leading-tight text-gray-900">
                    Super Fast <span className="text-orange-500">Food</span>{" "}
                    <span className="text-orange-500">Delivery</span> Service
                </h2>

                <p className="text-gray-600 mt-4">
                    We provide super fast-delivery service. Let’s use our services right now and
                    get discounts of up to 50%.
                </p>


                <div className="mt-6 flex items-center gap-6">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-orange-600 transition">
                        Explore Food
                    </button>
                    <a href="#my-section" className="text-gray-800 text-lg font-medium hover:underline">
                        Download App
                    </a>
                </div>
            </div>

            {/* Правая часть с картинкой */}
            <div className="mt-10 lg:mt-0">
                <img  width={400}
                      height={300} src={'./src/Icon-Img/Delivery.png'}/>
            </div>
        </section>
    );
};

export default FoodDelivery;
