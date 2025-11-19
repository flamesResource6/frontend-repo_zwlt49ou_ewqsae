import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from './screens/Splash'
import Onboarding from './screens/Onboarding'
import Auth from './screens/Auth'
import UserInput from './screens/UserInput'
import Processing from './screens/Processing'
import QuickSummary from './screens/QuickSummary'
import Lookmaxxing from './screens/Lookmaxxing'
import Physique from './screens/Physique'
import Styling from './screens/Styling'
import GlowUp from './screens/GlowUp'
import Paywall from './screens/Paywall'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/input" element={<UserInput />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/summary" element={<QuickSummary />} />
      <Route path="/lookmaxxing" element={<Lookmaxxing />} />
      <Route path="/physique" element={<Physique />} />
      <Route path="/styling" element={<Styling />} />
      <Route path="/glowup" element={<GlowUp />} />
      <Route path="/paywall" element={<Paywall />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
