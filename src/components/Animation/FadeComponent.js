import { useState } from "react";

export function FadeComponent() {
  // let [fadeState, setFadeState] = useState(false);

  // window.addEventListener("scroll", () => {
  //   let top = window.scrollY;

  //   top > 2
  //     ? setFadeState((fadeState = true))
  //     : setFadeState((fadeState = false));

  //   if (fadeState) {
  //     const faders = document.querySelectorAll(".fade-in");
  //     const sliders = document.querySelectorAll(".slide-in");

  //     const appearOptions = {
  //       treshold: 0,
  //       rootMargin: "0px 0px -20px 0px",
  //     };

  //     const appearOnScroll = new IntersectionObserver(
  //       (entries, appearOnScroll) => {
  //         for (const entry of entries) {
  //           if (!entry.isIntersecting) {
  //             return;
  //           } else {
  //             entry.target.classList.add("appear");
  //             appearOnScroll.unobserve(entry.target);
  //           }
  //         }
  //       },
  //       appearOptions
  //     );

  //     for (const fader of faders) {
  //       appearOnScroll.observe(fader);
  //     }
  //     for (const slider of sliders) {
  //       appearOnScroll.observe(slider);
  //     }
  //   }
  // });
}
