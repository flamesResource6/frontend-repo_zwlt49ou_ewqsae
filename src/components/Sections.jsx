export function Section({ title, subtitle, children, actions }) {
  return (
    <section className="mb-10">
      {title && (
        <div className="mb-4">
          <h2 className="text-3xl font-serif tracking-tight mb-1">{title}</h2>
          {subtitle && <p className="text-[#0C0C0C]/70">{subtitle}</p>}
        </div>
      )}
      <div className="bg-white border border-[#D3C4A6] rounded-2xl shadow-sm p-5">{children}</div>
      {actions && <div className="mt-4 flex gap-3">{actions}</div>}
    </section>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`bg-white border border-[#D3C4A6] rounded-2xl p-5 shadow-sm ${className}`}>{children}</div>
}

export function Chips({ items = [], multiple = true }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((it) => (
        <span key={it} className="px-4 py-2 rounded-full border border-[#D3C4A6] text-sm">{it}</span>
      ))}
    </div>
  )
}
