const fs = require('fs');
const path = require('path');

const templateAr = fs.readFileSync('ar.html', 'utf8');

const pagesAr = [
  {
    path: 'services/car-battery-replacement-dubai-ar.html',
    title: 'تغيير بطارية السيارة دبي | خدمة متنقلة 24/7',
    desc: 'تغيير بطارية السيارة في دبي طوارئ 24/7. نقوم بفحص، شحن، واستبدال البطاريات في موقعك. اتصل الآن.',
    h1: 'تغيير بطارية السيارة دبي',
    h1Sub: 'خدمة طوارئ 24/7',
    h2: 'تركيب البطارية في الموقع',
    heroText: 'السيارة لا تعمل؟ لا تنتظر ونش السحب. ميكانيكي السيارات المتنقل لدينا سيصل إلى موقعك في دبي ويستبدل بطاريتك مباشرة.'
  },
  {
    path: 'services/mobile-car-diagnostics-ar.html',
    title: 'فحص كمبيوتر للسيارات متنقل الإمارات | أجهزة او بي دي 2',
    desc: 'ضوء فحص المحرك مضاء؟ نستخدم أجهزة تشخيص متقدمة لتحديد الأعطال أينما كنت في الإمارات.',
    h1: 'فحص كمبيوتر للسيارات متنقل',
    h1Sub: 'أحدث أجهزة فحص الأعطال',
    h2: 'تشخيص احترافي للأعطال',
    heroText: 'نجلب أدوات التشخيص المتقدمة إلى باب منزلك. لا تتجاهل أضواء التحذير، دع خبيرنا يحدد المشكلة بدقة.'
  },
  {
    path: 'services/pre-purchase-inspection-uae-ar.html',
    title: 'فحص السيارة قبل الشراء الإمارات | ميكانيكي متنقل',
    desc: 'تشتري سيارة مستعملة؟ دع الميكانيكي الخبير يفحصها لك أولاً. فحص شامل للسيارة قبل الشراء في أي مكان في الإمارات.',
    h1: 'فحص السيارة قبل الشراء',
    h1Sub: 'استثمر بأمان',
    h2: 'قائمة فحص شاملة للمشتري',
    heroText: 'لا تشتري سيارة معيوبة! سيقوم المتخصصون لدينا بإجراء فحص شامل من 150 نقطة على السيارة المطلوبة قبل الشراء.'
  },
  {
    path: 'locations/mobile-mechanic-dubai-marina-ar.html',
    title: 'ميكانيكي متنقل دبي مارينا | صيانة سيارات 24/7',
    desc: 'خدمات ميكانيكي متنقل سريعة وموثوقة في دبي مارينا. تغيير بطاريات، تصليح الإطارات، وتغيير הזيت عند باب بيتك.',
    h1: 'ميكانيكي متنقل دبي مارينا',
    h1Sub: 'إصلاح سريع وموثوق',
    h2: 'إصلاح سيارات خبير في مارينا',
    heroText: 'عالق في دبي مارينا؟ سواء كنت بحاجة إلى اشتراك للبطارية، استبدال إطار مثقوب، أو إصلاحات في الموقع، نصلك بسرعة لإصلاح سيارتك.'
  },
  {
    path: 'locations/mobile-mechanic-al-barsha-ar.html',
    title: 'ميكانيكي متنقل البرشاء | إصلاح سيارات في الموقع',
    desc: 'أفضل ميكانيكي متنقل في البرشاء. نقدم إصلاح متكامل، خدمات بطارية، وصيانة عامة في موقعك.',
    h1: 'ميكانيكي متنقل البرشاء',
    h1Sub: 'إصلاح سيارات في الموقع',
    h2: 'الميكانيكي المتنقل الأقرب إليك',
    heroText: 'نقدم أحدث حلول صيانة السيارات المتنقلة للمقيمين والعاملين في منطقة البرشاء. انسى أمر الجراجات، دعنا نأتِ إليك.'
  },
  {
    path: 'locations/mobile-mechanic-mussafah-abu-dhabi-ar.html',
    title: 'ميكانيكي متنقل مصفح، أبوظبي | العناية بالسيارات',
    desc: 'تعطلت سيارتك في المصفح، أبوظبي؟ نقدم مساعدة ميكانيكية متنقلة فورية 24/7 لجميع أنواع السيارات.',
    h1: 'ميكانيكي متنقل مصفح',
    h1Sub: 'العناية بالسيارات في أبوظبي',
    h2: 'دعم مباشر للأعطال في المصفح',
    heroText: 'تجنب زحمة منطقة المصفح الصناعية. فنيونا المتنقلون يسافرون مباشرة لموقعك في أبوظبي لأي إصلاحات لسيارتك.'
  }
];

pagesAr.forEach(p => {
  const dir = path.dirname(p.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let content = templateAr;
  
  // Update absolute links
  content = content.replace(/href="style\.css"/g, 'href="../style.css"');
  content = content.replace(/src="script\.js"/g, 'src="../script.js"');
  content = content.replace(/href="index\.html"/g, 'href="../index.html"');

  // Update Meta
  content = content.replace(/<title>.*?<\/title>/, `<title>${p.title}</title>`);
  content = content.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${p.desc}"`);
  
  // Update H1 & Hero
  content = content.replace(/(<span id="hero-title-1" class="block">).*?(<\/span>)/, `$1${p.h1}$2`);
  content = content.replace(/(<span id="hero-title-2" class="block text-primary-500 mt-2">).*?(<\/span>)/, `$1${p.h1Sub}$2`);
  content = content.replace(/(<p id="hero-subtitle" .*?>)[\s\S]*?(<\/p>)/, `$1${p.heroText}$2`);
  
  // Replace the h2 of services-heading to be the localized H2
  content = content.replace(/(<h2 id="services-heading".*?>).*?(<\/h2>)/, `$1${p.h2}$2`);

  // Force hero to not be overwritten by script.js
  content = content.replace(/id="hero-title-1"/, 'id="custom-hero-title-1"');
  content = content.replace(/id="hero-title-2"/, 'id="custom-hero-title-2"');
  content = content.replace(/id="hero-subtitle"/, 'id="custom-hero-subtitle"');
  content = content.replace(/id="services-heading"/, 'id="custom-services-heading"');

  // Add the canonical to itself
  content = content.replace(/<link rel="canonical" href="https:\/\/mobilemechanic\.ae\/ar\.html">/, `<link rel="canonical" href="https://mobilemechanic.ae/${p.path}">`);

  fs.writeFileSync(p.path, content);
  console.log('Created: ' + p.path);
});
console.log('Done Arabic.');
