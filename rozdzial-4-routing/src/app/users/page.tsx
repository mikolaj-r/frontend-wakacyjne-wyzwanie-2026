import { UserProfileList } from "../../components/UserProfilesList";

export default function UsersPage() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Użytkownicy</h1>
      <UserProfileList />
    </section>
  );
}
