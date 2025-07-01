gsap.registerPlugin(ScrollTrigger);

// === Hero Text Animation === //
const split = document.querySelector(".split-text");
const words = split.textContent.split(" ");
split.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

gsap.from(".word", {
  opacity: 0,
  y: 50,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  delay: 0.8,
  duration: 1,
  ease: "power3.out"
});

// === Scroll animations for sections === //
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

// === Pin Projects Section === //
ScrollTrigger.create({
  trigger: "#projects",
  start: "top top",
  end: "+=500",
  pin: true,
  scrub: true,
  pinSpacing: true
});

// === Floating Team Images === //
gsap.to(".team img", {
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  duration: 2
});

// === Staggered Cards in Services Section === //
gsap.from(".card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});

// === Team Pop-in === //
gsap.from(".team div", {
  scrollTrigger: {
    trigger: "#team",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
  stagger: 0.2
});

// === Tilt Effect on Cards === //
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// === New Animation: Background color transition on scroll === //
gsap.utils.toArray(".section").forEach((section, i, sections) => {
  if(i < sections.length - 1) { // skip last section
    ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",
      end: () => "+=" + window.innerHeight,
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: window.getComputedStyle(sections[i + 1]).backgroundColor,
          duration: 1,
          ease: "power1.inOut"
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: window.getComputedStyle(section).backgroundColor,
          duration: 1,
          ease: "power1.inOut"
        });
      }
    });
  }
});

// === New Animation: Glowing pulsing effect on navbar logo === //
gsap.to(".nav-logo", {
  boxShadow: "0 0 15px 5px #0ff",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 2
});
