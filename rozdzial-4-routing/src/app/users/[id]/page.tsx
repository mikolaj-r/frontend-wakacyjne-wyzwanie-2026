import { notFound } from "next/navigation";
import Link from "next/link";
import { MOCK_USERS } from "../../../components/UserProfilesList";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = MOCK_USERS.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <section className="max-w-2xl mx-auto p-8">
      <Link href="/users" className="text-blue-600 hover:underline mb-4 inline-block">
        Wróć do listy
      </Link>
      <div className="border rounded-lg p-8 shadow-sm">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600 mb-4">{user.role}</p>
        <p className="text-sm">
          {user.likesPizza ? (
            <span className="text-green-600 font-bold">Lubi pizzę</span>
          ) : (
            <span className="text-red-600 font-bold">Nie lubi pizzy</span>
          )}
        </p>
      </div>
    </section>
  );
}
