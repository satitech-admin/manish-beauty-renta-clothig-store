import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Gem, MessageCircle, ShieldCheck } from "lucide-react";
import { products } from "../../../data";
import SiteHeader from "../../../components/SiteHeader";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}

export default async function ProductPage({params}){
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug)||products[0];
  const related=products.filter(x=>x.slug!==p.slug && (x.category===p.category || x.age===p.age)).slice(0,3);
  const msg=`Hello Manish Costume, I am interested in renting the ${p.name}. Please share availability and rental details.`;
  const wa=`https://wa.me/?text=${encodeURIComponent(msg)}`;
  return <main>
    <SiteHeader/>
    <section className="detail wrap">
      <div className="detail-media"><img src={p.image} alt={p.name}/><span>{p.tag}</span><small>RENTAL COLLECTION</small></div>
      <div className="detail-copy">
        <Link href="/costumes" className="back-link"><ArrowLeft size={16}/> All collections</Link>
        <span className="eyebrow">{p.category} · {p.age}</span>
        <h1>{p.name}</h1>
        <p className="detail-intro">A statement rental look for celebrations, performances and special occasions. Exact size, fitting, rental period and pricing are confirmed directly with the store before booking.</p>
        <div className="detail-notes">
          <div><CalendarDays/><span><b>Check your date</b><small>Confirm availability for your event.</small></span></div>
          <div><Gem/><span><b>Complete the look</b><small>Add jewellery, props or accessories.</small></span></div>
          <div><ShieldCheck/><span><b>Personal assistance</b><small>Get help selecting the right style.</small></span></div>
        </div>
        <a className="btn btn-dark detail-cta" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp <ArrowUpRight size={17}/></a>
      </div>
    </section>
    <section className="related wrap">
      <div className="section-kicker"><span className="eyebrow">YOU MAY ALSO LIKE</span><h2>More from the <i>rental wardrobe.</i></h2></div>
      <div className="related-grid">{related.map(r=><Link href={`/costumes/${r.slug}`} key={r.slug}><img src={r.image} alt={r.name}/><span>{r.category}</span><h3>{r.name}</h3></Link>)}</div>
    </section>
  </main>
}