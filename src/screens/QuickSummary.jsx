import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Card } from '../components/Sections'

export default function QuickSummary(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-serif text-4xl mb-6">Quick Summary</h1>
        <div className="grid gap-4">
          <Card>
            <div className="font-serif text-xl mb-2">Face summary</div>
            <p className="text-[#0C0C0C]/70">Your facial structure emphasizes cheekbones. Consider textured crop.</p>
          </Card>
          <Card>
            <div className="font-serif text-xl mb-2">Physique summary</div>
            <p className="text-[#0C0C0C]/70">Lean build. Focus on progressive overload and 200–300 kcal surplus.</p>
          </Card>
          <Card>
            <div className="font-serif text-xl mb-2">Style vibe summary</div>
            <p className="text-[#0C0C0C]/70">Smart casual with muted palette and sharp silhouettes.</p>
          </Card>
          <Card>
            <div className="font-serif text-xl mb-2">Outfit highlight</div>
            <p className="text-[#0C0C0C]/70">Cream OCBD, tapered chinos, suede loafers, watch.</p>
          </Card>
        </div>
        <div className="mt-6 flex gap-3">
          <PrimaryButton to="/lookmaxxing">See Full Plan</PrimaryButton>
          <SecondaryButton to="/input">Refine Inputs</SecondaryButton>
          <SecondaryButton>Save as PDF</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
