"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal, X, MessageCircle } from "lucide-react";

export default function CollectionBrowser({products}){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const [sort,setSort]=useState("featured");
  const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];
  const filtered=useMemo(()=>{
    const q=query.trim().toLowerCase();
    const list=products.filter(p=>{
      const inCategory=category==="All"||p.category===category;
      const inQuery=!q||[p.name,p.category,p.age,p.tag,p.code,p.occasion,p.sizes].join(" ").toLowerCase().includes(q);
      return inCategory&&inQuery;
    });
    if(sort==="low") return [...list].sort((a,b)=>a.price-b.price);
    if(sort==="high") return [...list].sort((a,b)=>b.price-a.price);
    if(sort==="name") return [...list].sort((a,b)=>a.name.localeCompare(b.name));
    return list;
  },[products,query,category,sort]);

  const wa=(p)=>"https://wa.me/918717934400?text="+encodeURIComponent(
    `Hello Manish Beauty Center, I am interested in this rental product.\n\nProduct: ${p.name}\nProduct code: ${p.code}\nCategory: ${p.category}\nStarting rent: ₹${p.price}/day\nFor: ${p.age}\nOccasion: ${p.occasion}\nSize/Fit: ${p.sizes}\n\nPlease share exact availability, size and final rental terms.`
  );

  return <>
    <div className="catalog-toolbar">
      <label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name, code, lehenga, jewellery, Krishna..."/>{query&&<button onClick={()=>setQuery("")} aria-label="Clear search"><X size={16}/></button>}</label>
      <select className="catalog-sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name A-Z</option></select>
    </div>
    <div className="filter-label compact-filter"><SlidersHorizontal size={16}/> Filter by collection</div>
    <div className="filter-chips">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
    <div className="catalog-count"><span>{filtered.length} rental products</span><small>Starting prices shown · exact item & final amount confirmed on enquiry</small></div>
    {filtered.length?<div className="product-grid catalog-grid">{filtered.map(p=>
      <article className="product-card product-card-pro" key={p.slug}>
        <Link href={`/costumes/${p.slug}`} className="product-media"><img src={p.image} alt={p.name} loading="lazy"/><span className="product-tag">{p.tag}</span><span className="product-code-next">{p.code}</span><span className="product-arrow"><ArrowUpRight size={18}/></span></Link>
        <div className="product-meta product-meta-pro"><small>{p.category} · {p.age}</small><h3>{p.name}</h3><p>{p.occasion} · {p.sizes}</p><div className="product-price-next"><b>₹{p.price}</b><span>/ day onwards</span></div><div className="product-actions-next"><Link href={`/costumes/${p.slug}`}>View details</Link><a href={wa(p)} target="_blank" rel="noreferrer"><MessageCircle size={14}/> Book / enquire</a></div></div>
      </article>
    )}</div>:<div className="empty-state"><b>No products found.</b><p>Try another keyword or collection.</p><button onClick={()=>{setQuery("");setCategory("All")}}>Reset filters</button></div>}
  </>;
}
