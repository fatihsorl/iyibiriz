export const siteConfig = {
  name: "İyibiriz",
  tagline: "Yeni Nesil İnsan Kaynakları ve Markalaşma Çözümleri",
  email: "burcusen@iyibiriz.com",
  instagram: "https://www.instagram.com/burcu_sen",
  copyright:
    "©2026, İyibiriz. Burcu Şen tarafından kurulmuştur. Her hakkı saklıdır.",
  assets: {
    logo: "/iyibiriz-logo.jpg",
    founder: "/iyibiriz-burcu.avif",
  },
};

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/cozumlerimiz", label: "Çözümlerimiz" },
  { href: "/egitimlerimiz", label: "Eğitimlerimiz" },
] as const;

export type TrainingItem = {
  title: string;
  quote?: string;
  subtitle?: string;
  registrationUrl?: string;
};

export const trainings = {
  title: "EĞİTİMLERİMİZ",
  intro:
    "İnsan kaynakları, marka ve kariyer alanlarında uygulamalı eğitim programlarımızla gelişiminize yatırım yapın.",
  items: [
    {
      title: "NLP TEMEL EĞİTİMİ",
      quote: "Hedeflerin sadece bir adım uzağında! NLP ile o adımı at!",
      registrationUrl: "https://iyzi.link/AJ0Mzw",
    },
    {
      title: "Yeni Nesil İK Danışmanlığı",
      subtitle:
        "Yetenekleri Çekme, Yetenekleri İşe Alma ve Onboarding Tasarımı",
    },
    {
      title: "İşveren Marka Danışmanlığı",
      subtitle: "İşveren Marka Algınızı Birlikte Yapılandıralım",
    },
    {
      title: "Kişisel Marka Koçluğu",
      subtitle: "Kişisel Markanızla Parlayın",
    },
    {
      title: "Gelecek Tasarımı",
      subtitle: "Kariyerinizde ve Yaşamınızda Yeni Bir Adım Atın",
    },
    {
      title: "Mülakatlara Hazırlık Eğitimi",
      subtitle: "Mülakatlarda başarı için uygulamalı bu eğitime katıl!",
    },
  ],
};

export const solutionsPage = {
  title: "ÇÖZÜMLERİMİZ",
  intro:
    "Kurumsal ve bireysel ihtiyaçlarınıza özel insan kaynakları ve marka danışmanlığı hizmetlerimizi keşfedin.",
};

export const hero = {
  title: "İYİBİRİZ",
  subtitle: "YENİ NESİL İNSAN KAYNAKLARI VE MARKALAŞMA ÇÖZÜMLERİNİ",
  slogan:
    "Doğru yeteneği seçin, işveren markanızı güçlendirin — İK süreçlerinizi birlikte yönetelim.",
  cta: "KEŞFET",
};

export const about = {
  title: "HAKKIMIZDA",
  name: "BURCU ŞEN",
  role: "Stratejik İK Gelişimi ve Marka Koçu",
  bio: "15 yılı aşkın Koç Grubu Şirketlerindeki İnsan Kaynakları, Organizasyonel Gelişim, İşveren Markası ve Eğitim Gelişim, Stratejik Proje Yönetimi deneyimim ardından girişimcilik hayatındaki beş yıla yakın tecrübemle şimdi markam İyibiriz ile büyüme yolculuğundaki şirketlerin yol arkadaşıyız.",
  details: [
    "Şirketlerin %85'i doğru insan kaynakları seçimini gerçekleştiremedikleri ve insan kaynakları süreçlerini hayata geçiremedikleri için turnover oranları artmaktadır.",
    "Bu nedenle de zaman ve para kaybı yaşamaktadırlar.",
    "İYİBİRİZ olarak şirketlere doğru yeteneklerin seçimi, işe alımı, eğitimleri ve markanın işveren markasını doğru konumlandırma süreçlerinde danışmanlık vermekte ve süreçleri yönetmekteyiz.",
  ],
  closing:
    "Size özel insan kaynakları ve marka danışmanlığı çözümlerimiz için bizimle iletişime geçmeniz yeterli.",
};

export const corporateSolutions = {
  title: "KURUMSAL ÇÖZÜMLERİMİZ",
  intro:
    "Şirketinizin ihtiyacına en uygun hizmetlerimizi öğrenmek için lütfen iletişime geçin",
  items: [
    {
      title: "İK Marka Check-Up",
      description:
        "Şirketinizde çalışanlarınız sürekli işten ayrılıyor ise yeni çalışan bulmakta zorlanıyorsanız muhtemelen bir yerde hata yapıyorsunuz. İnsan Kaynakları Marka Check-Up çalışması şirket içinde ve dışındaki mevcut algınızı ölçmekte ve problemlerin kök nedenini size raporlamaktadır.",
      icon: "clipboard" as const,
    },
    {
      title: "Yetenek Seçme Yerleştirme",
      description:
        "Şirket olarak büyümek istiyorsunuz ancak şirketinizin insan kaynakları yapısını yönetecek sistemleriniz yok ise işe alım sürecinden, oryantasyona, eğitim ve gelişim sistemlerinden, performans ve yetkinlik süreçlerine kadar olan sistemleri şirketinize özel kurgularız.",
      icon: "users" as const,
    },
    {
      title: "Yetenek Gelişimi ve Kariyer Yönetimi",
      description:
        "Şirketiniz büyürken gerek yeni nesil adayları şirketinize çekmek gerekse mevcut adayları elde tutmak kolay değildir. Sürdürülebilir marka işbirlikleri ile üniversite işbirliklerinizi kolaylaştırır, potansiyel çalışanlarınızı etkilemeniz için stratejiler belirleriz. Marka Koçluğu çalışmaları İşveren Markası konumlandırmaya özel programları size özel tasarladığımız çözümlerdir.",
      icon: "trending" as const,
    },
  ],
};

export const individualSolutions = {
  title: "BİREYSEL ÇÖZÜMLERİMİZ",
  intro:
    "Bireysel olarak kariyerinizde ilerlemek istiyor, yönetsel becerilerinizi geliştirmek istiyor ancak nereden başlayacağınızı bilmiyorsanız bireysel çözümlerimizden yararlanabilirsiniz.",
  items: [
    {
      title: "NLP ile Mental Güçlenme",
      description:
        "NLP Zihin Kodlama bireyin yaşamda hedeflerine ulaşması sürecinde zihnini yeniden inşaa etmesini sağlayan, duygularını, düşüncelerini yönetme stratejilerini öğreten güçlü bir metodolojidir.",
      icon: "brain" as const,
    },
    {
      title: "Kariyer ve Kişisel Markalaşma Koçluğu",
      description:
        "Kariyerinizle ilgili doğru adımları atmak ya da kariyer ayrımlarında doğru mesleğe yönelmek istiyorsanız Kariyer koçluğu sizin kendinizi keşfetmeniz ya da geliştirmeniz için doğru çözümdür. Kişisel Marka Koçluğu ile yaşamınızda parladığınız yeni bir döneme adım atın.",
      icon: "sparkles" as const,
    },
    {
      title: "Yönetici Performans Koçluğu",
      description:
        "Bir yönetici olarak insanları doğru analiz etmek istiyor ancak bunu nasıl yapacağınızı bilmiyorsanız bu koçluk çalışması sizi başarılı bir yönetici olma yolunda desteklemektedir. Böylece ekibinizle verimli bir çalışma performansına ulaşarak başarıyı elde edebilirsiniz.",
      icon: "target" as const,
    },
  ],
};

export const company = {
  title: "FIRMAMIZ HAKKINDA",
  paragraphs: [
    "İyibiriz olarak insan kaynakları süreçlerindeki değişimin her zaman kolay olmadığını biliyoruz. 2003 yılından bu yana hem kurumsal dünyadaki tecrübelerimiz hem de her ölçekten şirketin sektör değişimlerine ayak uydurmasına ve rekabetçi konumunu korumasına yardımcı oluyoruz. Uzun yıllara dayanan deneyimimiz, işletmenizin başarısını her zaman ön planda tutmamız gerektiğini öğretti.",
    "Uzmanlardan oluşan ekibimiz, hem şirketinizin ayakta kalmasına hem de giderek büyümesine yönelik stratejiler geliştirmenize yardım etmeye hazırdır. İlk görüşmeniz için randevu almak üzere bizi hemen arayın.",
  ],
};
