"use client";

import { useState } from "react";
import { CalendarDays, MessageCircle, Sparkles } from "lucide-react";

export default function RentalBooking(){
  const [form,setForm]=useState({name:"",phone:"",occasion:"",need:"",forWhom:"Women",size:"",eventDate:"",quantity:"1",pickup:"",returnDate:"",notes:""});
  const set=(key)=>(e)=>setForm(v=>({...v,[key]:e.target.value}));
  function submit(e){
    e.preventDefault();
    if(form.pickup&&form.returnDate&&form.returnDate<form.pickup){alert("Return date pickup date se pehle nahi ho sakti.");return;}
    const msg=[
      "Hello Manish Beauty Center, I want to book a rental look.","",
      `Name: ${form.name}`,`Phone: ${form.phone}`,`Occasion: ${form.occasion}`,`Need: ${form.need}`,
      `For: ${form.forWhom}`,`Size / Age: ${form.size||"Not specified"}`,`Event date: ${form.eventDate}`,
      `Number of looks: ${form.quantity}`,`Pickup date: ${form.pickup||"To be discussed"}`,
      `Return date: ${form.returnDate||"To be discussed"}`,`Notes: ${form.notes||"None"}`,"",
      "Please share available options, fitting details and rental terms."
    ].join("\n");
    window.open("https://wa.me/918717934400?text="+encodeURIComponent(msg),"_blank","noopener,noreferrer");
  }
  return <section className="booking-zone-next" id="book-rental">
    <div className="wrap booking-grid-next">
      <div className="booking-copy-next">
        <span className="eyebrow">BOOK A RENTAL LOOK</span>
        <h2>Tell us the function.<br/><i>We’ll match the look.</i></h2>
        <p>Wedding, Garba, drama, school function, cultural program, fancy dress or stage performance—share the requirement and get exact availability on WhatsApp.</p>
        <div className="booking-points-next">
          <span><CalendarDays/> Event date + rental dates</span>
          <span><Sparkles/> Clothes + jewellery + props</span>
          <span><MessageCircle/> Confirmation on +91 87179 34400</span>
        </div>
      </div>
      <form className="booking-form-next" onSubmit={submit}>
        <div className="booking-form-title"><h3>Rental enquiry</h3><small>No online payment · availability confirmation first</small></div>
        <div className="booking-fields-next">
          <label><span>Your name *</span><input required value={form.name} onChange={set("name")} placeholder="Name"/></label>
          <label><span>Phone number *</span><input required value={form.phone} onChange={set("phone")} inputMode="tel" placeholder="+91"/></label>
          <label><span>Function / occasion *</span><select required value={form.occasion} onChange={set("occasion")}><option value="">Select</option><option>Wedding / Reception</option><option>Engagement / Sangeet</option><option>Garba / Navratri</option><option>Drama / Theatre / Stage</option><option>School Function / Annual Day</option><option>Fancy Dress Competition</option><option>Cultural / Traditional Function</option><option>Janmashtami / Religious Event</option><option>Photoshoot / Performance</option><option>Other</option></select></label>
          <label><span>What do you need? *</span><select required value={form.need} onChange={set("need")}><option value="">Select</option><option>Clothes only</option><option>Jewellery only</option><option>Clothes + Jewellery</option><option>Costume + Props</option><option>Complete look / styling</option></select></label>
          <label><span>For whom?</span><select value={form.forWhom} onChange={set("forWhom")}><option>Women</option><option>Men</option><option>Girl</option><option>Boy</option><option>Couple</option><option>Group / Team</option></select></label>
          <label><span>Size / age</span><input value={form.size} onChange={set("size")} placeholder="M / 38 / 8 years"/></label>
          <label><span>Event date *</span><input type="date" required value={form.eventDate} onChange={set("eventDate")}/></label>
          <label><span>Number of looks</span><input type="number" min="1" value={form.quantity} onChange={set("quantity")}/></label>
          <label><span>Pickup date</span><input type="date" value={form.pickup} onChange={set("pickup")}/></label>
          <label><span>Return date</span><input type="date" value={form.returnDate} onChange={set("returnDate")}/></label>
          <label className="full"><span>Style / colour / character / jewellery notes</span><textarea value={form.notes} onChange={set("notes")} placeholder="e.g. red bridal look, Krishna costume, Garba jewellery, 6-person drama group..."/></label>
        </div>
        <button type="submit">Send booking request on WhatsApp ↗</button>
        <small className="booking-disclaimer">Booking is confirmed only after store confirmation of exact item, size, dates and rental terms.</small>
      </form>
    </div>
  </section>;
}
