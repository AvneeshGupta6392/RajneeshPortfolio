import { Routes, Route, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx"; import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx"; import FloatingContact from "./components/FloatingContact.jsx";
import Home from "./pages/Home.jsx"; import About from "./pages/About.jsx"; import MyApproach from "./pages/MyApproach.jsx";
import Products from "./pages/Products.jsx"; import Gallery from "./pages/Gallery.jsx"; import Contact from "./pages/Contact.jsx";
import Connect from "./pages/Connect.jsx"; import NotFound from "./pages/NotFound.jsx";
function Layout() {
  const { pathname } = useLocation(); const outlet = useOutlet(); const calm = useReducedMotion();
  return (
    <>
      <Navbar />
      <main id="main">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div key={pathname} initial={calm ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            exit={calm ? undefined : { opacity: 0, y: -18 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <ErrorBoundary resetKey={pathname}>{outlet}</ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer /><FloatingContact />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
        <Route path="/my-approach" element={<MyApproach />} /><Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} />
        <Route path="/connect" element={<Connect />} /><Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
