/**
 * Firebase Cloud Firestore Architecture & Migration Guide
 * 
 * To switch CampusNest from local seed data to live Google Cloud Firestore:
 * 
 * 1. Install Firebase SDK:
 *    npm install firebase
 * 
 * 2. Create a `.env.local` file with your project keys:
 *    VITE_FIREBASE_API_KEY=your_api_key_here
 *    VITE_FIREBASE_AUTH_DOMAIN=campusnest-kolhapur.firebaseapp.com
 *    VITE_FIREBASE_PROJECT_ID=campusnest-kolhapur
 *    VITE_FIREBASE_STORAGE_BUCKET=campusnest-kolhapur.appspot.com
 *    VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
 *    VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
 * 
 * 3. Firestore Collections Schema:
 *    - `colleges`: { id, name, shortName, locality, landmark, popularStreams, establishedYear, description }
 *    - `accommodations`: { id, name, type, locality, address, monthlyRent, monthlyUtilities, oneTimeDeposit, collegesServed, amenities, foodIncluded, genderAllowed, demoStatus, demoContact, rules, highlight, roomFeatures }
 *    - `messListings`: { id, name, locality, address, monthlyMealPrice, foodType, mealPlan, tiffinAvailable, sundaySpecial, distanceFromLocalities, collegesNearby, demoStatus, demoContact, specialties }
 * 
 * 4. Sample Firestore Service Implementation:
 * 
 * ```typescript
 * import { initializeApp } from 'firebase/app';
 * import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
 * import { IAccommodationRepository, ICollegeRepository, IMessRepository } from './repositoryInterfaces';
 * import { AccommodationListing, College, MessListing } from '../types';
 * 
 * const firebaseConfig = {
 *   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 *   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
 *   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
 *   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 *   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 *   appId: import.meta.env.VITE_FIREBASE_APP_ID
 * };
 * 
 * const app = initializeApp(firebaseConfig);
 * const db = getFirestore(app);
 * 
 * export class FirestoreAccommodationService implements IAccommodationRepository {
 *   async getAllAccommodations(): Promise<AccommodationListing[]> {
 *     const snapshot = await getDocs(collection(db, 'accommodations'));
 *     return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as AccommodationListing));
 *   }
 *   // ... other methods implement same interface
 * }
 * ```
 */

export const FIRESTORE_COLLECTIONS = {
  COLLEGES: 'colleges',
  ACCOMMODATIONS: 'accommodations',
  MESS_LISTINGS: 'messListings'
} as const;
