// ---------------------------------------------------------------------------
// Global site configuration
// Edit this file to update your personal info across the entire site.
// ---------------------------------------------------------------------------

import profileImage from "../assets/images/profile-picture.png";

export const siteConfig = {
  /** Your full name – used in headings, meta tags, and the footer. */
  name: "Blake Haug",

  /** One-liner that appears in meta descriptions and the homepage. */
  tagline: "Electrical Engineering and Computer Sciences @ UC Berkeley",

  /**
   * Longer bio shown on the About page and wherever a description is needed.
   * Written in plain text (no HTML).
   */
  description:
    "I'm a 2nd year at UC Berkeley for Electrical Engineering and Computer Sciences, " +
    "interested in many different areas of technology including programming web/mobile apps, " +
    "server-side software, APIs, automation scripts, and robots!",

  /** Contact email – displayed on the About page and used for the mail link. */
  email: "blake@blakehaug.com",

  /** Profile / avatar image – imported for use with Astro's <Image> component. */
  profileImage,

  /** Canonical site URL (no trailing slash). */
  siteUrl: "https://blakehaug.com",

  /** Social links – set a value to `null` to hide it. */
  social: {
    github: "https://github.com/bnh440",
    linkedin: "https://linkedin.com/in/blake-haug",
  },
} as const;

/** Convenience type so you can import it elsewhere if needed. */
export type SiteConfig = typeof siteConfig;
