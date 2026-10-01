"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";

export default function CollectionBrowser({products}){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];
  const filtered=useMemo(()=>products.filter(p=>{const q=query.trim().toLowerCase();const inCategory=category==="All"||p.category===category;const inQuery=!q||[p.name,p.category,p.age,p.tag].join(" ").toLowerCase().includes(q);return inCategory&&inQuery;}),[products,query,category]);
  return <><div className="catalog-toolbar"><label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search lehenga, Krishna, jewellery..."/>{query&&<button onClick={()=>setQuery("")} aria-label="Clear search"><X size={16}/></button>}</label><div className="filter-label"><SlidersHorizontal size={16}/> Filter by collection</div></div><div className="filter-chips">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="catalog-count"><span>{filtered.length} looks</span><small>Availability & rental pricing confirmed on enquiry</small></div>{filtered.length?<div className="product-grid catalog-grid">{filtered.map(p=><Link href={`/costumes/${p.slug}`} className="product-card" key={p.slug}><div className="product-media"><img src={p.image} alt={p.name} loading="lazy"/><span className="product-tag">{p.tag}</span><span className="product-arrow"><ArrowUpRight size={18}/></span></div><div className="product-meta"><div><small>{p.category} · {p.age}</small><h3>{p.name}</h3></div><span className="availability">Available on enquiry</span></div></Link>)}</div>:<div className="empty-state"><b>No looks found.</b><p>Try another keyword or collection.</p><button onClick={()=>{setQuery("");setCategory("All")}}>Reset filters</button></div>}</>
}
