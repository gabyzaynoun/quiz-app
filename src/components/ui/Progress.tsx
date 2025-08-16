export function Progress({ value }: { value: number }) {
  const v = Math.min(100, Math.max(0, value));
  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full bg-black transition-all" style={{ width: `${v}%` }} />
    </div>
  );
}
