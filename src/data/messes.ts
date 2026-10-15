import { MessListing } from '../types';

export const messesData: MessListing[] = [
  {
    id: 'mess-bawada-01',
    name: 'Mahalakshmi Student Bhojanalay',
    locality: 'Kasaba Bawada',
    address: 'Opp. Bawada Sugar Mill Gate, Kasaba Bawada, Kolhapur',
    latitude: 16.7335,
    longitude: 74.2450,
    monthlyMealPrice: 2300,
    foodType: 'Pure Veg',
    mealPlan: '2 Meals/Day (Lunch: 11:30 AM – 2:30 PM & Dinner: 7:30 PM – 10:00 PM)',
    tiffinAvailable: true,
    sundaySpecial: 'Puri Bhaji, Shrikhand, Dal Fry & Gulab Jamun',
    specialties: ['Unlimited Chapati & Bhakri', '2 Fresh Sabzis Daily', 'Panchganga Gadi Special Dal', 'Sunday Sweet'],
    distanceFromLocalities: {
      'Kasaba Bawada': 0.3,
      'Tarabai Park': 2.5,
      'Shahupuri': 3.8,
      'Rajarampuri': 5.5,
      'Vidyanagar / University Campus': 8.5,
      'Gokul Shirgaon': 14.0,
      'Cyber Chowk / CSIBER Area': 6.2,
      'Somwar Peth / Panhala Road': 17.0
    },
    collegesNearby: [
      { collegeId: 'dypcet', distanceKm: 0.5 },
      { collegeId: 'dot-su', distanceKm: 8.5 },
      { collegeId: 'kitcoek', distanceKm: 14.0 },
      { collegeId: 'seti-panhala', distanceKm: 17.5 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Pandurang Gaikwad (Demo)',
      phone: '+91 94210 XXXXX (Fictional Demo)',
      timing: '10:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-bawada-02',
    name: 'Bawada Maratha Special Bhojanalay',
    locality: 'Kasaba Bawada',
    address: 'Near Line Bazaar Chowk, Kasaba Bawada',
    latitude: 16.7310,
    longitude: 74.2420,
    monthlyMealPrice: 2800,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: 'Lunch & Dinner 7 days/week (Wednesday & Sunday Non-Veg)',
    tiffinAvailable: true,
    sundaySpecial: 'Authentic Kolhapuri Chicken Thali with Tambda-Pandhra Rassa',
    specialties: ['Tambda-Pandhra Rassa', 'Jawari Bhakri & Chapati', 'Special Sukka on Wednesdays', 'Unlimited Veg Thali daily'],
    distanceFromLocalities: {
      'Kasaba Bawada': 0.5,
      'Tarabai Park': 2.2,
      'Shahupuri': 3.5,
      'Rajarampuri': 5.2,
      'Vidyanagar / University Campus': 8.8,
      'Gokul Shirgaon': 14.5,
      'Cyber Chowk / CSIBER Area': 6.0,
      'Somwar Peth / Panhala Road': 17.2
    },
    collegesNearby: [
      { collegeId: 'dypcet', distanceKm: 0.8 },
      { collegeId: 'dot-su', distanceKm: 8.8 },
      { collegeId: 'kitcoek', distanceKm: 14.5 },
      { collegeId: 'seti-panhala', distanceKm: 17.2 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Abhijeet Patil (Demo)',
      phone: '+91 98800 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-rajaram-01',
    name: 'Annapurna Executive Student Mess',
    locality: 'Rajarampuri',
    address: '4th Lane Corner, Rajarampuri, Kolhapur',
    latitude: 16.6940,
    longitude: 74.2515,
    monthlyMealPrice: 2500,
    foodType: 'Pure Veg',
    mealPlan: '2 Meals/Day Unlimited Thali + College Dabba Delivery Option',
    tiffinAvailable: true,
    sundaySpecial: 'Puran Poli with Katachi Amti & Basundi',
    specialties: ['Clean hygienic steel thalis', 'Hot rotis served on table', 'Sprouted usal', 'Buttermilk included in summer'],
    distanceFromLocalities: {
      'Rajarampuri': 0.2,
      'Vidyanagar / University Campus': 2.8,
      'Shahupuri': 2.0,
      'Cyber Chowk / CSIBER Area': 1.6,
      'Kasaba Bawada': 5.0,
      'Tarabai Park': 3.5,
      'Gokul Shirgaon': 7.2,
      'Somwar Peth / Panhala Road': 19.8
    },
    collegesNearby: [
      { collegeId: 'dot-su', distanceKm: 3.0 },
      { collegeId: 'dypcet', distanceKm: 4.9 },
      { collegeId: 'kitcoek', distanceKm: 7.2 },
      { collegeId: 'seti-panhala', distanceKm: 19.8 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mrs. Jayashree Kulkarni (Demo)',
      phone: '+91 97620 XXXXX (Fictional Demo)',
      timing: '10:30 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-rajaram-02',
    name: 'Chhatrapati Shahu Engineering Mess',
    locality: 'Rajarampuri',
    address: '9th Lane, Near Shivaji Statue, Rajarampuri',
    latitude: 16.6915,
    longitude: 74.2525,
    monthlyMealPrice: 2900,
    foodType: 'Veg & Non-Veg',
    mealPlan: 'Lunch & Dinner with Egg curry (Tues) & Chicken/Mutton (Sun)',
    tiffinAvailable: true,
    sundaySpecial: 'Kolhapuri Mutton/Chicken Sukka with Indrayani Rice',
    specialties: ['Authentic Kolhapuri spice blend', 'Jowar Bhakri made fresh', 'Egg Thali on Tuesdays', 'Pure Veg option everyday'],
    distanceFromLocalities: {
      'Rajarampuri': 0.3,
      'Vidyanagar / University Campus': 2.6,
      'Shahupuri': 2.2,
      'Cyber Chowk / CSIBER Area': 1.8,
      'Kasaba Bawada': 5.2,
      'Tarabai Park': 3.8,
      'Gokul Shirgaon': 7.0,
      'Somwar Peth / Panhala Road': 20.0
    },
    collegesNearby: [
      { collegeId: 'dot-su', distanceKm: 2.7 },
      { collegeId: 'dypcet', distanceKm: 5.1 },
      { collegeId: 'kitcoek', distanceKm: 7.0 },
      { collegeId: 'seti-panhala', distanceKm: 20.0 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Shivaji Mane (Demo)',
      phone: '+91 99600 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-vidya-01',
    name: 'Mauli University Bhojanalay',
    locality: 'Vidyanagar / University Campus',
    address: 'Near DOT Main Gate, Vidyanagar, Kolhapur',
    latitude: 16.6775,
    longitude: 74.2550,
    monthlyMealPrice: 2200,
    foodType: 'Pure Veg',
    mealPlan: 'Daily 2 Times Unlimited Vegetarian Maharashtrian Thali',
    tiffinAvailable: true,
    sundaySpecial: 'Pav Bhaji & Kheer Unlimited',
    specialties: ['Lowest price for University students', 'Clean water filtration', 'Hot Chapati unlimited', 'Khichdi on Saturdays'],
    distanceFromLocalities: {
      'Vidyanagar / University Campus': 0.3,
      'Rajarampuri': 2.6,
      'Cyber Chowk / CSIBER Area': 1.5,
      'Shahupuri': 4.2,
      'Gokul Shirgaon': 6.5,
      'Kasaba Bawada': 8.2,
      'Tarabai Park': 6.8,
      'Somwar Peth / Panhala Road': 22.0
    },
    collegesNearby: [
      { collegeId: 'dot-su', distanceKm: 0.4 },
      { collegeId: 'kitcoek', distanceKm: 6.5 },
      { collegeId: 'dypcet', distanceKm: 8.2 },
      { collegeId: 'seti-panhala', distanceKm: 22.0 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Santosh Shinde (Demo)',
      phone: '+91 93250 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-vidya-02',
    name: 'Shivaji Campus Kolhapuri Dining',
    locality: 'Vidyanagar / University Campus',
    address: 'Old Pune-Bangalore Road, Opp. SUK Guest House, Vidyanagar',
    latitude: 16.6750,
    longitude: 74.2565,
    monthlyMealPrice: 2600,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: 'Lunch & Dinner (Wednesday & Sunday Non-Veg feasts)',
    tiffinAvailable: true,
    sundaySpecial: 'Kolhapuri Chicken Masala with unlimited Tambda Rassa',
    specialties: ['Tambda Rassa & Pandhra Rassa', 'Hot Jowar Bhakri', 'Pure Veg Thali served in separate section'],
    distanceFromLocalities: {
      'Vidyanagar / University Campus': 0.6,
      'Rajarampuri': 2.4,
      'Cyber Chowk / CSIBER Area': 1.8,
      'Shahupuri': 4.0,
      'Gokul Shirgaon': 6.2,
      'Kasaba Bawada': 8.5,
      'Tarabai Park': 6.5,
      'Somwar Peth / Panhala Road': 22.5
    },
    collegesNearby: [
      { collegeId: 'dot-su', distanceKm: 0.7 },
      { collegeId: 'kitcoek', distanceKm: 6.2 },
      { collegeId: 'dypcet', distanceKm: 8.5 },
      { collegeId: 'seti-panhala', distanceKm: 22.5 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Milind Salunkhe (Demo)',
      phone: '+91 98901 XXXXX (Fictional Demo)',
      timing: '11:30 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-gokul-01',
    name: 'Panchamrut Bhojanalay (KIT Sector)',
    locality: 'Gokul Shirgaon',
    address: 'Behind KIT College Main Gate, Gokul Shirgaon, Kolhapur',
    latitude: 16.6355,
    longitude: 74.2805,
    monthlyMealPrice: 2400,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner 6 Days/Week + Sunday Special Feast',
    tiffinAvailable: true,
    sundaySpecial: 'Veg Biryani, Masala Dosa breakfast special & Gulab Jamun',
    specialties: ['Immediate walking distance for KIT students', 'Balanced low-oil homestyle cooking', 'Unlimited rice & dal'],
    distanceFromLocalities: {
      'Gokul Shirgaon': 0.4,
      'Vidyanagar / University Campus': 6.2,
      'Rajarampuri': 7.0,
      'Cyber Chowk / CSIBER Area': 7.5,
      'Shahupuri': 8.2,
      'Kasaba Bawada': 14.0,
      'Tarabai Park': 12.0,
      'Somwar Peth / Panhala Road': 25.5
    },
    collegesNearby: [
      { collegeId: 'kitcoek', distanceKm: 0.5 },
      { collegeId: 'dot-su', distanceKm: 6.4 },
      { collegeId: 'dypcet', distanceKm: 14.0 },
      { collegeId: 'seti-panhala', distanceKm: 25.5 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Arvind Powar (Demo)',
      phone: '+91 94050 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-gokul-02',
    name: 'Gokul Deluxe Non-Veg & Veg Mess',
    locality: 'Gokul Shirgaon',
    address: 'Highway Service Road, Near Gokul Dairy Plant, Kolhapur',
    latitude: 16.6330,
    longitude: 74.2780,
    monthlyMealPrice: 2750,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: 'Daily Lunch & Dinner + Egg Curry on Friday + Chicken on Sunday',
    tiffinAvailable: false,
    sundaySpecial: 'Kolhapuri Sukka Chicken, Pandhra Rassa & Jeera Rice',
    specialties: ['Real Kolhapuri spicy rassa', 'Bhakri made over chulha', 'Fresh curd & buttermilk'],
    distanceFromLocalities: {
      'Gokul Shirgaon': 0.8,
      'Vidyanagar / University Campus': 6.0,
      'Rajarampuri': 6.8,
      'Cyber Chowk / CSIBER Area': 7.0,
      'Shahupuri': 8.0,
      'Kasaba Bawada': 14.5,
      'Tarabai Park': 12.5,
      'Somwar Peth / Panhala Road': 26.0
    },
    collegesNearby: [
      { collegeId: 'kitcoek', distanceKm: 0.9 },
      { collegeId: 'dot-su', distanceKm: 6.2 },
      { collegeId: 'dypcet', distanceKm: 14.5 },
      { collegeId: 'seti-panhala', distanceKm: 26.0 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Sagar Bhosale (Demo)',
      phone: '+91 91560 XXXXX (Fictional Demo)',
      timing: '11:30 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-shahu-01',
    name: 'Kolhapur Central Annachhatra Mess',
    locality: 'Shahupuri',
    address: 'Opposite Central Railway Station, Shahupuri, Kolhapur',
    latitude: 16.7050,
    longitude: 74.2430,
    monthlyMealPrice: 2450,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner Unlimited Thali with Daily Rotating Menu',
    tiffinAvailable: true,
    sundaySpecial: 'Special Gujarati & Maharashtrian fusion thali with Shrikhand',
    specialties: ['Quick service for students commuting by bus/train', '3 sabzis including paneer on Thursdays', 'Filter coffee'],
    distanceFromLocalities: {
      'Shahupuri': 0.3,
      'Rajarampuri': 2.0,
      'Cyber Chowk / CSIBER Area': 2.5,
      'Tarabai Park': 2.0,
      'Kasaba Bawada': 3.6,
      'Vidyanagar / University Campus': 4.2,
      'Gokul Shirgaon': 8.2,
      'Somwar Peth / Panhala Road': 17.5
    },
    collegesNearby: [
      { collegeId: 'dypcet', distanceKm: 3.8 },
      { collegeId: 'dot-su', distanceKm: 4.3 },
      { collegeId: 'kitcoek', distanceKm: 8.2 },
      { collegeId: 'seti-panhala', distanceKm: 17.5 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Girish Joshi (Demo)',
      phone: '+91 98221 XXXXX (Fictional Demo)',
      timing: '10:30 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-panhala-01',
    name: 'Sahyadri Valley Student Mess (Sanjeevan Hub)',
    locality: 'Somwar Peth / Panhala Road',
    address: 'Near Somwar Peth Bus Stop, Panhala Road, Kolhapur',
    latitude: 16.8045,
    longitude: 74.1210,
    monthlyMealPrice: 2350,
    foodType: 'Veg & Non-Veg',
    mealPlan: 'Daily Lunch & Dinner + Egg Burji & Non-Veg on Sundays',
    tiffinAvailable: true,
    sundaySpecial: 'Chicken Biryani with Solkadhi',
    specialties: ['Clean rural fresh vegetables', 'Wood-fired Bhakri', 'Hostel tiffin delivery for Sanjeevan students'],
    distanceFromLocalities: {
      'Somwar Peth / Panhala Road': 0.5,
      'Kasaba Bawada': 17.0,
      'Shahupuri': 17.5,
      'Tarabai Park': 15.5,
      'Cyber Chowk / CSIBER Area': 20.5,
      'Rajarampuri': 20.0,
      'Vidyanagar / University Campus': 22.0,
      'Gokul Shirgaon': 25.5
    },
    collegesNearby: [
      { collegeId: 'seti-panhala', distanceKm: 0.6 },
      { collegeId: 'dypcet', distanceKm: 17.5 },
      { collegeId: 'dot-su', distanceKm: 22.0 },
      { collegeId: 'kitcoek', distanceKm: 25.5 }
    ],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Dnyandev Sawant (Demo)',
      phone: '+91 99750 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- ATIGRE (near SGI) ---
  {
    id: 'mess-atigre-01',
    name: 'Shree Samarth Student Bhojanalay',
    locality: 'Atigre',
    address: 'Near SGI Main Gate, Kolhapur-Sangli Road, Atigre',
    latitude: 16.7495,
    longitude: 74.3810,
    monthlyMealPrice: 2200,
    foodType: 'Pure Veg',
    mealPlan: '2 Meals/Day (Lunch & Dinner)',
    tiffinAvailable: true,
    sundaySpecial: 'Puri Bhaji, Shrikhand, Dal Tadka & Gulab Jamun',
    specialties: ['Hot Chapati / Bhakri', 'Seasonal Vegetables', 'Unlimited Rice & Dal', 'Clean Dining Hall'],
    distanceFromLocalities: { 'Atigre': 0.3 },
    collegesNearby: [{ collegeId: 'sgi-atigre', distanceKm: 0.4 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Sagar Patil (Demo Contact)',
      phone: '+91 98230 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-atigre-02',
    name: 'Ghodawat Highway Swad Dining',
    locality: 'Atigre',
    address: 'Opp. Atigre Bus Stop, Kolhapur-Sangli Highway',
    latitude: 16.7470,
    longitude: 74.3835,
    monthlyMealPrice: 2400,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: 'Lunch & Dinner 7 days/week (Wednesday & Sunday Non-Veg)',
    tiffinAvailable: true,
    sundaySpecial: 'Chicken Curry & Kolhapuri Tambada-Pandhara Rassa',
    specialties: ['Tambada Pandhara Rassa', 'Fresh Jowar Bhakri', 'Tiffin Service to Hostels'],
    distanceFromLocalities: { 'Atigre': 0.6 },
    collegesNearby: [{ collegeId: 'sgi-atigre', distanceKm: 0.7 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Ramesh Chavan (Demo Contact)',
      phone: '+91 97650 XXXXX (Fictional Demo)',
      timing: '10:30 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- TALSANDE (near DYP Talsande) ---
  {
    id: 'mess-talsande-01',
    name: 'Patil Bandhu Student Bhojanalay',
    locality: 'Talsande',
    address: 'Main Bazar Road, Talsande, Kolhapur',
    latitude: 16.8510,
    longitude: 74.2880,
    monthlyMealPrice: 2100,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner daily',
    tiffinAvailable: true,
    sundaySpecial: 'Dal Bati Churma, Pulao & Sweet Boondi',
    specialties: ['Home-style Cooking', 'Fresh Curd / Taak', 'Hot Chapatis'],
    distanceFromLocalities: { 'Talsande': 0.4 },
    collegesNearby: [{ collegeId: 'dyp-talsande', distanceKm: 0.5 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Balasaheb Patil (Demo Contact)',
      phone: '+91 94220 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-talsande-02',
    name: 'Annapurna Rural Student Mess',
    locality: 'Talsande',
    address: 'Near DYP College Gate Road, Talsande',
    latitude: 16.8535,
    longitude: 74.2910,
    monthlyMealPrice: 2300,
    foodType: 'Veg & Non-Veg',
    mealPlan: '2 Meals/Day (Wednesday Non-Veg Feast)',
    tiffinAvailable: true,
    sundaySpecial: 'Special Sukka Chicken & Egg Curry',
    specialties: ['Authentic Country Flavors', 'Unlimited Rice', 'Bajra Bhakri'],
    distanceFromLocalities: { 'Talsande': 0.6 },
    collegesNearby: [{ collegeId: 'dyp-talsande', distanceKm: 0.6 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mrs. Vandana Shinde (Demo Contact)',
      phone: '+91 91580 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- VATHAR TARF VADGAON (near AMGOI) ---
  {
    id: 'mess-vathar-01',
    name: 'Mane Guruji Bhojanalay',
    locality: 'Vathar Tarf Vadgaon',
    address: 'Near AMGOI Campus Gate, Vathar Tarf Vadgaon',
    latitude: 16.8330,
    longitude: 74.3040,
    monthlyMealPrice: 2100,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner 7 days/week',
    tiffinAvailable: true,
    sundaySpecial: 'Chole Bhature & Gulab Jamun',
    specialties: ['Clean RO Water', 'Unlimited Chapatis', 'Student Discounts'],
    distanceFromLocalities: { 'Vathar Tarf Vadgaon': 0.4 },
    collegesNearby: [{ collegeId: 'amgoi-vathar', distanceKm: 0.4 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Arvind Mane (Demo Contact)',
      phone: '+91 98900 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-vathar-02',
    name: 'Vadgaon Chhatrapati Dining Hall',
    locality: 'Vathar Tarf Vadgaon',
    address: 'Vathar Station Road, Near Bus Stop',
    latitude: 16.8305,
    longitude: 74.3065,
    monthlyMealPrice: 2300,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: '2 Meals/Day (Sunday Chicken Special)',
    tiffinAvailable: true,
    sundaySpecial: 'Kolhapuri Mutton/Chicken Thali',
    specialties: ['Authentic Kolhapuri Masala', 'Jowar Bhakri', 'Hot Dal Fry'],
    distanceFromLocalities: { 'Vathar Tarf Vadgaon': 0.6 },
    collegesNearby: [{ collegeId: 'amgoi-vathar', distanceKm: 0.7 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Sanjay Yadav (Demo Contact)',
      phone: '+91 99230 XXXXX (Fictional Demo)',
      timing: '11:30 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- WARANANAGAR (near TKIET) ---
  {
    id: 'mess-warana-01',
    name: 'Warana Shahi Pure Veg Bhojanalay',
    locality: 'Warananagar',
    address: 'Near Warana Dairy Complex, Warananagar',
    latitude: 16.8910,
    longitude: 74.2215,
    monthlyMealPrice: 2200,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner with fresh Warana Milk/Buttermilk',
    tiffinAvailable: true,
    sundaySpecial: 'Puran Poli, Katachi Amti & Basundi',
    specialties: ['Fresh Warana Dairy Milk & Ghee', 'Hygienic Kitchen', 'Hot Wheat Phulkas'],
    distanceFromLocalities: { 'Warananagar': 0.3 },
    collegesNearby: [{ collegeId: 'tkiet-warana', distanceKm: 0.4 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Mohan Kore (Demo Contact)',
      phone: '+91 94211 XXXXX (Fictional Demo)',
      timing: '10:30 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-warana-02',
    name: 'Tatyasaheb Student Khanavali',
    locality: 'Warananagar',
    address: 'College Road, Opp. TKIET Hostel Gate, Warananagar',
    latitude: 16.8935,
    longitude: 74.2245,
    monthlyMealPrice: 2500,
    foodType: 'Veg & Non-Veg',
    mealPlan: '2 Meals/Day (Non-Veg twice a week)',
    tiffinAvailable: true,
    sundaySpecial: 'Chicken Biryani & Rassa',
    specialties: ['Speedy Tiffin Delivery', 'Unlimited Rice & Dal', 'Spicy Sukka Chicken'],
    distanceFromLocalities: { 'Warananagar': 0.5 },
    collegesNearby: [{ collegeId: 'tkiet-warana', distanceKm: 0.5 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Vitthal Patil (Demo Contact)',
      phone: '+91 97630 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- ICHALKARANJI (near DKTE) ---
  {
    id: 'mess-ichal-01',
    name: 'Vinkar Nagari Student Khanavali',
    locality: 'Ichalkaranji',
    address: 'Near Rajwada Chowk, Shivaji Nagar, Ichalkaranji',
    latitude: 16.6990,
    longitude: 74.4625,
    monthlyMealPrice: 2200,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner 7 days/week',
    tiffinAvailable: true,
    sundaySpecial: 'Shrikhand Puri, Masale Bhat & Gulab Jamun',
    specialties: ['Unlimited Chapatis', 'Hot Varan Bhat', 'Fresh Veg Curries Daily'],
    distanceFromLocalities: { 'Ichalkaranji': 0.4 },
    collegesNearby: [{ collegeId: 'dkte-ichalkaranji', distanceKm: 0.4 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Vinod Joshi (Demo Contact)',
      phone: '+91 98222 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-ichal-02',
    name: 'DKTE Corner Swad Dining Hall',
    locality: 'Ichalkaranji',
    address: 'Opp. DKTE Main Campus Gate, Ichalkaranji',
    latitude: 16.6975,
    longitude: 74.4655,
    monthlyMealPrice: 2400,
    foodType: 'Kolhapuri Special (Veg & Non-Veg)',
    mealPlan: '2 Meals/Day (Sunday & Wednesday Feast)',
    tiffinAvailable: true,
    sundaySpecial: 'Kolhapuri Tambda-Pandhra Chicken Thali',
    specialties: ['Jowar Bhakri', 'Tambda Pandhra Rassa', 'Affordable Student Monthly Passes'],
    distanceFromLocalities: { 'Ichalkaranji': 0.5 },
    collegesNearby: [{ collegeId: 'dkte-ichalkaranji', distanceKm: 0.5 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Sachin Kulkarni (Demo Contact)',
      phone: '+91 94235 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  // --- YADRAV (near SITCOE) ---
  {
    id: 'mess-yadrav-01',
    name: 'Sharad Krupa Student Bhojanalay',
    locality: 'Yadrav',
    address: 'Near SITCOE Main Entrance, Yadrav',
    latitude: 16.7120,
    longitude: 74.4965,
    monthlyMealPrice: 2100,
    foodType: 'Pure Veg',
    mealPlan: 'Lunch & Dinner daily',
    tiffinAvailable: true,
    sundaySpecial: 'Veg Pulao, Paneer Masala & Jalebi',
    specialties: ['Clean Dining Atmosphere', 'Unlimited Phulkas', 'Budget Student Packages'],
    distanceFromLocalities: { 'Yadrav': 0.4 },
    collegesNearby: [{ collegeId: 'sitcoe-yadrav', distanceKm: 0.4 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Baburao Bagane (Demo Contact)',
      phone: '+91 98810 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 9:30 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  },
  {
    id: 'mess-yadrav-02',
    name: 'Yadrav Annapurna Student Khanavali',
    locality: 'Yadrav',
    address: 'Yadrav-Ichalkaranji Link Road, Yadrav',
    latitude: 16.7095,
    longitude: 74.5000,
    monthlyMealPrice: 2300,
    foodType: 'Veg & Non-Veg',
    mealPlan: '2 Meals/Day (Wednesday & Sunday Non-Veg)',
    tiffinAvailable: true,
    sundaySpecial: 'Chicken Curry, Bhakri & Indrayani Rice',
    specialties: ['Fast Counter Service', 'Authentic Kolhapuri Flavor', 'Hostel Tiffin Service'],
    distanceFromLocalities: { 'Yadrav': 0.6 },
    collegesNearby: [{ collegeId: 'sitcoe-yadrav', distanceKm: 0.6 }],
    demoStatus: 'Demo Listing • Illustrative Hackathon Record',
    demoContact: {
      managerName: 'Mr. Santosh Patil (Demo Contact)',
      phone: '+91 99215 XXXXX (Fictional Demo)',
      timing: '11:00 AM – 10:00 PM',
      note: 'Demo listing for hackathon testing. Not an actual live vacancy.'
    }
  }
];
