import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Section, Chips } from '../components/Sections'

const goals = ['Sharper jawline','Lose fat','Build muscle','Dress sharper','Clear skin']
const vibes = ['Minimalist','Street','Smart casual','Techwear','Preppy','Classic']

export default function UserInput() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">Your inputs</h1>

        <Section title="Face photo" subtitle="Front, well-lit">
          <div className="grid gap-3">
            <button className="px-4 py-3 rounded-xl border border-[#D3C4A6] w-fit">Upload face photo</button>
            <p className="text-sm text-[#0C0C0C]/70">No sunglasses, neutral expression</p>
          </div>
        </Section>

        <Section title="Metrics">
          <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            <input placeholder="Height" className="border border-[#D3C4A6] rounded-xl px-4 py-3" />
            <input placeholder="Weight" className="border border-[#D3C4A6] rounded-xl px-4 py-3" />
            <input placeholder="Age" className="border border-[#D3C4A6] rounded-xl px-4 py-3" />
          </div>
        </Section>

        <Section title="Personal goals">
          <Chips items={goals} />
        </Section>

        <Section title="Style vibe">
          <Chips items={vibes} />
        </Section>

        <div className="mt-6 flex gap-3">
          <PrimaryButton to="/processing">Generate Plan</PrimaryButton>
          <SecondaryButton>Save & Do Later</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
