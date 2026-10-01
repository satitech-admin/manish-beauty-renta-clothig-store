import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { products } from "../../data";
import SiteHeader from "../../components/SiteHeader";
import CollectionBrowser from "../../components/CollectionBrowser";

export default function Costumes(){
  return <main>
    <SiteHeader/>
    <section className="catalog-hero">
      <div className="wrap catalog-hero-inner">
        <div>
          <span className="eyebrow">THE RENTAL EDIT · 2026</span>
          <h1>Find the look<br/><i>before the occasion finds you.</i></h1>
          <p>Wedding, Garba, traditional wear, kids costumes, character looks and jewellery—curated for one memorable day, not a lifetime of storage.</p>
        </div>
        <div className="catalog-stat"><Sparkles/><b>{products.length}+</b><span>curated rental looks</span></div>
      </div>
    </section>
    <section className="catalog wrap">
      <Link className="back-link" href="/"><ArrowLeft size={16}/> Back to home</Link>
      <CollectionBrowser products={products}/>
    </section>
    <footer className="footer-min"><div className="wrap"><b>MANISH COSTUME</b><span>Beauty · Rental Clothing · Jewellery</span><small>© 2026 · Betul, Madhya Pradesh</small></div></footer>
  </main>
}