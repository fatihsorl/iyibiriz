export const siteConfig = {
  name: "İyibiriz",
  tagline: "NEW GENERATION HR · YETENEK · ORGANİZASYON · AI",
  email: "info@iyibiriz.com",
  address: "OfficeLink Maltepe Piazza · Cevizli Mah. Tugay Yolu Cad. No:69/A, 34846 Maltepe/İstanbul",
  copyright: "© 2026 İyibiriz",
  assets: {
    mark: "/iyibiriz-logo.jpg",
    founder: "/iyibiriz-burcu.jpg",
  },
};

export const navLinks = [
  { href: "/sirketler", label: "Şirketler" },
  { href: "/adaylar", label: "Adaylar" },
  { href: "/yapay-zeka", label: "Yapay Zeka" },
  { href: "/#kurucu", label: "Burcu Şen" },
] as const;

export const hero = {
  eyebrow: "Human Expertise · AI Intelligence",
  titleLine1: "İnsan.",
  titleEm: "Sistem.",
  titleLine2: "Gelecek.",
  lead: "Şirketler, kariyerini büyüten yetenekler ve işe alımın geleceği için üç uzmanlık alanını tek ekosistemde birleştiriyoruz.",
  ctaPrimary: { label: "Kritik pozisyonunuzu konuşalım", href: "/sirketler#kritik" },
  ctaSecondary: { label: "Çözümleri keşfet", href: "#corporate" },
  proof: [
    { value: "20+", label: "yıllık İK ve liderlik deneyimi" },
    { value: "TR · GCC · EU", label: "çok pazarlı yetenek ağı" },
  ],
  signals: ["İnsan potansiyeli", "İş stratejisi", "Yapay zekâ"],
};

export const focus = {
  eyebrow: "İyibiriz ekosistemi",
  title: ["Üç ana odak.", "Tek bir gelecek vizyonu."],
  cards: [
    {
      no: "01",
      kicker: "ŞİRKETLER İÇİN",
      title: ["Talent & Organization", "Architecture"],
      items: ["İşe alım danışmanlığı", "Yetkinlik ve performans", "İK dijitalleşmesi", "AI entegrasyonu"],
      cta: "Kurumsal çözümleri keşfet ↘",
      href: "/sirketler",
      tone: "ice" as const,
    },
    {
      no: "02",
      kicker: "ADAYLAR İÇİN",
      title: ["Career & Talent", "Journeys"],
      items: ["Executive", "Kıdemli profesyoneller", "Genç yetenekler", "Kariyer konumlandırma"],
      cta: "Kariyer yolunu seç ↘",
      href: "/adaylar",
      tone: "gold" as const,
    },
    {
      no: "03",
      kicker: "AI İŞE ALIM SİSTEMİ",
      title: ["İnsan Kaynakları için", "Yapay Zeka"],
      items: ["AI destekli işe alım", "Talent intelligence", "İnsan denetimli kararlar", "Ölçeklenebilir süreç"],
      cta: "Yapay zekâ çözümünü keşfet ↘",
      href: "/yapay-zeka",
      tone: "navy" as const,
    },
  ],
};

export const statement = {
  kicker: "Yalnızca işe alım yapmıyoruz.",
  lead: "Şirketin yönünü değiştirecek ",
  em1: "yeteneği keşfeder",
  mid: ", başarısını büyütecek ",
  em2: "sistemi kurarız.",
};

export const corporateSolutions = {
  eyebrow: "01 · Şirketler için",
  title: ["Talent & Organization", "Architecture"],
  intro:
    "Kurucudan Sisteme™ yaklaşımıyla işe alımdan görev tasarımına, yetkinlik sisteminden dijital İK altyapısına kadar büyümeyi taşıyacak organizasyonu birlikte kuruyoruz.",
  services: [
    {
      num: "01",
      tag: "DOĞRU YETENEK",
      title: ["Executive Search", "& Critical Hiring"],
      body: "Kritik rollerde yalnızca yetkinliği değil; liderlik etkisini, kültür uyumunu ve büyüme potansiyelini değerlendiriyoruz.",
      items: ["C-Level & üst düzey yönetici arama", "Scale-up kritik ekip yapılanması", "Türkiye, GCC ve Avrupa yetenek ağı"],
      featured: true,
    },
    {
      num: "02",
      tag: "DOĞRU ORGANİZASYON",
      title: ["Rol, Görev &", "Yetkinlik Tasarımı"],
      body: "Organizasyon şemasını gerçek iş akışına dönüştürür; görev, sorumluluk, karar alanı ve başarı ölçütlerini görünür kılarız.",
      items: ["Organizasyon ve görev tasarımı", "Yetkinlik ve performans sistemi", "Kariyer ve liderlik mimarisi"],
    },
    {
      num: "03",
      tag: "DOĞRU SİSTEM",
      title: ["HR Digitalization", "& AI Integration"],
      body: "İK süreçlerini sadeleştirir, dijital platformlara taşır ve insan kararını güçlendirecek AI kullanım alanlarını tasarlarız.",
      items: ["Süreç analizi ve dijital yol haritası", "İK sistemi seçimi ve kurulum desteği", "AI destekli ölçüm ve iş akışları"],
    },
    {
      num: "04",
      tag: "GELECEĞİN YETENEĞİ",
      title: ["Young Talent", "& Internship Programs"],
      body: "Şirketiniz için genç yetenekleri çeken, gerçek iş deneyimi kazandıran ve geleceğin liderlik havuzunu besleyen programlar tasarlarız.",
      items: ["Staj ve genç yetenek programı tasarımı", "Üniversite ve kampüs iş birlikleri", "Seçme, gelişim ve bağlılık yolculuğu"],
    },
  ],
  packageCta: {
    label: "KURUMSAL DÖNÜŞÜM PAKETİ",
    title: "Kurucudan Sisteme™",
    body: "İhtiyaca göre tek modül veya bütünsel dönüşüm programı.",
    button: "Şirketiniz için yol haritası alın ↗",
    href: "/sirketler#roadmap",
  },
};

export const method = {
  eyebrow: "İyibiriz yaklaşımı",
  title: "Yeteneği keşfeder,",
  titleEm: "organizasyon mimarisini kurarız.",
  steps: [
    { no: "01", title: "İşin bağlamını çözeriz", body: "Büyüme hedefini, iş akışını, kültürü ve organizasyonun gerçek ihtiyacını netleştiririz." },
    { no: "02", title: "Potansiyeli görünür kılarız", body: "Deneyimin ötesinde karar kalitesi, etki alanı ve dönüşüm kapasitesini değerlendiririz." },
    { no: "03", title: "Doğru eşleşmeyi tasarlarız", body: "Şirket ve lider için sürdürülebilir, şeffaf ve korunaklı bir yerleşim süreci yürütürüz." },
  ],
};

export const talentPaths = {
  eyebrow: "02 · Adaylar için",
  title: ["Her kariyer yolculuğu", "aynı yerde başlamaz."],
  paths: [
    {
      no: "01 / EXECUTIVE",
      title: "Executive Circle",
      body: "Genel Müdür, Genel Müdür Yardımcısı ve direktör seviyesindeki liderler için gizli kariyer temsili ve hedef fırsat eşleştirme.",
      cta: "Programı incele ↗",
      href: "/adaylar/executive-circle",
    },
    {
      no: "02 / PROFESSIONAL",
      title: "Career Studio",
      body: "Uzmanlar, yöneticiler ve kariyerinde yön değiştirmek isteyen profesyoneller için kişisel konumlandırma ve işe geçiş desteği.",
      items: ["Kariyer yönü ve hedef rol", "CV & LinkedIn konumlandırma", "Mülakat stratejisi", "Yetenek ağına katılım"],
      cta: "Career Studio'ya başvur ↗",
      href: "/adaylar/career-studio",
    },
    {
      no: "03 / YOUNG TALENT",
      title: "Future Talent Studio",
      body: "Üniversite öğrencileri ve yeni mezunların güçlü yönlerini keşfetmesi, iş dünyasına hazırlanması ve doğru başlangıcı yapması için tasarlanmış gelişim yolu.",
      items: ["Kariyer yönü ve potansiyel keşfi", "Staj ve ilk iş hazırlığı", "CV, LinkedIn ve mülakat", "Genç yetenek ağına katılım"],
      cta: "Future Talent Studio'ya başvur ↗",
      href: "/adaylar/future-talent",
      young: true,
    },
  ],
  note: "İyibiriz, iş garantisi vaat etmez; adayın değerini doğru ifade etmesini, doğru fırsatlara hazırlanmasını ve uygun olduğunda seçili yetenek ağına dahil olmasını sağlar.",
};

export const aiSolution = {
  eyebrow: "03 · AI işe alım sistemi",
  title: "İşe alımın",
  titleEm: "akıllı çalışma katmanı.",
  body: "İyibiriz, işe alım ve İK süreçlerinize yapay zekâ desteği kazandırır; doğru teknoloji ortaklarıyla çalışarak daha hızlı, tutarlı ve izlenebilir yetenek kararları almanıza yardımcı olur.",
  points: ["İnsan kararını güçlendiren AI", "Tekrarlanabilir işe alım akışı", "Aday deneyimi ve şeffaflık", "Talent intelligence altyapısı"],
  cta: "Yapay zekâ çözümü için bize ulaşın ↗",
  href: "/yapay-zeka#talep",
};

export const executives = {
  eyebrow: "Executive Circle",
  title: "Bir sonraki rolünüzü",
  titleEm: "şansa bırakmayın.",
  body: "Genel Müdür, Genel Müdür Yardımcısı ve direktör seviyesindeki liderler için seçici, gizli ve stratejik kariyer temsili.",
  chips: ["Kariyer konumlandırma", "Executive profil", "Hedef şirket haritası", "Fırsat eşleştirme"],
  cta: "Executive Circle'a başvur ↗",
  href: "/adaylar/executive-circle#apply",
};

export const founder = {
  eyebrow: "Kurucu",
  name: "Burcu Şen",
  role: "Global HR Consultant · Executive Headhunter",
  role2: "Leadership Architect",
  bio: "Koç Grubu'nda geçen kurumsal kariyerin ve girişimcilik deneyiminin ardından Burcu Şen, şirketlerle güçlü liderler arasında yalnızca bir eşleşme değil, uzun vadeli bir başarı mimarisi kuruyor.",
  cta: "Ekibimizle iletişime geçin ↗",
};

export const ctaBand = {
  kicker: "Kritik rolünüz, kritik bir dönüm noktası olabilir.",
  title: "Geleceğin liderlik",
  titleLine2: "yapısını birlikte kuralım.",
  cta: "Tanışma görüşmesi planla",
  subject: "İyibiriz Tanışma Görüşmesi",
};

/* ---------------- Inner pages ---------------- */

export const companiesPage = {
  kicker: "ŞİRKETLER İÇİN",
  title: "Yeteneği keşfeder,",
  titleEm: "sistemi kurarız.",
  lead: "Doğru işe alımdan rol ve yetkinlik mimarisine, dijital İK altyapısından AI entegrasyonuna kadar büyümenin insan sistemini tasarlıyoruz.",
  sectionKicker: "TALENT & ORGANIZATION ARCHITECTURE",
  title2: ["Dört çözüm,", "tek organizasyon."],
  intro:
    "İyibiriz, yalnızca açık pozisyonları kapatmaz. Şirketin büyüme hedefini analiz eder; doğru yeteneği, net rolleri, ölçülebilir performansı ve sürdürülebilir İK süreçlerini aynı sistem içinde kurar.",
  modules: [
    { no: "01", title: "Executive Search & Critical Hiring", body: "C-Level, üst düzey yönetici ve büyüme açısından kritik uzman rollerde kültür ve başarı odağında seçme–yerleştirme." },
    { no: "02", title: "Rol, Görev & Yetkinlik Tasarımı", body: "Organizasyon yapısı, görev tanımları, karar alanları, yetkinlik modeli ve kariyer seviyelerinin tasarlanması." },
    { no: "03", title: "Performans & İK Dijitalleşmesi", body: "Hedef ve değerlendirme sistemi, süreç analizi, dijital İK platformu seçimi ve uygulama yol haritası." },
    { no: "04", title: "AI Entegrasyonu & Genç Yetenek", body: "İnsan denetimli AI iş akışları ile staj, kampüs ve geleceğin liderlik havuzunu besleyen genç yetenek programları." },
  ],
  forms: {
    critical: {
      id: "kritik",
      kicker: "KRİTİK POZİSYON",
      title: "Aradığınız lideri konuşalım.",
      body: "Rolün kapsamını ve aradığınız etkiyi paylaşın. İlk görüşmede ihtiyacı ve doğru arama modelini birlikte netleştirelim.",
      subject: "Kritik Pozisyon Görüşme Talebi",
      button: "Görüşme talebi gönder ↗",
      fields: [
        { name: "Ad Soyad", type: "text" as const, required: true },
        { name: "Şirket / Unvan", type: "text" as const, required: true },
        { name: "E-posta", type: "email" as const, required: true },
        { name: "Aranan Pozisyon", type: "textarea" as const },
      ],
    },
    roadmap: {
      id: "roadmap",
      kicker: "KURUCUDAN SİSTEME™",
      title: "Şirketinizin yol haritasını çıkaralım.",
      body: "Organizasyonunuzun bugününü, büyüme hedefini ve en kritik sistem ihtiyacını paylaşın; uygun çalışma modülünü birlikte belirleyelim.",
      subject: "Kurucudan Sisteme Yol Haritası Talebi",
      button: "Yol haritası görüşmesi iste ↗",
      fields: [
        { name: "Ad Soyad", type: "text" as const, required: true },
        { name: "Şirket / Çalışan Sayısı", type: "text" as const, required: true },
        { name: "E-posta", type: "email" as const, required: true },
        {
          name: "Öncelikli İhtiyaç",
          type: "select" as const,
          options: [
            "Yetenek işe alım danışmanlığı",
            "Executive işe alım danışmanlığı",
            "Genç yetenek işe alım danışmanlığı",
            "Genç yetenek gelişim programı",
            "Organizasyon ve görev tasarımı",
            "Yetkinlik ve performans sistemi",
            "İK dijitalleşmesi",
            "AI entegrasyonu",
            "Bütünsel dönüşüm",
          ],
        },
      ],
    },
  },
};

export const talentIndexPage = {
  kicker: "ADAYLAR İÇİN",
  title: "Potansiyelinizi görünür,",
  titleEm: "yolunuzu stratejik kılın.",
  lead: "Kariyer aşamanıza uygun programı seçin; deneyiminizi doğru konumlandırın ve bir sonraki adımınıza hazırlanın.",
  modules: [
    { no: "01 / EXECUTIVE", title: "Executive Circle", body: "GM, GMY ve direktör seviyesindeki liderler için gizli temsil, stratejik konumlandırma ve seçili fırsat eşleştirme.", cta: "Programı incele ↗", href: "/adaylar/executive-circle" },
    { no: "02 / EXPERIENCED", title: "Career Studio", body: "Kıdemli uzman ve yöneticiler için hedef rol, CV–LinkedIn, mülakat ve kariyer geçişi programı.", cta: "Career Studio'yu incele ↗", href: "/adaylar/career-studio" },
    { no: "03 / YOUNG TALENT", title: "Future Talent Studio", body: "Öğrenci ve yeni mezunlar için potansiyel keşfi, staj ve ilk iş hazırlığı.", cta: "Future Talent'ı incele ↗", href: "/adaylar/future-talent" },
    { no: "İYİBİRİZ TALENT NETWORK", title: "Seçili yetenek ağı", body: "Uygun profiller, onayları alınarak şirketlerin açık ve gelecekteki rolleriyle eşleştirilebilir. Programlar iş garantisi içermez." },
  ],
};

export const aiSolutionPage = {
  kicker: "YAPAY ZEKÂ DESTEKLİ İK",
  title: "İnsan uzmanlığı,",
  titleEm: "yapay zekâyla ölçeklenir.",
  lead: "İşe alım ve İK süreçlerinizde daha hızlı, tutarlı ve izlenebilir yetenek kararları almanız için yapay zekâ destekli çözümler sunuyoruz.",
  sectionKicker: "İNSAN KAYNAKLARI İÇİN YAPAY ZEKA",
  title2: "İşe alımın akıllı çalışma katmanı.",
  intro:
    "İyibiriz'in işe alım uzmanlığını doğru teknoloji ortaklarıyla birleştiriyoruz; tekrar eden adımları sadeleştirirken nihai kararı her zaman insanda tutuyoruz. Amacımız otomatik eleme değil, daha nitelikli ve şeffaf değerlendirmedir.",
  modules: [
    { no: "01", title: "AI Destekli İş Akışı", body: "Rol ihtiyacından aday değerlendirmeye kadar tutarlı ve tekrarlanabilir süreç." },
    { no: "02", title: "Talent Intelligence", body: "Aday ve pazar verisini karar vermeyi kolaylaştıran içgörülere dönüştürme yaklaşımı." },
    { no: "03", title: "Human Review", body: "AI önerilerini insan denetimi, etik kullanım ve aday şeffaflığıyla birlikte ele alan sistem." },
    { no: "04", title: "Ölçeklenebilir Yapı", body: "Büyüyen ekiplerin aynı kalite standardını daha fazla rolde sürdürebilmesi." },
  ],
  form: {
    id: "talep",
    kicker: "İLETİŞİME GEÇİN",
    title: "Yapay zekâ destekli işe alım ihtiyacınızı konuşalım.",
    body: "İhtiyacınıza uygun çözümü birlikte değerlendirelim; doğru teknoloji ortağıyla sizi buluşturalım.",
    subject: "Yapay Zekâ Çözümü Talebi",
    button: "Görüşme talebi gönder ↗",
    fields: [
      { name: "Ad Soyad", type: "text" as const, required: true },
      { name: "Şirket / Unvan", type: "text" as const, required: true },
      { name: "E-posta", type: "email" as const, required: true },
      { name: "İhtiyaç", type: "textarea" as const },
    ],
  },
};

export const executiveCirclePage = {
  kicker: "EXECUTIVE CIRCLE",
  title: "Bir sonraki rolünüzü",
  titleEm: "şansa bırakmayın.",
  lead: "Üst düzey liderler için seçici, gizli ve stratejik kariyer konumlandırma programı.",
  modules: [
    { no: "01", title: "Executive Narrative", body: "Liderlik etkinizi, dönüşüm başarılarınızı ve bir sonraki rol için değer önerinizi netleştiririz." },
    { no: "02", title: "Executive Profil", body: "CV, LinkedIn ve yönetici biyografinizi hedef rollerin karar vericilerine uygun biçimde yapılandırırız." },
    { no: "03", title: "Hedef Şirket Haritası", body: "Sektör, rol, coğrafya ve kültür kriterleriyle odaklı fırsat alanlarını belirleriz." },
    { no: "04", title: "Seçili Ağ & Eşleşme", body: "Profil uygun olduğunda ve onayınızla İyibiriz'in seçili yönetici ağına dahil edilirsiniz." },
  ],
  form: {
    id: "apply",
    kicker: "GİZLİ BAŞVURU",
    title: "Executive Circle'a katılın.",
    body: "Başvurular ön değerlendirmeye tabidir. Program bir iş garantisi değil, stratejik konumlandırma ve temsil hizmetidir.",
    subject: "Executive Circle Gizli Başvuru",
    button: "Gizli başvurumu gönder ↗",
    fields: [
      { name: "Ad Soyad", type: "text" as const, required: true },
      { name: "Unvan", type: "text" as const, required: true },
      { name: "E-posta", type: "email" as const, required: true },
      { name: "Hedef Rol / Pazar", type: "textarea" as const },
    ],
  },
};

export const careerStudioPage = {
  kicker: "CAREER STUDIO",
  title: "Deneyiminizi",
  titleEm: "doğru hikâyeye dönüştürün.",
  lead: "Kıdemli uzmanlar, yöneticiler ve kariyerinde yön değiştiren profesyoneller için odaklı kariyer geçiş programı.",
  modules: [
    { no: "01", title: "Kariyer Stratejisi", body: "Güçlü yönleriniz, pazar gerçekliği ve yaşam hedefleriniz üzerinden hedef rolünüzü netleştiririz." },
    { no: "02", title: "CV & LinkedIn", body: "Deneyiminizi görev listesi olmaktan çıkarıp ölçülebilir etki ve uzmanlık anlatısına dönüştürürüz." },
    { no: "03", title: "Mülakat Hazırlığı", body: "Kritik sorulara, başarı örneklerine ve ücret görüşmesine yönelik kişisel hazırlık yaparız." },
    { no: "04", title: "Yetenek Ağı", body: "Uygunluğa bağlı olarak profiliniz İyibiriz'in seçili yetenek ağına dahil edilebilir." },
  ],
  form: {
    kicker: "BAŞVURU",
    title: "Kariyer yönünüzü birlikte netleştirelim.",
    body: "Başlangıç bilgilerinizi paylaşın; ihtiyacınıza uygun çalışma kapsamını değerlendirelim.",
    subject: "Career Studio Başvurusu",
    button: "Career Studio'ya başvur ↗",
    fields: [
      { name: "Ad Soyad", type: "text" as const, required: true },
      { name: "Unvan", type: "text" as const, required: true },
      { name: "E-posta", type: "email" as const, required: true },
      { name: "Kariyer Hedefi", type: "textarea" as const },
    ],
  },
};

export const futureTalentPage = {
  kicker: "FUTURE TALENT STUDIO",
  title: "Kariyerine",
  titleEm: "güçlü bir başlangıç yap.",
  lead: "Üniversite öğrencileri ve yeni mezunlar için potansiyel keşfi, staj ve ilk iş hazırlığı.",
  modules: [
    { no: "01", title: "Potansiyel Keşfi", body: "Güçlü yönlerinizi, ilgi alanlarınızı ve gelişim önceliklerinizi görünür kılarız." },
    { no: "02", title: "İlk Kariyer Yönü", body: "Sektörleri ve rolleri tanıyarak size uygun ilk kariyer hipotezini oluştururuz." },
    { no: "03", title: "CV, LinkedIn & Mülakat", body: "Sınırlı deneyimi güçlü anlatmayı, staj ve ilk iş görüşmelerine hazırlanmayı çalışırız." },
    { no: "04", title: "Future Talent Network", body: "Uygunluğa bağlı olarak şirketlerin staj ve genç yetenek programlarıyla eşleşme fırsatı." },
  ],
  form: {
    kicker: "GENÇ YETENEK BAŞVURUSU",
    title: "İlk adımını görünür kıl.",
    body: "Başvurular program değerlendirmesine tabidir ve iş veya staj garantisi içermez.",
    subject: "Future Talent Studio Başvurusu",
    button: "Future Talent Studio'ya başvur ↗",
    fields: [
      { name: "Ad Soyad", type: "text" as const, required: true },
      { name: "Üniversite / Bölüm", type: "text" as const, required: true },
      { name: "E-posta", type: "email" as const, required: true },
      { name: "Hedef Alan", type: "textarea" as const },
    ],
  },
};
