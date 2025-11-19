import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Section, Chips } from '../components/Sections'

export default function Lookmaxxing(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">Detailed Lookmaxxing</h1>
        <Section title="Face symmetry" subtitle="Score + notes">
          <div className="text-3xl font-serif">82/100</div>
        </Section>
        <Section title="Strong features">
          <Chips items={["Cheekbones","Eye area","Lips"]} />
        </Section>
        <Section title="Weak features">
          <Chips items={["Under-eye hollow","Jawline definition"]} />
        </Section>
        <Section title="Grooming fixes">
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#0C0C0C]/80">
            <li>Light stubble (5–7 days)</li>
            <li>Trim brows, clean edges</li>
            <li>Niacinamide AM, retinol PM</li>
          </ul>
        </Section>
        <Section title="Best hairstyles">
          <div className="text-sm text-[#0C0C0C]/70">Textured crop • Side-part • Slick back</div>
        </Section>
        <Section title="Right accessories">
          <div className="text-sm text-[#0C0C0C]/70">Thin metal frames • Minimal ring • Leather strap watch</div>
        </Section>
        <div className="mt-6 flex gap-3">
          <PrimaryButton>Add to Weekly Tasks</PrimaryButton>
          <SecondaryButton>Try Another Hairstyle</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
