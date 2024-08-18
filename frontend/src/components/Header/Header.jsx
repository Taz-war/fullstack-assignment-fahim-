import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header className=" bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-7 h-7" 
                />
                <a href="#" className="text-sm hover:underline">
                    Help Center
                </a>
            </div>
            <button className="bg-transparent text-white text-sm py-2 px-4 rounded-md border border-white hover:bg-white hover:text-black">
                Submit a request
            </button>

        </header>
    );
};

export default Header;
