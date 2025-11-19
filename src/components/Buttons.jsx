import { Link } from 'react-router-dom'

export function PrimaryButton({ to, onClick, children, className = '' }) {
  const base = 'inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0C0C0C] text-[#F5EFE6] shadow-sm hover:shadow-md transition shadow-black/10 hover:ring-2 hover:ring-[#D3C4A6]'
  if (to) return <Link to={to} className={`${base} ${className}`}>{children}</Link>
  return <button onClick={onClick} className={`${base} ${className}`}>{children}</button>
}

export function SecondaryButton({ to, onClick, children, className = '' }) {
  const base = 'inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#D3C4A6] text-[#0C0C0C] hover:bg-[#F5EFE6]/60 transition'
  if (to) return <Link to={to} className={`${base} ${className}`}>{children}</Link>
  return <button onClick={onClick} className={`${base} ${className}`}>{children}</button>
}

export function TextLink({ to, onClick, children, className = '' }) {
  const base = 'text-sm text-[#0C0C0C] underline underline-offset-4 hover:text-[#0C0C0C]/80'
  if (to) return <Link to={to} className={`${base} ${className}`}>{children}</Link>
  return <button onClick={onClick} className={`${base} ${className}`}>{children}</button>
}
