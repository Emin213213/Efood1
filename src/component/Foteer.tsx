const Foteer = () => {
    return (
        <div>
            <footer id='4' className="bg-gray-50 text-gray-700 pt-10 pb-6 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
                    <div>
                        <h2 className="text-xl font-bold">
                            <span className="text-orange-500">E</span>Food
                        </h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12l-4.243 4.243" />
                                </svg>
                                Dhaka, Bangladesh
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 5h12M9 3v2m6 4v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9m6 4h.01" />
                                </svg>
                                0943833399
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M16 12H8m0 0l-4 4m4-4l-4-4m16 4h-8" />
                                </svg>
                               13mail13469@gmail.com
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-4 text-gray-500">
                            <i className="fab fa-facebook-f hover:text-orange-500 cursor-pointer transition"></i>
                            <i className="fab fa-twitter hover:text-orange-500 cursor-pointer transition"></i>
                            <i className="fab fa-instagram hover:text-orange-500 cursor-pointer transition"></i>
                            <i className="fab fa-pinterest hover:text-orange-500 cursor-pointer transition"></i>
                        </div>
                    </div>

                    {/** Меню с hover-эффектом */}
                    <div>
                        <h3 className="font-semibold mb-2">Service</h3>
                        <ul className="space-y-1">
                            {["How it works", "Home delivery", "Products", "Menu"].map((item, i) => (
                                <li key={i} className="hover:text-orange-500 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            {["About Us", "News", "Our trusted partner", "New users FAQ"].map((item, i) => (
                                <li key={i} className="hover:text-orange-500 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Supports</h3>
                        <ul className="space-y-1">
                            {["Help center", "Feedback", "Contact us", "Terms conditions"].map((item, i) => (
                                <li key={i} className="hover:text-orange-500 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            {["Download app", "Blog", "What's new", "Sitemap"].map((item, i) => (
                                <li key={i} className="hover:text-orange-500 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
                    <p>© 2021 EFood – All rights reserved.</p>
                    <div className="flex gap-4">
                        {["Privacy", "Security", "Terms"].map((item, i) => (
                            <a key={i} href="#" className="hover:text-orange-500 transition">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Foteer;
