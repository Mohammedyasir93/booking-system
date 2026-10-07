import { Link } from 'react-router-dom'

const features = [
  { number: '01', title: 'Find your space', text: 'Search room names and campus buildings to find a spot that fits your group.' },
  { number: '02', title: 'Request in a moment', text: 'Choose a room, date, and time with a simple, guided booking form.' },
  { number: '03', title: 'Keep it together', text: 'See every booking request and its current status in one place.' },
]

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-violet-950 via-violet-800 to-purple-600 text-white">
        <div aria-hidden="true" className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[48px] border-white/10" />
        <div aria-hidden="true" className="absolute -bottom-48 right-1/3 h-72 w-72 rounded-full border border-white/15" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-violet-100">Your campus, in focus</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Make room for your next big idea.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-violet-100 sm:text-lg">
              Find a place to focus, meet up, and make progress. StudySpace makes booking campus study rooms simple.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <Link to="/rooms" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-violet-800 shadow-lg transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-white/30">View study rooms</Link>
              <Link to="/book" className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30">Book a room</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="rounded-3xl border border-white/30 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-2xl bg-white p-6 text-violet-950 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-500">A little room to think</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-label="Room available" />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                  <div className="h-20 rounded-xl bg-violet-100" />
                  <div className="h-20 rounded-xl bg-fuchsia-100" />
                  <div className="h-20 rounded-xl bg-emerald-100" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">A better study session starts here.</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">Small focus pods, big project rooms, and everything in between.</p>
                <div className="mt-6 flex items-center gap-3 border-t border-violet-100 pt-5">
                  <div className="flex -space-x-2" aria-hidden="true">
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-violet-200 text-xs font-bold text-violet-800">A</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-rose-200 text-xs font-bold text-rose-800">M</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-emerald-200 text-xs font-bold text-emerald-800">J</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Good ideas happen together</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-900 shadow-xl sm:-left-8">Find your next study spot</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">Study smarter</p>
            <h2 className="mt-2 text-2xl font-bold text-violet-950 sm:text-3xl">Your space, your way.</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-slate-600">A straightforward way to find the right room for a solo study block or a team project.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <span className="text-sm font-bold text-violet-500">{feature.number}</span>
              <h3 className="mt-4 text-lg font-bold text-violet-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
