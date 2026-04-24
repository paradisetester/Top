const EDITORIAL_DATA = {
  image: '/editorial.png',
  imageAlt: 'Athlete silhouette',
  heading: 'YOUR MIND',
  headingLine2: 'IS THE MACHINE.',
  body: "We don't just prepare athletes. We engineer the mental systems behind every win.",
};

export default function CinematicEditorial({ ref }) {
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative h-[70vh] md:h-screen overflow-hidden">
        <img src={EDITORIAL_DATA.image} alt={EDITORIAL_DATA.imageAlt} className="ken-burns-img w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h2 className="gsap-scale-text font-oswald font-black text-4xl md:text-[75px] leading-[1] tracking-tighter mb-6">{EDITORIAL_DATA.heading}<br />{EDITORIAL_DATA.headingLine2}</h2>
            <p className="gsap-reveal text-gray-400 text-lg max-w-md mx-auto">{EDITORIAL_DATA.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
