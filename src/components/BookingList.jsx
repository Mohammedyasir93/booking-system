import BookingCard from './BookingCard.jsx'

export default function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center">
        <p className="text-lg font-bold text-violet-950">No bookings yet</p>
        <p className="mt-2 text-sm text-slate-500">Your submitted room requests will appear here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)}
    </div>
  )
}
