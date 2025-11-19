import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Card } from '../components/Sections'

const slides = [
  { title: 'Build a better body', points: ['Posture', 'Workouts', 'Diet'], chip: 'Physique' },
  { title: 'Max your facial impact', points: ['Grooming', 'Hair', 'Symmetry'], chip: 'Lookmaxxing' },
  { title: 'Dress with intent', points: ['Colours', 'Fits', 'Outfits'], chip: 'Styling' },
]

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <div className="mb-6">
          <h1 className="font-serif text-4xl">Welcome</h1>
          <p className="text-[#0C0C0C]/70">Select what you care about</p>
        </div>

        <div className="grid gap-4">
          {slides.map((s) => (
            <Card key={s.title}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-serif">{s.title}</div>
                  <p className="text-sm text-[#0C0C0C]/70">{s.points.join(' • ')}</p>
                </div>
                <span className="px-4 py-2 rounded-full border border-[#D3C4A6]">{s.chip}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <PrimaryButton to="/auth">Continue</PrimaryButton>
          <SecondaryButton to="/auth">Skip</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
