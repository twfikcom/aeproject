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
  },
  {
    path: 'services/roadside-assistance-uae-ar.html',
    title: 'المساعدة على الطريق الإمارات | خدمة إنقاذ 24/7',
    desc: 'عالقة السيارة؟ نقدم خدمة المساعدة على الطريق على مدار الساعة في الإمارات. اشتراك بطارية، تبديل إطارات، وتوصيل وقود لحالات الطوارئ.',
    h1: 'المساعدة على الطريق',
    h1Sub: 'خدمة إنقاذ سريع 24/7',
    h2: 'دعم طوارئ على الطريق',
    heroText: 'هل تعطلت سيارتك؟ نقدم خدمة المساعدة على الطريق على مدار الساعة، تشمل اشتراك البطارية، إصلاح الإطارات المثقوبة، وتوصيل الوقود في أي مكان.'
  },
  {
    path: 'services/mobile-oil-change-dubai-ar.html',
    title: 'تغيير زيت السيارة دبي | خدمة متنقلة',
    desc: 'نوفر لك خدمة تغيير زيت السيارة في المنزل أو العمل في دبي. زيوت تخليقية ممتازة وفلاتر أصلية بأسعار منافسة.',
    h1: 'تغيير زيت السيارة دبي',
    h1Sub: 'خدمة متنقلة عند باب بيتك',
    h2: 'تبديل فلاتر وسوائل باحترافية',
    heroText: 'وفر وقتك ولا تنتظر في الكراجات. ميكانيكي السيارات المتنقل لدينا سيأتي إلى موقعك لإجراء تغيير كامل للزيت والفلتر باستخدام أجود أنواع الزيوت التخليقية.'
  },
  {
    path: 'locations/mobile-mechanic-dubai-ar.html',
    title: 'ميكانيكي متنقل دبي | 24/7 صيانة سيارات في دبي',
    desc: 'خدمات ميكانيكي سيارات متنقلة واحترافية تغطي جميع أنحاء دبي. إصلاح سيارات سريع، تبديل بطاريات وبنشر في موقعك.',
    h1: 'ميكانيكي متنقل دبي',
    h1Sub: 'خدمة سيارات 24/7 في دبي',
    h2: 'صيانة سيارات احترافية في دبي',
    heroText: 'أينما كنت في دبي، فنيونا المتنقلون جاهزون لمساعدتك. إصلاح سريع ومضمون أمام منزلك أو في الطريق.',
    areas: ['جميرا', 'وسط مدينة دبي', 'دبي مارينا', 'الخليج التجاري', 'البرشاء', 'ديرة', 'بر دبي', 'نخلة جميرا', 'المرابع العربية', 'واحة دبي للسليكون', 'أبراج بحيرات جميرا']
  },
  {
    path: 'locations/mobile-mechanic-abu-dhabi-ar.html',
    title: 'ميكانيكي متنقل أبوظبي | مساعدة على الطريق 24/7',
    desc: 'أفضل ميكانيكي متنقل في أبوظبي. نصل إلى موقعك لاشتراك البطارية، تغيير الإطارات، والإصلاحات الميكانيكية.',
    h1: 'ميكانيكي متنقل أبوظبي',
    h1Sub: 'مساعدة على الطريق 24/7',
    h2: 'تصليح سيارات متنقل في أبوظبي',
    heroText: 'تعطلت سيارتك في أبوظبي؟ سيصل إليك فريقنا بأسرع وقت لإعادة سيارتك إلى الطريق بأمان.',
    areas: ['المصفح', 'جزيرة ياس', 'جزيرة الريم', 'مدينة خليفة', 'جزيرة السعديات', 'النادي السياحي', 'كورنيش أبوظبي', 'شاطئ الراحة', 'مدينة محمد بن زايد']
  },
  {
    path: 'locations/mobile-mechanic-sharjah-ar.html',
    title: 'ميكانيكي متنقل الشارقة | كراج متنقل لإصلاح السيارات',
    desc: 'إصلاح سيارات سريع وموثوق في الشارقة. نتعامل مع بنشر الإطارات، والبطاريات التالفة وفحص الأعطال أينما كنت.',
    h1: 'ميكانيكي متنقل الشارقة',
    h1Sub: 'كراج للإصلاح في الموقع',
    h2: 'ميكانيكي موثوق في الشارقة',
    heroText: 'تجنب رسوم الونش الباهظة في الشارقة. نرسل لك كراجاً متنقلاً إلى منزلك أو مكان عملك.',
    areas: ['النهدة', 'مويلح', 'المجاز', 'التعاون', 'القاسمية', 'الرولا', 'المنطقة الصناعية في الشارقة', 'الخان']
  },
  {
    path: 'locations/mobile-mechanic-ajman-ar.html',
    title: 'ميكانيكي متنقل عجمان | انقاذ سيارات 24 ساعة',
    desc: 'بحاجة إلى ميكانيكي متنقل في عجمان؟ نقدم لك خدمة تصليح السيارات، تغيير الزيت، وإنقاذ على مدار 24 ساعة في عجمان.',
    h1: 'ميكانيكي متنقل عجمان',
    h1Sub: 'إنقاذ وصيانة سيارات 24 ساعة',
    h2: 'خدمة سيارات سريعة في عجمان',
    heroText: 'لا تدع الأعطال تفسد يومك. اتصل بفريقنا للحصول على خدمة صيانة سيارات متنقلة احترافية وبأسعار معقولة في عجمان.',
    areas: ['النعيمية', 'الراشدية', 'الجرف', 'عجمان الصناعية', 'الروضة', 'كورنيش عجمان', 'المويهات']
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

  if (p.areas && p.areas.length > 0) {
    const areasHTML = `
    <!-- Areas We Cover Section -->
    <section id="areas-covered" class="py-16 bg-gray-50 border-t border-gray-100" dir="rtl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2 class="text-base font-bold text-primary-600 uppercase tracking-wide mb-2">مناطق الخدمة</h2>
                <h3 class="text-3xl font-extrabold text-secondary-900">أماكن تغطيتنا في ${p.h1.split(' ').slice(-1)[0]}</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-3 font-arabic">
                ${p.areas.map(area => `<span class="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-default flex items-center"><svg class="w-4 h-4 text-primary-500 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${area}</span>`).join('')}
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
console.log('Done Arabic.');
