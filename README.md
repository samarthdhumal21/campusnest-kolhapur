# CampusNest — Kolhapur Student Living Finder

> **Hackathon MVP**: Empowering students and parents joining engineering colleges in Kolhapur, Maharashtra (DYPCET, DOT Shivaji University, KITCoEK, and SETI) to discover realistic accommodations and student messes, compare total monthly living expenses, and avoid unexpected financial surprises before moving to the city.

---

## 🌟 Key Features

1. **Budget-Based Dynamic Recommendation Engine**:
   - Accurately computes **Total Monthly Living Cost** = `Room Rent + Utilities + Food/Mess + Commute Transport`.
   - Truly dynamic — automatically updates whenever budget, college, meal preference, or distance changes.
   - Evaluates within-budget stays first and computes monthly budget buffers (e.g. *Fits ₹7,000 budget with ₹600/mo buffer*).
   - If no stay matches a low budget (e.g. ₹3,500), it transparently alerts the student and provides the **closest alternatives** ranked by smallest deficit without pretending they fit the budget.

2. **Automated Stay + Mess Pairing**:
   - For stays with built-in meals (`foodIncluded: true`), meal cost is automatically ₹0 extra.
   - For separate-mess stays, pairs each accommodation with the closest or best-matched authentic Kolhapur mess in the locality (e.g. *Annapurna Mess*, *Mahalakshmi Bhojanalay*, *Chhatrapati Shahu Mess*).

3. **Separate Security Deposit Accounting**:
   - One-time move-in deposits are shown prominently as separate, non-recurring expenses. They are never mixed into recurring monthly calculations.

4. **100% Itemized Calculation Transparency**:
   - Every single card displays its exact calculation formula:
     `Rent ₹3,200 + utilities ₹400 + mess (Mahalakshmi) ₹2,300 + transport ₹0 = estimated ₹5,900/month.`

5. **Side-by-Side Comparison Drawer**:
   - Students can pin up to 3 stays and inspect a feature-by-feature comparison (Rent, Mess, Transport, Deposit, Walk Time, Amenities).

6. **Searchable & Filterable Catalog (Explore Page)**:
   - Full directory of 15 illustrative accommodations and 10 student messes across Kolhapur (Kasaba Bawada, Rajarampuri, Vidyanagar, Gokul Shirgaon, Shahupuri, Tarabai Park, Panhala).

7. **Clean Firestore Service Layer**:
   - Built with repository interfaces (`ICollegeRepository`, `IAccommodationRepository`, `IMessRepository`) so connecting Google Cloud Firestore requires zero rewrites to the recommendation logic or components.

---

## 🚀 Quick Start Instructions

### Starting the Development Server
Open PowerShell or Command Prompt in the project directory:

```powershell
cd "C:\Users\Samarth\.gemini\antigravity-ide\scratch\campusnest-kolhapur"
.\dev.bat
```

Or using standard npm / npx:
```bash
npm run dev
```

The application will be live at:
👉 **`http://localhost:5173/`**

### Building for Production
```powershell
.\build.bat
```
Produces an optimized static bundle in the `dist/` folder in under 1 second.

---

## 📁 Project Architecture & Structure

```
campusnest-kolhapur/
├── index.html                     # Entry HTML with Google Fonts & responsive meta tags
├── package.json                   # Dependencies (React 19, Lucide icons, Vite)
├── vite.config.ts                 # Fast Vite configuration with React plugin
├── tsconfig.json                  # Strict TypeScript configuration
├── dev.bat                        # Instant one-click dev server launcher
├── build.bat                      # Instant one-click production builder
├── src/
│   ├── main.tsx                   # React root hydration
│   ├── App.tsx                    # Root state, navigation tabs, comparison drawer
│   ├── index.css                  # Custom student-friendly CSS design system
│   ├── types/
│   │   └── index.ts               # College, Accommodation, Mess & Recommendation types
│   ├── data/
│   │   ├── colleges.ts            # DYPCET, DOT Shivaji University, KITCoEK, SETI
│   │   ├── accommodations.ts      # 15 illustrative stays across Kolhapur student hubs
│   │   └── messes.ts              # 10 illustrative messes with authentic meal plans
│   ├── services/
│   │   ├── repositoryInterfaces.ts# Decoupled repository interfaces for Firestore
│   │   ├── mockDataService.ts     # In-memory implementation of repositories
│   │   └── firebaseConfig.example.ts # Guide and configuration for Firestore migration
│   ├── utils/
│   │   ├── formatters.ts          # Indian Rupee (₹) and distance formatters
│   │   └── recommendationEngine.ts# Core recurring cost engine & pairing logic
│   └── components/
│       ├── Navbar.tsx             # Sticky header with navigation & compare badge
│       ├── Hero.tsx               # Value proposition & quick college selectors
│       ├── RecommendationWizard.tsx # Interactive budget slider & preference controls
│       ├── ResultsList.tsx        # Ranked within-budget & fallback alternative cards
│       ├── ListingCard.tsx        # Card with itemized formula & paired mess
│       ├── CostBreakdownModal.tsx # Full detail modal with demo contact & rules
│       ├── ComparisonDrawer.tsx   # Side-by-side stay comparison
│       ├── ExploreCatalog.tsx     # Searchable catalog for stays and messes
│       ├── AboutTransparency.tsx  # Methodology, formula & Firestore architecture
│       └── Footer.tsx             # Student disclaimer & navigation links
```

---

## 🧮 Recommendation & Cost Calculation Engine

The recurring monthly formula is defined as:

$$\text{Total Monthly} = \text{Room Rent} + \text{Utilities} + \text{Food Cost} + \text{Commute Transport}$$

### 1. Food Cost Allocation
- **Food Included Stays**: Food cost is ₹0 extra (factored into room fee).
- **Separate Mess Stays**: Paired with the most economical/proximate mess in that locality.

### 2. Transport Cost Heuristics
- $\le 1.0\text{ km}$ to campus: **₹0/mo** (Walking distance)
- $1.1 - 3.0\text{ km}$: **₹350/mo** (Bicycle maintenance / shared auto)
- $3.1 - 6.0\text{ km}$: **₹800/mo** (KMT City bus pass / shared 6-seater)
- $> 6.0\text{ km}$: **₹1,400/mo** (Suburban transit / two-wheeler fuel)

### 3. One-Time Security Deposit
- Displayed separately (e.g. *₹5,000 refundable deposit*). It is never silently amortized or merged into monthly recurring calculations.

---

## 🗺️ Google Maps Directions & API Setup

CampusNest features full interactive Google Maps directions, travel mode switching (Walking, Bike/Auto, Bus), and an all-stays campus map view.

### 1. Graceful Keyless Fallback (Works Out-of-the-Box)
You do **NOT** need an API key to test or demo CampusNest:
- If `VITE_GOOGLE_MAPS_API_KEY` is not provided or fails, CampusNest switches to an elegant **fallback route view** showing college, stay, estimated commute time, and a **"Get directions in Google Maps"** button.
- The external Google Maps button constructs a direct URL (`https://www.google.com/maps/dir/?api=1&origin=...&destination=...&travelmode=...`) that works 100% reliably in any browser without requiring an API key.

### 2. Enabling Live In-App Google Maps
To render live embedded Google Maps and real-time routes:

1. **Create or select a Google Cloud Project**:
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Click the project drop-down and choose or create a new project (e.g., `campusnest-kolhapur`).

2. **Enable Required APIs**:
   - In the navigation menu, go to **APIs & Services** > **Library**.
   - Search for and **Enable** the following two APIs:
     - **Maps JavaScript API**: Renders the embedded map canvas, custom markers, and college-to-stay route lines.
     - **Directions API**: Calculates driving, transit, and walking route geometry, distance, and duration.

3. **Generate an API Key**:
   - Go to **APIs & Services** > **Credentials**.
   - Click **+ Create Credentials** > **API key**.
   - Copy your newly generated key.

4. **Restrict the API Key (Security Best Practice)**:
   - Click **Edit API Key** (pencil icon next to the key).
   - Under **Set application restrictions**, choose **Websites** (HTTP referrers).
   - Add authorized website referrers:
     - `http://localhost:5173/*`
     - `http://localhost:*/*`
     - `https://your-production-app.web.app/*` (if deploying)
   - Under **API restrictions**, choose **Restrict key**:
     - Select only **Maps JavaScript API** and **Directions API**.
   - Click **Save**.

5. **Configure Environment Variable**:
   - In the project root, create a `.env` file (or copy from `.env.example`):
     ```bash
     cp .env.example .env
     ```
   - Paste your key:
     ```env
     VITE_GOOGLE_MAPS_API_KEY=AIzaSyYourActualKeyHere
     ```
   - Restart the Vite development server (`npm run dev` or `.\dev.bat`).
   - `.env` is already included in `.gitignore` to prevent committing secrets to version control.

---

## 🛡️ Sample Data & Transparency Disclaimer

> **Hackathon Prototype Notice**: All listings, addresses, mess menus, phone numbers, and pricing models in CampusNest are **illustrative sample records** created to model real Kolhapur student life. Locations are approximate coordinates representing student localities (Kasaba Bawada, Rajarampuri, Vidyanagar, etc.). Contact numbers are illustrative placeholders (e.g. `+91 98XXX XXXXX`).

---

## 🔥 Steps to Connect Google Cloud Firestore Later

CampusNest is pre-architected for Google Cloud Firestore. To connect live data:

1. Install Firebase:
   ```bash
   npm install firebase
   ```
2. Create `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_PROJECT_ID=campusnest-kolhapur
   ```
3. Create three Firestore collections:
   - `colleges`: Document ID matching college ID (e.g. `dypcet`).
   - `accommodations`: Room listings with rent, utilities, deposit, amenities, coordinates (`latitude`, `longitude`), and college distances.
   - `messListings`: Mess records with monthly price, locality, coordinates, and meal plans.
4. Replace `mockDataService.ts` with `firestoreService.ts` implementing `IAccommodationRepository`, `ICollegeRepository`, and `IMessRepository`.
5. Since all components and the recommendation engine consume repository interfaces, **zero UI or algorithm changes are needed!**

