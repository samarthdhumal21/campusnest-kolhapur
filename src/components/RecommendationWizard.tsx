import React from 'react';
import { SearchPreferences } from '../types';
import { collegesData } from '../data/colleges';
import { formatINR } from '../utils/formatters';
import { Sliders, Utensils, Building2, MapPin, Users, IndianRupee } from 'lucide-react';

interface RecommendationWizardProps {
  preferences: SearchPreferences;
  onPreferencesChange: (newPrefs: SearchPreferences) => void;
}

export const RecommendationWizard: React.FC<RecommendationWizardProps> = ({
  preferences,
  onPreferencesChange
}) => {
  const selectedCollege = collegesData.find(c => c.id === preferences.collegeId) || collegesData[0];

  const update = (patch: Partial<SearchPreferences>) => {
    onPreferencesChange({ ...preferences, ...patch });
  };

  const budgetPresets = [4500, 6000, 7500, 9500, 12000];

  return (
    <div className="wizard-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sliders size={20} color="#2563eb" />
            Budget & Preference Matcher
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Customize your criteria below. Results and cost breakdowns update in real time.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', background: '#f8fafc', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.8rem', color: '#475569' }}>
          <img
            src={selectedCollege.logo}
            alt=""
            width={18}
            height={18}
            style={{ width: '18px', height: '18px', objectFit: 'contain' }}
          />
          <span>Focus: <strong>{selectedCollege.shortName}</strong> ({selectedCollege.locality})</span>
        </div>
      </div>

      <div className="wizard-grid">
        {/* College Selector */}
        <div className="form-group">
          <label className="form-label" htmlFor="college-select">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building2 size={15} color="#2563eb" />
              Target Engineering College
            </span>
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px',
              flexShrink: 0,
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <img
                src={selectedCollege.logo}
                alt={`${selectedCollege.name} logo`}
                width={32}
                height={32}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
            <select
              id="college-select"
              className="form-select"
              value={preferences.collegeId}
              onChange={e => update({ collegeId: e.target.value })}
              style={{ flex: 1 }}
            >
              {collegesData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.locality})
                </option>
              ))}
            </select>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            Landmark: {selectedCollege.landmark}
          </span>
        </div>

        {/* Monthly Budget Input & Slider */}
        <div className="form-group">
          <label className="form-label">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <IndianRupee size={15} color="#2563eb" />
              Monthly Budget (Rent + Food + Utilities)
            </span>
            <span className="budget-val-badge">
              {formatINR(preferences.monthlyBudget)}
            </span>
          </label>
          <div className="range-container">
            <input
              type="range"
              min={3000}
              max={15000}
              step={250}
              value={preferences.monthlyBudget}
              onChange={e => update({ monthlyBudget: Number(e.target.value) })}
              className="custom-range"
              id="budget-range-input"
            />
            <div className="budget-presets">
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', alignSelf: 'center' }}>Quick:</span>
              {budgetPresets.map(preset => (
                <button
                  key={preset}
                  type="button"
                  className={`preset-chip ${preferences.monthlyBudget === preset ? 'active' : ''}`}
                  onClick={() => update({ monthlyBudget: preset })}
                >
                  {formatINR(preset)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Preference */}
        <div className="form-group">
          <label className="form-label">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Utensils size={15} color="#2563eb" />
              Food / Meal Preference
            </span>
          </label>
          <div className="segmented-group">
            <button
              type="button"
              className={`segment-btn ${preferences.foodPreference === 'either' ? 'active' : ''}`}
              onClick={() => update({ foodPreference: 'either' })}
            >
              Either (Best Value)
            </button>
            <button
              type="button"
              className={`segment-btn ${preferences.foodPreference === 'included' ? 'active' : ''}`}
              onClick={() => update({ foodPreference: 'included' })}
            >
              Food Included
            </button>
            <button
              type="button"
              className={`segment-btn ${preferences.foodPreference === 'separate_mess' ? 'active' : ''}`}
              onClick={() => update({ foodPreference: 'separate_mess' })}
            >
              Separate Mess
            </button>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {preferences.foodPreference === 'included' && 'Only showing stays with built-in meals (zero extra mess cost).'}
            {preferences.foodPreference === 'separate_mess' && 'Pairs rooms with nearby authentic Kolhapuri/Veg student messes.'}
            {preferences.foodPreference === 'either' && 'Evaluates both options and ranks them by lowest total expenditure.'}
          </span>
        </div>

        {/* Accommodation Type */}
        <div className="form-group">
          <label className="form-label" htmlFor="type-select">
            <span>Accommodation Type</span>
          </label>
          <select
            id="type-select"
            className="form-select"
            value={preferences.accommodationType}
            onChange={e => update({ accommodationType: e.target.value })}
          >
            <option value="all">All Room Types (Any)</option>
            <option value="Shared Room (2-Sharing)">Shared Room (2-Sharing)</option>
            <option value="Shared Room (3-Sharing)">Shared Room (3-Sharing)</option>
            <option value="Single Room">Single Room (Private)</option>
            <option value="Student Hostel / PG">Student Hostel / PG</option>
            <option value="1RK / 1BHK Flat">1RK / 1BHK Flat</option>
          </select>
        </div>

        {/* Distance Preference */}
        <div className="form-group">
          <label className="form-label">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={15} color="#2563eb" />
              Max Distance to Campus: {preferences.maxDistanceKm} km
            </span>
          </label>
          <input
            type="range"
            min={1}
            max={15}
            step={0.5}
            value={preferences.maxDistanceKm}
            onChange={e => update({ maxDistanceKm: Number(e.target.value) })}
            className="custom-range"
            id="distance-range-input"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' }}>
            <span>1 km (Walk)</span>
            <span>5 km (Cycle/Bus)</span>
            <span>15 km (Wide Area)</span>
          </div>
        </div>

        {/* Gender Preference */}
        <div className="form-group">
          <label className="form-label">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Users size={15} color="#2563eb" />
              Gender Restriction
            </span>
          </label>
          <div className="segmented-group">
            <button
              type="button"
              className={`segment-btn ${preferences.gender === 'all' ? 'active' : ''}`}
              onClick={() => update({ gender: 'all' })}
            >
              Any / Co-ed
            </button>
            <button
              type="button"
              className={`segment-btn ${preferences.gender === 'Boys' ? 'active' : ''}`}
              onClick={() => update({ gender: 'Boys' })}
            >
              Boys Only
            </button>
            <button
              type="button"
              className={`segment-btn ${preferences.gender === 'Girls' ? 'active' : ''}`}
              onClick={() => update({ gender: 'Girls' })}
            >
              Girls Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
