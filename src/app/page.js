import Link from "next/link";
import { ArrowUpRight, CalendarDays, Gem, MapPin, MessageCircle, ShieldCheck, WandSparkles } from "lucide-react";
import { categories, products, occasions, garbaCollection, homeImages } from "../data";
import SiteHeader from "../components/SiteHeader";
import RentalBooking from "../components/RentalBooking";

const wa=(text)=>`https://wa.me/918717934400?text=${encodeURIComponent(text)}`;

export default function Home(){
  const featured=products.slice(0,8);
  return <main>
    <SiteHeader/>

    <section className="hero-premium">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-label"><span/> RENT · STYLE · CELEBRATE</div>
          <h1>Wear the moment.<br/><i>Return the ordinary.</i></h1>
          <p>Premium rental clothing, bridal & groom looks, Garba outfits, fancy dress, jewellery and accessories—curated for every celebration in Betul.</p>
          <div className="hero-actions">
            <Link className="btn btn-dark" href="/costumes">Explore the wardrobe <ArrowUpRight size={17}/></Link>
            <a className="btn btn-light" href={wa("Hello Manish Beauty Center, I want help choosing a rental look for my event.")} target="_blank" rel="noreferrer">Style me for my event</a>
          </div>
          <div className="hero-proof"><div><b>01</b><span>Wedding<br/>Looks</span></div><div><b>02</b><span>Garba<br/>Edits</span></div><div><b>03</b><span>Fancy<br/>Dress</span></div><div><b>04</b><span>Jewellery<br/>Rentals</span></div></div>
        </div>
        <div className="editorial-collage">
          <figure className="collage-main"><img src={homeImages.heroMain} alt="Featured traditional rental outfit"/><figcaption><small>THE FESTIVE EDIT</small><b>Dress like the occasion means it.</b></figcaption></figure>
          <figure className="collage-top"><img src={homeImages.heroMiniOne} alt="Festive rental look"/><span>01</span></figure>
          <figure className="collage-bottom"><img src={homeImages.heroMiniTwo} alt="Traditional rental look"/><span>02</span></figure>
          <div className="orbit-badge"><span>✦</span><b>RENT THE<br/>WHOLE LOOK</b></div>
        </div>
      </div>
      <div className="marquee"><div>BRIDAL RENTALS ✦ GARBA LOOKS ✦ FANCY DRESS ✦ JEWELLERY ✦ GROOM WEAR ✦ KIDS COSTUMES ✦ TRADITIONAL INDIA ✦ ACCESSORIES ✦ BRIDAL RENTALS ✦ GARBA LOOKS ✦ FANCY DRESS ✦ JEWELLERY ✦</div></div>
    </section>

    <section className="intro-strip wrap">
      <div className="intro-number">01</div>
      <div><span className="eyebrow">ONE WARDROBE · MANY IDENTITIES</span><h2>Not just clothes on rent.<br/><i>A complete look studio.</i></h2></div>
      <p>From the outfit to the finishing jewellery and character props, build a coordinated look without buying pieces you may only wear once.</p>
    </section>

    <section className="categories-premium wrap">
      <div className="section-kicker"><span className="eyebrow">BROWSE BY WORLD</span><h2>Choose your <i>occasion.</i></h2><Link href="/costumes">View full collection <ArrowUpRight size={16}/></Link></div>
      <div className="category-ribbon">{categories.map((c,i)=><Link href="/costumes" className="category-tile" key={c.name}><span className="category-index">0{i+1}</span><span className="category-icon">{c.icon}</span><b>{c.name}</b><small>{c.sub}</small></Link>)}</div>
    </section>

    <section className="occasion-section">
      <div className="wrap">
        <div className="section-kicker light"><span className="eyebrow">CURATED BY MOMENT</span><h2>Every celebration has<br/><i>its own silhouette.</i></h2></div>
        <div className="occasion-editorial">{occasions.map((o,i)=><Link href="/costumes" className={`occasion-panel panel-${i+1}`} key={o.title}><img src={o.image} alt={o.title}/><div className="occasion-shade"/><span className="occasion-no">0{i+1}</span><div className="occasion-copy"><small>RENTAL EDIT</small><h3>{o.title}</h3><p>{o.text}</p><b>Discover the edit <ArrowUpRight size={15}/></b></div></Link>)}</div>
      </div>
    </section>

    <section id="wedding" className="story-section wrap">
      <div className="story-media"><img src={products[4].image} alt="Bridal rental collection"/><span className="story-stamp">WEDDING<br/><b>01 / 04</b></span></div>
      <div className="story-copy"><span className="eyebrow">THE WEDDING WARDROBE</span><h2>Grand enough for the photos.<br/><i>Sensible enough to rent.</i></h2><p>Bridal statement looks, groom wear and traditional outfits for family functions—without committing to an outfit that lives in a wardrobe after one event.</p><div className="story-features"><span><Gem/> Bridal & jewellery pairing</span><span><ShieldCheck/> Occasion-ready selection</span><span><CalendarDays/> Date-based availability</span></div><Link className="text-link" href="/costumes">Explore wedding looks <ArrowUpRight size={17}/></Link></div>
    </section>

    <section id="garba" className="garba-premium">
      <div className="wrap"><div className="section-kicker"><span className="eyebrow">NAVRATRI · GARBA · TRADITIONAL</span><h2>The <i>Garba Edit.</i></h2><p>Colour, movement and mirror-work energy for every Garba night.</p></div>
      <div className="garba-track">{garbaCollection.map((g,i)=><Link href="/costumes" className="garba-card" key={g.name}><div className="garba-media"><img src={g.image} alt={g.name}/><span>0{i+1}</span></div><div><small>RENTAL LOOK</small><h3>{g.name}</h3><p>{g.text}</p><b>Check the look <ArrowUpRight size={15}/></b></div></Link>)}</div></div>
    </section>

    <section className="featured-section wrap">
      <div className="section-kicker"><span className="eyebrow">MOST ASKED-FOR LOOKS</span><h2>From our <i>rental wardrobe.</i></h2><Link href="/costumes">Browse all looks <ArrowUpRight size={16}/></Link></div>
      <div className="product-grid">{featured.map(p=><Link href={`/costumes/${p.slug}`} className="product-card" key={p.slug}><div className="product-media"><img src={p.image} alt={p.name}/><span className="product-tag">{p.tag}</span><span className="product-arrow"><ArrowUpRight size={18}/></span></div><div className="product-meta"><div><small>{p.category} · {p.age}</small><h3>{p.name}</h3></div><span className="availability">On enquiry</span></div></Link>)}</div>
    </section>

    <section className="full-bleed-feature">
      <div className="full-photo"><img src={homeImages.traditional} alt="Traditional Indian rental look"/></div>
      <div className="full-copy"><span className="eyebrow">TRADITIONAL INDIA</span><h2>Regional roots.<br/><i>Modern rental logic.</i></h2><p>Lugda, sarees, dhoti looks, kurtas, festive drapes and cultural-event styling for school functions, weddings, family celebrations and stage performances.</p><div className="look-pills"><span>🪷 Lugda</span><span>🥻 Sarees</span><span>🕺 Dhoti & Kurta</span><span>👳 Turban Looks</span></div><Link className="btn btn-cream" href="/costumes">Explore traditional wear <ArrowUpRight size={17}/></Link></div>
    </section>

    <section id="fancy" className="fancy-editorial wrap">
      <div className="fancy-copy"><span className="eyebrow">FANCY DRESS STUDIO</span><h2>For the day they need to become <i>someone else.</i></h2><p>Mythology, professions, stage characters, festival looks and kids costumes—with accessories and props to complete the transformation.</p><div className="tag-cloud"><span>Krishna</span><span>King & Queen</span><span>Doctor</span><span>Police</span><span>Stage</span><span>Traditional</span></div><Link className="text-link" href="/costumes">Explore fancy dress <ArrowUpRight size={17}/></Link></div>
      <div className="fancy-images"><img className="fancy-a" src={homeImages.fancyOne} alt="Kids Krishna costume"/><img className="fancy-b" src={homeImages.fancyTwo} alt="Fancy dress character costume"/><div className="fancy-badge"><WandSparkles/><b>COSTUME<br/>+ PROPS</b></div></div>
    </section>

    <section id="jewellery" className="jewel-section">
      <div className="wrap jewel-grid"><div className="jewel-head"><span className="eyebrow">COMPLETE THE LOOK</span><h2>Jewellery that<br/><i>doesn’t need to be yours forever.</i></h2><p>Pair your rental outfit with statement jewellery and accessories for a polished, coordinated finish.</p><Link className="btn btn-light" href="/costumes">See jewellery looks <ArrowUpRight size={17}/></Link></div>{products.slice(20,23).map(p=><Link href={`/costumes/${p.slug}`} className="jewel-look" key={p.slug}><img src={p.image} alt={p.name}/><div><small>JEWELLERY RENTAL</small><h3>{p.name}</h3><ArrowUpRight/></div></Link>)}</div>
    </section>

    <RentalBooking/>

    <section className="booking-premium wrap">
      <div><span className="eyebrow">YOUR EVENT, YOUR LOOK</span><h2>Have a date already?</h2><p>Tell us the occasion and event date. We’ll help you narrow down the right rental options.</p></div>
      <a className="btn btn-cream" href={wa("Hello Manish Beauty Center, I want to check rental availability. My event date is: ")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Check availability <ArrowUpRight size={17}/></a>
    </section>

    <footer id="contact" className="site-footer"><div className="wrap footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">M</span><span className="brand-copy"><b>MANISH BEAUTY CENTER</b><small>RENTAL CLOTHING · JEWELLERY · STYLING</small></span></div><p>Celebration looks for weddings, Garba, traditional functions, kids events, fancy dress and more.</p></div><div><small>VISIT</small><p><MapPin size={15}/> Cement Road, Gali No. 1, Kothi Bazar, Betul, Madhya Pradesh 460001</p></div><div><small>EXPLORE</small><p><Link href="/costumes">All Collections</Link><br/><Link href="/#garba">Garba Edit</Link><br/><Link href="/#jewellery">Jewellery</Link></p></div><div><small>ENQUIRE</small><p><a href={wa("Hello Manish Beauty Center, I want to enquire about a rental look.")} target="_blank" rel="noreferrer">WhatsApp enquiry ↗</a></p></div></div><div className="wrap footer-bottom"><span>© 2026 Manish Beauty Center · Betul</span><span>Rent · Dress · Celebrate</span></div></footer>
  </main>
}