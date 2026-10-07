export default function RoomCard({ room, onBook }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-lg font-bold text-violet-700" aria-hidden="true">
          {room.name.charAt(0)}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            room.available ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          }`}
        >
          <span aria-hidden="true" className="mr-1">●</span>
          {room.available ? 'Available' : 'Booked'}
        </span>
      </div>
      <h2 className="text-lg font-bold text-violet-950">{room.name}</h2>
      <p className="mt-1 text-sm text-slate-500">{room.building}</p>
      <p className="mt-4 min-h-10 text-sm leading-6 text-slate-600">{room.detail}</p>
      <div className="mt-5 flex items-center justify-between border-t border-violet-100 pt-4">
        <span className="text-sm text-slate-600">Capacity <strong className="text-violet-950">{room.capacity}</strong></span>
        <button
          type="button"
          onClick={() => onBook(room)}
          disabled={!room.available}
          className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {room.available ? 'Book room' : 'Unavailable'}
        </button>
      </div>
    </article>
  )
}
