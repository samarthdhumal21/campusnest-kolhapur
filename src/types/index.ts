export type AccommodationType = 
  | 'Single Room'
  | 'Shared Room (2-Sharing)'
  | 'Shared Room (3-Sharing)'
  | '1RK / 1BHK Flat'
  | 'Student Hostel / PG';

export type GenderAllowed = 'Boys' | 'Girls' | 'Co-ed / Any';

export interface CollegeDistance {
  collegeId: string;
  distanceKm: number;
  walkingMinutes: number;
}

export interface AccommodationListing {
  id: string;
  name: string;
  type: AccommodationType;
  locality: string;
  address: string;
  monthlyRent: number;
  monthlyUtilities: number;
  oneTimeDeposit: number;
  collegesServed: CollegeDistance[];
  amenities: string[];
  foodIncluded: boolean;
  foodIncludedNotes?: string;
  genderAllowed: GenderAllowed;
  demoStatus: string; // e.g. "Demo Listing • Illustrative Data"
  demoContact: {
    ownerName: string;
    phone: string;
    timing: string;
    note: string;
  };
  latitude: number;
  longitude: number;
  rules: string[];
  highlight: string;
  roomFeatures: string[];
}

export type FoodType = 'Pure Veg' | 'Veg & Non-Veg' | 'Kolhapuri Special (Veg & Non-Veg)';

export interface MessListing {
  id: string;
  name: string;
  locality: string;
  address: string;
  latitude: number;
  longitude: number;
  monthlyMealPrice: number;
  foodType: FoodType;
  mealPlan: string;
  tiffinAvailable: boolean;
  sundaySpecial: string;
  distanceFromLocalities: Record<string, number>; // distance in km from localities
  collegesNearby: { collegeId: string; distanceKm: number }[];
  demoStatus: string;
  demoContact: {
    managerName: string;
    phone: string;
    timing: string;
    note: string;
  };
  specialties: string[];
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  locality: string;
  landmark: string;
  latitude: number;
  longitude: number;
  popularStreams: string[];
  establishedYear: number;
  description: string;
  logo: string;
}

export interface SearchPreferences {
  collegeId: string;
  monthlyBudget: number;
  foodPreference: 'either' | 'included' | 'separate_mess';
  accommodationType: string; // 'all' or specific type
  maxDistanceKm: number;
  gender: string; // 'all' | 'Boys' | 'Girls'
}

export interface ItemizedBreakdown {
  rent: number;
  utilities: number;
  foodCost: number;
  transportCost: number;
  transportMode: string;
  totalMonthly: number;
  deposit: number;
  formulaText: string;
}

export interface RecommendationResult {
  id: string;
  accommodation: AccommodationListing;
  pairedMess?: MessListing;
  distanceToChosenCollege: number;
  breakdown: ItemizedBreakdown;
  isWithinBudget: boolean;
  budgetDelta: number; // monthlyBudget - totalMonthly (positive = within budget, negative = over budget)
  matchReasons: string[];
  valueScore: number;
}
