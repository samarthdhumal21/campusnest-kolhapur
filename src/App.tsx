import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBento } from './components/FeaturesBento';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedStaysCarousel } from './components/FeaturedStaysCarousel';
import { WhyCampusNest } from './components/WhyCampusNest';
import { ContactFeedback } from './components/ContactFeedback';
import { SectionLabel } from './components/SectionLabel';
import { RecommendationWizard } from './components/RecommendationWizard';
import { ResultsList } from './components/ResultsList';
import { CostBreakdownModal } from './components/CostBreakdownModal';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { ExploreCatalog } from './components/ExploreCatalog';
import { AboutTransparency } from './components/AboutTransparency';
import { Footer } from './components/Footer';

import { accommodationsData } from './data/accommodations';
import { messesData } from './data/messes';
import { collegesData } from './data/colleges';
import { generateRecommendations, findBestPairedMess, calculateMonthlyTransport } from './utils/recommendationEngine';
import { AccommodationListing, RecommendationResult, SearchPreferences } from './types';
import { formatINR } from './utils/formatters';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'find' | 'explore' | 'about'>('home');

  // Search Preferences State
  const [preferences, setPreferences] = useState<SearchPreferences>({
    collegeId: 'dypcet',
    monthlyBudget: 6500,
    foodPreference: 'either',
    accommodationType: 'all',
    maxDistanceKm: 5,
    gender: 'all'
  });

  // Detailed Modal View State
  const [selectedResult, setSelectedResult] = useState<RecommendationResult | null>(null);

  // Side-by-Side Comparison State
  const [comparedResults, setComparedResults] = useState<RecommendationResult[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);

  // Dynamic Recommendation Engine Evaluation
  const recommendationOutput = useMemo(() => {
    return generateRecommendations(preferences, accommodationsData, messesData);
  }, [preferences]);

  // Comparison Handlers
  const handleToggleCompare = (result: RecommendationResult) => {
    if (comparedResults.some(r => r.id === result.id)) {
      setComparedResults(prev => prev.filter(r => r.id !== result.id));
    } else {
      if (comparedResults.length >= 3) {
        alert('You can compare a maximum of 3 stays side-by-side.');
        return;
      }
      setComparedResults(prev => [...prev, result]);
      setIsCompareDrawerOpen(true);
    }
  };

  const handleRemoveCompareItem = (id: string) => {
    setComparedResults(prev => prev.filter(r => r.id !== id));
  };

  const handleClearCompare = () => {
    setComparedResults([]);
    setIsCompareDrawerOpen(false);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setPreferences({
      collegeId: preferences.collegeId,
      monthlyBudget: 6500,
      foodPreference: 'either',
      accommodationType: 'all',
      maxDistanceKm: 8,
      gender: 'all'
    });
  };

  const handleFindStayClick = (collegeId?: string) => {
    if (collegeId) {
      setPreferences(prev => ({ ...prev, collegeId }));
    }
    setActiveTab('find');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAccommodationDetails = (acc: AccommodationListing) => {
    const collegeDist = acc.collegesServed.find(cs => cs.collegeId === preferences.collegeId) || acc.collegesServed[0];
    const pairedMess = acc.foodIncluded ? undefined : findBestPairedMess(acc, messesData);
    const transport = calculateMonthlyTransport(collegeDist.distanceKm);
    const foodCost = acc.foodIncluded ? 0 : (pairedMess ? pairedMess.monthlyMealPrice : 2400);
    const totalMonthly = acc.monthlyRent + acc.monthlyUtilities + foodCost + transport.cost;

    let formulaText = '';
    if (acc.foodIncluded) {
      formulaText = `Rent ${formatINR(acc.monthlyRent)} + utilities ${formatINR(acc.monthlyUtilities)} + food included ${formatINR(0)} + transport ${formatINR(transport.cost)} = estimated ${formatINR(totalMonthly)}/month`;
    } else {
      const messName = pairedMess ? pairedMess.name : 'Mess';
      formulaText = `Rent ${formatINR(acc.monthlyRent)} + utilities ${formatINR(acc.monthlyUtilities)} + mess (${messName}) ${formatINR(foodCost)} + transport ${formatINR(transport.cost)} = estimated ${formatINR(totalMonthly)}/month`;
    }

    const res: RecommendationResult = {
      id: `${acc.id}-modal`,
      accommodation: acc,
      pairedMess,
      distanceToChosenCollege: collegeDist.distanceKm,
      breakdown: {
        rent: acc.monthlyRent,
        utilities: acc.monthlyUtilities,
        foodCost,
        transportCost: transport.cost,
        transportMode: transport.mode,
        totalMonthly,
        deposit: acc.oneTimeDeposit,
        formulaText
      },
      isWithinBudget: preferences.monthlyBudget >= totalMonthly,
      budgetDelta: preferences.monthlyBudget - totalMonthly,
      matchReasons: [
        `${collegeDist.distanceKm} km from chosen campus`,
        acc.highlight
      ],
      valueScore: 100
    };

    setSelectedResult(res);
  };

  return (
    <div className="app-container">
      {/* Floating Glass Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={tab => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCompareCount={comparedResults.length}
        openCompareDrawer={() => setIsCompareDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {/* TAB 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div>
            {/* 1. Hero Section with New Palace Kolhapur Background & College Strip */}
            <Hero
              selectedCollegeId={preferences.collegeId}
              onFindStayClick={handleFindStayClick}
              onExploreClick={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Features Bento Grid */}
            <FeaturesBento />

            {/* 3. How It Works Section */}
            <HowItWorks onFindStayClick={() => handleFindStayClick()} />

            {/* 4. Live Budget Matching Engine Preview on Homepage */}
            <section className="ecoriz-section">
              <div className="section-container">
                <SectionLabel label="Interactive Matcher" />
                <div className="section-heading-group">
                  <h2 className="section-main-heading">Test Your Monthly Living Budget</h2>
                  <p className="section-sub-heading">
                    Adjust the college, budget slider, or meal preferences to instantly see ranked stays and matching messes.
                  </p>
                </div>

                <RecommendationWizard
                  preferences={preferences}
                  onPreferencesChange={setPreferences}
                />

                <ResultsList
                  withinBudget={recommendationOutput.withinBudget}
                  overBudgetAlternatives={recommendationOutput.overBudgetAlternatives}
                  preferences={preferences}
                  onResetFilters={handleResetFilters}
                  onOpenDetails={setSelectedResult}
                  comparedResults={comparedResults}
                  onToggleCompare={handleToggleCompare}
                />
              </div>
            </section>

            {/* 5. Featured Stays Carousel */}
            <FeaturedStaysCarousel onOpenDetails={handleOpenAccommodationDetails} />

            {/* 6. Why CampusNest & Trust Quotes */}
            <WhyCampusNest />

            {/* 7. Contact & Inquiries */}
            <ContactFeedback />
          </div>
        )}

        {/* TAB 2: FIND MY STAY (DEDICATED MATCHER PAGE) */}
        {activeTab === 'find' && (
          <div className="ecoriz-section">
            <div className="section-container">
              <SectionLabel label="Budget Engine" />
              <div className="section-heading-group">
                <h1 className="section-main-heading">Find My Stay — Kolhapur Living Matcher</h1>
                <p className="section-sub-heading">
                  Filter by college, monthly budget limit, and meal options. Our engine ranks options within budget first, then provides closest alternatives if needed.
                </p>
              </div>

              <RecommendationWizard
                preferences={preferences}
                onPreferencesChange={setPreferences}
              />

              <ResultsList
                withinBudget={recommendationOutput.withinBudget}
                overBudgetAlternatives={recommendationOutput.overBudgetAlternatives}
                preferences={preferences}
                onResetFilters={handleResetFilters}
                onOpenDetails={setSelectedResult}
                comparedResults={comparedResults}
                onToggleCompare={handleToggleCompare}
              />
            </div>
          </div>
        )}

        {/* TAB 3: EXPLORE ALL LISTINGS CATALOG */}
        {activeTab === 'explore' && (
          <div className="ecoriz-section">
            <div className="section-container">
              <ExploreCatalog
                onOpenAccommodationDetails={handleOpenAccommodationDetails}
              />
            </div>
          </div>
        )}

        {/* TAB 4: ABOUT & DATA TRANSPARENCY */}
        {activeTab === 'about' && (
          <div className="ecoriz-section">
            <div className="section-container">
              <AboutTransparency />
            </div>
          </div>
        )}
      </main>

      {/* Cost Breakdown Details Modal */}
      <CostBreakdownModal
        result={selectedResult}
        college={collegesData.find(c => c.id === preferences.collegeId) || collegesData[0]}
        onClose={() => setSelectedResult(null)}
      />

      {/* Side-by-Side Comparison Drawer */}
      <ComparisonDrawer
        isOpen={isCompareDrawerOpen}
        onClose={() => setIsCompareDrawerOpen(false)}
        comparedResults={comparedResults}
        onRemoveItem={handleRemoveCompareItem}
        onClearAll={handleClearCompare}
        onOpenDetails={setSelectedResult}
      />

      {/* Footer */}
      <Footer
        onSelectTab={tab => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCollege={handleFindStayClick}
      />
    </div>
  );
};

export default App;
