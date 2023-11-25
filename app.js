// toggle dashboard
const toggleDavii = document.querySelector(".user");
const dashboard = document.querySelector(".user_div");

toggleDavii.addEventListener("click", (e) => {
  e.preventDefault();
  dashboard.classList.toggle("close");
});
toggleDavii.addEventListener("keypress", (e) => {
  e.preventDefault();
  dashboard.classList.toggle("close");
});

// toggle notification
const toggleNotif = document.querySelector(".notif");
const notifEl = document.querySelector(".notif_div");

toggleNotif.addEventListener("click", (e) => {
  e.preventDefault();
  notifEl.classList.toggle("close");
});
toggleNotif.addEventListener("keypress", (e) => {
  e.preventDefault();
  notifEl.classList.toggle("close");
});

//close button
const closeEl = document.querySelector(".trial-tab");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  closeEl.style.display = "none";
});
closeBtn.addEventListener("keypress", () => {
  closeEl.style.display = "none";
});

//Toggle Setup Guide arrow buttons
const toggleOpen = document.getElementById("down");
const toggleClose = document.getElementById("up");
const gListToggle = document.getElementById("gList_menu");
const stepCounter = document.getElementById("step-counter");

let i = parseInt(stepCounter.innerText);

toggleOpen.addEventListener("click", () => {
  toggleOpen.classList.add("hidden");
  toggleClose.classList.remove("hidden");
  gListToggle.classList.remove("hidden");

  toggleImageOne.classList.add("hidden");
  toggleContentOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleImageTwo.classList.add("hidden");
  toggleContentTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleImageThree.classList.add("hidden");
  toggleContentThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleImageFour.classList.add("hidden");
  toggleContentFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleImageFive.classList.add("hidden");
  toggleContentFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});
toggleOpen.addEventListener("keypress", () => {
  toggleOpen.classList.add("hidden");
  toggleClose.classList.remove("hidden");
  gListToggle.classList.remove("hidden");

  toggleImageOne.classList.add("hidden");
  toggleContentOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleImageTwo.classList.add("hidden");
  toggleContentTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleImageThree.classList.add("hidden");
  toggleContentThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleImageFour.classList.add("hidden");
  toggleContentFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleImageFive.classList.add("hidden");
  toggleContentFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});

toggleClose.addEventListener("click", () => {
  toggleClose.classList.add("hidden");
  toggleOpen.classList.remove("hidden");
  gListToggle.classList.add("hidden");
});
toggleClose.addEventListener("keypress", () => {
  toggleClose.classList.add("hidden");
  toggleOpen.classList.remove("hidden");
  gListToggle.classList.add("hidden");
});

// For Guide List one
const toggleCompOne = document.querySelector(".gList-one");
const toggleContentOne = document.querySelector(".gContent-one");
const toggleImageOne = document.querySelector(".img-one");

toggleCompOne.addEventListener("click", () => {
  toggleContentOne.classList.remove("hidden");
  toggleImageOne.classList.remove("hidden");
  toggleCompOne.classList.add("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});
toggleCompOne.addEventListener("keypress", () => {
  toggleContentOne.classList.remove("hidden");
  toggleImageOne.classList.remove("hidden");
  toggleCompOne.classList.add("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});

//Load and mark Toggles
const circleOne = document.getElementById("circle-one");
const loadingOne = document.getElementById("load-one");
const markOne = document.getElementById("mark-one");

circleOne.addEventListener("click", () => {
  circleOne.classList.add("hidden");
  loadingOne.classList.remove("hidden");
  setTimeout(() => {
    loadingOne.classList.add("hidden");
    markOne.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
circleOne.addEventListener("keypress", () => {
  circleOne.classList.add("hidden");
  loadingOne.classList.remove("hidden");
  setTimeout(() => {
    loadingOne.classList.add("hidden");
    markOne.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
markOne.addEventListener("click", () => {
  markOne.classList.add("hidden");
  circleOne.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});
markOne.addEventListener("keypress", () => {
  markOne.classList.add("hidden");
  circleOne.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});

// For Guide List two
const toggleCompTwo = document.querySelector(".gList-two");
const toggleContentTwo = document.querySelector(".gContent-two");
const toggleImageTwo = document.querySelector(".img-two");

toggleCompTwo.addEventListener("click", () => {
  toggleContentTwo.classList.remove("hidden");
  toggleImageTwo.classList.remove("hidden");
  toggleCompTwo.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});
toggleCompTwo.addEventListener("keypress", () => {
  toggleContentTwo.classList.remove("hidden");
  toggleImageTwo.classList.remove("hidden");
  toggleCompTwo.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});

//Load and mark Toggles
const circleTwo = document.getElementById("circle-two");
const loadingTwo = document.getElementById("load-two");
const markTwo = document.getElementById("mark-two");

circleTwo.addEventListener("click", () => {
  circleTwo.classList.add("hidden");
  loadingTwo.classList.remove("hidden");
  setTimeout(() => {
    loadingTwo.classList.add("hidden");
    markTwo.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
circleTwo.addEventListener("keypress", () => {
  circleTwo.classList.add("hidden");
  loadingTwo.classList.remove("hidden");
  setTimeout(() => {
    loadingTwo.classList.add("hidden");
    markTwo.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
markTwo.addEventListener("click", () => {
  markTwo.classList.add("hidden");
  circleTwo.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});
markTwo.addEventListener("keypress", () => {
  markTwo.classList.add("hidden");
  circleTwo.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});

// For Guide List three
const toggleCompThree = document.querySelector(".gList-three");
const toggleContentThree = document.querySelector(".gContent-three");
const toggleImageThree = document.querySelector(".img-three");

toggleCompThree.addEventListener("click", () => {
  toggleContentThree.classList.remove("hidden");
  toggleImageThree.classList.remove("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});
toggleCompThree.addEventListener("keypress", () => {
  toggleContentThree.classList.remove("hidden");
  toggleImageThree.classList.remove("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});

//Load and mark Toggles
const circleThree = document.getElementById("circle-three");
const loadingThree = document.getElementById("load-three");
const markThree = document.getElementById("mark-three");

circleThree.addEventListener("click", () => {
  circleThree.classList.add("hidden");
  loadingThree.classList.remove("hidden");
  setTimeout(() => {
    loadingThree.classList.add("hidden");
    markThree.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
circleThree.addEventListener("keypress", () => {
  circleThree.classList.add("hidden");
  loadingThree.classList.remove("hidden");
  setTimeout(() => {
    loadingThree.classList.add("hidden");
    markThree.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
markThree.addEventListener("click", () => {
  markThree.classList.add("hidden");
  circleThree.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});
markThree.addEventListener("keypress", () => {
  markThree.classList.add("hidden");
  circleThree.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});

// For Guide List four
const toggleCompFour = document.querySelector(".gList-four");
const toggleContentFour = document.querySelector(".gContent-four");
const toggleImageFour = document.querySelector(".img-four");

toggleCompFour.addEventListener("click", () => {
  toggleContentFour.classList.remove("hidden");
  toggleImageFour.classList.remove("hidden");
  toggleCompFour.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});
toggleCompFour.addEventListener("keypress", () => {
  toggleContentFour.classList.remove("hidden");
  toggleImageFour.classList.remove("hidden");
  toggleCompFour.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFive.classList.add("hidden");
  toggleImageFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup_bg");
});

//Load and mark Toggles
const circleFour = document.getElementById("circle-four");
const loadingFour = document.getElementById("load-four");
const markFour = document.getElementById("mark-four");

circleFour.addEventListener("click", () => {
  circleFour.classList.add("hidden");
  loadingFour.classList.remove("hidden");
  setTimeout(() => {
    loadingFour.classList.add("hidden");
    markFour.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
circleFour.addEventListener("keypress", () => {
  circleFour.classList.add("hidden");
  loadingFour.classList.remove("hidden");
  setTimeout(() => {
    loadingFour.classList.add("hidden");
    markFour.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
markFour.addEventListener("click", () => {
  markFour.classList.add("hidden");
  circleFour.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});
markFour.addEventListener("keypress", () => {
  markFour.classList.add("hidden");
  circleFour.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});

// For Guide List five
const toggleCompFive = document.querySelector(".gList-five");
const toggleContentFive = document.querySelector(".gContent-five");
const toggleImageFive = document.querySelector(".img-five");

toggleCompFive.addEventListener("click", () => {
  toggleContentFive.classList.remove("hidden");
  toggleImageFive.classList.remove("hidden");
  toggleCompFive.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");
});
toggleCompFive.addEventListener("keypress", () => {
  toggleContentFive.classList.remove("hidden");
  toggleImageFive.classList.remove("hidden");
  toggleCompFive.classList.add("setup_bg");

  toggleContentOne.classList.add("hidden");
  toggleImageOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup_bg");

  toggleContentTwo.classList.add("hidden");
  toggleImageTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup_bg");

  toggleContentThree.classList.add("hidden");
  toggleImageThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup_bg");

  toggleContentFour.classList.add("hidden");
  toggleImageFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup_bg");
});

//Load and mark Toggles
const circleFive = document.getElementById("circle-five");
const loadingFive = document.getElementById("load-five");
const markFive = document.getElementById("mark-five");

circleFive.addEventListener("click", () => {
  circleFive.classList.add("hidden");
  loadingFive.classList.remove("hidden");
  setTimeout(() => {
    loadingFive.classList.add("hidden");
    markFive.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
circleFive.addEventListener("keypress", () => {
  circleFive.classList.add("hidden");
  loadingFive.classList.remove("hidden");
  setTimeout(() => {
    loadingFive.classList.add("hidden");
    markFive.classList.remove("hidden");
    i = i + 1;
    stepCounter.innerText = i;
  }, 500);
});
markFive.addEventListener("click", () => {
  markFive.classList.add("hidden");
  circleFive.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});
markFive.addEventListener("keypress", () => {
  markFive.classList.add("hidden");
  circleFive.classList.remove("hidden");
  i = i - 1;
  stepCounter.innerText = i;
});

//Progress Bar
const progressBar = document.querySelector(".progress_bar");
const updateProgressBar = () => {
  const counterValue = parseInt(stepCounter.innerText);
  const maxWidth = 5;
  const percentage = (counterValue / maxWidth) * 100;
  progressBar.style.width = percentage + "%";
};
updateProgressBar();
stepCounter.addEventListener("DOMSubtreeModified", updateProgressBar);
