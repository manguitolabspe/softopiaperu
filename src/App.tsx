import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModulesSection } from './components/ModulesSection';
import { SystemPortalSection } from './components/SystemPortalSection';
import { LicensesSection } from './components/LicensesSection';
import { CamerasSection } from './components/CamerasSection';
import { SaasSection } from './components/SaasSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileLeadBar } from './components/MobileLeadBar';
import { SoftiBot } from './components/SoftiBot';
import { ModuleDetailModal } from './components/ModuleDetailModal';
import { PlanQuoteModal } from './components/PlanQuoteModal';
import { ModuleDetail, SelectedPlanQuote } from './types';

export const App: React.FC = () => {
  const [speechText, setSpeechText] = useState(
    '⚡ <b>¡Cotiza en 30 segundos!</b> Elige el rubro de tu negocio abajo para calcular tu plan ideal y agendar tu demo gratis guiada.'
  );

  const [billingMode, setBillingMode] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedModule, setSelectedModule] = useState<ModuleDetail | null>(null);
  const [selectedPlanQuote, setSelectedPlanQuote] = useState<SelectedPlanQuote | null>(null);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-softopia-blue/10 selection:text-softopia-blue min-h-screen">
      <Navbar />

      <main>
        <Hero speechText={speechText} setSpeechText={setSpeechText} />
        <ModulesSection onSelectModule={setSelectedModule} setSpeechText={setSpeechText} />
        <SystemPortalSection />
        <LicensesSection />
        <CamerasSection />
        <SaasSection />
        <PricingSection
          billingMode={billingMode}
          setBillingMode={setBillingMode}
          onOpenQuoteModal={setSelectedPlanQuote}
          setSpeechText={setSpeechText}
        />
        <ContactSection setSpeechText={setSpeechText} />
      </main>

      <Footer />
      <MobileLeadBar />
      <SoftiBot />

      {/* Interactive Modals */}
      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
      />

      <PlanQuoteModal
        plan={selectedPlanQuote}
        billingMode={billingMode}
        onClose={() => setSelectedPlanQuote(null)}
        setSpeechText={setSpeechText}
      />
    </div>
  );
};

export default App;
