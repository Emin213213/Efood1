    import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const FoodClient = () => {
    const [page, setPage] = useState(1);

    const { data: task, isLoading, isError } = useQuery({
        queryKey: ['posts', page],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=1`);
            return response.data;
        }
    });

    return (
        <div className="flex flex-col items-center gap-10 py-16  mb-20 mt-20   ">
            <h2 className="text-2xl font-semibold">
                What Our Client Are <span className="text-orange-500">Saying</span>
            </h2>

            <div className="bg-white shadow-lg rounded-xl p-6 flex w-full max-w-5xl gap-6">

                <div className="flex-shrink-0">
                    <img
                        src='/src/Icon-Img/Rectangle 8.png'
                        alt="Client"
                        className="w-[460px] h-[490px] object-cover rounded-xl"
                    />
                </div>


                <div className="flex flex-col justify-center">
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error loading testimonial</p>}

                    {task && (
                        <div className="flex flex-col justify-center h-full">
                            <p className="text-gray-700 text-[18px] leading-relaxed mb-6 text-center">
                                “{task[0].body}”
                            </p>

                            <div className="text-center mb-6">
                                <p className="text-orange-500 font-semibold pt-20  ">Anglina Jole</p>
                                <p className="text-sm text-gray-500">Food lover</p>
                            </div>

                            <div className="flex justify-center  gap-4 text-orange-500 text-2xl">
                                <button
                                    onClick={() => setPage((p) => p - 1)}
                                    disabled={page === 1}
                                    className="disabled:opacity-30"
                                >
                                    ←
                                </button>
                                <button onClick={() => setPage((p) => p + 1)}>→</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodClient;
