import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingForm from '../components/BookingForm.jsx'
import { MOCK_ROOMS } from '../data/rooms.js'

function formatBookingDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BookRoom({ selectedRoom, onCreateBooking }) {
  const [latestBooking, setLatestBooking] = useState(null)

  function submitBooking(bookingDetails) {
    setLatestBooking(onCreateBooking(bookingDetails))
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-600">Plan your study session</p>
        <h1 className="mt-2 text-3xl font-bold text-violet-950 sm:text-4xl">Book a room</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">Tell us when you need a space and how many students are joining.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.72fr)] lg:items-start">
        <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-soft sm:p-8">
          <BookingForm rooms={MOCK_ROOMS} selectedRoom={selectedRoom} onSubmitBooking={submitBooking} />
        </div>
        <aside className="rounded-2xl bg-violet-900 p-6 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-200">Booking details</p>
          {latestBooking ? (
            <div className="mt-5" role="status" aria-live="polite">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-400/20 text-lg text-emerald-200" aria-hidden="true">✓</div>
              <h2 className="mt-4 text-xl font-bold">Request submitted</h2>
              <p className="mt-2 text-sm leading-6 text-violet-100">Your room request is in. You can see it in My Bookings.</p>
              <dl className="mt-5 space-y-3 border-t border-white/15 pt-5 text-sm">
                <div><dt className="text-violet-200">Student</dt><dd className="mt-1 font-semibold">{latestBooking.studentName}</dd></div>
                <div><dt className="text-violet-200">Room</dt><dd className="mt-1 font-semibold">{latestBooking.room}</dd></div>
                <div><dt className="text-violet-200">Date and time</dt><dd className="mt-1 font-semibold">{formatBookingDate(latestBooking.date)} · {latestBooking.time}</dd></div>
                <div><dt className="text-violet-200">Students</dt><dd className="mt-1 font-semibold">{latestBooking.studentCount}</dd></div>
              </dl>
              <Link to="/bookings" className="mt-6 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-violet-900 transition hover:bg-violet-100">View my bookings</Link>
            </div>
          ) : (
            <>
              <h2 className="mt-5 text-xl font-bold">Ready when you are.</h2>
              <p className="mt-2 text-sm leading-6 text-violet-100">Choose an available room, then add the date, time, and group size for your request.</p>
              <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-sm font-semibold">A quick note</p>
                <p className="mt-1 text-xs leading-5 text-violet-100">Requests are marked pending in this training project. Room data is mock data and resets when the app reloads.</p>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}
