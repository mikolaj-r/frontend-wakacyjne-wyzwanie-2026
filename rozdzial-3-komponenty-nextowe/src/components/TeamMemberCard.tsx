import Image from "next/image";
import Link from "next/link";
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
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
        <Image
            src="/avatar.jpg"
            width={128}
            height={128}
            alt={name}
            loading="eager"
            className="rounded-full m-20"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-sm font-medium text-red-700 font-orbitron">{role}</p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Link
            href="https://solvro.pwr.edu.pl"
            target="_blank"
            className="rounded-full px-3 py-1 bg-red-400 inline-block m-auto w-fit text-center text-sm text-white hover:bg-red-600 border border-red-600"
        >
            Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
}
