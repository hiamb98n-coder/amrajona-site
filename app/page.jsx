import Image from 'next/image'
// app/page.jsx
export const metadata = {
  title: 'AMRAJONA — سرّ المذاق الأصيل',
  description: 'مواد غذایی خشک و محصولات اصیل خاورمیانه',
};

const products = [
  { id: 1, nameFa: 'رب گوجه فرنگی', nameAr: 'معجون الطماطم', img: '/images/tomato-paste.jpg' },
  { id: 2, nameFa: 'روغن زیتون بکر', nameAr: 'زيت زيتون بكر', img: '/images/olive-oil.jpg' },
  { id: 3, nameFa: 'زیتون سبز', nameAr: 'Apple Green Olive', img: '/images/green-olive.jpg' },
  { id: 4, nameFa: 'خیارشور', nameAr: 'Pickled Cucumber', img: '/images/pickled-cucumber.jpg' },
  { id: 5, nameFa: 'رب گوجه (آشپزخانه)', nameAr: 'معجون الطماطم', img: '/images/tomato-kitchen.jpg' },
  { id: 6, nameFa: 'ارده (طحینی)', nameAr: 'طحينة السمسم', img: '/images/tahini.jpg' },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative">
        <img
          src="/images/hero-collection.jpg"
          alt="AMRAJONA - Taste the Tradition"
          className="w-full h-[42vh] sm:h-[55vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">AMRAJONA</h1>
            <p className="mt-2 text-lg sm:text-2xl">سرّ المذاق الأصيل</p>
            <p className="mt-1 text-sm sm:text-base">Taste the Tradition</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID (۲تایی) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">محصولات</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <div key={p.id} className="border rounded-lg overflow-hidden shadow-sm">
              <img src={p.img} alt={p.nameFa} className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-3 sm:p-4">
                <div className="text-sm text-gray-700">{p.nameAr}</div>
                <div className="text-base font-semibold">{p.nameFa}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / برند */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/tomato-kitchen.jpg"
            alt="Amrajona — Authentic Middle Eastern Flavors"
            className="w-full h-60 sm:h-72 object-cover"
          />
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">
          در <strong>Amrajona</strong> با انتخاب بهترین مواد اولیه، طعم‌های اصیل خاورمیانه را
          به سفره‌ی شما می‌آوریم — از رب گوجه‌ی غلیظ، روغن زیتون بکر، زیتون‌های سبز و
          خیارشور تا طحینی مرغوب.
        </p>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-3">تماس با ما</h3>
          <ul className="space-y-1 text-gray-800">
            <li>Belgium — Wervik</li>
            <li>
              Phone 1: <a className="underline" href="tel:+32467673996">+32 467 673 996</a>
            </li>
            <li>
              Phone 2: <a className="underline" href="tel:+32493591776">+32 493 591 776</a>
            </li>
            <li className="mt-2">
              WhatsApp: <a className="underline" href="https://wa.me/32467673996" target="_blank">پیام واتس‌اپ</a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} AMRAJONA — Taste the Tradition
      </footer>
      {/* --- HERO / معرفی برند --- */}
<section className="mt-12 rounded-2xl overflow-hidden bg-neutral-900/40 ring-1 ring-white/10">
  <div className="relative">
    <Image
      src="/images/hero.jpg"
      alt="AMRAJONA - Taste the Tradition"
      width={1600}
      height={700}
      priority
      className="w-full h-auto object-cover opacity-90"
    />
    <div className="absolute inset-0 flex items-center justify-center text-center p-6">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
          AMRAJONA – Taste the Tradition
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-white/90">
          سرّ المذاق الأصيل
        </p>
      </div>
    </div>
  </div>
</section>

{/* --- محصولات منتخب --- */}
<section className="mt-12">
  <h2 className="text-2xl font-bold">محصولات منتخب</h2>
  <p className="text-sm text-white/70 mt-1">مواد غذایی خشک و اصیل خاورمیانه</p>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/tomato-paste.jpg" alt="Tomato Paste" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">معجون الطماطم • Tomato Paste</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/olive-oil.jpg" alt="Olive Oil" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">زیتون بکر • Extra Virgin Olive Oil</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/green-olives.jpg" alt="Green Olives" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">زیتون سبز • Green Olives</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/pickled-cucumber.jpg" alt="Pickled Cucumber" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">خیارشور • Pickled Cucumber</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/tahini.jpg" alt="Tahini" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">طحینه • Tahini</h3>
      </div>
    </div>
  </div>
</section>

{/* --- تماس --- */}
<section className="mt-12 p-5 rounded-2xl ring-1 ring-white/10 bg-black/30">
  <h2 className="text-2xl font-bold">تماس</h2>
  <p className="mt-2">Belgium, Wervik</p>
  <p className="mt-1">Phone: <a href="tel:+32467673996" className="underline">+32 467 673 996</a></p>
  <p>Phone: <a href="tel:+32493591776" className="underline">+32 493 591 776</a></p>
  <p className="mt-2 text-white/70">AMRAJONA – Taste the Tradition | سرّ المذاق الأصيل</p>
</section>
      {/* --- HERO / معرفی برند --- */}
<section className="mt-12 rounded-2xl overflow-hidden bg-neutral-900/40 ring-1 ring-white/10">
  <div className="relative">
    <Image
      src="/images/hero.jpg"
      alt="AMRAJONA - Taste the Tradition"
      width={1600}
      height={700}
      priority
      className="w-full h-auto object-cover opacity-90"
    />
    <div className="absolute inset-0 flex items-center justify-center text-center p-6">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
          AMRAJONA – Taste the Tradition
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-white/90">
          سرّ المذاق الأصيل
        </p>
      </div>
    </div>
  </div>
</section>

{/* --- محصولات منتخب --- */}
<section className="mt-12">
  <h2 className="text-2xl font-bold">محصولات منتخب</h2>
  <p className="text-sm text-white/70 mt-1">مواد غذایی خشک و اصیل خاورمیانه</p>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/tomato-paste.jpg" alt="Tomato Paste" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">معجون الطماطم • Tomato Paste</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/olive-oil.jpg" alt="Olive Oil" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">زیتون بکر • Extra Virgin Olive Oil</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/green-olives.jpg" alt="Green Olives" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">زیتون سبز • Green Olives</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/pickled-cucumber.jpg" alt="Pickled Cucumber" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">خیارشور • Pickled Cucumber</h3>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/30">
      <Image src="/images/tahini.jpg" alt="Tahini" width={640} height={640} className="w-full h-auto object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">طحینه • Tahini</h3>
      </div>
    </div>
  </div>
</section>

{/* --- تماس --- */}
<section className="mt-12 p-5 rounded-2xl ring-1 ring-white/10 bg-black/30">
  <h2 className="text-2xl font-bold">تماس</h2>
  <p className="mt-2">Belgium, Wervik</p>
  <p className="mt-1">Phone: <a href="tel:+32467673996" className="underline">+32 467 673 996</a></p>
  <p>Phone: <a href="tel:+32493591776" className="underline">+32 493 591 776</a></p>
  <p className="mt-2 text-white/70">AMRAJONA – Taste the Tradition | سرّ المذاق الأصيل</p>
</section>

    </main>
  );
}
