import { useState } from "react";

interface Technology {
    id: string;
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

export default function ProjectCard({
    title,
    description,
    technologies,
}: ProjectCardProps) {
    const [finished, setFinished] = useState<boolean>(false);
    return (
        <div
            className={`mt-10 bg-gray-800 text-gray-200 min-w-xs p-10 outline-6 outline-solid rounded-xl shadow-lg shadow-black ${finished ? "outline-blue-500" : "outline-red-500"}`}
        >
            <h3 className="text-3xl font-bold mb-4 tracking-wide text-shadow-lg/70">
                {title}
            </h3>
            <p className="text-xl mb-2 font-light text-justify">
                {description}
            </p>
            <ul>
                {technologies.map((el) => (
                    <li key={el.id} className="text-lg leading-10 italic">
                        {el.name}
                    </li>
                ))}
            </ul>
            <button
                className={`text-white font-bold py-2 px-4 mt-5 rounded-xl shadow-sm shadow-black active:scale-140 transition-transform ${finished ? "bg-blue-500 hover:bg-blue-700" : "bg-red-500 hover:bg-red-700"}`}
                onClick={() => {
                    setFinished((prev) => !prev);
                }}
            >
                {finished ? "Ukończony" : "W trakcie"}
            </button>
        </div>
    );
}
