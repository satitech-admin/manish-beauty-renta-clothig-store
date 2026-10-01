const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800&q=90`;

export const categories = [
  {name:"Women", sub:"Lehengas & Sarees", icon:"👗", tone:"pink"},
  {name:"Men", sub:"Sherwani & Kurta", icon:"🕺", tone:"gold"},
  {name:"Kids", sub:"Fun Costumes", icon:"🧒", tone:"blue"},
  {name:"Fancy Dress", sub:"Costumes + Props", icon:"🎭", tone:"purple"},
  {name:"Jewellery", sub:"Complete Your Look", icon:"💎", tone:"peach"},
  {name:"Garba", sub:"Chaniya Choli & More", icon:"💃", tone:"yellow"},
  {name:"Wedding", sub:"Bridal & Groom", icon:"💍", tone:"coral"},
  {name:"Traditional", sub:"Lugda & Ethnic Wear", icon:"🪷", tone:"mint"},
  {name:"Accessories", sub:"Dupattas & Props", icon:"👜", tone:"lav"},
  {name:"Drama / Stage", sub:"Characters & Theatre", icon:"🎬", tone:"purple"}
];

export const products = [
  {name:"Red Bridal Lehenga", category:"Wedding", age:"Women", image:px(33101418), tone:"pink", slug:"red-bridal-lehenga", tag:"Bridal", price:2499, code:"BRD-101", occasion:"Wedding / Reception", sizes:"S, M, L, XL"},
  {name:"Ivory Bridal Lehenga", category:"Wedding", age:"Women", image:px(27813751), tone:"pink", slug:"ivory-bridal-lehenga", tag:"Premium Bridal", price:2799, code:"BRD-102", occasion:"Wedding / Reception", sizes:"S, M, L"},
  {name:"Royal Maroon Bridal Lehenga", category:"Wedding", age:"Women", image:px(30708288), tone:"pink", slug:"royal-maroon-bridal-lehenga", tag:"Bridal", price:2699, code:"BRD-103", occasion:"Wedding / Reception", sizes:"M, L, XL"},
  {name:"Reception Designer Lehenga", category:"Wedding", age:"Women", image:px(33359857), tone:"pink", slug:"reception-designer-lehenga", tag:"Reception", price:1999, code:"WED-104", occasion:"Reception / Engagement", sizes:"S, M, L, XL"},
  {name:"Traditional Red Wedding Saree", category:"Women", age:"Women", image:px(12190038), tone:"pink", slug:"traditional-red-wedding-saree", tag:"Wedding Saree", price:1199, code:"WOM-105", occasion:"Wedding / Pooja", sizes:"Free Size"},
  {name:"White & Gold Bridal Saree", category:"Women", age:"Women", image:px(15181110), tone:"pink", slug:"white-and-gold-bridal-saree", tag:"Classic", price:1099, code:"WOM-106", occasion:"Wedding / Traditional", sizes:"Free Size"},
  {name:"Banarasi Festive Saree", category:"Traditional", age:"Women", image:px(9419048), tone:"pink", slug:"banarasi-festive-saree", tag:"Banarasi", price:899, code:"TRD-107", occasion:"Wedding / Festival", sizes:"Free Size"},
  {name:"Nauvari Traditional Look", category:"Traditional", age:"Women", image:px(29049336), tone:"pink", slug:"nauvari-traditional-look", tag:"Maharashtrian", price:899, code:"TRD-108", occasion:"Cultural / Traditional", sizes:"Free Size"},
  {name:"Gujarati Traditional Saree", category:"Traditional", age:"Women", image:px(31957369), tone:"pink", slug:"gujarati-traditional-saree", tag:"Gujarati", price:899, code:"TRD-109", occasion:"Traditional / Festival", sizes:"Free Size"},
  {name:"South Indian Traditional Look", category:"Traditional", age:"Women", image:px(15181108), tone:"pink", slug:"south-indian-traditional-look", tag:"South Indian", price:999, code:"TRD-110", occasion:"Temple / Wedding", sizes:"Free Size"},
  {name:"Designer Anarkali Suit", category:"Women", age:"Women", image:px(33359858), tone:"pink", slug:"designer-anarkali-suit", tag:"Anarkali", price:1199, code:"WOM-111", occasion:"Sangeet / Festive", sizes:"S, M, L, XL"},
  {name:"Festive Gown Look", category:"Women", age:"Women", image:px(38857427), tone:"pink", slug:"festive-gown-look", tag:"Gown", price:1499, code:"WOM-112", occasion:"Reception / Party", sizes:"S, M, L"},
  {name:"Mirror Work Chaniya Choli", category:"Garba", age:"Women", image:px(29492764), tone:"pink", slug:"mirror-work-chaniya-choli", tag:"Garba", price:999, code:"GAR-201", occasion:"Garba / Navratri", sizes:"S, M, L, XL"},
  {name:"Gujarati Garba Chaniya", category:"Garba", age:"Women", image:px(36592889), tone:"pink", slug:"gujarati-garba-chaniya", tag:"Navratri", price:899, code:"GAR-202", occasion:"Garba / Dandiya", sizes:"S, M, L, XL"},
  {name:"Colourful Folk Garba Look", category:"Garba", age:"Women", image:px(36854146), tone:"pink", slug:"colourful-folk-garba-look", tag:"Folk", price:799, code:"GAR-203", occasion:"Garba / Cultural", sizes:"S, M, L"},
  {name:"Premium Navratri Lehenga", category:"Garba", age:"Women", image:px(33359873), tone:"pink", slug:"premium-navratri-lehenga", tag:"Premium Garba", price:1199, code:"GAR-204", occasion:"Navratri / Stage", sizes:"M, L, XL"},
  {name:"Royal White Sherwani", category:"Wedding", age:"Men", image:px(37439727), tone:"pink", slug:"royal-white-sherwani", tag:"Groom", price:1999, code:"MEN-301", occasion:"Wedding / Reception", sizes:"36-44"},
  {name:"Royal Groom Sherwani", category:"Wedding", age:"Men", image:px(7051198), tone:"pink", slug:"royal-groom-sherwani", tag:"Groom", price:1799, code:"MEN-302", occasion:"Wedding / Engagement", sizes:"36-44"},
  {name:"Golden Groom Kurta Set", category:"Wedding", age:"Men", image:px(18694185), tone:"pink", slug:"golden-groom-kurta-set", tag:"Groom", price:1499, code:"MEN-303", occasion:"Wedding / Sangeet", sizes:"36-44"},
  {name:"Traditional Red Sherwani", category:"Wedding", age:"Men", image:px(36831447), tone:"pink", slug:"traditional-red-sherwani", tag:"Wedding", price:1699, code:"MEN-304", occasion:"Wedding / Reception", sizes:"36-44"},
  {name:"Nehru Jacket Kurta", category:"Men", age:"Men", image:px(10685435), tone:"pink", slug:"nehru-jacket-kurta", tag:"Men", price:799, code:"MEN-305", occasion:"Festival / Sangeet", sizes:"36-44"},
  {name:"Rajasthani Royal Look", category:"Traditional", age:"Men", image:px(14859535), tone:"pink", slug:"rajasthani-royal-look", tag:"Rajput", price:999, code:"MEN-306", occasion:"Cultural / Wedding", sizes:"36-44"},
  {name:"Dhoti Kurta Traditional Set", category:"Traditional", age:"Men", image:px(13222257), tone:"pink", slug:"dhoti-kurta-traditional-set", tag:"Traditional", price:699, code:"MEN-307", occasion:"Pooja / Cultural", sizes:"34-44"},
  {name:"Festive Kurta Pajama", category:"Men", age:"Men", image:px(36249000), tone:"pink", slug:"festive-kurta-pajama", tag:"Festive", price:699, code:"MEN-308", occasion:"Festival / Function", sizes:"36-44"},
  {name:"Little Krishna Costume", category:"Fancy Dress", age:"Kids", image:px(9370063), tone:"pink", slug:"little-krishna-costume", tag:"Krishna", price:399, code:"KID-401", occasion:"Janmashtami / Fancy Dress", sizes:"2-12 yrs"},
  {name:"Radha Costume", category:"Fancy Dress", age:"Kids", image:px(33508436), tone:"pink", slug:"radha-costume", tag:"Radha", price:399, code:"KID-402", occasion:"Janmashtami / School", sizes:"2-12 yrs"},
  {name:"King Costume", category:"Drama / Stage", age:"Kids & Adults", image:px(29657805), tone:"pink", slug:"king-costume", tag:"Royal Character", price:499, code:"DRM-403", occasion:"Drama / Theatre", sizes:"Kids & Adult"},
  {name:"Queen Costume", category:"Drama / Stage", age:"Kids & Adults", image:px(34484952), tone:"pink", slug:"queen-costume", tag:"Royal Character", price:499, code:"DRM-404", occasion:"Drama / Theatre", sizes:"Kids & Adult"},
  {name:"Ram Mythology Costume", category:"Drama / Stage", age:"Kids", image:px(9370063), tone:"pink", slug:"ram-mythology-costume", tag:"Mythology", price:449, code:"DRM-405", occasion:"Ramleela / Stage", sizes:"4-14 yrs"},
  {name:"Hanuman Character Costume", category:"Drama / Stage", age:"Kids", image:px(29657805), tone:"pink", slug:"hanuman-character-costume", tag:"Mythology", price:449, code:"DRM-406", occasion:"Ramleela / School", sizes:"4-14 yrs"},
  {name:"Freedom Fighter Costume", category:"Drama / Stage", age:"Kids", image:px(33508436), tone:"pink", slug:"freedom-fighter-costume", tag:"School Function", price:399, code:"DRM-407", occasion:"Annual Day / Patriotic", sizes:"5-14 yrs"},
  {name:"Police Costume", category:"Fancy Dress", age:"Kids", image:px(37213268), tone:"pink", slug:"police-costume", tag:"Profession", price:349, code:"KID-408", occasion:"Fancy Dress / School", sizes:"4-12 yrs"},
  {name:"Doctor Costume", category:"Fancy Dress", age:"Kids", image:px(37213268), tone:"pink", slug:"doctor-costume", tag:"Profession", price:299, code:"KID-409", occasion:"Fancy Dress / School", sizes:"4-12 yrs"},
  {name:"Classical Dance Costume", category:"Drama / Stage", age:"Kids & Teens", image:px(34484952), tone:"pink", slug:"classical-dance-costume", tag:"Performance", price:599, code:"DRM-410", occasion:"Dance / Stage", sizes:"Kids & Teens"},
  {name:"Bridal Kundan Necklace Set", category:"Jewellery", age:"Women", image:px(36806834), tone:"pink", slug:"bridal-kundan-necklace-set", tag:"Bridal Jewellery", price:999, code:"JWL-501", occasion:"Wedding / Bridal", sizes:"Adjustable"},
  {name:"Polki Wedding Jewellery Set", category:"Jewellery", age:"Women", image:px(5563248), tone:"pink", slug:"polki-wedding-jewellery-set", tag:"Polki", price:899, code:"JWL-502", occasion:"Wedding / Reception", sizes:"Adjustable"},
  {name:"Temple Jewellery Set", category:"Jewellery", age:"Women", image:px(31567617), tone:"pink", slug:"temple-jewellery-set", tag:"Traditional Jewellery", price:799, code:"JWL-503", occasion:"Traditional / Dance", sizes:"Adjustable"},
  {name:"Oxidised Garba Jewellery", category:"Jewellery", age:"Women", image:px(17152127), tone:"pink", slug:"oxidised-garba-jewellery", tag:"Garba Jewellery", price:399, code:"JWL-504", occasion:"Garba / Navratri", sizes:"Adjustable"},
  {name:"Bridal Choker Set", category:"Jewellery", age:"Women", image:px(13770027), tone:"pink", slug:"bridal-choker-set", tag:"Choker", price:599, code:"JWL-505", occasion:"Wedding / Engagement", sizes:"Adjustable"},
  {name:"Long Rani Haar Set", category:"Jewellery", age:"Women", image:px(10347064), tone:"pink", slug:"long-rani-haar-set", tag:"Rani Haar", price:699, code:"JWL-506", occasion:"Bridal / Traditional", sizes:"Adjustable"},
  {name:"American Diamond Set", category:"Jewellery", age:"Women", image:px(17542451), tone:"pink", slug:"american-diamond-set", tag:"AD Jewellery", price:699, code:"JWL-507", occasion:"Reception / Party", sizes:"Adjustable"},
  {name:"Matha Patti + Maang Tikka", category:"Jewellery", age:"Women", image:px(5433578), tone:"pink", slug:"matha-patti-maang-tikka", tag:"Hair Jewellery", price:349, code:"JWL-508", occasion:"Bridal / Wedding", sizes:"Adjustable"},
  {name:"Bridal Bangles & Kaleera Set", category:"Jewellery", age:"Women", image:px(24549116), tone:"pink", slug:"bridal-bangles-and-kaleera-set", tag:"Bridal Add-on", price:399, code:"JWL-509", occasion:"Bridal / Wedding", sizes:"Adjustable"},
  {name:"Nath + Earrings Combo", category:"Jewellery", age:"Women", image:px(15181110), tone:"pink", slug:"nath-earrings-combo", tag:"Accessories", price:299, code:"JWL-510", occasion:"Wedding / Traditional", sizes:"Adjustable"},
  {name:"Bridal Complete Jewellery Look", category:"Jewellery", age:"Women", image:px(12190038), tone:"pink", slug:"bridal-complete-jewellery-look", tag:"Complete Set", price:1299, code:"JWL-511", occasion:"Wedding / Bridal", sizes:"Adjustable"},
  {name:"Festive Gold-Tone Set", category:"Jewellery", age:"Women", image:px(9419048), tone:"pink", slug:"festive-gold-tone-set", tag:"Festive Jewellery", price:499, code:"JWL-512", occasion:"Festival / Function", sizes:"Adjustable"},
  {name:"Wedding Safa / Turban", category:"Accessories", age:"Men", image:px(37070490), tone:"pink", slug:"wedding-safa-turban", tag:"Safa", price:249, code:"ACC-601", occasion:"Wedding / Groom", sizes:"Adjustable"},
  {name:"Festive Dupatta / Stole", category:"Accessories", age:"All", image:px(37396070), tone:"pink", slug:"festive-dupatta-stole", tag:"Dupatta", price:199, code:"ACC-602", occasion:"Wedding / Traditional", sizes:"Free Size"},
  {name:"Kamarband / Waist Belt", category:"Accessories", age:"Women", image:px(31567617), tone:"pink", slug:"kamarband-waist-belt", tag:"Accessory", price:299, code:"ACC-603", occasion:"Bridal / Dance", sizes:"Adjustable"},
  {name:"Drama Crown / Royal Prop", category:"Accessories", age:"Kids & Adults", image:px(29657805), tone:"pink", slug:"drama-crown-royal-prop", tag:"Stage Prop", price:199, code:"ACC-604", occasion:"Drama / Stage", sizes:"Adjustable"}
];

export const occasions = [
  {title:"Garba & Navratri", text:"Chaniya choli, festive drapes and colourful traditional looks.", tone:"yellow", image:px(36592889)},
  {title:"Wedding Edit", text:"Bridal looks, groom wear and elegant traditional outfits.", tone:"pink", image:px(33359875)},
  {title:"Fancy Dress", text:"Characters, mythology, professions and props for every age.", tone:"purple", image:px(29657805)},
  {title:"Kids Collection", text:"Bright traditional outfits and character costumes for little stars.", tone:"blue", image:px(37213268)},
  {title:"Traditional India", text:"Lugda, sarees, dhoti looks and regional-inspired outfits.", tone:"mint", image:px(31957369)},
  {title:"Men's Festive Wear", text:"Kurta, dhoti, groom and traditional event-ready looks.", tone:"coral", image:px(35542192)}
];

export const garbaCollection = [
  {name:"Chaniya Choli", text:"Colourful mirror-work inspired festive styling", image:px(29492764)},
  {name:"Garba Night Look", text:"Statement outfit for Navratri evenings", image:px(36592889)},
  {name:"Gujarati Festive Wear", text:"Traditional celebration styling", image:px(36854146)},
  {name:"Traditional Drape / Lugda", text:"Classic regional-inspired drape styling", image:px(31957369)},
  {name:"Floral Ethnic Saree", text:"Elegant traditional look for celebrations", image:px(32718396)},
  {name:"Festive Saree Look", text:"Bright colours for cultural events", image:px(29054691)}
];

export const homeImages = {
 heroMain: px(38876954),
 heroMiniOne: px(36806826),
 heroMiniTwo: px(20790056),
 feature: px(13640286),
 traditional: px(29049336),
 fancyOne: px(9370063),
 fancyTwo: px(33865718)
};
