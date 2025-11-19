import { PrimaryButton, SecondaryButton, TextLink } from '../components/Buttons'
import { Card } from '../components/Sections'

export default function Auth() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 pt-12">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="font-serif text-4xl mb-6">Create your RUVA profile</h1>
        <Card>
          <div className="grid gap-3">
            <input placeholder="Email" className="border border-[#D3C4A6] rounded-xl px-4 py-3" />
            <input type="password" placeholder="Password" className="border border-[#D3C4A6] rounded-xl px-4 py-3" />
            <PrimaryButton to="/input">Continue</PrimaryButton>
            <SecondaryButton to="/input">Continue as Guest</SecondaryButton>
            <div className="text-center text-sm text-[#0C0C0C]/60">or</div>
            <SecondaryButton>Continue with Google</SecondaryButton>
            <TextLink className="justify-self-start">Forgot password?</TextLink>
          </div>
        </Card>
      </div>
    </div>
  )
}
