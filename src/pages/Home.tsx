import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { FlaskConical, Stethoscope, Wheat, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* FULL WIDTH HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Light, airy overlay instead of dark */}
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/65/3a/4d/653a4dc83f04d912aa9d204201fb7139.jpg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/65/3a/4d/653a4dc83f04d912aa9d204201fb7139.jpg')] bg-cover bg-center brightness-110 contrast-105" />

       <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grove/20 bg-white/60 backdrop-blur-md mb-8">
              <span className="text-[0.68rem] tracking-[0.2em] uppercase text-grove font-medium">Kisii · Kenya</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-serif text-ink font-bold leading-[1.05] mb-6">
              Stellar Farm Solutions
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg md:text-2xl text-body-text font-light max-w-3xl mb-12">
              Professional soil testing, honest advice, and fair market connections to make your farm thrive.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link to="/services" className="bg-grove text-white px-9 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-clay hover:-translate-y-1 transition-all duration-300">
                Discover Our Services
              </Link>
              <Link to="/contact" className="bg-white/80 backdrop-blur-sm border border-grove/20 text-grove px-9 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-grove hover:text-white hover:-translate-y-1 hover:border-grove transition-all duration-300">
                Book a Farm Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK FEATURES STRIP */}
      <section className="bg-white py-0 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 -mt-16 sm:-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <Reveal delay={0.1} className="p-10 text-center md:border-r border-gray-100 flex flex-col items-center group">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mb-5 text-grove transition-transform duration-500 group-hover:-translate-y-2">
                <FlaskConical className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Soil Testing</h3>
              <p className="text-body text-sm font-light leading-relaxed">Same-day results directly on your farm to cure unseen acidity.</p>
            </Reveal>
            <Reveal delay={0.2} className="p-10 text-center md:border-r border-gray-100 flex flex-col items-center group">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mb-5 text-grove transition-transform duration-500 group-hover:-translate-y-2">
                <Stethoscope className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Farm Advisory</h3>
              <p className="text-body text-sm font-light leading-relaxed">Written guidelines tailored precisely to your land and crops.</p>
            </Reveal>
            <Reveal delay={0.3} className="p-10 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mb-5 text-grove transition-transform duration-500 group-hover:-translate-y-2">
                <Wheat className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Produce Sales</h3>
              <p className="text-body text-sm font-light leading-relaxed">Fair market connections completely eliminating the middlemen.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TAKE A TOUR / ABOUT SPLIT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://i.pinimg.com/originals/89/ad/f6/89adf6be9b976101c1de7df4c315c2a6.jpg" 
                  alt="Farm working" 
                  className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-grove/10 backdrop-contrast-125" />
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-clay" />
                  <span className="text-xs tracking-[0.2em] font-bold text-clay uppercase">Touch the Soil</span>
                </div>
                <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-bold text-ink leading-[1.1] mb-6">
                  Most farms lose <span className="text-grove italic">30-50%</span> of their yield.
                </h2>
                <p className="text-lg text-body font-light leading-relaxed mb-6">
                  Acid soil destroys nutrients before your crops can use them, making expensive fertilizer practically useless.
                </p>
                <p className="text-[0.95rem] text-mid font-light leading-relaxed mb-10">
                  Stellar Farm Solutions visits your farm, tests your soil on-site, and gives you a clear written plan — along with the lime, fertilizer, and seedlings you need at fair prices, delivered instantly to you.
                </p>
                <Link to="/about" className="inline-flex items-center gap-3 font-semibold text-grove hover:text-clay transition-colors group">
                  <span className="border-b-2 border-transparent group-hover:border-clay pb-1">Read our story</span>
                  <span className="transform transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP / SERVICES GRID */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-px bg-grove" />
                <span className="text-xs tracking-[0.2em] font-bold text-grove uppercase">How Can We Help?</span>
                <div className="w-10 h-px bg-grove" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-serif font-bold text-ink leading-tight">
                One complete journey.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FlaskConical className="w-8 h-8" strokeWidth={1.5} />, title: 'Soil Testing', desc: 'On-site analysis. Plain-language results same day.' },
              { icon: <Stethoscope className="w-8 h-8" strokeWidth={1.5} />, title: 'Farm Advisory', desc: 'Written plans specific to your crops and season.' },
              { icon: <Wheat className="w-8 h-8" strokeWidth={1.5} />, title: 'Input Supply', desc: 'Lime and seedlings delivered at bulk prices.' },
              { icon: <Users className="w-8 h-8" strokeWidth={1.5} />, title: 'Farmer Networks', desc: 'Join groups for bulk pricing and shared logistics.' }
            ].map((srv, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-dew text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                  <div className="w-20 h-20 mx-auto rounded-full bg-mist flex items-center justify-center mb-6 text-grove shadow-sm group-hover:bg-grove group-hover:text-white transition-colors duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3">{srv.title}</h3>
                  <p className="text-sm font-light text-body mb-6">{srv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="text-center mt-12">
            <Link to="/services" className="bg-grove text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-clay transition-all duration-300 shadow-md inline-block">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WE NEED MORE HANDS / CTA BLOCK */}
      <section className="relative py-32 lg:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/da/b0/df/dab0dffa728dac2744883e66bd3f462a.jpg')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-grove/90" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-sand mb-6">
              Begin Today
            </div>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-serif font-bold text-white leading-tight mb-8">
              Your soil has a story.<br/>Let us <em className="italic text-sand font-normal">read it.</em>
            </h2>
            <p className="text-lg text-white/80 font-light mb-12 max-w-xl mx-auto">
              Book your first farm visit today. We come to you, test your soil on-site, and give you a clear written plan.
            </p>
            <Link to="/contact" className="bg-white text-grove px-10 py-4.5 rounded-full text-sm font-bold tracking-wide hover:bg-clay hover:text-white transition-all duration-300 shadow-2xl">
              Book a Farm Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
