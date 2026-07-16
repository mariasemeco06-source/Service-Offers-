import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL("https://semecoagency.com"),title:"Semeco Agency LLC",description:"Insurance guidance for Texas families and businesses.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html suppressHydrationWarning><body>{children}</body></html>}
