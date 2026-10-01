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
  {name:"Accessories", sub:"Dupattas & Props", icon:"👜", tone:"lav"}
];

export const products = [
  {name:"Garba Chaniya Choli", category:"Garba", age:"Teens & Adults", image:px(29492764), tone:"pink", slug:"garba-chaniya-choli", tag:"Garba"},
  {name:"Festive Gujarati Chaniya", category:"Garba", age:"Adults", image:px(33359873), tone:"coral", slug:"festive-gujarati-chaniya", tag:"Navratri"},
  {name:"Traditional Saree Look", category:"Traditional", age:"Adults", image:px(35399683), tone:"gold", slug:"traditional-saree-look", tag:"Classic"},
  {name:"Lugda & Traditional Drape", category:"Traditional", age:"Adults", image:px(30407998), tone:"peach", slug:"lugda-traditional-drape", tag:"Traditional"},
  {name:"Bridal Wedding Look", category:"Wedding", age:"Adults", image:px(33359875), tone:"purple", slug:"bridal-wedding-look", tag:"Bridal"},
  {name:"Royal Groom Attire", category:"Wedding", age:"Adults", image:px(12026298), tone:"gold", slug:"royal-groom-attire", tag:"Groom"},
  {name:"Men's Traditional Kurta", category:"Men", age:"Adults", image:px(13222257), tone:"blue", slug:"mens-traditional-kurta", tag:"Men"},
  {name:"Rajasthani Traditional Look", category:"Men", age:"Adults", image:px(29639572), tone:"yellow", slug:"rajasthani-traditional-look", tag:"Ethnic"},
  {name:"Kids Festival Outfit", category:"Kids", age:"Kids", image:px(33508436), tone:"blue", slug:"kids-festival-outfit", tag:"Kids"},
  {name:"Kids Traditional Celebration", category:"Kids", age:"Kids", image:px(17408547), tone:"mint", slug:"kids-traditional-celebration", tag:"Popular"},
  {name:"Little Krishna Costume", category:"Fancy Dress", age:"Kids", image:px(9370063), tone:"purple", slug:"little-krishna-costume", tag:"Fancy Dress"},
  {name:"Festival Character Costume", category:"Fancy Dress", age:"Kids", image:px(29657805), tone:"coral", slug:"festival-character-costume", tag:"Character"},
  {name:"Garba Night Performance", category:"Garba", age:"Teens & Adults", image:px(36592889), tone:"yellow", slug:"garba-night-performance", tag:"Trending"},
  {name:"Elegant Gujarati Saree", category:"Traditional", age:"Adults", image:px(29049336), tone:"pink", slug:"elegant-gujarati-saree", tag:"New"},
  {name:"Floral Traditional Saree", category:"Traditional", age:"Adults", image:px(32718396), tone:"peach", slug:"floral-traditional-saree", tag:"Elegant"},
  {name:"Embroidered Red Saree", category:"Women", age:"Adults", image:px(12696483), tone:"coral", slug:"embroidered-red-saree", tag:"Festive"},
  {name:"White & Gold Traditional Saree", category:"Women", age:"Adults", image:px(31443503), tone:"mint", slug:"white-gold-traditional-saree", tag:"Premium"},
  {name:"Traditional Dhoti Look", category:"Men", age:"Adults", image:px(17779779), tone:"blue", slug:"traditional-dhoti-look", tag:"Traditional"},
  {name:"Gujarati Festival Gathering", category:"Festivals", age:"Adults", image:px(31367445), tone:"lav", slug:"gujarati-festival-gathering", tag:"Festival"},
  {name:"Traditional Dance Costume", category:"Festivals", age:"Teens & Adults", image:px(34484952), tone:"purple", slug:"traditional-dance-costume", tag:"Performance"},
  {name:"Bridal Jewellery Look", category:"Jewellery", age:"Adults", image:px(10954266), tone:"gold", slug:"bridal-jewellery-look", tag:"Jewellery"},
  {name:"Statement Jewellery Set", category:"Jewellery", age:"Adults", image:px(14704594), tone:"purple", slug:"statement-jewellery-set", tag:"Jewellery"},
  {name:"Festive Jewellery Styling", category:"Jewellery", age:"Adults", image:px(30484079), tone:"coral", slug:"festive-jewellery-styling", tag:"Jewellery"}
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
