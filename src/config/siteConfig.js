// Single place for personal info, contact links, navigation and branding.
export const siteConfig = {
  // Put your photo at public/images/profile.jpg (or change the path). Adjust objectPosition to re-crop.
  profile: { image: "/images/img.webp", objectPosition: "50% 25%" },
  name: "Rajneesh Kumar Gupta", role: "Rootpure Advisor", country: "India",
  phoneDisplay: "+91 70075 12551", whatsappDisplay: "+91 70075 12551",
  whatsappUrl: "https://wa.me/917007512551", phoneUrl: "tel:+917007512551",
  instagramUrl: "https://instagram.com/rajnish_gupta_551", instagramHandle: "@rajnish_gupta_551",
  nav: [
    { to: "/", label: "Home" }, { to: "/about", label: "About Me" }, { to: "/my-approach", label: "My Approach" },
    { to: "/products", label: "Product Discovery" }, { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" }, { to: "/connect", label: "Let's Connect" },
  ],
  // categories: ["Awards & Achievements", "Certificates", "Personal Photos", "Events", "Professional Moments"],
  categories: [
  "Awards & Achievements",
  "Certificates",
  "Personal Photos",
  "Events",
  "Professional Moments",
],
};
export const wa = (text) => `${siteConfig.whatsappUrl}?text=${encodeURIComponent(text)}`;
