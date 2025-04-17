import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const FoodRestaurant = () => {
    return (
        <div className="py-16 bg-white">
            <h2 className="flex justify-center text-4xl font-bold mb-10 gap-2">
                Top Food <span className="text-orange-500">Restaurant</span>
            </h2>

            <Carousel className="mx-auto max-w-6xl w-full px-6">
                <CarouselContent className="gap-6">
                    {/* 1 */}
                    <CarouselItem className=" shadow-md ">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/Double Cheeseburger.jpg"
                                alt="Double Cheeseburger"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">Double Cheeseburger</h3>
                            <p className="text-sm text-gray-600">
                                Beef, cheddar cheese, onions, pickles, lettuce, bun
                            </p>
                        </div>
                    </CarouselItem>

                    {/* 2 */}
                    <CarouselItem className=" shadow-md">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/4 Cheeses.jpg"
                                alt="4 Cheeses"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">4 Cheeses</h3>
                            <p className="text-sm text-gray-600">
                                Mozzarella, gorgonzola, cheddar, parmesan
                            </p>
                        </div>
                    </CarouselItem>

                    {/* 3 */}
                    <CarouselItem className=" shadow-md ">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/Barbecue fries.jpg"
                                alt="Barbecue Fries"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">Barbecue Fries</h3>
                            <p className="text-sm text-gray-600">
                                Crispy fries, bacon, BBQ sauce, melted cheese
                            </p>
                        </div>
                    </CarouselItem>

                    {/* 4 */}
                    <CarouselItem className=" shadow-md ">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/Meat mix X5.jpg"
                                alt="Meat Mix X5"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">Meat Mix X5</h3>
                            <p className="text-sm text-gray-600">
                                Pepperoni, sausage, beef, ham, chicken, cheese
                            </p>
                        </div>
                    </CarouselItem>

                    {/* 5 */}
                    <CarouselItem className=" shadow-md ">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/Pepperoni.jpg"
                                alt="Pepperoni"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">Pepperoni</h3>
                            <p className="text-sm text-gray-600">
                                Tomato sauce, mozzarella, spicy pepperoni
                            </p>
                        </div>
                    </CarouselItem>

                    {/* 6 */}
                    <CarouselItem className="  shadow-md ">
                        <div className="w-full h-[300px] flex items-center justify-center bg-white">
                            <img
                                src="/src/Img-Food/Top-restaurant-img/White roast beef.jpg"
                                alt="White Roast Beef"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">White Roast Beef</h3>
                            <p className="text-sm text-gray-600">
                                Roast beef, garlic sauce, cheese, herbs
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default FoodRestaurant
