# İyibiriz — Kurumsal Web Sitesi

Next.js 16, Tailwind CSS 4 ve Framer Motion ile hazırlanmış modern tek sayfalık kurumsal site.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Üretim

```bash
npm run build
npm start
```

## Yapı

- `src/lib/content.ts` — Tüm metinler ve site ayarları
- `src/components/` — Bölüm bileşenleri
- Metin güncellemeleri için önce `content.ts` dosyasını düzenleyin

## Sonraki adımlar (isteğe bağlı)

- Burcu Şen fotoğrafını `public/` klasörüne ekleyip `About.tsx` içinde kullanın
- İletişim formunu Formspree, Resend veya kendi API’nize bağlayın
- Vercel veya benzeri platforma deploy edin
