import type { ServiceId } from "./salon";

export type Locale = "en" | "ar";

const en = {
  locale: "en" as Locale,
  dir: "ltr" as const,
  meta: {
    title: "Relax Saloon · Men's barber in Al Ghubra, Muscat",
    description:
      "Haircuts, fades, beard trims and hot-towel shaves in Al Ghubra, Muscat. Rated 4.6 from 120 Google reviews. Open 7 days until 10pm. Book on WhatsApp.",
  },
  nav: { services: "Services", book: "Book", gallery: "Gallery", reviews: "Reviews", visit: "Visit", bookNow: "Book now", switchTo: "العربية", menu: "Menu", close: "Close" },
  hero: {
    kicker: "Men's barber · Al Ghubra, Muscat",
    title: ["Sharp cuts.", "Unhurried chair."],
    text: "Haircuts, fades, beard work and hot-towel shaves by barbers who take their time. Book a chair on WhatsApp, or just walk in.",
    book: "Book on WhatsApp",
    call: "Call the shop",
    reviews: "Google reviews",
  },
  status: { openUntil: "Open now · until", opensAt: "Closed · opens", today: "today", tomorrow: "tomorrow", on: "" },
  facts: [
    { k: "4.6 ★", v: "120 Google reviews" },
    { k: "7 days", v: "Open every day of the week" },
    { k: "10pm", v: "Late chairs, every night" },
    { k: "All ages", v: "Kids' cuts welcome" },
  ],
  services: {
    kicker: "Services",
    title: "Everything a man needs, done properly.",
    text: "Tell us what you'd like when you book and we'll keep the chair for you.",
    ask: "Price on request",
    groups: { hair: "Hair", beard: "Beard & shave", care: "Grooming" },
    items: {
      haircut: ["Haircut", "Cut and style, finished the way you like it."],
      fade: ["Skin fade", "Clean, blended fades with a sharp line-up."],
      kids: ["Kids' haircut", "Patient cuts for boys of every age."],
      wash: ["Wash & style", "Wash, blow-dry and product to finish."],
      beard: ["Beard trim & shape", "Shaped, lined and tidied to suit your face."],
      shave: ["Hot-towel shave", "Hot towels and a close, careful shave."],
      beardColour: ["Beard colour", "Covers grey for a natural, even beard."],
      colour: ["Hair colour", "Natural colour and grey coverage."],
      facial: ["Facial & mask", "Deep clean and refresh for tired skin."],
      wax: ["Threading & wax", "Brows, cheeks, ears and nose, tidied up."],
    } satisfies Record<ServiceId, [string, string]>,
  },
  about: {
    kicker: "The shop",
    title: "A clean, calm chair in the middle of Ghubra.",
    points: [
      ["Barbers who take their time", "No rushing. They check you're happy before you leave."],
      ["Spotless, comfortable shop", "Warm wood, bright stations and a proper waiting lounge."],
      ["Great value", "Customers keep saying it: top quality for a fair price."],
    ],
  },
  booking: {
    kicker: "Book a chair",
    title: "Pick a time. We'll confirm on WhatsApp.",
    text: "Choose your services and a time. Your booking opens in WhatsApp, ready to send to the shop.",
    step1: "What would you like?",
    step2: "Which day?",
    step3: "What time?",
    step4: "Your name",
    namePh: "e.g. Ahmed",
    notePh: "Anything we should know? (optional)",
    noSlots: "No times left on this day. Please pick another day.",
    summary: "Your booking",
    send: "Send booking on WhatsApp",
    needService: "Pick at least one service",
    needTime: "Pick a day and time",
    needName: "Add your name",
    msgHello: "Hello Relax Saloon, I'd like to book:",
    msgDay: "Day",
    msgTime: "Time",
    msgName: "Name",
    msgNote: "Note",
    msgEnd: "Please confirm. Thank you!",
    fine: "The shop confirms every booking by WhatsApp reply.",
  },
  gallery: { kicker: "Gallery", title: "Step inside.", credit: "Photos from Google, by", close: "Close", prev: "Previous", next: "Next" },
  reviewsS: { kicker: "Reviews", title: "What customers say.", basedOn: "from 120 Google reviews", all: "Read all reviews on Google", write: "Leave a review" },
  visit: {
    kicker: "Visit",
    title: "Find us in Al Ghubra.",
    look: "Look for the RELAX · Salon for Men sign on the ground floor.",
    address: "Address",
    hours: "Opening hours",
    directions: "Get directions",
    call: "Call",
    whatsapp: "WhatsApp",
    closed: "Closed",
  },
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  footer: { rights: "All rights reserved.", photos: "Photos from the shop's Google listing." },
  mobileBar: { call: "Call", whatsapp: "WhatsApp", book: "Book" },
};

export type Dict = typeof en;

const ar: Dict = {
  locale: "ar",
  dir: "rtl" as unknown as "ltr",
  meta: {
    title: "صالون الإسترخاء للرجال · حلاق رجالي في الغبرة، مسقط",
    description:
      "قص الشعر، التدريج، تشذيب اللحية والحلاقة بالمنشفة الساخنة في الغبرة، مسقط. تقييم ٤٫٦ من ١٢٠ مراجعة على جوجل. مفتوح ٧ أيام حتى ١٠ مساءً. احجز عبر واتساب.",
  },
  nav: { services: "الخدمات", book: "الحجز", gallery: "الصور", reviews: "التقييمات", visit: "الموقع", bookNow: "احجز الآن", switchTo: "English", menu: "القائمة", close: "إغلاق" },
  hero: {
    kicker: "حلاق رجالي · الغبرة، مسقط",
    title: ["قصّة متقنة.", "وجلسة بلا استعجال."],
    text: "قص الشعر، التدريج، العناية باللحية والحلاقة بالمنشفة الساخنة على يد حلاقين يأخذون وقتهم. احجز كرسيك عبر واتساب، أو تفضّل مباشرة.",
    book: "احجز عبر واتساب",
    call: "اتصل بالصالون",
    reviews: "مراجعة على جوجل",
  },
  status: { openUntil: "مفتوح الآن · حتى", opensAt: "مغلق · يفتح", today: "اليوم", tomorrow: "غدًا", on: "" },
  facts: [
    { k: "٤٫٦ ★", v: "١٢٠ مراجعة على جوجل" },
    { k: "٧ أيام", v: "مفتوح كل أيام الأسبوع" },
    { k: "١٠ مساءً", v: "مواعيد متأخرة كل ليلة" },
    { k: "كل الأعمار", v: "نرحّب بالأطفال" },
  ],
  services: {
    kicker: "الخدمات",
    title: "كل ما يحتاجه الرجل، بإتقان.",
    text: "أخبرنا بما تريد عند الحجز ونحجز لك الكرسي.",
    ask: "السعر عند الطلب",
    groups: { hair: "الشعر", beard: "اللحية والحلاقة", care: "العناية" },
    items: {
      haircut: ["قص الشعر", "قصّ وتصفيف كما تحب."],
      fade: ["تدريج (فيد)", "تدريج ناعم وتحديد دقيق."],
      kids: ["قص شعر الأطفال", "قصّات بصبر للأولاد من كل الأعمار."],
      wash: ["غسيل وتصفيف", "غسيل، سشوار ولمسة أخيرة."],
      beard: ["تشذيب وتحديد اللحية", "تحديد وتهذيب يناسب ملامح وجهك."],
      shave: ["حلاقة بالمنشفة الساخنة", "مناشف ساخنة وحلاقة ناعمة ودقيقة."],
      beardColour: ["صبغة اللحية", "تغطية الشيب بلون طبيعي ومتناسق."],
      colour: ["صبغة الشعر", "لون طبيعي وتغطية للشيب."],
      facial: ["تنظيف البشرة وماسك", "تنظيف عميق وانتعاش للبشرة المتعبة."],
      wax: ["خيط وواكس", "الحواجب، الخدود، الأذن والأنف."],
    },
  },
  about: {
    kicker: "الصالون",
    title: "كرسي نظيف وهادئ في قلب الغبرة.",
    points: [
      ["حلاقون يأخذون وقتهم", "بدون استعجال، ويتأكدون من رضاك قبل أن تغادر."],
      ["صالون نظيف ومريح", "خشب دافئ، محطات مضيئة وصالة انتظار مريحة."],
      ["قيمة ممتازة", "يكرّرها الزبائن دائمًا: جودة عالية بسعر مناسب."],
    ],
  },
  booking: {
    kicker: "احجز كرسيك",
    title: "اختر الوقت، ونؤكد لك عبر واتساب.",
    text: "اختر الخدمات والوقت، وسيفتح حجزك في واتساب جاهزًا للإرسال إلى الصالون.",
    step1: "ماذا تريد؟",
    step2: "أي يوم؟",
    step3: "أي ساعة؟",
    step4: "اسمك",
    namePh: "مثال: أحمد",
    notePh: "أي ملاحظة؟ (اختياري)",
    noSlots: "لا توجد مواعيد متبقية في هذا اليوم. اختر يومًا آخر.",
    summary: "حجزك",
    send: "أرسل الحجز عبر واتساب",
    needService: "اختر خدمة واحدة على الأقل",
    needTime: "اختر اليوم والساعة",
    needName: "أضف اسمك",
    msgHello: "مرحبًا صالون الإسترخاء، أود حجز:",
    msgDay: "اليوم",
    msgTime: "الساعة",
    msgName: "الاسم",
    msgNote: "ملاحظة",
    msgEnd: "يرجى التأكيد. شكرًا!",
    fine: "يؤكد الصالون كل حجز بالرد على واتساب.",
  },
  gallery: { kicker: "الصور", title: "تفضّل بالدخول.", credit: "صور من جوجل، تصوير", close: "إغلاق", prev: "السابق", next: "التالي" },
  reviewsS: { kicker: "التقييمات", title: "ماذا يقول الزبائن.", basedOn: "من ١٢٠ مراجعة على جوجل", all: "اقرأ كل المراجعات على جوجل", write: "اكتب مراجعة" },
  visit: {
    kicker: "الموقع",
    title: "تجدنا في الغبرة.",
    look: "ابحث عن لافتة «الإسترخاء صالون للرجال» في الطابق الأرضي.",
    address: "العنوان",
    hours: "ساعات العمل",
    directions: "الاتجاهات",
    call: "اتصال",
    whatsapp: "واتساب",
    closed: "مغلق",
  },
  days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  daysShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  footer: { rights: "جميع الحقوق محفوظة.", photos: "الصور من صفحة الصالون على جوجل." },
  mobileBar: { call: "اتصال", whatsapp: "واتساب", book: "احجز" },
};

export const dicts: Record<Locale, Dict> = { en, ar };

export function fmtTime(hhmm: string, locale: Locale) {
  const [h, m] = hhmm.split(":").map(Number);
  const h12 = ((h + 11) % 12) + 1;
  if (locale === "ar") {
    const s = `${h12}${m ? ":" + String(m).padStart(2, "0") : ""}`;
    const ar = s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);
    return `${ar} ${h < 12 ? "ص" : "م"}`;
  }
  return `${h12}${m ? ":" + String(m).padStart(2, "0") : ""}${h < 12 ? "am" : "pm"}`;
}
