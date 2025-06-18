gsap.registerPlugin(ScrollTrigger);

// Animate hero text
gsap.from(".hero h1", {
  opacity: 0,
  y: -60,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  delay: 0.4,
  duration: 1,
  ease: "power3.out"
});

// Scroll-triggered animations for each section
gsap.utils.toArray(".section").forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      end: "top 30%",
      scrub: true
    },
    opacity: 0,
    y: 150,
    scale: 0.85,
    rotation: index % 2 === 0 ? 2 : -2,
    duration: 1.5
  });
});

// Pin Projects section
ScrollTrigger.create({
  trigger: "#projects",
  start: "top top",
  end: "+=500",
  pin: true,
  scrub: true,
  pinSpacing: true
});
