import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Abstract</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Branches</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Release Notes</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Status</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Community</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Dribbble</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Podcast</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                    <p className="mt-4 text-sm">info@abstract.com</p>
                </div>
            </div>

            <div className="mt-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <img src={logo} alt="Logo" className="w-8 h-8 mb-4 md:mb-0" />
                    <p className="text-sm text-gray-400">
                        © Copyright 2022 Abstract Studio Design, Inc. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
