const FoodMobileApp = () => {
    return (
        <div  id='my-section'    className=" flex flex-col md:flex-row justify-center gap-53 items-center  mt-20    ">

            <div className="max-w-lg">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Download Our <span className="text-orange-500">Mobile App</span>
                </h2>
                <p className="text-gray-600 mb-6">
                    It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount
                </p>
                <div className="flex gap-4">
                    <a href={'https://apps.apple.com/ua/app/efood-delivery/id621353976?l=en'}>
                        <img
                            src="./src/Icon-Img/AppDowload/AppStore.png"
                            alt="App Store"
                            className="w-36 cursor-pointer"
                        />
                    </a>

                    <a href={'https://play.google.com/store/apps/dev?id=8691034969983415727&hl=en'}>
                        <img
                            src="./src/Icon-Img/AppDowload/Google Play.png"
                            alt="Google Play"
                            className="w-36 cursor-pointer"
                        />
                    </a>

                </div>
            </div>


            <div className="mt-12 ">
                <img
                    src="./src/Icon-Img/Group 170.png"
                    alt="App Preview"
                    className="w-[500px] md:w-[450px]"
                />
            </div>
        </div>
    );
};

export default FoodMobileApp;
