import "./globals.css";

export const metadata={
  title:"Manish Costume | Beauty, Rental Clothing & Jewellery | Betul",
  description:"Premium rental clothing, bridal & groom wear, Garba outfits, fancy dress, jewellery and accessories in Betul, Madhya Pradesh.",
  keywords:["costume rental Betul","rental clothes Betul","bridal dress rental Betul","fancy dress Betul","jewellery rental Betul","Garba dress rental Betul"]
};

export const viewport={width:"device-width",initialScale:1,themeColor:"#120d17"};

export default function RootLayout({children}){
  return <html lang="en"><body>{children}</body></html>;
}
