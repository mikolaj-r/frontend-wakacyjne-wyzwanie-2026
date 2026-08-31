import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-gray-600">Nie znaleziono strony</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
}
