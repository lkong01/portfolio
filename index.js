/*** start --- scroll in view add animation class ******/
let boxElement;

// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector(".about-body");
    createObserver();
  },
  false
);

function createObserver() {
  let observer;

  let options = {
    threshold: 0,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.querySelector(".intro"));
      const intro = entry.target.querySelector(".intro");
      const skills = entry.target.querySelectorAll(".skill-item");
      intro.classList.add("slide-in-left");
      // skills.classList.add("fade-in");
      console.log(skills);
      skills.forEach((skill) => {
        skill.classList.add("fade-in");
        skill.style.animationDuration = `${Math.random() * 2.5}s`;
      });
      observer.unobserve(boxElement);
    }
  });
}

/***** end ----- scroll in view add animation class ******/
