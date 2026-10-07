# StudySpace: Campus Study Room Booking System

A beginner-friendly React project for browsing campus study rooms and submitting booking requests. The app uses local mock data only. There is no backend or database, and bookings are held in React state until the page is refreshed.

**Live website:** [StudySpace on GitHub Pages](https://mohammedyasir93.github.io/booking-system/)

## Requirements

- Node.js 18 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
.
|-- index.html
|-- .github/workflows/deploy.yml
|-- package.json
|-- tailwind.config.js
|-- vite.config.js
|-- src/
    |-- App.jsx
    |-- main.jsx
    |-- index.css
    |-- components/
    |   |-- BookingCard.jsx
    |   |-- BookingForm.jsx
    |   |-- BookingList.jsx
    |   |-- Navbar.jsx
    |   |-- RoomCard.jsx
    |   |-- SearchBar.jsx
    |-- data/
    |   |-- rooms.js
    |-- pages/
        |-- BookRoom.jsx
        |-- Home.jsx
        |-- MyBookings.jsx
        |-- Rooms.jsx
```

## Pages and components

- **Navbar** displays the four React Router links and highlights the active page.
- **Home** introduces StudySpace, links into the booking flow, and presents the main features.
- **Rooms** loads the mock rooms on mount, filters by room name or building, and shows a no-results state.
- **RoomCard** presents one room's location, capacity, and availability, with a booking action for available rooms.
- **SearchBar** is a reusable controlled search input.
- **BookRoom** contains the booking form and displays a confirmation with the submitted details.
- **BookingForm** controls the form fields and validates required values, dates, whole-number group size, and room capacity.
- **MyBookings** displays the current session's booking requests.
- **BookingList** shows the empty state or maps the bookings into cards.
- **BookingCard** displays one booking and its pending status.
- **App** owns the bookings state so it remains available while navigating between routes.

## Concepts used

- **Props:** values and functions passed from a parent component to a child, such as a room passed to `RoomCard` or bookings passed to `BookingList`.
- **useState:** stores values that can change while the app is open. Search text, form fields, and submitted bookings use state.
- **useEffect:** runs a side effect after rendering. `Rooms` uses it once when the page loads to initialize its list from local mock room data.
- **Controlled inputs:** each form or search input gets its displayed value from React state and updates that state in `onChange`.
- **map():** turns arrays of rooms, navigation links, feature items, and bookings into rendered elements.
- **Unique keys:** each mapped element has a stable unique key (`room.id`, `booking.id`, or `link.to`) so React can track list changes.
- **preventDefault():** stops the browser's normal form submission and page refresh so the app can validate and handle the booking in React.
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `Link`, and `NavLink` provide client-side navigation between `/`, `/rooms`, `/book`, and `/bookings` without a full page load.
- **Tailwind CSS:** utility classes style layout, color, spacing, responsive breakpoints, focus states, and room/booking statuses. Tailwind 4 is integrated through its Vite plugin; the legacy JavaScript config supplies the small set of theme extensions.

## Testing checklist

- [ ] Open Home and follow **View study rooms**.
- [ ] Search by a room name, then by a building name.
- [ ] Search for a value with no match and confirm **No rooms found** appears.
- [ ] Confirm available rooms can be booked and booked rooms cannot.
- [ ] Open **Book a room** from navigation and submit the empty form; confirm validation appears without a page refresh.
- [ ] Enter a student count of zero, a decimal, or a count above the room capacity; confirm it is rejected.
- [ ] Submit a valid booking and confirm its details appear in the confirmation.
- [ ] Open **My bookings** and confirm the new request and **Pending approval** status appear.
- [ ] Confirm the empty state says **No bookings yet** before any request is submitted.
- [ ] Navigate between all four pages and confirm the URL changes without a full reload.
- [ ] Check the layout at narrow mobile, tablet, and desktop widths.

## Interview questions and answers

**1. Why are the bookings stored in `App`?**  
`App` stays mounted while routes change, so keeping the shared bookings array there lets both the booking form and My Bookings access the same data.

**2. What makes an input controlled?**  
React state supplies its `value`, and an `onChange` handler updates that state whenever the user types or selects an option.

**3. Why does the form call `preventDefault()`?**  
It prevents the browser from reloading the page on submit, allowing the app to validate the values and update React state instead.

**4. Why do mapped elements need keys?**  
Keys give each rendered item a stable identity so React can efficiently update the correct item when a list changes.

**5. When does the room-loading effect run?**  
The `Rooms` effect has an empty dependency array, so it runs after that page first renders and copies the local mock room list into state.

**6. How does room search work?**  
The controlled search value is normalized to lowercase, then each room's name and building are checked with `includes()`.

**7. How does React Router avoid a full page refresh?**  
Links update the browser history and render the matching route inside the existing React app.

**8. What are the limitations of this version?**  
There is no server or database. Requests live in memory, so refreshing clears them; production use would need persistent storage and server-side validation.

**9. How is the number of students validated?**  
It must be a whole number greater than zero and no larger than the selected room's capacity.
