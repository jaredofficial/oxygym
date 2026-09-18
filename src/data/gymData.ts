export interface BranchInfo {
  id: 'chandni' | 'bhawanipur' | 'park-street';
  name: string;
  subtitle: string;
  tagline: string;
  status: 'active' | 'coming_soon';
  theme: 'core' | 'premium';
  address: string;
  phone: string;
  hours: string;
  email: string;
  instagram: string;
  mapEmbedUrl: string;
  heroVideo?: string;
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Strength' | 'Cardio' | 'Free Weights' | 'Functional';
  description: string;
  image: string;
  branch: 'all' | 'chandni' | 'bhawanipur' | 'bhavanipur';
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  branch: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPricePerMonth: number;
  description: string;
  features: string[];
  ctaText: string;
  perksBadge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  branch: string;
  quote: string;
  rating: number;
  avatar: string;
  achievement: string;
}

export interface PlanOption {
  duration: string;
  price: number;
  popular?: boolean;
  savingsBadge?: string;
  perkText?: string;
}

export interface OfferCategory {
  id: string;
  name: string;
  badge?: string;
  description: string;
  options: PlanOption[];
}

export const BRANCHES_DATA: Record<string, BranchInfo & { mapUrl?: string }> = {
  chandni: {
    id: 'chandni',
    name: 'OXY GYM Chandni',
    subtitle: 'Central Kolkata Flagship',
    tagline: 'Being Strong Powered High Performance Gym with AI Workout Tracking Kiosk',
    status: 'active',
    theme: 'core',
    address: '4th and 5th floor, Archade Building, 25 B, Chandni Chowk St, Esplanade, Chandni Chawk, Bowbazar, Kolkata, West Bengal 700072',
    phone: '+91 98313 63981',
    email: 'oxygymchandni@gmail.com',
    instagram: 'https://www.instagram.com/oxygym.chandni/',
    hours: 'Mon - Sat: 6:00 AM - 10:30 PM | Sun: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.app.goo.gl/WQFAV7urcLNgZrpx7',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Archade+Building+25+B+Chandni+Chowk+St+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed',
    heroVideo: '/media/chandni/vids/deadlift motion.mp4',
    heroImage: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
    galleryImages: [
      '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
      '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
      '/media/chandni/images/IMG_8875.jpg',
      '/media/chandni/images/IMG_9208.jpg',
      '/media/chandni/images/IMG_0179.jpg',
      '/media/chandni/images/DSC_0006.JPG',
    ],
    highlights: [
      'Being Strong Heavy-Duty Powerlifting Racks',
      'Olympic Barbells & Dumbbells up to 60 kg',
      'Interactive AI Workout Guidance & Form Kiosk',
      'Steam Bath, Lockers & Private Shower Suites',
    ],
  },
  bhawanipur: {
    id: 'bhawanipur',
    name: 'OXY GYM Bhawanipur',
    subtitle: 'South Kolkata Powerhouse',
    tagline: 'High Intensity Biomechanics, 1-on-1 Coaching Squad & Steam Baths',
    status: 'active',
    theme: 'core',
    address: '2nd floor, 82, Harish Mukherjee Rd, Patuapara, Bhowanipore, Kolkata, West Bengal 700025',
    phone: '+91 91477 09674',
    email: 'oxygym6@gmail.com',
    instagram: 'https://www.instagram.com/oxygym.bhawanipur/',
    hours: 'Mon - Sat: 6:00 AM - 10:30 PM | Sun: 9:00 AM - 6:00 PM',
    mapUrl: 'https://maps.app.goo.gl/CFEGydie6bQGZh9Q7',
    mapEmbedUrl: 'https://maps.google.com/maps?q=82+Harish+Mukherjee+Rd+Bhowanipore+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed',
    heroImage: '/media/bhawanipur/images/DSC_0065.JPG',
    galleryImages: [
      '/media/bhawanipur/images/DSC_0065.JPG',
      '/media/bhawanipur/images/DSC_0068.JPG',
      '/media/bhawanipur/images/DSC_0080.JPG',
      '/media/bhawanipur/images/DSC_0106.JPG',
      '/media/bhawanipur/images/DSC_0113.JPG',
      '/media/bhawanipur/images/DSC_0780.JPG',
    ],
    highlights: [
      'Yoga, Pilates & High-Energy Dance Studio',
      'Functional & Strength Training Arena',
      'Supplement & Sports Drinks Counter',
      'Student Discounts & Exclusive Doctor Offers',
    ],
  },
  'park-street': {
    id: 'park-street',
    name: 'OXY GYM Park Street',
    subtitle: 'Ultra-Luxury Flagship & HYROX Athletic Hub',
    tagline: 'Kolkata’s Pinnacle Ultra-Luxury & HYROX Athletic Facility — Opening Puja 2026 in the Heart of Park Street',
    status: 'coming_soon',
    theme: 'premium',
    address: 'In the Heart of Park Street, Kolkata',
    phone: '+91 98313 63981 / +91 91477 09674',
    email: 'oxygymgoldparkstreet@gmail.com',
    instagram: 'https://www.instagram.com/oxygym.gold.parkstreet/',
    hours: 'Opening Puja 2026',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Park+Street+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed',
    heroImage: '/media/chandni/images/IMG_8875.jpg',
    galleryImages: [],
    highlights: [
      'Being Strong Crown Series Gear (1st time in East India)',
      'Infrared Red Light Therapy Sauna & Hyperbaric Oxygen Chamber',
      'Official HYROX Athletic Training Equipment & Arena',
      'Elite Recovery Centre & Cryotherapy Suites',
      'Private Work Pods & High-Speed Executive Cafeteria',
      'Located in the Heart of Park Street',
    ],
  },
};

export const STATS_DATA = [
  { label: 'ACTIVE MEMBERS', value: 1000, suffix: '+', icon: 'Users' },
  { label: 'CERTIFIED TRAINERS', value: 15, suffix: '+', icon: 'Award' },
  { label: 'PREMIUM EQUIPMENT', value: 40, suffix: '+', icon: 'Dumbbell' },
  { label: 'TRANSFORMATIONS DONE', value: 100, suffix: '+', icon: 'Flame' },
];

export const USP_TILES = [
  {
    title: 'Being Strong Powered Gear',
    description: 'Heavy-duty leverage machines and biomechanically aligned strength equipment powered by Being Strong.',
    icon: 'Dumbbell',
  },
  {
    title: 'Steam & Shower Suite',
    description: 'Therapeutic steam baths, hot showers, and private lockers for post-workout muscle recovery.',
    icon: 'Droplets',
  },
  {
    title: 'Free General Training',
    description: 'Floor trainers provided for free general guidance to all active gym members.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Yoga, Pilates & Dance',
    description: 'Group fitness studio classes including high-energy dance routines, core pilates, and mobility yoga.',
    icon: 'Sparkles',
  },
  {
    title: 'Extreme Cleanliness',
    description: 'Rigorously sanitized floor space, continuous air purification, and pristine hygiene standards.',
    icon: 'Shield',
  },
  {
    title: 'Sports Drink Counter',
    description: 'In-house supplement station and pre-workout drinks counter for post-workout energy.',
    icon: 'Coffee',
  },
  {
    title: 'AI Workout Guidance Kiosk',
    description: 'Interactive AI kiosk to track your workout volume, guide exercise form, and monitor progress (Chandni Branch).',
    icon: 'Cpu',
  },
  {
    title: 'Student Discount & Doctor Offers',
    description: 'Special discounted membership rates for students and healthcare professionals with perk benefits.',
    icon: 'Percent',
  },
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: '1',
    name: 'Jerai Heavy-Duty Powerlifting Rack',
    category: 'Strength',
    description: 'Calibrated steel squat cage with safety spotter arms & Olympic barbells.',
    image: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
    branch: 'chandni',
  },
  {
    id: '2',
    name: 'Olympic Barbells & Deadlift Deck',
    category: 'Free Weights',
    description: 'High-tensile Olympic barbells with impact-absorbing bumper plates.',
    image: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
    branch: 'chandni',
  },
  {
    id: '3',
    name: 'Dumbbell Zone (Up to 60 kg)',
    category: 'Free Weights',
    description: 'Heavy-duty dumbbell rack ranging from 2.5 kg all the way up to 60 kg.',
    image: '/media/chandni/images/IMG_8875.jpg',
    branch: 'chandni',
  },
  {
    id: '4',
    name: 'Battle Ropes & Agility Arena',
    category: 'Functional',
    description: '30-meter high-density turf track for battle ropes, sled pushes & agility drills.',
    image: '/media/bhawanipur/images/DSC_0065.JPG',
    branch: 'bhawanipur',
  },
  {
    id: '5',
    name: 'Technogym & Jerai Cardio Deck',
    category: 'Cardio',
    description: 'Commercial motor treadmills, assault bikes, and stairmasters.',
    image: '/media/bhawanipur/images/DSC_0068.JPG',
    branch: 'bhawanipur',
  },
  {
    id: '6',
    name: 'AI Workout Guidance Kiosk',
    category: 'Functional',
    description: 'Touchscreen AI terminal providing real-time workout tracking & form guidance (Chandni Branch).',
    image: '/media/chandni/images/IMG_9208.jpg',
    branch: 'chandni',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'f1',
    name: 'Jerai Iron & Dumbbell Zone (up to 60kg)',
    description: 'Full range of dumbbells up to 60kg with heavy-duty benches and Jerai power racks.',
    iconName: 'Dumbbell',
    image: '/media/chandni/images/IMG_8875.jpg',
  },
  {
    id: 'f2',
    name: 'Steam Bath & Rejuvenation Suite',
    description: 'Therapeutic steam bath and hot showers for post-workout recovery.',
    iconName: 'Droplets',
    image: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
  },
  {
    id: 'f3',
    name: 'Yoga, Pilates & Dance Studio',
    description: 'Dedicated air-conditioned studio for mobility yoga, pilates, and group dance classes.',
    iconName: 'Sparkles',
    image: '/media/bhawanipur/images/DSC_0080.JPG',
  },
  {
    id: 'f4',
    name: 'Supplement & Sports Drinks Counter',
    description: 'Post-workout whey protein and sports drinks counter station.',
    iconName: 'Coffee',
    image: '/media/chandni/images/IMG_9208.jpg',
  },
  {
    id: 'f5',
    name: 'Battle Rope & Agility Arena',
    description: 'High-density indoor turf for battle ropes, plyometrics, and functional conditioning.',
    iconName: 'Flame',
    image: '/media/bhawanipur/images/DSC_0065.JPG',
  },
  {
    id: 'f6',
    name: 'AI Workout Kiosk Terminal',
    description: 'Interactive AI terminal helping members log workouts and track exercise routines (Exclusive to Chandni Branch).',
    iconName: 'Cpu',
    image: '/media/chandni/images/IMG_0179.jpg',
  },
];

export const BHAWANIPUR_PRICING: OfferCategory[] = [
  {
    id: 'normal',
    name: 'Normal Membership',
    badge: 'Standard Access',
    description: 'Full access to Bhawanipur floor, steam bath & locker facilities.',
    options: [
      { duration: '1 Month', price: 1999 },
      { duration: '3 Months', price: 5499 },
      { duration: '6 Months', price: 7999, perkText: '🎁 6 Steams + 1 Gym Bag Included' },
      { duration: '12 Months', price: 12999, popular: true, savingsBadge: 'BEST VALUE', perkText: '🎁 12 Steams + 1 Gym Bag Included' },
    ],
  },
  {
    id: 'student',
    name: 'Students Offer',
    badge: 'Valid Student ID Required',
    description: 'Special discounted rates for school & college students (No Steam & Gym Bag).',
    options: [
      { duration: '1 Month', price: 1400, perkText: 'No Steam & Gym Bag in Student Offer' },
      { duration: '3 Months', price: 3500, perkText: 'No Steam & Gym Bag in Student Offer' },
      { duration: '6 Months', price: 5500, perkText: 'No Steam & Gym Bag in Student Offer' },
      { duration: '12 Months', price: 9500, popular: true, savingsBadge: 'MAX SAVINGS', perkText: 'No Steam & Gym Bag in Student Offer' },
    ],
  },
  {
    id: 'doctor',
    name: 'Doctors Offer',
    badge: 'Medical Professionals',
    description: 'Exclusive rate chart for doctors & medical professionals.',
    options: [
      { duration: '1 Month', price: 1500 },
      { duration: '3 Months', price: 4000 },
      { duration: '6 Months', price: 7000, perkText: '🎁 6 Steams + 1 Gym Bag Included' },
      { duration: '12 Months', price: 10500, popular: true, savingsBadge: 'EXCLUSIVE', perkText: '🎁 12 Steams + 1 Gym Bag Included' },
    ],
  },
];

export const CHANDNI_PRICING: OfferCategory[] = [
  {
    id: 'normal',
    name: 'Normal Rates',
    badge: 'Flagship Access',
    description: 'Full access to Chandni Archade Building 4th & 5th floor, power decks & steam bath.',
    options: [
      { duration: '1 Month', price: 2000 },
      { duration: '2 Months', price: 3300 },
      { duration: '3 Months', price: 4500 },
      { duration: '6 Months', price: 7000 },
      { duration: '12 Months', price: 11500, popular: true, savingsBadge: 'BEST VALUE' },
    ],
  },
  {
    id: 'student',
    name: 'Student Discount',
    badge: 'Valid Student ID Required',
    description: 'Discounted rate chart for students with valid institutional identification.',
    options: [
      { duration: '1 Month', price: 1600 },
      { duration: '2 Months', price: 2600 },
      { duration: '3 Months', price: 3500 },
      { duration: '6 Months', price: 5500 },
      { duration: '12 Months', price: 9500, popular: true, savingsBadge: 'MAX SAVINGS' },
    ],
  },
  {
    id: 'happy_hours',
    name: 'Happy Hours',
    badge: '11:00 AM - 5:00 PM',
    description: 'Flexible off-peak training pass valid between 11:00 AM and 5:00 PM at Central Kolkata’s most affordable rates.',
    options: [
      { duration: '1 Month', price: 1200 },
      { duration: '3 Months', price: 3500 },
      { duration: '6 Months', price: 5500 },
      { duration: '12 Months', price: 9500, popular: true, savingsBadge: 'LOWEST RATE' },
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Dummy Member',
    role: 'Competitive Powerlifter',
    branch: 'Chandni Branch',
    quote: 'The Jerai gear at OXY GYM Chandni is hands down the best in Central Kolkata. Real Olympic barbells, 60kg dumbbells, and an intense community atmosphere.',
    rating: 5,
    avatar: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
    achievement: 'Gained 12kg Lean Mass',
  },
  {
    id: 't2',
    name: 'Dummy Member',
    role: 'Corporate Executive',
    branch: 'Bhawanipur Branch',
    quote: 'OXY GYM Bhawanipur is extremely clean and hygienic. The steam bath, pilates classes, and free general training coaches customized a routine around my busy schedule.',
    rating: 5,
    avatar: '/media/bhawanipur/images/DSC_0080.JPG',
    achievement: 'Lost 18kg in 5 Months',
  },
  {
    id: 't3',
    name: 'Dummy Member',
    role: 'Fitness Content Creator',
    branch: 'Chandni Branch',
    quote: 'From the AI workout kiosk to the sports drink counter, OXY GYM sets the benchmark. Can’t wait for Park Street to open!',
    rating: 5,
    avatar: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
    achievement: 'Body Fat Reduced to 9%',
  },
];

export const TRAINERS_DATA: Trainer[] = [
  // Chandni Senior Trainers
  {
    id: 'tr-ch1',
    name: 'Arijit Saha',
    role: 'Senior Trainer',
    experience: '8+ Years Exp',
    specialty: 'Hypertrophy, Powerlifting & Biomechanics',
    image: '/media/chandni/images/612240f744a250350ca899a0f3398205.jpg',
    branch: 'Chandni Branch',
  },
  {
    id: 'tr-ch2',
    name: 'Safa Rahman',
    role: 'Senior Trainer',
    experience: '7+ Years Exp',
    specialty: 'Body Recomposition & Fitness Conditioning',
    image: '/media/chandni/images/IMG_8875.jpg',
    branch: 'Chandni Branch',
  },
  {
    id: 'tr-ch3',
    name: 'Ashish Sharma',
    role: 'Senior Trainer',
    experience: '9+ Years Exp',
    specialty: 'Heavy Barbell Mechanics & Muscle Building',
    image: '/media/chandni/images/89fc5be6c54433d0622e57d5fc0de2c6.jpg',
    branch: 'Chandni Branch',
  },

  // Bhawanipur Senior Trainers
  {
    id: 'tr-bh1',
    name: 'Rudra',
    role: 'Senior Trainer',
    experience: '8+ Years Exp',
    specialty: 'Functional Conditioning & Strength',
    image: '/media/bhawanipur/images/DSC_0065.JPG',
    branch: 'Bhawanipur Branch',
  },
  {
    id: 'tr-bh2',
    name: 'Shiv Dev',
    role: 'Senior Trainer',
    experience: '7+ Years Exp',
    specialty: 'Mobility, Pilates & Core Conditioning',
    image: '/media/bhawanipur/images/DSC_0080.JPG',
    branch: 'Bhawanipur Branch',
  },
  {
    id: 'tr-bh3',
    name: 'Sarfaraz',
    role: 'Senior Trainer',
    experience: '6+ Years Exp',
    specialty: 'Athletic Conditioning & Endurance',
    image: '/media/bhawanipur/images/DSC_0106.JPG',
    branch: 'Bhawanipur Branch',
  },
];
