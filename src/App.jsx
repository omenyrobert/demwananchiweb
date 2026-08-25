import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import IndividualLoans from './pages/IndividualLoans'
import BusinessLoans from './pages/BusinessLoans'
import Savings from './pages/Savings'
import AgentBanking from './pages/AgentBanking'
import Logistics from './pages/Logistics'
import ContactUs from './pages/ContactUs'
import Apply from './pages/Apply'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/individual-loans" element={<IndividualLoans />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/agent-banking" element={<AgentBanking />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
