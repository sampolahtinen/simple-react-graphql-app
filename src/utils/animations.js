import { TweenLite, TimelineMax, SteppedEase, Power2, Power4 } from "gsap";

function personAppearAnimation(ref, appearDelay) {
  return TweenLite.to(ref, 0.1, {
    opacity: 1,
    ease: SteppedEase.config(40)
  }).delay(appearDelay);
}

function pageAppearAnimation(ref) {
  return TweenLite.to(ref, 0.3, {
    transform: "translateX(0)",
    ease: Power2.easeOUt
  });
}

function mainPageAppearAnimation(ref) {
  return TweenLite.to(ref, 1, {
    opacity: 1,
    ease: Power4.easeOut
  });
}

function typeWriterAnimation(ref) {
  var tl = new TimelineMax({
    paused: true
  });
  // letter animation
  tl.fromTo(
    ref,
    2,
    {
      width: "0"
    },
    {
      width: "100%" /* same as CSS .line-1 width */,
      ease: SteppedEase.config(37)
    },
    0
  ).delay(0.5);

  tl.play();
}

export {
  personAppearAnimation,
  mainPageAppearAnimation,
  pageAppearAnimation,
  typeWriterAnimation
};
