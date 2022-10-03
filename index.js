/*** start --- scroll in view add animation class ******/
let intro, skills;

// Set things up
window.addEventListener(
  "load",
  (event) => {
    intro = document.querySelector(".intro");
    skills = document.querySelector(".skills");
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
  observer.observe(intro);
  observer.observe(skills);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.className);
      // const intro = entry.target.querySelector(".intro");
      // const skills = entry.target.querySelectorAll(".skill-item");
      if (entry.target.className == "intro")
        intro.classList.add("slide-in-left");

      if (entry.target.className == "skills") {
        const skillItems = entry.target.querySelectorAll(".skill-item");
        skillItems.forEach((skill) => {
          skill.classList.add("fade-in");
          skill.style.animationDuration = `${Math.random() * 2.5}s`;
        });
      }
      // skills.classList.add("fade-in");
      // console.log(skills);
      // skills.forEach((skill) => {
      //   skill.classList.add("fade-in");
      //   skill.style.animationDuration = `${Math.random() * 2.5}s`;
      // });
      observer.unobserve(intro);
    }
  });
}

/***** end ----- scroll in view add animation class ******/
