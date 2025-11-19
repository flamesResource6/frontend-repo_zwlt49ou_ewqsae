import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#0C0C0C]">
      <div className="max-w-screen-md mx-auto px-6 pb-24 pt-8">
        <Outlet />
      </div>

      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur border border-[#D3C4A6] rounded-2xl shadow-xl px-4 py-2 flex gap-6">
        <Tab to="/home">Home</Tab>
        <Tab to="/plan">Plan</Tab>
        <Tab to="/profile">Profile</Tab>
      </nav>
    </div>
  )
}

function Tab({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-4 py-2 rounded-xl transition ${isActive ? 'bg-[#0C0C0C] text-[#F5EFE6]' : 'text-[#0C0C0C]'}`}
    >
      {children}
    </NavLink>
  )
}
