"use client";

import { useState } from "react";
import Image from "next/image";

const interests = [
    {
        key: "programming",
        label: "Programming",
        color: "text-cyan-400",
        description: "Me in the wild with my friend coding",
        img: "/images/about/about_programming.jpg",
    },
    {
        key: "calisthenics",
        label: "Calisthenics",
        color: "text-green-400",
        description: "Practicing bodyweight workouts weighted dips and pull ups",
        img: "/images/about/about_calisthenics.jpg",
    },
    {
        key: "cooking",
        label: "Cooking",
        color: "text-orange-500",
        description: "Setting up a meal of hot pot with my friends!",
        img: "/images/about/about_cooking.jpg",
    },
    {
        key: "reading",
        label: "Reading",
        color: "text-red-400",
        description: "Exploring non-fiction and books about life. Here's a list of books I've read on the able.",
        img: "/images/about/about_books.png",
    },
];

function getEmoji(key: string) {
    switch (key) {
        case "programming":
            return "💻";
        case "calisthenics":
            return "🤸";
        case "cooking":
            return "🍳";
        case "reading":
            return "📚";
        default:
            return "✨";
    }
}

export default function AboutMe() {
    const [active, setActive] = useState("programming");
    const current = interests.find((i) => i.key === active)!;

    return (
        <section className="flex flex-col items-center justify-center px-6 py-20 text-white md:gap-10">

            <h1 className="mb-8 text-5xl font-bold">About Me</h1>

            <div className="flex flex-col items-center justify-center gap-10 md:gap-10">
                <div className="w-full">
                    <h2 className="font mb-12 ml-0 max-w-3xl text-left text-2xl">
                        I'm a developer who's worked on both <span className="font-bold text-blue-500">front{"-"}end</span> and <span className="font-bold text-blue-500">back{"-"}end</span> proponents of web projects. I specialize in practicality, accessibility, and am a practitioner of innovative solutions.
                    </h2>
                </div>

                <div className="flex flex-col-reverse items-center justify-center gap-10 md:gap-20 lg:flex-row">
                    {/* Text content */}
                    <div className="max-w-5xl space-y-4 text-lg leading-relaxed">
                        <p>
                            Over the years, I developed my{" "}
                            <span className={`${interests[0].color} cursor-pointer font-semibold`} onClick={() => setActive("programming")}>
                                programming
                            </span>
                            {" "}skills in Python, Java, and JavaScript frameworks such as Next.js and Node.js.
                            From working with front{"-"}end libraries like Framer Motion and MUI to back{"-"}end development such as tinkering with logs, and datasets (some from Hugging Face),
                            my journey learning to work with various technologies never ends.
                        </p>
                        <p>
                            I love getting physical activity in{" "}
                            <span className={`${interests[1].color} cursor-pointer font-semibold`} onClick={() => setActive("calisthenics")}>
                                calisthenics
                            </span>
                            . I proactively try to learn and work towards new skills such as the planche and dragon squats,
                            which have proved to be extensively difficult.
                        </p>
                        <p>
                            Spicing up my days is daily{" "}
                            <span className={`${interests[2].color} cursor-pointer font-semibold`} onClick={() => setActive("cooking")}>
                                cooking
                            </span>
                            . Producing high-quality meals gives me a sense of satisfaction and fulfillment. Whether it’s making my everyday omelettes
                            or experimenting with social media’s trending recipes, I enjoy enjoying it myself or sharing it with others.
                        </p>
                        <p>
                            <span className={`${interests[3].color} cursor-pointer font-semibold`} onClick={() => setActive("reading")}>
                                Reading
                            </span>{" "}
                            has been my favorite wind-down activity. I enjoy reading various topics such as philosophy, life, and character-driven fantasy books.
                        </p>

                        <p className="mt-6 text-sm italic text-gray-400">Click on any word to see more 👀</p>
                    </div>

                    {/* Image and description */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative h-[24rem] w-[24rem] rounded-xl bg-neutral-900 shadow-lg md:h-[30rem] md:w-[30rem] lg:h-[38rem] lg:w-[38rem]">
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
                                    className={`cursor-pointer text-xl transition-transform hover:scale-125 ${i.key === active ? "opacity-100" : "opacity-50"}`}
                                >
                                    {getEmoji(i.key)}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}