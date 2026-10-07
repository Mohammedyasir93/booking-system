import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import BookRoom from './pages/BookRoom.jsx'
import MyBookings from './pages/MyBookings.jsx'

export default function App() {
  const [bookings, setBookings] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(null)

  function addBooking(bookingDetails) {
    const booking = {
      ...bookingDetails,
      id: crypto.randomUUID(),
      status: 'Pending approval',
    }
    setBookings((currentBookings) => [booking, ...currentBookings])
    return booking
  }

  return (
    <div className="min-h-screen bg-[#faf8ff] text-slate-800">
      <Navbar />
      <main className="min-h-[calc(100vh-150px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms onBook={setSelectedRoom} />} />
          <Route path="/book" element={<BookRoom rooms={undefined} selectedRoom={selectedRoom} onCreateBooking={addBooking} />} />
          <Route path="/bookings" element={<MyBookings bookings={bookings} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-violet-100 bg-white px-5 py-5 text-center text-xs text-slate-500">
        StudySpace · Made for focused campus days
      </footer>
    </div>
  )
}
