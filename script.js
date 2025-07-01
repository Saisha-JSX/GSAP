// Fade animation: circle fades in and out
gsap.to("#fadeShape", {
  opacity: 0,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Slide animation: square slides left to right
gsap.to("#slideShape", {
  x: 70,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

// Scale animation: triangle scales up and down
gsap.to("#scaleShape", {
  scale: 1.3,
  transformOrigin: "50% 100%",
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Rotate animation: hexagon rotates continuously
gsap.to("#rotateShape", {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear",
  transformOrigin: "50% 50%"
});

// Bounce animation: diamond bounces up and down
gsap.to("#bounceShape", {
  y: -30,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "bounce.out"
});

// Other Shows Animations

// Star pulse (scale pulse)
gsap.to("#starShape::before, #starShape::after", {
  scale: 1.3,
  transformOrigin: "50% 50%",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// For star, animating both ::before and ::after with GSAP is tricky since they are pseudo-elements,
// So instead, animate the parent with a slight scale pulse:
gsap.to("#starShape", {
  scale: 1.2,
  transformOrigin: "50% 50%",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Heart beat animation (scale pulse)
gsap.to("#heartShape", {
  scale: 1.15,
  transformOrigin: "50% 50%",
  duration: 0.6,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Morph blob shape animation
gsap.to("#blobShape", {
  borderRadius: "40% 60% 50% 70% / 50% 60% 40% 60%",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
