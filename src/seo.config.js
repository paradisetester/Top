/* ─── Centralized SEO Configuration ─── */

const SITE_NAME = 'TOP-Training Optimization Program';
const SITE_URL = 'https://topallornoting.com';
const DEFAULT_IMAGE = '/hero-bg.png';

const SEO = {
  '/': {
    title: `${SITE_NAME} | Elite Athletic Performance System`,
    description: 'TOP is a high-performance athletic training system built for developing athletes. From physical mechanics to mental conditioning — we engineer champions at every level.',
    keywords: 'athletic training, youth sports, performance system, sports programs, athlete development, TOP Training Optimization Program',
    og: {
      type: 'website',
      title: `${SITE_NAME} | Elite Athletic Performance System`,
      description: 'The performance system built for athletes who refuse to be average. Physical. Mental. Social. System.',
      image: DEFAULT_IMAGE,
      url: SITE_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: 'The performance system built for athletes who refuse to be average.',
      image: DEFAULT_IMAGE,
    },
  },

  '/about': {
    title: `About | ${SITE_NAME}`,
    description: 'Learn about the mission, methodology, and team behind TOP — the elite performance system engineered for developing athletes at every stage.',
    keywords: 'about TOP, athletic training philosophy, performance methodology, youth athlete development',
    og: {
      type: 'website',
      title: `About | ${SITE_NAME}`,
      description: 'Learn about the mission and methodology behind TOP — the elite performance system for developing athletes.',
      image: DEFAULT_IMAGE,
      url: `${SITE_URL}/about`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `About | ${SITE_NAME}`,
      description: 'Learn about the mission and methodology behind TOP.',
      image: DEFAULT_IMAGE,
    },
  },

  '/systems': {
    title: `Systems | ${SITE_NAME}`,
    description: 'Explore the 9 specialized operating systems across three tiers — Foundation, Varsity, and Executive — engineered for peak athletic and professional performance.',
    keywords: 'training systems, athletic performance programs, youth sports tiers, game changer protocol, recruitment protocol, CEO engine',
    og: {
      type: 'website',
      title: `Systems | ${SITE_NAME}`,
      description: 'Explore the 9 specialized operating systems engineered for peak athletic and professional performance.',
      image: DEFAULT_IMAGE,
      url: `${SITE_URL}/systems`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Systems | ${SITE_NAME}`,
      description: 'Explore the 9 specialized operating systems for peak performance.',
      image: DEFAULT_IMAGE,
    },
  },

  '/contact': {
    title: `Contact | ${SITE_NAME}`,
    description: 'Get in touch with the TOP team. Ready to start your performance journey? Reach out for enrollment, partnerships, or inquiries.',
    keywords: 'contact TOP, athletic training enrollment, sports program inquiry, TOP support',
    og: {
      type: 'website',
      title: `Contact | ${SITE_NAME}`,
      description: 'Ready to start your performance journey? Reach out to the TOP team.',
      image: DEFAULT_IMAGE,
      url: `${SITE_URL}/contact`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Contact | ${SITE_NAME}`,
      description: 'Ready to start your performance journey? Reach out to the TOP team.',
      image: DEFAULT_IMAGE,
    },
  },
};

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
export default SEO;
