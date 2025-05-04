"use client";

import { useState } from "react";
import Image from "next/image";

const interests = [
    {
        key: "programming",
        label: "Programming",
        color: "text-cyan-400",
        description: "Building tools, automating workflows, and making side projects in React and Node.js.",
        img: "/images/milofinancial.png", // add your assets
    },
    {
        key: "calisthenics",
        label: "Calisthenics",
        color: "text-green-400",
        description: "Practicing bodyweight workouts like planches, levers, and muscle-ups.",
        img: "/images/milofinancial.png",
    },
    {
        key: "reading",
        label: "Reading",
        color: "text-red-400",
        description: "Exploring non-fiction and sci-fi books that inspire or challenge my thinking.",
        img: "/images/milofinancial.png",
    },
    {
        key: "cooking",
        label: "Cooking",
        color: "text-orange-500",
        description: "Trying new recipes or improvising quick meals after workouts or coding sessions.",
        img: "/images/milofinancial.png",
    },
];

export default function AboutMe() {
    const [active, setActive] = useState("programming");

    const current = interests.find((i) => i.key === active)!;

    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="mx-auto text-5xl font-bold text-white">About</h1>
            <section className="flex flex-col-reverse items-center justify-center gap-10 px-8 py-16 text-white md:flex-row md:gap-20">
                <div className="max-w-xl text-lg leading-relaxed">
                    <p>
                        When I'm not deep in{" "}
                        <span
                            className={`${interests[0].color} cursor-pointer font-semibold`}
                            onClick={() => setActive("programming")}
                        >
                            programming
                        </span>
                        , I'm usually training{" "}
                        <span
                            className={`${interests[1].color} cursor-pointer font-semibold`}
                            onClick={() => setActive("calisthenics")}
                        >
                            calisthenics
                        </span>
                        , getting lost in{" "}
                        <span
                            className={`${interests[2].color} cursor-pointer font-semibold`}
                            onClick={() => setActive("reading")}
                        >
                            books
                        </span>
                        , or trying a new{" "}
                        <span
                            className={`${interests[3].color} cursor-pointer font-semibold`}
                            onClick={() => setActive("cooking")}
                        >
                            recipe
                        </span>
                        .
                    </p>
                    <p className="mt-6 text-sm italic text-gray-400">Click on any word to see more</p>
                </div>

                {/* Right Visual Display */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative h-64 w-64 rounded-xl bg-neutral-900 shadow-lg">
                        <Image
                            src={current.img}
                            alt={current.label}
                            fill
                            className="rounded-xl object-contain p-4 transition-all duration-300 ease-in-out"
                        />
                    </div>
                    <p className="max-w-sm text-center text-sm text-gray-300">{current.description}</p>
                    <div className="flex gap-4">
                        {interests.map((i) => (
                            <span
                                key={i.key}
                                onClick={() => setActive(i.key)}
                                title={i.label}
                                className={`cursor-pointer text-xl transition-transform hover:scale-125 ${i.key === active ? "opacity-100" : "opacity-50"
                                    }`}
                            >
                                {getEmoji(i.key)}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    );
}

function getEmoji(key: string) {
    switch (key) {
        case "programming":
            return "💻";
        case "calisthenics":
            return "🤸";
        case "reading":
            return "📚";
        case "cooking":
            return "🍳";
        default:
            return "✨";
    }
}
