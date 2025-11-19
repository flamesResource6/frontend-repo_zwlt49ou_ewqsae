import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Section } from '../components/Sections'

export default function GlowUp(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">90-Day Glow-Up Map</h1>
        <Section title="Timeline">
          <div className="text-sm text-[#0C0C0C]/70">Weeks 1–12 roadmap (placeholder)</div>
        </Section>
        <Section title="Weekly tasks">
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#0C0C0C]/80">
            <li>Grooming + skin</li>
            <li>Fitness + fashion</li>
            <li>Social presence checklist</li>
          </ul>
        </Section>
        <Section title="Progress tracker">
          <div className="w-full bg-[#D3C4A6]/30 rounded-full h-3">
            <div className="bg-[#0C0C0C] h-3 rounded-full w-1/3" />
          </div>
        </Section>
        <div className="mt-6 flex gap-3">
          <PrimaryButton>Start Week 1</PrimaryButton>
          <SecondaryButton>Export Plan</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
