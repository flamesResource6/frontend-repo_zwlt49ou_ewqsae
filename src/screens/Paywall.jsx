import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Card } from '../components/Sections'

const tiers = [
  {name:'Weekly', price:'99 weekly'},
  {name:'Monthly', price:'199 monthly'},
  {name:'Yearly', price:'599 yearly', best:true},
]

export default function Paywall(){
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-sm mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3C4A6] text-sm mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D3C4A6]" /> Premium
        </div>
        <h1 className="font-serif text-4xl mb-2">Unlock Advanced Features</h1>
        <p className="text-[#0C0C0C]/70 mb-6">Hairstyle generator, tailored macros, outfit regeneration, PDF exports, priority updates</p>

        <div className="grid gap-4">
          {tiers.map(t => (
            <Card key={t.name}>
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <div className="font-serif text-2xl">{t.name}</div>
                  <div className="text-[#0C0C0C]/70">{t.price}</div>
                </div>
                {t.best && <span className="px-3 py-1 rounded-full bg-[#0C0C0C] text-[#F5EFE6] text-sm">Best value</span>}
              </div>
              <div className="mt-4 flex gap-3">
                <PrimaryButton className="flex-1">Continue</PrimaryButton>
                <SecondaryButton className="flex-1">Restore Purchase</SecondaryButton>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <SecondaryButton>Continue with Free</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
