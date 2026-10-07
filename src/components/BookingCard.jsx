export default function BookingCard({ booking }) {
  return (
    <article className="grid gap-4 rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <h2 className="text-lg font-bold text-violet-950">{booking.room}</h2>
        <p className="mt-1 text-sm text-slate-600">Booked by {booking.studentName}</p>
        <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:grid-cols-3">
          <div><dt className="text-slate-500">Date</dt><dd className="mt-1 font-semibold text-slate-800">{booking.date}</dd></div>
          <div><dt className="text-slate-500">Time</dt><dd className="mt-1 font-semibold text-slate-800">{booking.time}</dd></div>
          <div><dt className="text-slate-500">Students</dt><dd className="mt-1 font-semibold text-slate-800">{booking.studentCount}</dd></div>
        </dl>
      </div>
      <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">{booking.status}</span>
    </article>
  )
}
