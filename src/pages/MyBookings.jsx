import { Link } from 'react-router-dom'
import BookingList from '../components/BookingList.jsx'

export default function MyBookings({ bookings }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-8 flex flex-col gap-4 border-b border-violet-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">Your study schedule</p>
          <h1 className="mt-2 text-3xl font-bold text-violet-950 sm:text-4xl">My bookings</h1>
          <p className="mt-3 text-sm text-slate-600">Room requests you have submitted during this session.</p>
        </div>
        <Link to="/book" className="w-fit rounded-xl bg-violet-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-200">Book a room</Link>
      </div>
      <BookingList bookings={bookings} />
    </section>
  )
}
