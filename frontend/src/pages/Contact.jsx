import { useState } from "react";
import { Mail, Phone, MapPin, Send, Star, MessageSquare } from "lucide-react";

const CONTACT_INFO = [
  { icon: Mail,    label: "Email",    value: "info@damararaltdrw.com",  href: "mailto:info@damararaltdrw.com" },
  { icon: Phone,   label: "Phone",    value: "+250 788 303 897",        href: "tel:+250788303897" },
  { icon: MapPin,  label: "Location", value: "Kigali, Rwanda",          href: null },
];

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon, href: "#", color: "hover:text-[#e1306c] hover:border-[#e1306c]/50" },
  { label: "Facebook",  Icon: FacebookIcon,  href: "#", color: "hover:text-[#1877f2] hover:border-[#1877f2]/50" },
  { label: "X / Twitter", Icon: XIcon,       href: "#", color: "hover:text-white   hover:border-white/50" },
];

const PRODUCTS = [
  "Instant Coffee Jars",
  "Instant Coffee Sachets",
  "Dark Roasted Ground Coffee",
  "Rwanda Coffee Blend",
  "Coffee Yacu — Arabica Beans",
  "Damarara Rwanda Tea Bags",
  "Premium Rwandan Tea",
];

const STAR_LABELS = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

const inputClass =
  "w-full rounded-xl border border-white/8 bg-[#1a1518] px-4 py-3.5 text-sm text-white placeholder-[#5a4f4c] outline-none transition-all duration-200 focus:border-[#e07748]/60 focus:ring-2 focus:ring-[#e07748]/10";

export default function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactDone, setContactDone] = useState(false);

  const [review, setReview]     = useState({ name: "", product: "", message: "" });
  const [rating,  setRating]    = useState(0);
  const [hovered, setHovered]   = useState(0);
  const [reviewDone, setReviewDone] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0c11] text-white">

      {/* ── Glow blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[650px] w-[650px] rounded-full bg-[#e07748]/9 blur-[150px]" />
        <div className="absolute top-1/2 -left-28 h-[500px] w-[500px] rounded-full bg-[#cc5832]/7 blur-[130px]" />
        <div className="absolute bottom-20 right-1/4 h-[420px] w-[500px] rounded-full bg-[#e07748]/6 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* ── Hero ── */}
        <div className="mx-auto max-w-3xl px-6 pt-36 pb-20 text-center md:px-10">
          <span className="mb-5 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
            <span className="h-px w-8 bg-[#e07748]" />
            We&apos;d love to hear from you
            <span className="h-px w-8 bg-[#e07748]" />
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Get In Touch
          </h1>
          <div className="mx-auto mt-5 mb-7 h-0.75 w-16 bg-[#cc5832]" />
          <p className="text-[17px] leading-relaxed text-[#cfc7c9]">
            A question about our products, a bulk order, or just a word of
            appreciation — we&apos;re here for every cup of conversation.
          </p>
        </div>

        {/* ── Contact: info | form ── */}
        <div className="mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:flex lg:items-start lg:gap-12">

          {/* LEFT — info */}
          <div className="w-full lg:sticky lg:top-32 lg:w-[38%]">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#e07748]">
              Contact Details
            </p>

            <div className="space-y-3 mb-10">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href ?? undefined}
                  className={[
                    "group flex items-center gap-5 rounded-2xl border border-white/5 bg-[#150f12] px-6 py-5 transition-all duration-300",
                    href ? "cursor-pointer hover:border-[#e07748]/35 hover:bg-[#1e1619]" : "cursor-default",
                  ].join(" ")}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e07748]/25 bg-[#e07748]/10 transition-all duration-300 group-hover:border-[#e07748]/50 group-hover:bg-[#e07748]/18">
                    <Icon size={19} strokeWidth={1.5} className="text-[#e07748]" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e07748]">{label}</p>
                    <p className="text-[15px] font-medium text-[#f1ece8]">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mb-6 h-px bg-white/5" />

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e07748]">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ label, Icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={[
                    "flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-[13px] text-[#d4cbc8] transition-all duration-200",
                    color,
                  ].join(" ")}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="mt-10 w-full lg:mt-0 lg:w-[62%]">
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#150f12]">

              {/* Card header stripe */}
              <div className="h-1 w-full bg-linear-to-r from-[#e07748] via-[#cc5832] to-[#e07748]/30" />

              <div className="p-8 md:p-10">
                {contactDone ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#e07748]/40 bg-[#e07748]/10">
                      <Send size={24} className="text-[#e07748]" />
                    </div>
                    <h3 className="mb-2 font-serif text-2xl font-bold">Message Sent!</h3>
                    <p className="text-[#a89b9a]">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactDone(true); }} className="space-y-5">
                    <h3 className="mb-6 font-serif text-xl font-semibold text-[#f1ece8]">Send Us a Message</h3>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Name <span className="text-[#e07748]">*</span></span>
                        <input required type="text" placeholder="Your name" value={contact.name}
                          onChange={e => setContact(c => ({ ...c, name: e.target.value }))} className={inputClass} />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Email <span className="text-[#e07748]">*</span></span>
                        <input required type="email" placeholder="your@email.com" value={contact.email}
                          onChange={e => setContact(c => ({ ...c, email: e.target.value }))} className={inputClass} />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Subject</span>
                      <input type="text" placeholder="What's this about?" value={contact.subject}
                        onChange={e => setContact(c => ({ ...c, subject: e.target.value }))} className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Message <span className="text-[#e07748]">*</span></span>
                      <textarea required rows={5} placeholder="Tell us what's on your mind…" value={contact.message}
                        onChange={e => setContact(c => ({ ...c, message: e.target.value }))}
                        className={`${inputClass} resize-none`} />
                    </label>
                    <button type="submit"
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-br from-[#e07748] to-[#cc5832] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#cc5832]/25 transition-transform hover:-translate-y-0.5">
                      <Send size={15} strokeWidth={2} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Review section ── */}
        <div className="relative border-t border-white/5">

          {/* Subtle inner glow for this section */}
          <div className="pointer-events-none absolute inset-0 bg-[#130f12]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#e07748]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl px-6 py-28 md:px-10">

            {/* Section header */}
            <div className="mb-12 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#e07748]/30 bg-[#e07748]/10">
                <MessageSquare size={22} strokeWidth={1.5} className="text-[#e07748]" />
              </div>
              <span className="mb-3 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
                <span className="h-px w-6 bg-[#e07748]" />
                Your voice matters
                <span className="h-px w-6 bg-[#e07748]" />
              </span>
              <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Share Your Experience</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#a89b9a]">
                Tried one of our products? We&apos;d love to know what you think.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#150f12]">
              <div className="h-1 w-full bg-linear-to-r from-[#cc5832] via-[#e07748] to-[#cc5832]/30" />

              <div className="p-8 md:p-10">
                {reviewDone ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex gap-1.5">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={30}
                          className={s <= rating ? "fill-[#e07748] text-[#e07748]" : "fill-transparent text-[#3a2e2a]"} />
                      ))}
                    </div>
                    <h3 className="mb-2 font-serif text-2xl font-bold">Thank You!</h3>
                    <p className="text-[#a89b9a]">Your review has been submitted. We truly appreciate your feedback.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (rating === 0) return; setReviewDone(true); }} className="space-y-6">

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Your Name <span className="text-[#e07748]">*</span></span>
                        <input required type="text" placeholder="Enter your name" value={review.name}
                          onChange={e => setReview(r => ({ ...r, name: e.target.value }))} className={inputClass} />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Product (Optional)</span>
                        <select value={review.product} onChange={e => setReview(r => ({ ...r, product: e.target.value }))}
                          className={`${inputClass} appearance-none cursor-pointer`}>
                          <option value="" className="bg-[#1a1518]">Select a product</option>
                          {PRODUCTS.map(p => <option key={p} value={p} className="bg-[#1a1518]">{p}</option>)}
                        </select>
                      </label>
                    </div>

                    {/* Star rating */}
                    <div>
                      <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">
                        Your Rating <span className="text-[#e07748]">*</span>
                      </span>
                      <div className="flex items-center gap-1.5">
                        {[1,2,3,4,5].map(star => (
                          <button key={star} type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHovered(star)}
                            onMouseLeave={() => setHovered(0)}
                            className="transition-transform duration-100 hover:scale-115"
                            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                          >
                            <Star size={34} strokeWidth={1.5}
                              className={[
                                "transition-colors duration-150",
                                star <= (hovered || rating)
                                  ? "fill-[#e07748] text-[#e07748]"
                                  : "fill-transparent text-[#3a2e2a]",
                              ].join(" ")}
                            />
                          </button>
                        ))}
                        {(hovered || rating) > 0 && (
                          <span className="ml-3 text-sm font-medium text-[#e07748]">
                            {STAR_LABELS[hovered || rating]}
                          </span>
                        )}
                      </div>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89b9a]">Your Review <span className="text-[#e07748]">*</span></span>
                      <textarea required rows={5} placeholder="Tell us about your experience…"
                        value={review.message} onChange={e => setReview(r => ({ ...r, message: e.target.value }))}
                        className={`${inputClass} resize-none`} />
                    </label>

                    <button type="submit"
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-br from-[#e07748] to-[#cc5832] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#cc5832]/25 transition-transform hover:-translate-y-0.5">
                      <Star size={15} strokeWidth={2} />
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
