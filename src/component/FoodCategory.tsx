import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/createApiSlice.ts";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";

const FoodCategory = () => {
    const dispatch = useDispatch();
    const { task, loading, error } = useSelector((state) => state.food);

    const [page, setPage] = useState(1);
    const [mas, setMas] = useState(["burger"]);

    useEffect(() => {
        dispatch(fetchFood({ page, mas }));
    }, [page, mas, dispatch]);

    return (
        <div id='2' className="px-8  mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
                Our Popular <span className="text-orange-500">Category</span>
            </h2>

            <div className="flex justify-center gap-4 m-5  ">
                {["burger", "pizza", "sandwich", "asian food", "menu"].map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setMas([category]);
                            setPage(1);
                        }}
                        className={`px-6 py-2 rounded-lg border text-lg font-medium transition ${
                            mas[0] === category
                                ? "bg-orange-500 text-white"
                                : "bg-white text-gray-800 hover:bg-orange-100"
                        }`}
                    >
                        {category === "burger" && <img width={'100px'} src='/src/Icon-Img/Food-Img/Burger.png' />}
                        {category === "pizza" && <img width={'100px'} src='/src/Icon-Img/Food-Img/Pizza.png' />}
                        {category === "sandwich" && <img width={'100px'} src='/src/Icon-Img/Food-Img/sandwich-1.png' />}
                        {category === "asian food" && <img width={'100px'} src='/src/Icon-Img/Food-Img/Asian food.png' />}
                        {category === "menu" && <img width={'100px'} src='/src/Icon-Img/Food-Img/sandwich.png' />}
                    </button>
                ))}
            </div>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {task?.results?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-20">
                    {task.results.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md text-center p-4 hover:shadow-lg transition"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-36 object-cover rounded-lg mb-4"
                            />
                            <p className="font-semibold text-lg mb-2">{item.title}</p>
                            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                            <p className="font-bold text-gray-800 mb-2">$15.00</p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}


                                                                        {/*Button*/}
            <div className="flex justify-center mt-10    ">
                <Pagination     >
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                className={page === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink isActive>{page}</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => setPage((prev) => prev + 1)}
                                className={task?.results?.length < 5 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default FoodCategory;
