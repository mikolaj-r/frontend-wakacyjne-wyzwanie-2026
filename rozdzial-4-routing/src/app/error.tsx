"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-bold text-red-600">Wystąpił błąd</h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ponów próbę
      </button>
    </div>
  );
}
