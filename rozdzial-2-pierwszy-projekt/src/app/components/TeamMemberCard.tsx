import { CircleUserRound } from "lucide-react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

export default function TeamMemberCard({
    name,
    role,
    bio,
    skills,
}: TeamMemberCardProps) {
    return (
        <section className="group max-w-4xl min-w-3xs p-10 flex flex-col text-center items-center bg-mist-950 rounded-2xl m-5 shadow-none hover:shadow-lg hover:shadow-indigo-950 active:shadow-lg active:shadow-indigo-950 duration-200 active:bg-linear-to-b active:from-purple-950 active:to-mist-950 active:to-40% hover:bg-linear-to-b hover:from-purple-950 hover:to-mist-950 hover:to-40%">
            <div className="flex flex-col items-center md:flex-row">
                <div className="rounded-full overflow-hidden shrink-0">
                    <CircleUserRound
                        size={196}
                        className="transition-transform ease-in-out duration-200 group-active:scale-125 group-hover:scale-125 shrink-0"
                    />
                </div>
                <div>
                    <div className="gap-5 justify-center lg:flex lg:items-baseline">
                        <h2 className="text-5xl font-medium my-3 lg:my-0 tracking-wide text-shadow-lg">
                            {name}
                        </h2>
                        <h3 className="text-3xl text-mist-400 tracking-wide">
                            {role}
                        </h3>
                    </div>
                    <p className="text-lg my-5 mx-auto md:px-10">{bio}</p>
                    <ul className="flex gap-5 justify-center text-bg flex-wrap">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="rounded-full shadow-lg text-bg px-3 py-1 bg-linear-65 from-indigo-800 to-purple-800 hover:from-indigo-600"
                            >
                                <li>{skill}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
