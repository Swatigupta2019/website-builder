// All old imports removed. Ready for new swatigupta* components.

import SwatiguptaHeader from './swatiguptaheader';
import SwatiguptaHero from './swatiguptahero';
import SwatiguptaAbout from './swatiguptaabout';
import SwatiguptaServices from './swatiguptaservices';
import SwatiguptaTestimonials from './swatiguptatestimonials';
import SwatiguptaAppointment from './swatiguptaappointment';
import SwatiguptaBlog from './swatiguptablog';
import SwatiguptaContact from './swatiguptacontact';
import SwatiguptaFooter from './swatiguptafooter';

// Map component keys to their respective React components
export const componentMap = {
  // Headers
  header_1: Header1,
  header_2: Header2,
  header_3: Header3,
  // Heroes
  hero_1: Hero1,
  hero_2: Hero2,
  // About
  about_1: About1,
  // Services
  services_1: Services1,
  // Testimonials
  testimonial_1: Testimonial1,
  // FAQ
  faq_1: FAQ1,
  // Contact
  contact_1: Contact1,
  // Footers
  footer_1: Footer1,
  footer_2: Footer2,
  // Gallery
  gallery_1: Gallery1,
  gallery_2: Gallery2,
  // Features
  features_1: Features1, 
  features_2: Features2,
  // Pricing
  pricing_1: Pricing1,
  pricing_2: Pricing2,
  // CTA
  cta_1: CTA1,
  cta_2: CTA2,
  // Team
  team_1: Team1,
  team_2: Team2,
  swatiguptaheader: SwatiguptaHeader,
  swatiguptahero: SwatiguptaHero,
  swatiguptaabout: SwatiguptaAbout,
  swatiguptaservices: SwatiguptaServices,
  swatiguptatestimonials: SwatiguptaTestimonials,
  swatiguptaappointment: SwatiguptaAppointment,
  swatiguptablog: SwatiguptaBlog,
  swatiguptacontact: SwatiguptaContact,
  swatiguptafooter: SwatiguptaFooter,
};

// Helper function to get component by type and variant
export const getComponent = (type, variant) => {
  const key = `${type}_${variant}`;
  return componentMap[key] || null;
};

// New homepage components will be imported and mapped here as swatigupta* (to be added next). 