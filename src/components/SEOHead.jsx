import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../seo.config';

/**
 * SEOHead — Dynamically updates document head meta tags
 * based on the current route using centralized SEO config.
 * 
 * Usage: Place <SEOHead /> inside each page component,
 * or once in App.jsx to auto-detect route.
 */
export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO[pathname] || SEO['/'];

    // Title
    document.title = seo.title;

    // Standard meta
    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);

    // Open Graph
    if (seo.og) {
      setMetaProperty('og:type', seo.og.type);
      setMetaProperty('og:title', seo.og.title);
      setMetaProperty('og:description', seo.og.description);
      setMetaProperty('og:image', seo.og.image);
      setMetaProperty('og:url', seo.og.url);
    }

    // Twitter Card
    if (seo.twitter) {
      setMeta('twitter:card', seo.twitter.card);
      setMeta('twitter:title', seo.twitter.title);
      setMeta('twitter:description', seo.twitter.description);
      setMeta('twitter:image', seo.twitter.image);
    }
  }, [pathname]);

  return null;
}

/* ─── Helpers ─── */
function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
