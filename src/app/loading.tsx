export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(var(--color-background))]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-[rgb(var(--color-foreground))] mb-2">
          Loading...
        </h2>
        <p className="text-[var(--ds-gray-900)]">
          Please wait
        </p>
      </div>
    </div>
  );
}






