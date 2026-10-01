import "./globals.css";

export const metadata={
  title:"Manish Beauty Center | Rental Clothing, Jewellery & Styling | Betul",
  description:"Manish Beauty Center in Betul for rental clothing, wedding and Garba looks, fancy dress, jewellery, accessories and styling enquiries.",
  keywords:["costume rental Betul","rental clothes Betul","bridal dress rental Betul","fancy dress Betul","jewellery rental Betul","Garba dress rental Betul"]
};

export const viewport={width:"device-width",initialScale:1,themeColor:"#120d17"};

export default function RootLayout({children}){
  return <html lang="en"><body>{children}</body></html>;
}
