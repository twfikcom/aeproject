const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('index.html', 'utf8');

const pages = [
  {
    path: 'services/car-battery-replacement-dubai.html',
    title: 'Car Battery Replacement Dubai | 24/7 Mobile Service',
    desc: 'Emergency 24/7 car battery replacement in Dubai. We test, jump-start, and replace batteries on the spot. Call now for fast roadside assistance.',
    h1: 'Car Battery Replacement Dubai',
    h1Sub: 'Emergency 24/7 Service',
    h2: 'On-Spot Battery Installation',
    heroText: 'Is your car not starting? Don\'t wait for a tow truck. Our mobile mechanics will come to your location in Dubai and replace your battery directly.'
  },
  {
    path: 'services/mobile-car-diagnostics.html',
    title: 'Mobile Car Diagnostics UAE | Mobile OBD2 Tool Scanner',
    desc: 'Check Engine Light on? Our mobile car diagnostics service uses advanced OBD2 tech and sensors to pinpoint the issue right where you are.',
    h1: 'Mobile Car Diagnostics',
    h1Sub: 'Advanced OBD2 Reading',
    h2: 'Professional Tech & Sensor Scanning',
    heroText: 'We bring advanced diagnostic tools to your doorstep. Don\'t ignore the dashboard warning lights; let our mobile tech identify the exact problem.'
  },
  {
    path: 'services/pre-purchase-inspection-uae.html',
    title: 'Pre-Purchase Car Inspection UAE | Mobile Mechanic',
    desc: 'Buying a used car? Let our expert mechanics inspect it first. Comprehensive pre-purchase inspection anywhere in the UAE.',
    h1: 'Pre-Purchase Car Inspection',
    h1Sub: 'Make a Safe Investment',
    h2: 'Comprehensive Buyers Checklist',
    heroText: 'Don\'t buy a lemon! Our mobile auto specialists will perform an exhaustive 150-point inspection on the requested vehicle before you buy.'
  },
  {
    path: 'locations/mobile-mechanic-dubai-marina.html',
    title: 'Mobile Mechanic Dubai Marina | 24/7 Car Service',
    desc: 'Fast, reliable mobile mechanic services in Dubai Marina. Battery replacement, tyre repair, and oil change at your doorstep.',
    h1: 'Mobile Mechanic Dubai Marina',
    h1Sub: 'Fast & Reliable Repairs',
    h2: 'Expert Auto Repair in the Marina',
    heroText: 'Stranded in Dubai Marina? Whether you need a jump start, flat tyre replacement, or onsite repairs, we arrive quickly to fix your vehicle.'
  },
  {
    path: 'locations/mobile-mechanic-al-barsha.html',
    title: 'Mobile Mechanic Al Barsha | Onsite Car Repair',
    desc: 'Top-rated mobile mechanic in Al Barsha. We provide full on-demand auto repairs, battery service, and general maintenance.',
    h1: 'Mobile Mechanic Al Barsha',
    h1Sub: 'Onsite Car Repair',
    h2: 'Your Neighborhood Mobile Auto Tech',
    heroText: 'Providing premium mobile mechanic solutions for residents and workers in Al Barsha. Forget the garage and let us come to you.'
  },
  {
    path: 'locations/mobile-mechanic-mussafah-abu-dhabi.html',
    title: 'Mobile Mechanic Mussafah, Abu Dhabi | Car Care',
    desc: 'Got a breakdown in Mussafah, Abu Dhabi? We provide immediate 24/7 mobile mechanic assistance for all car makes and models.',
    h1: 'Mobile Mechanic Mussafah',
    h1Sub: 'Abu Dhabi Car Care',
    h2: 'Direct to Mussafah Breakdown Support',
    heroText: 'Avoid the Mussafah industrial area traffic. Our mobile technicians travel directly to your location in Abu Dhabi for any automotive repairs.'
  },
  {
    path: 'services/roadside-assistance-uae.html',
    title: 'Roadside Assistance UAE | 24/7 Recovery & Help',
    desc: 'Stuck on the side of the road? Our 24/7 roadside assistance service in the UAE provides jump starts, flat tyre repair, and emergency fuel delivery.',
    h1: 'Roadside Assistance UAE',
    h1Sub: '24/7 Recovery & Help',
    h2: 'Emergency Roadside Support',
    heroText: 'Stuck on the side of the road? Our 24/7 roadside assistance service provides jump starts, flat tyre repair, and emergency fuel delivery anywhere in the UAE.'
  },
  {
    path: 'services/mobile-oil-change-dubai.html',
    title: 'Mobile Oil Change Dubai | Doorstep Car Servicing',
    desc: 'Get your car oil changed at home or the office. Our mobile oil change service in Dubai offers premium synthetic oils and genuine filters.',
    h1: 'Mobile Oil Change Dubai',
    h1Sub: 'Doorstep Car Servicing',
    h2: 'Professional Fluid & Filter Replacement',
    heroText: 'Save time waiting at the garage. Our mobile mechanics will come to your location to perform a full oil and filter change using premium synthetic oils.'
  },
  {
    path: 'locations/mobile-mechanic-dubai.html',
    title: 'Mobile Mechanic Dubai | 24/7 Car Service in Dubai',
    desc: 'Professional mobile mechanic services covering all of Dubai. Fast, reliable, and on-the-spot car repairs, battery changes, and diagnostics.',
    h1: 'Mobile Mechanic Dubai',
    h1Sub: '24/7 Car Service across the city',
    h2: 'Expert Auto Repair in Dubai',
    heroText: 'Wherever you are in Dubai, our expert mobile mechanics are ready to assist you. From roadside emergencies to home servicing, we have you covered.',
    areas: ['Jumeirah', 'Downtown Dubai', 'Dubai Marina', 'Business Bay', 'Al Barsha', 'Deira', 'Bur Dubai', 'Palm Jumeirah', 'Arabian Ranches', 'Dubai Silicon Oasis', 'Jumeirah Lakes Towers (JLT)']
  },
  {
    path: 'locations/mobile-mechanic-abu-dhabi.html',
    title: 'Mobile Mechanic Abu Dhabi | 24/7 Roadside Assistance',
    desc: 'Top-rated mobile mechanic in Abu Dhabi. We travel to your location for battery jump-starts, tire changes, and mechanical repairs.',
    h1: 'Mobile Mechanic Abu Dhabi',
    h1Sub: '24/7 Roadside Assistance',
    h2: 'Professional Car Repairs in Abu Dhabi',
    heroText: 'Stranded in Abu Dhabi? Our mobile repair units will reach you quickly to get your vehicle back on the road safely.',
    areas: ['Mussafah', 'Yas Island', 'Reem Island', 'Khalifa City', 'Saadiyat Island', 'Tourist Club Area', 'Abu Dhabi Corniche', 'Al Raha Beach', 'Mohammed Bin Zayed City']
  },
  {
    path: 'locations/mobile-mechanic-sharjah.html',
    title: 'Mobile Mechanic Sharjah | Onsite Auto Repair',
    desc: 'Fast and reliable mobile car repair in Sharjah. We handle flat tires, dead batteries, and engine diagnostics right in your parking space.',
    h1: 'Mobile Mechanic Sharjah',
    h1Sub: 'Onsite Auto Repair Services',
    h2: 'Reliable Mechanic in Sharjah',
    heroText: 'Avoid towing fees in Sharjah. Our experienced mobile mechanics bring the workshop to your home or workplace.',
    areas: ['Al Nahda', 'Muweilah', 'Al Majaz', 'Al Taawun', 'Al Qasimia', 'Rolla', 'Sharjah Industrial Area', 'Al Khan']
  },
  {
    path: 'locations/mobile-mechanic-ajman.html',
    title: 'Mobile Mechanic Ajman | 24 Hour Car Recovery',
    desc: 'Need a mobile mechanic in Ajman? We offer 24-hour car repair, oil change, and breakdown recovery services across the emirate.',
    h1: 'Mobile Mechanic Ajman',
    h1Sub: '24 Hour Car Repair & Recovery',
    h2: 'Emergency Car Service in Ajman',
    heroText: 'Don\'t let a breakdown in Ajman ruin your day. Call our mobile mechanic team for fast, affordable, and professional on-site car repairs.',
    areas: ['Al Nuaimia', 'Al Rashidiya', 'Al Jurf', 'Ajman Industrial Area', 'Al Rawda', 'Ajman Corniche', 'Al Mowaihat']
  }
];

pages.forEach(p => {
  const dir = path.dirname(p.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let content = template;
  
  // Update absolute links (href="style.css" -> href="../style.css")
  content = content.replace(/href="style\.css"/g, 'href="../style.css"');
  content = content.replace(/src="script\.js"/g, 'src="../script.js"');
  content = content.replace(/href="ar\.html"/g, 'href="../ar.html"');

  // Update Meta
  content = content.replace(/<title>.*?<\/title>/, `<title>${p.title}</title>`);
  content = content.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${p.desc}"`);
  
  // Update H1 & Hero
  // The original index.html has <span id="hero-title-1"...>Professional Mobile Mechanic</span>
  content = content.replace(/(<span id="hero-title-1" class="block">).*?(<\/span>)/, `$1${p.h1}$2`);
  content = content.replace(/(<span id="hero-title-2" class="block text-primary-500 mt-2">).*?(<\/span>)/, `$1${p.h1Sub}$2`);
  content = content.replace(/(<p id="hero-subtitle" .*?>)[\s\S]*?(<\/p>)/, `$1${p.heroText}$2`);
  
  // Replace the h2 of services-heading to be the localized H2
  content = content.replace(/(<h2 id="services-heading".*?>).*?(<\/h2>)/, `$1${p.h2}$2`);

  // Force hero to not be overwritten by script.js by changing the id so JS bypasses it
  content = content.replace(/id="hero-title-1"/, 'id="custom-hero-title-1"');
  content = content.replace(/id="hero-title-2"/, 'id="custom-hero-title-2"');
  content = content.replace(/id="hero-subtitle"/, 'id="custom-hero-subtitle"');
  content = content.replace(/id="services-heading"/, 'id="custom-services-heading"');

  // Add the canonical to itself
  content = content.replace(/<link rel="canonical" href="https:\/\/mobilemechanic\.ae\/">/, `<link rel="canonical" href="https://mobilemechanic.ae/${p.path}">`);

  if (p.areas && p.areas.length > 0) {
    const areasHTML = `
    <!-- Areas We Cover Section -->
    <section id="areas-covered" class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2 class="text-base font-bold text-primary-600 uppercase tracking-wide mb-2">Service Areas</h2>
                <h3 class="text-3xl font-extrabold text-secondary-900">Areas We Cover in ${p.h1.split(' ').slice(-1)[0]}</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-3">
                ${p.areas.map(area => `<span class="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-default flex items-center"><svg class="w-4 h-4 text-primary-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${area}</span>`).join('')}
            </div>
        </div>
    </section>
    `;
    // Inject before testimonials
    content = content.replace(/(<!-- Testimonials Section -->)/, `${areasHTML}\n    $1`);
  }

  fs.writeFileSync(p.path, content);
  console.log('Created: ' + p.path);
});
console.log('Done.');
