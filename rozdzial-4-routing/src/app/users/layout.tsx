export default function UsersLayout({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-5xl mx-auto p-8">{children}</div>
      <aside className="max-w-5xl mx-auto px-8 pb-8">{stats}</aside>
    </div>
  );
}
