import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Study Rooms' },
  { to: '/book', label: 'Book a Room' },
  { to: '/bookings', label: 'My Bookings' },
]

export default function Navbar() {
  return (
    <header className="border-b border-violet-100 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <NavLink to="/" className="flex items-center gap-3 self-start" aria-label="StudySpace home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-700 text-sm font-bold text-white shadow-md shadow-violet-200">
            SS
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-violet-950">StudySpace</span>
            <span className="block text-xs text-slate-500">Campus room booking</span>
          </span>
        </NavLink>
        <div className="flex flex-wrap gap-1" aria-label="Pages">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-violet-100 text-violet-800'
                    : 'text-slate-600 hover:bg-violet-50 hover:text-violet-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
