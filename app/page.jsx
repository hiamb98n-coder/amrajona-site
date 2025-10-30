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
    </main>
  );
}
