import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Section } from '../components/Sections'

export default function Physique(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">Physique Plan</h1>
        <Section title="Body type" subtitle="ECTOMORPH">
          <p className="text-[#0C0C0C]/70">Lean frame. Prioritize strength and calories.</p>
        </Section>
        <Section title="7-day workout plan">
          <div className="grid gap-2 text-sm text-[#0C0C0C]/80">
            <div>D1 Push • 4x6–8</div>
            <div>D2 Pull • 4x6–8</div>
            <div>D3 Legs • 4x6–10</div>
            <div>D4 Rest</div>
            <div>D5 Upper • 3x8–10</div>
            <div>D6 Lower • 3x8–10</div>
            <div>D7 Rest</div>
          </div>
        </Section>
        <Section title="Daily posture fixes">
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#0C0C0C]/80">
            <li>Wall slides x 10</li>
            <li>Chin tucks x 10</li>
            <li>Hip flexor stretch 60s</li>
          </ul>
        </Section>
        <Section title="Diet guidelines">
          <p className="text-sm text-[#0C0C0C]/80">+300 kcal surplus • 1.8g/kg protein • 25–30% fats • Carbs fill.</p>
        </Section>
        <div className="mt-6 flex gap-3">
          <PrimaryButton>Start 7-Day Cycle</PrimaryButton>
          <SecondaryButton>Swap Exercise</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
