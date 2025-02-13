import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const anchors = ['home', 'projects', 'contact']

const Navbar = () => {

    const handleScroll = (anchorID: string) => {
        document.getElementById(anchorID)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="h-22 fixed top-0 z-50 mx-auto mt-2 flex w-[85%] w-full flex-col">
            <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
                <h1 className="relative text-3xl font-bold">
                    <span className="relative inline-block">
                        {/* Colored Projection */}
                        <span className="absolute bottom-[10px] right-[10px] z-0 text-Blue">D</span>
                        {/* Main Letter */}
                        <span className="relative z-10 text-Pink">D</span>
                    </span>
                    aniel
                </h1>
                <div className="flex space-x-6">
                    {anchors.map((anchor, index) => (
                        <div
                            key={index}
                            className="relative z-0 flex cursor-pointer rounded-xl bg-gray-500 p-1"
                            onClick={() => handleScroll(anchor.toLowerCase())}>
                            <span className='relative z-10 text-xl font-medium text-gray-800'>
                                {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-8">
                    {[
                        {
                            name: 'Github',
                            icon: faGithub,
                            url: 'https://www.linkedin.com/in/daniel-lam3987/',
                            hoverColor: 'hover:text-Blue',
                        },
                        {
                            name: 'LinkedIn',
                            icon: faLinkedin,
                            url: 'https://ca.linkedin.com/in/tessa-smith-4206a8230',
                            hoverColor: 'hover:text-blue-500',
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-lg ${social.hoverColor}`}
                        >
                            <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                        </a>
                    ))}
                </div>
            </div>

        </nav>
    );
};

export default Navbar