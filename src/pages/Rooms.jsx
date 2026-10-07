import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoomCard from '../components/RoomCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { MOCK_ROOMS } from '../data/rooms.js'

export default function Rooms({ onBook }) {
  const [rooms, setRooms] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setRooms(MOCK_ROOMS)
  }, [])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const matchingRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(normalizedSearch) || room.building.toLowerCase().includes(normalizedSearch),
  )

  function chooseRoom(room) {
    onBook(room)
    navigate('/book')
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-8 flex flex-col gap-7 border-b border-violet-100 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">Find your focus</p>
          <h1 className="mt-2 text-3xl font-bold text-violet-950 sm:text-4xl">Study rooms</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Browse the spaces across campus and choose the one that works for your study session.</p>
        </div>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
      <p className="mb-5 text-sm text-slate-500" aria-live="polite">{matchingRooms.length} {matchingRooms.length === 1 ? 'room' : 'rooms'} found</p>
      {matchingRooms.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {matchingRooms.map((room) => <RoomCard key={room.id} room={room} onBook={chooseRoom} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-16 text-center">
          <h2 className="text-lg font-bold text-violet-950">No rooms found</h2>
          <p className="mt-2 text-sm text-slate-500">Try another room name or building.</p>
        </div>
      )}
    </section>
  )
}
