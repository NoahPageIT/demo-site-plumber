import { useState, useEffect } from 'react'

const PHONE = '(602) 555-0142'
const EMAIL = 'hello@peakflowplumbing.com'

const SERVICES = [
  { icon: '🚨', title: 'Emergency Plumbing', desc: '24/7 response — burst pipes, flooding, no hot water. We show up fast.' },
  { icon: '🌀', title: 'Drain Cleaning', desc: 'Hydro-jetting and snaking to clear stubborn clogs and root intrusions.' },
  { icon: '🔥', title: 'Water Heater Install', desc: 'Tank and tankless systems installed same day, parts + labor guaranteed.' },
  { icon: '🔍', title: 'Leak Detection', desc: 'Non-invasive acoustic and thermal detection to find hidden leaks fast.' },
  { icon: '🚿', title: 'Bathroom Remodels', desc: 'Full bathroom plumbing rough-in and finish, on time and on budget.' },
  { icon: '🏢', title: 'Commercial Plumbing', desc: 'Backflow prevention, grease traps, tenant build-outs — licensed & bonded.' },
]

const TESTIMONIALS = [
  { name: 'Maria T.', stars: 5, text: 'Called at 11pm on a Sunday - they arrived within 45 minutes. Fixed a burst pipe and saved my floors. Worth every penny.' },
  { name: 'James R.', stars: 5, text: 'Clear pricing upfront, no surprises on the invoice. My tankless water heater was running before noon.' },
  { name: 'Sandra K.', stars: 5, text: 'Third plumber I tried for a slab leak - Peak Flow found it in under an hour with their detection equipment.' },
]

function Stars({ n }) {
  return <span className="text-yellow-400 text-sm">{'★'.repeat(n)}</span>
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/REPLACE_ME', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setSent(true)
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="font-sans text-slate-800">
      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-shadow ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <span className="text-2xl">💧</span> Peak Flow Plumbing
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">{l.label}</a>
            ))}
            <a href={`tel:${PHONE}`} className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              Call Now
            </a>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 space-y-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-slate-700 py-1">{l.label}</a>
            ))}
            <a href={`tel:${PHONE}`} className="block bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full text-center">{PHONE}</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center">
        <div className="max-w-5xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600/50 text-blue-200 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Phoenix, AZ - Licensed & Bonded
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Fast, Honest Plumbing<br />You Can Count On
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              24/7 emergency service. Upfront pricing. No surprises. Family owned since 2009.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Call {PHONE}
              </a>
              <a href="#contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Get a Free Quote
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-100">
              <span>✓ Licensed & Insured</span>
              <span>✓ Upfront Pricing</span>
              <span>✓ 1-Year Labor Warranty</span>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center space-y-4 w-72">
              <div className="text-6xl">🔧</div>
              <div className="text-xl font-bold">Available 24/7</div>
              <div className="text-blue-100 text-sm">Emergency dispatch in under 60 minutes across Phoenix metro</div>
              <div className="text-3xl font-extrabold text-yellow-300">5.0 ★</div>
              <div className="text-blue-200 text-xs">Based on 400+ Google reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2">What We Fix</h2>
            <p className="text-slate-500">Residential and commercial plumbing across the Phoenix Valley</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Why Phoenix Trusts Peak Flow</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We started Peak Flow in 2009 after watching neighbors get overcharged by out-of-state contractors. Our model is simple: flat-rate pricing quoted before any work begins, licensed technicians only, and a 1-year labor warranty on every job.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              No bait-and-switch. No upselling parts you don't need. Just straight talk and clean work.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[['15+', 'Years in Business'], ['4,200+', 'Jobs Completed'], ['400+', '5-Star Reviews']].map(([n, l]) => (
                <div key={l} className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-blue-700">{n}</div>
                  <div className="text-xs text-slate-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 space-y-4">
            {['AZ ROC Licensed (License #289341)', 'Fully insured - $2M liability', 'Background-checked technicians', 'Flat-rate pricing, quoted upfront', '24/7 emergency dispatch', '1-year parts & labor warranty'].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2">What Customers Say</h2>
            <p className="text-blue-200">From Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <Stars n={t.stars} />
                <p className="mt-3 text-blue-50 text-sm leading-relaxed italic">"{t.text}"</p>
                <p className="mt-4 font-semibold text-blue-200 text-sm">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Get a Free Quote</h2>
            <p className="text-slate-500 mb-6">Tell us what's going on and we'll call you back within the hour.</p>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-center gap-3"><span className="text-xl">📞</span><a href={`tel:${PHONE}`} className="hover:text-blue-700">{PHONE}</a></div>
              <div className="flex items-center gap-3"><span className="text-xl">✉️</span><a href={`mailto:${EMAIL}`} className="hover:text-blue-700">{EMAIL}</a></div>
              <div className="flex items-center gap-3"><span className="text-xl">📍</span><span>Serving all Phoenix metro areas</span></div>
              <div className="flex items-center gap-3"><span className="text-xl">🕐</span><span>Mon-Sat 7am-8pm | Emergency 24/7</span></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold text-lg text-green-700">Message Sent!</h3>
                <p className="text-slate-500 text-sm mt-2">We'll call you back within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Your Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">What's the issue?</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Describe the problem - e.g. 'hot water heater stopped working'"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition-colors">
                  Request a Callback
                </button>
                <p className="text-xs text-slate-400 text-center">We'll call you back within 60 minutes</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-bold text-white text-lg mb-1">💧 Peak Flow Plumbing</p>
          <p>Phoenix, AZ · AZ ROC License #289341 · {PHONE}</p>
          <p className="mt-2 text-slate-500 text-xs">© {new Date().getFullYear()} Peak Flow Plumbing LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
