// Everything about the shop in one place. Edit prices, services or hours here and the whole site updates.

export const salon = {
  name: "Relax Saloon",
  nameAr: "صالون الإسترخاء للرجال",
  url: "https://relaxsaloon.vercel.app",
  phoneDisplay: "+968 9511 0322",
  phone: "+96895110322",
  whatsapp: "96895110322",
  rating: 4.6,
  reviewCount: 120,
  area: { en: "Al Ghubra", ar: "الغبرة" },
  city: { en: "Muscat", ar: "مسقط" },
  address: {
    en: "Al Ghubra North, Muscat, Oman",
    ar: "الغبرة الشمالية، مسقط، سلطنة عُمان",
  },
  plusCode: "HCV5+9C Muscat",
  geo: { lat: 23.5934935, lng: 58.4085247 },
  mapsLink: "https://maps.google.com/?cid=4272098463174594877",
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Relax+Saloon&destination_place_id=ChIJZbQ6CqP_kT4RPZED7-qKSTs",
  reviewsLink: "https://search.google.com/local/reviews?placeid=ChIJZbQ6CqP_kT4RPZED7-qKSTs",
  writeReviewLink: "https://search.google.com/local/writereview?placeid=ChIJZbQ6CqP_kT4RPZED7-qKSTs",
  mapEmbed: "https://maps.google.com/maps?q=23.5934935,58.4085247&z=17&output=embed",
  // 0 = Sunday … 6 = Saturday. Times in Muscat time (UTC+4).
  hours: [
    { day: 0, open: "10:00", close: "22:00" },
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "22:00" },
    { day: 5, open: "14:00", close: "22:00" },
    { day: 6, open: "10:00", close: "22:00" },
  ],
  utcOffsetHours: 4,
} as const;

export type ServiceId =
  | "haircut" | "fade" | "kids" | "wash"
  | "beard" | "shave" | "beardColour"
  | "colour" | "facial" | "wax";

export type Service = { id: ServiceId; price?: string };

// Add a price (e.g. "4 OMR") to any service and it shows on the site and in the booking message.
export const serviceGroups: { id: "hair" | "beard" | "care"; image: string; items: Service[] }[] = [
  { id: "hair", image: "/img/chairs.jpg", items: [{ id: "haircut" }, { id: "fade" }, { id: "kids" }, { id: "wash" }] },
  { id: "beard", image: "/img/station-detail.jpg", items: [{ id: "beard" }, { id: "shave" }, { id: "beardColour" }] },
  { id: "care", image: "/img/lounge.jpg", items: [{ id: "colour" }, { id: "facial" }, { id: "wax" }] },
];

export const reviews = [
  { name: "asif haneef", when: { en: "8 months ago", ar: "قبل ٨ أشهر" }, rating: 5,
    text: "I had a great experience at this barber shop. The staff are friendly, professional, and really skilled at what they do. The shop is clean and comfortable, and they take their time to make sure you’re happy with the haircut. The prices are very good for the quality of service they provide—definitely great value for money. I highly recommend this place!" },
  { name: "noble babu", when: { en: "a month ago", ar: "قبل شهر" }, rating: 5,
    text: "Men’s salon with excellent service, friendly staff, and a clean, welcoming atmosphere. The haircut was neat and exactly what I asked for. Highly recommended!" },
  { name: "Mr Rob", when: { en: "11 months ago", ar: "قبل ١١ شهرًا" }, rating: 5,
    text: "…Ahmet was very polite and showed great courtesy. He showed his years of experience by sharing small details like the name of my style of facial hair. And answered other questions I had." },
  { name: "Daniel Chehade", when: { en: "3 months ago", ar: "قبل ٣ أشهر" }, rating: 5,
    text: "Best service highly recommend for a comfortable and nice haircut" },
  { name: "Maria Bickici", when: { en: "a month ago", ar: "قبل شهر" }, rating: 5,
    text: "nice staff and good hair cut of my kids thanks to relax salon" },
];

export const gallery = [
  { src: "/img/hero.jpg", w: 2000, h: 1333, credit: "Behrang yazdan panah" },
  { src: "/img/chairs.jpg", w: 2000, h: 1333, credit: "Behrang yazdan panah" },
  { src: "/img/mirror.jpg", w: 1500, h: 2000, credit: "ibrahim alzadjali" },
  { src: "/img/stations.jpg", w: 2000, h: 1333, credit: "Chatin Bickici" },
  { src: "/img/lounge.jpg", w: 2000, h: 1333, credit: "Chatin Bickici" },
  { src: "/img/station-detail.jpg", w: 2000, h: 1125, credit: "Erkan Cam" },
  { src: "/img/floor.jpg", w: 2000, h: 1333, credit: "Chatin Bickici" },
  { src: "/img/building-tall.jpg", w: 1333, h: 2000, credit: "Chatin Bickici" },
] as const;
