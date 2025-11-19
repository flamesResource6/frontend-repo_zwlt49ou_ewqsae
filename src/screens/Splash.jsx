import { PrimaryButton, TextLink } from '../components/Buttons'

export default function Splash() {
  return (
    <div className="min-h-screen grid place-items-center bg-[#F5EFE6] text-center px-6">
      <div>
        <div className="text-5xl font-serif">RUVA</div>
        <p className="mt-3 text-[#0C0C0C]/70">Upgrade your face, physique & style</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <PrimaryButton to="/onboarding">Get Started</PrimaryButton>
          <TextLink to="/auth">Already have an account? Sign in</TextLink>
        </div>
      </div>
    </div>
  )
}
