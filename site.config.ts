import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "Glo by Narmy",
  tagline: "Bridal and non bridal makeup, hair, and saree draping in Brampton, Ontario.",
  category: "Bridal makeup and saree draping",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://glo-by-narmy.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#6f757c" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Makeup and hair in Brampton",
    headline: "Your glow for every celebration",
    subhead: "Bridal and non bridal makeup, hairstyles, saree pleating and draping, and fresh hair flowers. Send a DM or call with your date to book.",
    images: [
      { src: "/images/post-12-2.jpg", alt: "Bride in an ivory silk saree holding a white bouquet" },
      { src: "/images/post-8.jpg", alt: "Makeup and hair with a red blouse and gold jewellery" },
      { src: "/images/post-5.jpg", alt: "Half saree ceremony look in pink and gold" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/glo_by_narmy" },
    secondaryCta: { label: "See the looks", href: "#gallery" },
  },

  highlights: ["Bridal makeup", "Non bridal makeup and hair", "Saree pleating and draping", "Book by DM or call"],

  about: {
    title: "Made to glow",
    body: [
      "Glo by Narmy is a Brampton makeup and hair artist, Narmatha Theiventhiram, creating looks for brides, saree ceremonies, half saree ceremonies, e shoots, and henna nights.",
      "Beyond makeup and hairstyles, Narmy offers saree pleating, ironing, and draping, plus hair flowers and bouquets, so your whole look comes together in one place.",
    ],
    image: { src: "/images/post-12.jpg", alt: "Saree ceremony look with bouquet" },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Every look is planned around your event.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and look.",
    groups: [
      {
        title: "Makeup and hair",
        items: [
          { name: "Bridal makeup" },
          { name: "Non bridal makeup" },
          { name: "Hairstyles" },
          { name: "Saree ceremony and half saree ceremony looks", href: IG + "DeM4FXrlQze/" },
          { name: "E shoot and henna looks", href: IG + "DedDEdADtNq/" },
        ],
      },
      {
        title: "Saree and flowers",
        items: [
          { name: "Saree pleating and ironing" },
          { name: "Saree draping" },
          { name: "Hair flowers and bouquets", href: IG + "Dbvvp6NDpzc/" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      { src: "/images/post-12-2.jpg", width: 1080, height: 1437, alt: "Saree ceremony bride on the stairs", caption: "Saree ceremony", href: IG + "Dbvvp6NDpzc/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "Blue saree with gold jewellery", caption: "E shoot glam", href: IG + "DedDEdADtNq/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Pink half saree look", caption: "Half saree ceremony", href: IG + "DeM4FXrlQze/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Red blouse with bridal jewellery", caption: "Makeup and hairstyle", href: IG + "DchI36CCf8V/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Pink saree non bridal look", caption: "Non bridal", href: IG + "DcjlziqiZlX/" },
      { src: "/images/post-10.jpg", width: 1067, height: 1422, alt: "Couple portrait in a yellow saree", caption: "Makeup and saree pleating", href: IG + "DcRMWuwjh0s/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1274, alt: "Blue and pink saree draping", caption: "Makeup, hair, and draping", href: IG + "DfGYw0ZibIB/" },
      { src: "/images/post-2-2.jpg", width: 1080, height: 1274, alt: "Braid with red hair flowers", caption: "Braid with flowers", href: IG + "DfGYw0ZibIB/" },
      { src: "/images/post-12.jpg", width: 1080, height: 1440, alt: "Ivory saree with green jewellery", caption: "Bridal detail", href: IG + "Dbvvp6NDpzc/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "Black and white concept shoot", caption: "Concept shoot", href: IG + "DdRhQj8lYmE/" },
    ],
  },

  instagram: {
    handle: "glo_by_narmy",
    embeds: ["https://www.instagram.com/p/DfGYw0ZibIB/"],
    embedsTitle: "Latest work",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Tap the button to copy a starter message, then paste it into the chat. Prefer to talk? Call +1 647 671 1729.",
    dmMessage: "Hi Narmy! I would love to book a look.\nEvent and date:\nService (bridal, non bridal, hair, saree draping):\nNumber of people:\nLook or inspo idea:",
    links: [{ label: "Call +1 647 671 1729", href: "tel:+16476711729" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram or call +1 647 671 1729 with your event date and the look you have in mind." },
    { q: "Do you do non bridal looks?", a: "Yes. Non bridal makeup, hairstyles, saree ceremonies, e shoots, and henna nights are all welcome." },
    { q: "Can you drape my saree?", a: "Yes, saree pleating, ironing, and draping are offered, along with hair flowers and bouquets." },
    { q: "Where are you based?", a: "Glo by Narmy is based in Brampton, Ontario." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    phone: "+1 647 671 1729",
    socials: [],
  },

  seo: {
    title: "Glo by Narmy | Bridal makeup and saree draping in Brampton",
    description: "Bridal and non bridal makeup, hairstyles, saree pleating and draping, and hair flowers in Brampton, Ontario. Book by Instagram DM or call today.",
    keywords: ["bridal makeup Brampton", "makeup artist Brampton", "saree draping Brampton", "non bridal makeup Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
