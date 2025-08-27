import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import mindShareVsMarketShare from "../assets/images/MindShare_vs_MarketShare.jpg";

const services = [
  {
    title: "Precision Targeting",
    features: [
      "Advanced Audience Segmentation",
      "1st Party Data Utilization",
      "Personalized Content Creation",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Captivating Content",
    features: [
      "Creative Storytelling",
      "Compelling Visuals",
      "Interactive Media",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Tangible Outcomes",
    features: [
      "Comprehensive Analytics",
      "Goal Tracking",
      "Conversion Optimization",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
  {
    title: "Tailored Solutions",
    features: [
      "Customized Strategies",
      "Individualized Campaigns",
      "Client-Centric Focus",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
  },
  {
    title: "Reliable Assistance",
    features: [
      "Dedicated to Your Success",
      "Prompt Customer Service",
      "Local 24/7 Support",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
  },
  {
    title: "Recruitment Focus",
    features: [
      "Specialized in Hiring Campaigns",
      "Industry Expertise",
      "Proven Success",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Visibility Dilemma",
    painPoint:
      "Your brand is drowning in the vast sea of social media, struggling to be seen by your target audience.",
    agitatepainPoint:
      "It's disheartening when your carefully crafted content goes unnoticed. Your potential customers are out there, but they simply can't find you amidst the digital noise.",
    solution:
      "Our targeted visibility strategies cut through the clutter, ensuring your brand is not just seen but remembered. Watch our video to see how we make your presence impossible to ignore.",
    img: visibilityDilemma,
  },
  {
    title: "Engagement Gap",
    painPoint:
      "Despite your efforts, audience engagement remains lackluster, and interactions are not translating into meaningful connections.",
    agitatepainPoint:
      "It's frustrating to see competitors effortlessly engaging their audience while your brand struggles to spark conversations. Your content deserves better results, and we have the solution.",
    solution:
      "Our proven engagement tactics ignite conversations, turning passive viewers into active participants. Explore how we bridge the engagement gap in our video walkthrough.",
    img: engagementGap,
  },
  {
    title: "Mind Share vs Market Share",
    painPoint:
      "Mind share refers to the level of awareness and perception that consumers have about your brand, while market share is the percentage of an industry's sales that a particular company controls.",
    agitatepainPoint:
      "Your percentage of the market is slipping, and competitors are gaining ground. It's a tough pill to swallow when your brand's influence doesn't translate into actual sales and growth.",
    solution:
      "I focus on mind share strategies that enhance brand awareness and perception, ultimately driving market share growth. With this mindset, I can help your brand achieve a stronger foothold in the market.",
    img: mindShareVsMarketShare,
  },
];

const faqs = [
  {
    question: "How can digital and radio marketing benefit my business?",
    answer:
      "Digital and radio marketing work hand-in-hand to grow your business by building brand awareness, driving new customers, and staying top of mind in your community. Digital campaigns provide precise targeting and measurable results, while radio offers unmatched reach and credibility with local audiences.",
  },
  {
    question: "What sets your agency apart from others?",
    answer:
      "Our agency stands out because we blend traditional radio reach with cutting-edge digital strategies. We don’t believe in cookie-cutter plans — instead, we tailor campaigns to your business goals, whether that means driving foot traffic, generating leads, or building long-term brand loyalty.",
  },
  {
    question: "How do you measure the success of marketing campaigns?",
    answer:
      "We use a combination of analytics and on-air tracking to measure success. This includes digital KPIs such as impressions, clicks, conversions, and geofencing reports, alongside radio metrics like reach, frequency, and brand recall. Together, these tools give you clear, transparent insights into your return on investment.",
  },
  {
    question: "Can I run one without the other?",
    answer:
      "Yes — you can absolutely choose to run just radio or just digital, depending on your budget and goals. Many of our partners start with one channel and expand over time. That said, we’ve found that using both together creates the most impact: radio builds broad awareness and credibility, while digital ads provide precise targeting and measurable engagement. We’ll work with you to find the right mix for your business, whether that’s starting with one platform or combining both for maximum reach.",
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer:
      "Absolutely. Every business is unique, so we design strategies specifically for your industry, goals, and audience. Whether you need a strong radio presence, a digital push, or a blend of both, we’ll create a plan that maximizes your results.",
  },
  {
    question: "How do you handle negative reviews or online feedback?",
    answer:
      "We believe in turning challenges into opportunities. With digital reputation management, we monitor online mentions and reviews in real-time. If negative feedback appears, we respond quickly, professionally, and with solutions that strengthen your brand’s credibility.",
  },
  {
    question: "What platforms and channels do you work with?",
    answer:
      "We cover a wide range of channels including local FM/AM radio, streaming audio, display ads, search engine marketing, social platforms, OTT/CTV, and geofencing. Our goal is to connect with your customers wherever they are — on the road, at home, or online.",
  },
  {
    question: "How often will I receive performance reports?",
    answer:
      "You’ll receive clear, detailed reports on a regular basis — monthly, depending on your preference. These reports show both digital analytics and radio campaign tracking so you always know how your investment is working.",
  },
  {
    question: "Is there ongoing support if I need changes or have questions?",
    answer:
      "Yes. Our team is always available to answer questions, adjust your strategy, or add new campaign elements. Marketing needs evolve, and we’re committed to evolving with you.",
  },
  {
    question: "Can I get a consultation before deciding to work with you?",
    answer:
      "Of course. We offer free consultations where we’ll discuss your goals, review potential strategies, and show you how digital and radio can work together to grow your business. This way, you’ll see exactly how we can deliver results before making a commitment.",
  },
];

export { services, solutions, faqs };
