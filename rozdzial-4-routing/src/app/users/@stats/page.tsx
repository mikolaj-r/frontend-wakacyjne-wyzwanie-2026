import { MOCK_USERS } from "../../../components/UserProfilesList";

export default function StatsPage() {
  const pizzaStats = MOCK_USERS.filter((u) => u.likesPizza).length;
  const total = MOCK_USERS.length;

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-lg font-bold">Statystyka miłośników pizzy</h2>
      </div>
      <span className="text-3xl font-extrabold text-green-600">{pizzaStats}</span>
      <span className="mx-1">/</span>
      <span className="text-xl font-bold">{total}</span>
      <span className="ml-2 text-sm">użytkowników lubi pizzę</span>
    </div>
  );
}
