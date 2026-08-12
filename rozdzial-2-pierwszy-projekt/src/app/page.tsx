import TeamMemberCard from "./components/TeamMemberCard";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen lg:flex-row lg:flex-wrap lg:content-center">
            <TeamMemberCard
                name="John Doe"
                role="Frontend Developer"
                bio="Experienced in creating modern web applications, with broad technical knowledge in software design, systems engineering and data analysis. Focused on shipping high quality code and valuable experiences for users."
                skills={["React", "NextJS", "TailwindCSS", "Typescript"]}
            />
        </main>
    );
}
