// Create a timeline
var tl = gsap.timeline();

// Animate the logo
tl.from("#logo", {
  y: -20,
  opacity: 0,
  duration: 0.8,
  delay: 0.5
});

// Animate the nav links
tl.from("#nav-links li", {
  y: -20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

// Animate the main content (hero text)
tl.from("#main-content", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.95,
  ease: "power2.out"
});
