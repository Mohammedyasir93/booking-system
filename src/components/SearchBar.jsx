export default function SearchBar({ value, onChange }) {
  return (
    <label className="block w-full max-w-md">
      <span className="mb-2 block text-sm font-semibold text-violet-950">Search rooms</span>
      <span className="relative block">
        <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-violet-500">
          ⌕
        </span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Room name or building"
          className="w-full rounded-xl border border-violet-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </span>
    </label>
  )
}
