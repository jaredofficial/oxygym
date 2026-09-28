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
    address: '4th Floor, Chandni Arcade, 25B Chandni Chowk, Kolkata - 700072',
    phone: '+91 98313 63981',
    email: 'oxygymchandni@gmail.com',
    instagram: 'https://www.instagram.com/oxygym.chandni/',
    hours: 'Mon - Sat: 6:00 AM - 10:30 PM | Sun: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.app.goo.gl/WQFAV7urcLNgZrpx7',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Chandni+Arcade+25B+Chandni+Chowk+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed',
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
      '⚡ No Registration Charges!',
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
    tagline: 'Kolkata’s Pinnacle Ultra-Luxury & HYROX Athletic Facility — Grand Opening on the 11th of October in the Heart of Park Street',
    status: 'coming_soon',
    theme: 'premium',
    address: 'In the Heart of Park Street, Kolkata',
    phone: '+91 75958 76699',
    email: 'oxygymgoldparkstreet@gmail.com',
    instagram: 'https://www.instagram.com/oxygym.gold.parkstreet/',
    hours: 'Opening 11th October 2026',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Park+Street+Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed',
    heroImage: '/media/chandni/images/IMG_8875.jpg',
    galleryImages: [],
    highlights: [
      'Being Strong Crown Series Gear (1st time in East India)',
      'Grand Opening on 11th October 2026',
      'OXY Max Oxygen System (Higher Purity Than Outside Air)',
      'Dedicated Full-Spectrum Infrared Sauna Suite',
      'Red Light Photobiomodulation Therapy Chamber',
      'AED Emergency Defibrillator Cardiac Response Station',
      'Experienced Life Coaches with BLS Certifications',
      'InBody Medical Body Composition Scanners',
      'In-House Doctors & Medical Consultations',
      'High-Protein Executive Cafeteria & Nutrition Lounge',
      'Coffee & Tea Vending Machine',
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
    id: 'f-oxymax',
    name: 'OXY Max Oxygen Enrichment System',
    description: 'Delivers higher oxygen purity to the entire gym compared to outdoor air, making your workouts healthier and boosting stamina.',
    iconName: 'Wind',
    image: '/media/facilities/oxy_max.png',
  },
  {
    id: 'f-infrared',
    name: 'Full-Spectrum Infrared Sauna Suite',
    description: 'Therapeutic deep thermal sauna for rapid muscle recovery, joint pain relief, and detoxification.',
    iconName: 'Flame',
    image: '/media/facilities/infrared_sauna.png',
  },
  {
    id: 'f-redlight',
    name: 'Red Light Photobiomodulation Chamber',
    description: 'Clinical red light therapy boosting mitochondrial energy repair, skin health, and cellular recovery.',
    iconName: 'Sun',
    image: '/media/facilities/red_light_therapy.png',
  },
  {
    id: 'f-aed',
    name: 'AED Emergency Cardiac Defibrillator',
    description: 'Automated External Defibrillator (AED) safety station equipped for emergency electric shock cardiac response.',
    iconName: 'HeartPulse',
    image: '/media/facilities/aed_device.png',
  },
  {
    id: 'f-bls',
    name: 'BLS Certified Life Coaches',
    description: 'Experienced gym floor life coaches holding official Basic Life Support (BLS) medical emergency certifications.',
    iconName: 'ShieldCheck',
    image: '/media/facilities/bls_coaches.png',
  },
  {
    id: 'f-inbody',
    name: 'InBody Medical Body Scanners',
    description: 'Clinical-grade segmental muscle, visceral fat, and body composition analysis terminal.',
    iconName: 'Activity',
    image: '/media/facilities/inbody_scanner.png',
  },
  {
    id: 'f-doctor',
    name: 'In-House Doctors & Medical Team',
    description: 'On-site sports physicians and medical consultants providing personalized workout and health prescriptions.',
    iconName: 'Stethoscope',
    image: '/media/facilities/inhouse_doctor.png',
  },
  {
    id: 'f-cafeteria',
    name: 'High-Protein Cafeteria & Lounge',
    description: 'Healthy gourmet meals, artisanal protein shakes, pre-workout nutrition, and macro-balanced dining.',
    iconName: 'Utensils',
    image: '/media/facilities/cafeteria.png',
  },
  {
    id: 'f-vending',
    name: 'Coffee & Tea Vending Station',
    description: 'Automated hot coffee and tea vending machine dispenser in the member executive lounge.',
    iconName: 'Coffee',
    image: '/media/facilities/vending_machine.png',
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
    name: 'Single Membership',
    badge: 'Full Floor Access',
    description: 'Full access to Chandni Arcade 4th floor gym, power decks, heavy-duty gear & steam bath.',
    options: [
      { duration: '1 Month', price: 2000 },
      { duration: '2 Months', price: 3300, perkText: '🎁 Includes Towel' },
      { duration: '3 Months', price: 4500, perkText: '🎁 Includes Towel & Keychain' },
      { duration: '6 Months', price: 7000, perkText: '🎁 4 Steam Baths + Gym Bag + Shaker' },
      { duration: '12 Months', price: 11500, popular: true, savingsBadge: 'BEST VALUE', perkText: '🎁 Headphone + Gym Bag + 12 Steam Baths' },
    ],
  },
  {
    id: 'student',
    name: 'Student Plan',
    badge: 'Under 21 Age Limit • Valid ID Required',
    description: 'Special student membership plan valid strictly for under 21 age limit (No Registration Charges).',
    options: [
      { duration: '1 Month', price: 1600 },
      { duration: '2 Months', price: 2600, perkText: '🎁 Includes Towel' },
      { duration: '3 Months', price: 3500, perkText: '🎁 Includes Towel & Keychain' },
      { duration: '6 Months', price: 5500, perkText: '🎁 2 Steam Baths Included' },
      { duration: '12 Months', price: 9500, popular: true, savingsBadge: 'MAX SAVINGS', perkText: '🎁 4 Steam Baths Included' },
    ],
  },
  {
    id: 'happy_hours',
    name: 'Happy Hour Package',
    badge: '11:00 AM - 5:00 PM Slot',
    description: 'Affordable off-peak training pass valid strictly between 11:00 AM to 5:00 PM (No Registration Charges).',
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
    id: 't-ashraf',
    name: 'Ashraf Hussain',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'I absolutely love training at Oxy! The facility is top-notch, always clean, and well-equipped with everything you need for a great workout. A huge shoutout to the staff—they are incredibly professional, friendly, and always ready to help with a smile. It’s hands down the best gym experience I’ve had. Highly recommend to anyone looking for a supportive place to train! It’s rare to find a place that offers such high-quality equipment and professional service while remaining so affordable for students. Definitely the best value in town..🥰',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Ashraf+Hussain&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-shashi',
    name: 'Shashi Kant Sharma',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'Oxy Gym is an amazing place to work out! The environment is energetic, the equipment is modern and well-maintained, and the trainers are highly professional and motivating. They genuinely care about helping members achieve their goals and are always available for guidance. The gym is clean, spacious, and has a positive vibe that makes every workout enjoyable. If you’re looking for a gym that combines excellent facilities with great support, Oxy Gym is definitely the place to be. Highly recommended!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Shashi+Kant+Sharma&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-nandita',
    name: 'Nandita Gupta',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'I have been a member of this gym since a while and this gym feels great. It has all the necessary equipments and amenities, also the gym staff always makes sure that the equipments are sanitised well and they make sure to clean them frequently. The gym has 2 floors and there is ample space for people to workout. Overall it\'s been a great experience with being a member of this gym.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Nandita+Gupta&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-adarsh',
    name: 'ADARSH',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'Joined this gym recently and the vibe is honestly great,Equipment is new, clean, and covers everything for strength + cardio. Trainers are supportive and actually correct form instead of just watching. The place is spacious, so no waiting for machines during peak hours.Hygiene is on point — floors, washrooms, and mats are well maintained. Good music and lighting keeps the energy high throughout',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Adarsh&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-rehan',
    name: 'Sk Rehan Quadri',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'I\'ve been working out at this gym for a while now , and it\'s been a really good experience. The gym is clean , the equipments are well maintained and there are variety of machines. The trainers are friendly, approachable and always ready to help . Overall it\'s a great gym .',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sk+Rehan+Quadri&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-belal',
    name: 'Md Belal Ansari',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'The entire team here—from the manager and staff to the trainers—is incredibly well-behaved, polite, and cooperative. If there’s ever an issue with a machine or anything else in the facility, they fix it almost instantly. The customer service is unmatched. Without thinking twice, go for it! 😍',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Md+Belal+Ansari&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-kunal',
    name: 'Kunal Gupta',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'Been a member for four months now and I can comfortably suggest this place to my peers. Knowledgeable and well learned trainers, warm and hospitable staff at the reception, cooperative support staff, exceptional management, quality and complete equipments from Jerai, proper hygiene control, desired temperature control and everything one wishes and needs from a good gym for the price!\n\nHappy to be here!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Kunal+Gupta&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-tinia',
    name: 'Adv Tinia Das',
    role: 'Google Local Guide',
    branch: 'Chandni Branch',
    quote: 'I am very much satisfied with the environment,people, equipments of the gym. Safa the trainer is very very cooperative and understanding. He trains me and my husband and now I can see the changes. I love everything about the gym. One of the best gym in kolkata',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Tinia+Das&background=D4AF37&color=000&bold=true',
    achievement: '5★ Local Guide Review',
  },
  {
    id: 't-arshyan',
    name: 'Arshyan Alam',
    role: 'Google Local Guide',
    branch: 'Chandni Branch',
    quote: 'It\'s my home away from home. This is by far the best facility around. Its centralised location with advanced \'being strong\' equipments guided by experienced trainers and all of this available at the best price possible makes it an apt choice for any fitness lover. This facility is in total mint condition. From the ownership, to management, to the trainers, I feel they are the nicest and most knowledgeable staff in the business today. I wouldn’t hesitate to recommend Oxy Gym to anyone. I am certainly satisfied thus far and have been blown away by my experience at this facility.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Arshyan+Alam&background=D4AF37&color=000&bold=true',
    achievement: '5★ Local Guide Review',
  },
  {
    id: 't-kalidas',
    name: 'KALIDAS MONDAL',
    role: 'Verified Google Reviewer',
    branch: 'Chandni Branch',
    quote: 'Me a senior citizen, I m feel very much comfortable in it. Everybody is very co operative n helpful still date. N I feel energetic coming after here. One man whose name has to be taken he is my PT, Arijit, he treats me like an young chap n pushes to my age limit. Very energetic n smiley fellow.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Kalidas+Mondal&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },

  // Bhawanipur Branch Real Google Reviews
  {
    id: 't-neesha',
    name: 'Neesha Ramchandani',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Awesome service by all trainers. Gaurav and Sharfaraz excellent trainers. Thankyou for always being there guiding us.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Neesha+Ramchandani&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-nibedita',
    name: 'Nibedita Chatterjee',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Located at the heart of the city with amazing trainers and best facilities in the city. The crowd is very polished and workout motivated. Special thanks to the Rudra for making me love this fitness lifestyle, he is not just a trainer but the best guide toward your fitness goals. Loves his no nonsense and practical approach.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Nibedita+Chatterjee&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-kushal',
    name: 'Kushal Sonpal',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Love this gym! It has everything you need—top-quality machines, great classes, and a supportive atmosphere. The staff is always helpful and the place is always clean.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Kushal+Sonpal&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-rohan',
    name: 'Rohan Pillay',
    role: 'Google Local Guide',
    branch: 'Bhawanipur Branch',
    quote: 'The new gym management has clearly made some positive changes. The improved atmosphere makes workouts more enjoyable. It\'s a pleasure to exercise in such a positive environment. The enhanced ambiance truly elevates the entire experience. This upgrade has significantly improved the gym. #great job oxy gym',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Rohan+Pillay&background=D4AF37&color=000&bold=true',
    achievement: '5★ Local Guide Review',
  },
  {
    id: 't-suraj',
    name: 'Suraj Yadav',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'If you want fitness’s healthy life connect with shiv Dev at gym He is one of the best oe can have s a mentor to keep yourself healthy Best guidance, Fab fitness coach.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Suraj+Yadav&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-sanjukta',
    name: 'Sanjukta Bose Nandy',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Am just addicted to this gym, the environment, the fellow people are so nice ...and the trainers are very polite, friendly , knowledgeable and helpful... management\'s are also very proactive and helpful...all the equipments are very well maintained and plenty of equipments are there...gym is very neat and clean...if you are really interested in doing workout with a great ,hygienic and knowledgeable ambience must visit dis place.....',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sanjukta+Bose+Nandy&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-tanishi',
    name: 'Tanishi Khaitan',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'I\'ve seen amazing results since joining this gym, the staff are supportive and the equipment is top-notch! Highly recommend for anyone looking to reach their fitness goals.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Tanishi+Khaitan&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-ammon',
    name: 'Ammon Rao',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Great management, Fantastic atmosphere with branded equipment. I lost 15kg weight within 1 week. I would recommend everyone to join here.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Ammon+Rao&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-rachit',
    name: 'Rachit Bajaj',
    role: 'Verified Google Reviewer',
    branch: 'Bhawanipur Branch',
    quote: 'Very good place for working out. People are very nice, and place has nice vibes. Equipments are also top notch',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Rachit+Bajaj&background=D4AF37&color=000&bold=true',
    achievement: '5★ Google Review',
  },
  {
    id: 't-navanita',
    name: 'Navanita Roy',
    role: 'Google Local Guide',
    branch: 'Bhawanipur Branch',
    quote: 'The management has improved a lot and made great changes. Great place to work out. Especially the trainer Rudra is a great guide and very supportive.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Navanita+Roy&background=D4AF37&color=000&bold=true',
    achievement: '5★ Local Guide Review',
  },
];

export const TRAINERS_DATA: Trainer[] = [
  // Chandni Senior Trainers (Only Safa Rahman & Arijit Saha)
  {
    id: 'tr-ch1',
    name: 'Arijit Saha',
    role: 'Senior Trainer',
    experience: '8+ Years Exp',
    specialty: 'Hypertrophy, Powerlifting & Biomechanics',
    image: '/media/chandni/trainers/arijit_saha.png',
    branch: 'Chandni Branch',
  },
  {
    id: 'tr-ch2',
    name: 'Safa Rahman',
    role: 'Senior Trainer',
    experience: '7+ Years Exp',
    specialty: 'Body Recomposition & Fitness Conditioning',
    image: '/media/chandni/trainers/safa_rahman.png',
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
