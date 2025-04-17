import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react"; // если используешь lucide для иконок

const FoodSubscribe = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);

        // можно добавить отправку на сервер или валидацию
    };

    return (
        <div>
            <section className="bg-[#ff7337] rounded-3xl py-8 max-w-4xl mx-auto text-white text-center shadow-md mb-15">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to get the Latest Offer</h2>
                <p className="text-sm text-white/90 mb-8">
                    Get our daily updates by subscribing to our newspaper, please drop your email below
                </p>

                <form className="flex justify-center" onSubmit={handleSubmit}>
                    <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xl shadow-md">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-3 text-sm text-gray-700 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[#ff7337] hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-full m-1 transition-all"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

                {showAlert && (
                    <div className="mt-6 px-6">
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Thank you!</AlertTitle>
                            <AlertDescription>
                                You have successfully subscribed.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </section>
        </div>
    );
};

export default FoodSubscribe;
