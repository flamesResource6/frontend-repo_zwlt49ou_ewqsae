import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Section } from '../components/Sections'

export default function Styling(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">Styling & Outfits</h1>
        <Section title="Daily outfits">
          <div className="text-sm text-[#0C0C0C]/70">Mon–Sun carousel (placeholder)</div>
        </Section>
        <Section title="Best colours">
          <div className="flex gap-2">
            {['#F5EFE6','#0C0C0C','#D3C4A6','#8B8B8B'].map(c => (
              <div key={c} className="w-12 h-12 rounded-xl border" style={{background:c}} />
            ))}
          </div>
        </Section>
        <Section title="Fits">
          <p className="text-sm text-[#0C0C0C]/80">Tapered trousers • Cropped jackets • Clean sneakers</p>
        </Section>
        <Section title="Wardrobe essentials">
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#0C0C0C]/80">
            <li>OCBD</li>
            <li>Tapered chinos</li>
            <li>Wool trousers</li>
            <li>Minimal sneakers</li>
            <li>Suede loafers</li>
            <li>Denim jacket</li>
            <li>Overcoat</li>
            <li>Merino knit</li>
            <li>Leather belt</li>
            <li>Watch</li>
          </ul>
        </Section>
        <Section title="Hairstyle synergy">
          <p className="text-sm text-[#0C0C0C]/80">Textured crop balances sharp silhouettes.</p>
        </Section>
        <div className="mt-6 flex gap-3">
          <PrimaryButton>Add to Wardrobe List</PrimaryButton>
          <SecondaryButton>Regenerate Outfits</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
