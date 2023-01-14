import Header from "./header";
import Footer from "./footer";
import { children } from "react";

export default function Layout ({children}) {
 return (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
 )
}