import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { FlaskConical, Stethoscope, Wheat, Users, Scale } from 'lucide-react';

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center text-center px-6 min-h-[50vh]">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/28/e4/e9/28e4e9ed495f45c758f36afa6b7032ad.jpg')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-linen/40 to-white/50" />
        <div className="max-w-3xl mx-auto relative z-10 text-ink flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grove/20 bg-white/60 backdrop-blur-md mb-6">
              <span className="text-[0.68rem] tracking-[0.2em] uppercase text-grove font-medium">Our Services</span>
            </div>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-serif font-bold text-ink leading-[1.05] mb-6">
              Everything your farm<br /><em className="italic font-normal text-grove">needs to thrive.</em>
            </h1>
            <p className="text-lg md:text-xl text-body-text font-light max-w-2xl mx-auto">
              Five services designed to work together. Every step of the way, we are with you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-7 md:px-10">
          {[
            {
              num: '01', icon: <FlaskConical className="w-6 h-6 text-grove inline-block mr-3 mb-1" strokeWidth={1.5} />, title: 'Soil Testing', 
              desc: 'We visit your farm and conduct on-site pH and nutrient analysis. Results explained in plain language the same day — no delays, no confusing reports. You leave knowing exactly what your soil needs and why it matters for your crops.', 
              tags: ['On-site visit', 'Same-day results', 'pH analysis', 'Nutrient mapping', 'Written report'],
              plabel: 'Starting from', pval: 'KSh 300', psub: 'per farm visit', phase: 'Phase 1', btnId: 'Book a Visit', btnClass: 'btn-grove'
            },
            {
              num: '02', icon: <Stethoscope className="w-6 h-6 text-grove inline-block mr-3 mb-1" strokeWidth={1.5} />, title: 'Farm Advisory', 
              desc: 'A written farm plan specific to your land, your crops, and your season. Tells you exactly what to apply, when, and how much. Our annual subscription includes quarterly farm visits and ongoing WhatsApp support throughout the growing year.', 
              tags: ['Written farm plan', 'Seasonal guidance', 'Quarterly visits', 'WhatsApp support', 'Annual subscription'],
              plabel: 'Annual subscription', pval: 'KSh 2,000', psub: 'per year', phase: 'Phase 1', btnId: 'Enquire Now', btnClass: 'btn-grove'
            },
            {
              num: '03', icon: <Wheat className="w-6 h-6 text-grove inline-block mr-3 mb-1" strokeWidth={1.5} />, title: 'Input Supply', 
              desc: 'Agricultural lime to correct soil acidity, targeted fertilizers matched to your specific deficiencies, and certified Hass avocado seedlings from approved nurseries. We supply only what your soil test recommends — no guesswork, no overbuying, no wasted money.', 
              tags: ['Agricultural lime', 'Targeted fertilizer', 'Certified Hass seedlings', 'Bulk pricing', 'Farm delivery'],
              plabel: 'Priced fairly', pval: 'Bulk rates', psub: 'passed to you', phase: 'Phase 1', btnId: 'Get a Quote', btnClass: 'btn-grove'
            },
            {
              num: '04', icon: <Users className="w-6 h-6 text-grove inline-block mr-3 mb-1" strokeWidth={1.5} />, title: 'Farmer Networks', 
              desc: 'Join an organised farmer group in your area. Members share logistics, access bulk pricing on inputs, and support each other through the season. Our field officers run regular group sessions with training, market price updates, and practical problem-solving.', 
              tags: ['Free to join', 'Bulk input pricing', 'Shared logistics', 'Group sessions', 'Peer support'],
              plabel: 'Membership', pval: 'Free', psub: 'to join', phase: 'Phase 1', btnId: 'Join a Group', btnClass: 'btn-grove'
            },
            {
              num: '05', icon: <Scale className="w-6 h-6 text-clay inline-block mr-3 mb-1" strokeWidth={1.5} />, title: 'Produce Aggregation', 
              desc: 'When your avocados are ready, we collect from your farm, grade, and sell directly to buyers and exporters — cutting out the middlemen who have always taken margins that belong to you. Transparent pricing, small per-kilogram commission, fair payouts every time.', 
              tags: ['Farm collection', 'Grading & sorting', 'Direct to buyers', 'Export-ready', 'Transparent pricing'],
              plabel: 'Our commission', pval: 'KSh 3–5', psub: 'per kg', phase: 'Phase 2+', p2: true, btnId: 'Register Interest', btnClass: 'btn-clay'
            }
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr_190px] gap-10 p-10 bg-white border-b border-dew items-start transition-colors duration-250 hover:bg-ivory ${i === 0 ? 'rounded-t-2xl' : ''} ${i === 4 ? 'rounded-b-2xl border-none' : ''}`}>
                <div className="font-serif text-[2.8rem] font-bold text-dew leading-none">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-2 flex items-center">
                    {s.icon}
                    {s.title}
                  </h3>
                  <p className="text-[0.87rem] leading-[1.78] text-body font-light max-w-[500px]">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-[0.64rem] py-1 px-2.5 bg-mist text-grove rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-[0.6rem] tracking-[0.1em] uppercase text-faint mb-1 font-medium">{s.plabel}</div>
                  <div className="font-serif text-xl font-bold text-ink mb-2">
                    {s.pval}
                    <small className="text-[0.78rem] font-normal text-mid block mt-0.5">{s.psub}</small>
                  </div>
                  <div className={`inline-block mt-2 text-[0.6rem] py-1 px-2.5 rounded-full font-semibold ${s.p2 ? 'bg-clay/10 text-clay' : 'bg-mist text-grove'}`}>
                    {s.phase}
                  </div>
                  <Link to="/contact" className={`mt-3 w-full py-2.5 px-4 text-[0.74rem] font-medium rounded-full transition-all duration-250 text-center block ${s.btnClass}`}>
                    {s.btnId}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
