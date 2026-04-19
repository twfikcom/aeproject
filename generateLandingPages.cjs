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

  fs.writeFileSync(p.path, content);
  console.log('Created: ' + p.path);
});
console.log('Done.');
