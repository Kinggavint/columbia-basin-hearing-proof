const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";

export const IMG = {
  drShannonCutout: `${CDN}/a858fa9f-5302-4b08-b034-316ab81fe7e7/Dr+Shannon+PNG.png`,
  listening: `${CDN}/c8ffc0e6-4cea-45b5-9e54-e321e5970f77/Hearing+Small+Size.jpg`,
  clinic: `${CDN}/aeaecc50-cb20-4def-9925-f9816b4afb9f/AdobeStock_170518761.jpeg`,
  plunge: `${CDN}/cabca3f5-940c-4b60-8362-f73a58cb2fbc/IMG_3512.jpg`,
  gradientWide: `${CDN}/e7f685d2-d1c2-4e2c-b87f-b136b3cbb95e/CBHC+Gradient+Wide.png`,
  logoWhite: `${CDN}/3f7f580f-d6d4-4221-b7d4-7c53cf0e21e8/CBHC+22+Logo+White+No+Drop+Shadow.png`,
  storeGraphic: `${CDN}/ef0f09d8-c041-4a43-a483-f351cfa1e2b2/CBHC+Online+Store+Graphic.png`,
  lenireLogo: `${CDN}/22e11f9d-16ba-4bd1-bb86-4c807398da6d/Lenire_Logo.png`,
  laceLogo: `${CDN}/84a9c3df-9b24-4fda-9e8e-907a8d1bd5a6/Lace-AI-Pro-Logo-Hero.png`,
  nuanceLogo: `${CDN}/5d9a2560-6177-4f5f-8012-74d2860badd5/Nuance+Logo.png`,
  specialOlympics: `${CDN}/356f15bc-ed59-4ae8-b059-681b6d20f4d2/Special_Olympics_Washington_Logo+White+Transparent.png`,
  dustDevils: `${CDN}/31e6ef99-b8ce-4937-8014-560e63a41c68/Tri-City_Dust_Devils_logo.svg.png`,
};

export const RATING = { value: "4.8", count: 146, source: "Google" };

export const PRIMARY_PHONE = "(509) 736-4005";
export const PRIMARY_TEL = "tel:15097364005";

export type Location = {
  city: string;
  phone: string;
  tel: string;
  street: string;
  cityStateZip: string;
  mapQuery: string;
};

export const LOCATIONS: Location[] = [
  {
    city: "Kennewick",
    phone: "(509) 736-4005",
    tel: "tel:15097364005",
    street: "4015 W. Clearwater Ave., Ste C",
    cityStateZip: "Kennewick, WA 99336",
    mapQuery: "4015 W Clearwater Ave Ste C, Kennewick, WA 99336",
  },
  {
    city: "West Richland",
    phone: "(509) 214-0330",
    tel: "tel:15092140330",
    street: "1468 Bombing Range Rd.",
    cityStateZip: "West Richland, WA 99353",
    mapQuery: "1468 Bombing Range Rd, West Richland, WA 99353",
  },
  {
    city: "Walla Walla",
    phone: "(509) 876-4541",
    tel: "tel:15098764541",
    street: "300 S. 2nd Ave.",
    cityStateZip: "Walla Walla, WA 99362",
    mapQuery: "300 S 2nd Ave, Walla Walla, WA 99362",
  },
];

export const SERVICES = [
  {
    title: "Comprehensive Audiological Evaluation",
    body: "Utilizing cutting-edge technology, we offer comprehensive assessments beyond basic hearing screenings, ensuring optimal performance from the brain to the ears.",
  },
  {
    title: "Hearing Aid Counseling, Fitting & Services",
    body: "Our expert team is committed to connecting you with the ideal technology to optimize your hearing capabilities. Collaborating with top-tier vendors and offering options across various budget ranges, we ensure every individual receives precisely tailored devices, meticulously programmed and maintained for peak performance.",
  },
  {
    title: "Aural Rehabilitation",
    body: "We pride ourselves on being experts in aural rehabilitation. With a dedicated team of professionals equipped with extensive training and experience, we specialize in providing comprehensive support to individuals seeking to enhance their hearing regardless of their individual challenges. Through personalized assessments, innovative technologies, and compassionate care, we empower our clients to navigate the auditory world with confidence and clarity, ensuring they achieve optimal communication and quality of life.",
  },
  {
    title: "Tinnitus Evaluation & Treatment",
    body: "Led by Dr. Shannon Marie, a nationally renowned authority in tinnitus treatment, our practice stands at the forefront of comprehensive care for this condition. Dr. Marie's expertise extends to hosting an exclusive video series dedicated to counseling individuals coping with tinnitus. Whether through cutting-edge technology, specialized counseling, or aural rehabilitation, we possess the expertise and resources to help manage tinnitus symptoms and support your overall auditory wellness.",
  },
  {
    title: "Hearing Protection Devices",
    body: "Specializing in hearing protection, we excel in delivering tailored solutions infused with high-end technology to various sectors, including local law enforcement, hunters, and professionals exposed to loud occupational environments. Our expertise ensures top-notch custom-molded options, guaranteeing maximum protection regardless of your specific needs. Whether for work or recreation, our solutions offer unparalleled noise mitigation, making us the premier choice for safeguarding your hearing health.",
  },
  {
    title: "Hearing Aid Cleaning & Repairs",
    body: "From connectivity glitches to power concerns or requiring replacement parts, our adept team is equipped to address a myriad of device-related issues. Furthermore, we facilitate seamless communication with various manufacturers to ensure your devices are functioning at peak performance. Additionally, we offer in-office device cleanings and humidity treatments, extending the longevity of your devices and ensuring they operate at peak performance for an extended period.",
  },
  {
    title: "Cochlear and Baha Evaluation, Programming & Mapping",
    body: "Seeking presurgical mapping, counseling, or post-surgical care for your Cochlear style devices? Whether it's Baha, Cochlear America, or Advanced Bionics, count on us to ensure your technology operates at its best.",
  },
  {
    title: "Pediatric Testing",
    body: "From ages four to eighteen, we stand as the premier destination in the Columbia Basin for pediatric testing and care. Rely on us to ensure your children's hearing health is accurately assessed and treated, providing you with the essential information to guide their health journeys toward the success every parent dreams of.",
  },
  {
    title: "Industrial Screenings",
    body: "Our certified CAOHC audiology assistants and technicians are dedicated to maintaining comprehensive records of your team members' hearing capabilities for your company's records. Unlike generic “travel vans,” we provide personalized service that prioritizes the well-being of your valuable employees. Rest assured, each individual is treated with care, and their test results are readily available to meet your company's needs.",
  },
];

export const PROVIDERS = [
  {
    name: "Shannon Marie, Au.D.",
    role: "Owner and Tinnitus Specialist",
    photo: `${CDN}/aef09d4c-bc63-4fe6-b75d-73611c6a0b20/IMG_0402+-+Dr.+Shannon.png`,
    bio: "Dr. Shannon Marie is the owner and one of the Doctors of Audiology at Columbia Basin Hearing Center. Throughout her career, she has become a leading expert in tinnitus treatment and has helped thousands of patients find “better living through better hearing.” Beyond her work with Columbia Basin Hearing Center, Dr. Shannon is a serial entrepreneur and nature therapist who has served on multiple professional boards and is known as an inspirational speaker and mentor.",
  },
  {
    name: "Melanie Muhlestein, Au.D.",
    role: "Clinical Audiologist and APD Specialist",
    photo: `${CDN}/432955e3-95f2-4719-b4dc-1e0f02ad388e/Dr.+Melanie+Retouch.png`,
    bio: "Melanie Muhlestein, AuD, has had a long journey to return to her Tri-Cities home as an Audiologist. After earning her Master’s degree in Audiology from Utah State University in 1996, she dedicated time to raising her two boys. In searching for answers for her boys’ Auditory Processing Disorder, she completed Master Classes in APD evaluation and treatment, and went back to graduate school to earn her Doctor of Audiology degree from AT Still University.",
  },
  {
    name: "Cassidy White, Au.D.",
    role: "Clinical Audiologist Tele-Health",
    photo: `${CDN}/4e0bf13a-a07d-4853-8540-1de9adf6c25d/IMG_7998.jpg`,
    bio: "Dr. Cassidy White is a licensed Audiologist working for us remotely from beautiful Livingston, Tennessee. She received her Doctorate of Audiology from Idaho State University in 2020. Dr. White’s greatest interests include hearing aid dispensing, counseling and education, and tinnitus management.",
  },
  {
    name: "Corrin Stevens",
    role: "Hearing Instrument Specialist and CAOHC Certified Industrial Screener",
    photo: `${CDN}/95745e68-f642-4937-8028-e3740eba0514/IMG_0384.jpg`,
    bio: "Corrin received her bachelor’s degree in Speech and Hearing Sciences from the University of Washington and worked at Seattle Children’s Hospital for 13 years before her family moved to the Tri-Cities in 2016. She was fortunate to return to the field of audiology through Columbia Basin Hearing Center.",
  },
  {
    name: "Ellija Snapp",
    role: "Audiology Assistant — IT Specialist and CAOHC Certified Industrial Screener",
    photo: `${CDN}/c736eeb4-2573-4502-bdbe-95726abdf155/Ellija.jpg`,
    bio: "Born and raised in the Tri-Cities, Ellija is a CAOHC Certified Occupational Hearing Conservationist, an Audiology Assistant, and our in-house IT Specialist. With a long history in the medical field and a lifelong passion for electronics, hearing aid care is a perfect fit for his special set of skills.",
  },
  {
    name: "Avery Palazzo",
    role: "Audiology Assistant — CAOHC Certified Industrial Screener",
    photo: `${CDN}/bf692cdc-c071-4b21-98a1-222e8e7cbf90/Avery.jpg`,
    bio: "Avery is a Certified Occupational Hearing Conservationist and Audiology Assistant who is deeply committed to patient care. Today, Avery takes pride in making a meaningful difference in the lives of her patients through compassionate care and support.",
  },
];

export const STORIES = [
  {
    quote:
      "“My boss would say something and now I could hear him. It’s blessing to finally hear my kids and grandkids”",
    name: "Dempsey B.",
    photo: `${CDN}/9b94c6f1-74c2-4546-886e-620107be3522/Dempsey+B.png`,
  },
  {
    quote:
      "“Finding specialized care for tinnitus completely changed my daily outlook. The team at Columbia Basin Hearing Center gave me effective management tools and incredible support.”",
    name: "Lorrie R.",
    photo: `${CDN}/50538989-3856-43ff-95ee-bb0e74147b4b/Rathburn+for+Website.jpg`,
  },
  {
    quote:
      "“I had to do something as I could not hear my students. I was surprised at how bad my hearing had gotten. After treatment I stopped asking ‘what?’ all the time!”",
    name: "Lynn S",
    photo: `${CDN}/88aba306-0ff5-46d7-ab4e-1962884f8a6b/IMG_2452+Lynn+Steadman+AET.png`,
  },
];

export const REVIEWS = [
  {
    text: "The staff was funny and charming, and they got me in and out in a jiffy. Ill definitely be going back if the need arises!",
    name: "Max W.",
    date: "July 21, 2026",
  },
  {
    text: "The personal are very friendly and eager to assist you with anything. They are very caring. The atmosphere is friendly and welcoming. The technician was very knowledgeable and concerned about my safety. This was a very pleasant experience.",
    name: "Sandy W.",
    date: "July 16, 2026",
  },
  {
    text: "CBHC provides excellent service and latest technology regarding hearing lost. Everyone from the reception, administrative personnel, technicians, and doctors provides such a robust service with confidence, backed by 45 years of experience in the business. I recommend them because they are good.",
    name: "Francisco M.",
    date: "July 15, 2026",
  },
  {
    text: "The team of professionals at Columbia Basin Hearing Center (CBHC) have helped me with my hearing disability for many years now. My life is truly better due to the advise and support that I have received from the people at CBHC.",
    name: "Kenneth J.",
    date: "July 9, 2026",
  },
];
