import { useEffect, useState } from 'react'

function getToday() {
  const today = new Date()
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  return localDate.toISOString().slice(0, 10)
}

export default function BookingForm({ rooms, selectedRoom, onSubmitBooking }) {
  const [form, setForm] = useState({
    studentName: '',
    roomId: selectedRoom?.id ?? '',
    date: '',
    time: '',
    studentCount: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedRoom?.available) {
      setForm((currentForm) => ({ ...currentForm, roomId: selectedRoom.id }))
    }
  }, [selectedRoom])

  const chosenRoom = rooms.find((room) => room.id === form.roomId)
  const availableRooms = rooms.filter((room) => room.available)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.studentName.trim() || !form.roomId || !form.date || !form.time || !form.studentCount) {
      setError('Please complete every field before submitting.')
      return
    }

    const count = Number(form.studentCount)
    if (!Number.isInteger(count) || count < 1) {
      setError('Enter a whole number of students greater than zero.')
      return
    }
    if (!chosenRoom || count > chosenRoom.capacity) {
      setError(`This room can accommodate up to ${chosenRoom?.capacity ?? 0} students.`)
      return
    }
    if (form.date < getToday()) {
      setError('Choose today or a future date for your booking.')
      return
    }

    onSubmitBooking({
      studentName: form.studentName.trim(),
      room: chosenRoom.name,
      roomId: chosenRoom.id,
      date: form.date,
      time: form.time,
      studentCount: count,
    })
    setError('')
    setForm({ studentName: '', roomId: '', date: '', time: '', studentCount: '' })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="studentName" className="mb-2 block text-sm font-semibold text-violet-950">Student name</label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          autoComplete="name"
          value={form.studentName}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="roomId" className="mb-2 block text-sm font-semibold text-violet-950">Study room</label>
        <select id="roomId" name="roomId" value={form.roomId} onChange={handleChange} required className="form-control">
          <option value="">Choose an available room</option>
          {availableRooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name} · {room.building} (up to {room.capacity})</option>
          ))}
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-semibold text-violet-950">Date</label>
          <input id="date" name="date" type="date" min={getToday()} value={form.date} onChange={handleChange} required className="form-control" />
        </div>
        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-semibold text-violet-950">Time</label>
          <input id="time" name="time" type="time" value={form.time} onChange={handleChange} required className="form-control" />
        </div>
      </div>
      <div>
        <label htmlFor="studentCount" className="mb-2 block text-sm font-semibold text-violet-950">Number of students</label>
        <input
          id="studentCount"
          name="studentCount"
          type="number"
          min="1"
          max={chosenRoom?.capacity}
          step="1"
          inputMode="numeric"
          value={form.studentCount}
          onChange={handleChange}
          required
          aria-describedby="capacity-hint"
          className="form-control"
          placeholder="e.g. 3"
        />
        <p id="capacity-hint" className="mt-2 text-xs text-slate-500">
          {chosenRoom ? `This room holds up to ${chosenRoom.capacity} students.` : 'Choose a room to see its capacity.'}
        </p>
      </div>
      {error && <p role="alert" className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}
      <button type="submit" className="w-full rounded-xl bg-violet-700 px-5 py-3 font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-200">
        Submit booking request
      </button>
    </form>
  )
}
