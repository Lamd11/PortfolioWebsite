import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Mail: React.FC = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("dlam222@uwo.ca")
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }

    return (
        <div className="relative">
            <button
                className='flex cursor-pointer rounded-full bg-blue-500 p-4 shadow-xl transition-all duration-300 hover:bg-blue-400'
                onClick={handleCopy}
                aria-label="Copied email to clipboard!"
            >
                <FontAwesomeIcon
                    icon={faMailBulk}
                    className="rounded-3xl bg-black p-4"
                />
                <div className="ml-4 flex flex-col">
                    <h2 className='text-m md:text-1xl lg:text-1xl text-left font-semibold sm:text-lg'>
                        Click to copy email!
                    </h2>
                    <h2 className='text-m md:text-1xl lg:text-1xl text-left font-bold text-blue-950 sm:text-lg'>
                        dlam222@uwo.ca
                    </h2>
                </div>
            </button>
            {copied && (
                <motion.div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-black shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    Email copied to clipboard!
                </motion.div>
            )}
        </div>
    );
}

export default Mail