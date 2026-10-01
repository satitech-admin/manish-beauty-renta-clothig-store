"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  const links=[["Home","/"],["Collections","/costumes"],["Wedding","/#wedding"],["Garba","/#garba"],["Fancy Dress","/#fancy"],["Jewellery","/#jewellery"],["Contact","/#contact"]];
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" onClick={()=>setOpen(false)} aria-label="Manish Costume home"><span className="brand-mark">M</span><span className="brand-copy"><b>MANISH COSTUME</b><small>BEAUTY · RENTAL CLOTHING · JEWELLERY</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</nav>
      <div className="header-actions"><a className="header-cta" href="https://wa.me/?text=Hello%20Manish%20Costume%2C%20I%20want%20to%20check%20rental%20availability." target="_blank" rel="noreferrer">Enquire <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>
    </div>
    <div className={`mobile-panel ${open?"open":""}`}><div className="mobile-panel-top"><span><Sparkles size={16}/> Style studio</span><small>Betul, Madhya Pradesh</small></div>{links.map(([label,href],i)=><Link key={label} href={href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight size={17}/></Link>)}<a className="mobile-enquire" href="https://wa.me/?text=Hello%20Manish%20Costume%2C%20I%20want%20to%20check%20rental%20availability." target="_blank" rel="noreferrer">Start WhatsApp enquiry <ArrowUpRight size={17}/></a></div>
  </header>
}
