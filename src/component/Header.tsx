import {Button} from "@/components/ui/button.tsx";


const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4    ">
            {/* Логотип */}
            <div className="text-3xl font-bold ml-30  lg:px-35    ">
                <span className="text-orange-500">E</span>Food
            </div>


            <nav>
                <ul className="flex items-center gap-15 text-gray-800  text-lg     mr-20 ">
                    <a href='#'    className="text-orange-500 font-medium cursor-pointer">Home</a>
                    <a href='#2' className="cursor-pointer hover:text-orange-500">Service</a>
                    <a href='#3' className="cursor-pointer hover:text-orange-500">Top cities</a>
                    <a href='#4'className="cursor-pointer hover:text-orange-500">Contact</a>
                    <a href='#5' >
                        <img src="./src/Icon-Img/Search.png" alt="Search"/>
                    </a>
                    <li>
                        <img src="./src/Icon-Img/Buy.png" alt="Buy"/>
                    </li>
                    <li>
                        <Button className={'bg-orange-500  p-5.5       '   } > Sign Up</Button>
                    </li>
                </ul>
            </nav>

            {/* Кнопка регистрации */}

        </header>
    );
};

export default Header;
