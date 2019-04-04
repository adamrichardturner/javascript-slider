/* jshint esversion: 6 */

// When I click the next button
// Show the next page
// Each page should show a different background colour, circle
// colour and content.

// When I click the previous button,
// show the previous page.

// When I click the random button
// Show a random page.

// When I press a key
// Show the next or previous page.

// Step 1: Add the content for our pages.
// To create a list use square brackets []
// To create an object use {}
// To create a list of objects use both [{}];
const pages = [{
    content: "A London based web developer",
    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(226, 226, 226, 1) 100%)",
    circle: "#ffffff"
  },
  {
    content: "half-Finnish",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,19,1) 35%, rgba(226,226,226,1) 100%)",
    circle: "#141ca8"
  },
  {
    content: "a guitar player",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,128,44,1) 35%, rgba(226,226,226,1) 100%)",
    circle: "#14a89e"
  },
  {
    content: `letting you <a href="cv.pdf">download his CV</a>`,
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,186,186,1) 35%, rgba(226,226,226,1) 100%)",
    circle: "#147ba8"
  }
];

// Step 2: Pick the tags we want to use in HTML and save them in constants.

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
// Select each button individually using the fa classes, call the constants the following nextTag, previousTag, randomTag.
const nextTag = document.querySelector(".next");
const randomTag = document.querySelector(".random");
const previousTag = document.querySelector(".previous");
// Select the h2 and name the constant outputTag.
const h2Tag = document.querySelector("h2");

// Step 3: We need to know which page we are on in order to change it.
// so we need a way of tracking this.

let pageNumber = 0;

// Step 4: Create an action that increases the page pageNumber

const next = function() {
  pageNumber = pageNumber + 1;

  // We only have 4 pages so we don't want to be able to
  // increase the page number to 5.
  // Pages.length will print out the number of pages in our list.
  // Currently this is 4, however we start counting from 0 in
  // programming. So we minus 1.
  if (pageNumber > pages.length - 1) {
    // Set back to page 1.
    // console.log(pages.length);
    pageNumber = 0;
  }
};

// Step 5: Create an action that decreases the page number.

const previous = function() {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

// Step 8: Create an action that generates a random number

const random = function() {
  // Create a random number between 0 & 1 that has decimal places
  pageNumber = Math.floor(Math.random() * pages.length);
  console.log(pageNumber);
};

// Step 10: Update our content on our page with the content from the pages list

// Update the content in our body

const updatePage = function() {
  // Update the content in our body
  h2Tag.innerHTML = pages[pageNumber].content;
  // Update the circle background
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  // Update the background color of the body
  bodyTag.style.background = pages[pageNumber].background;
};

// Step 6: Attach an eventListener to the next button
// and call the next function that we just created.

// EVENT LISTENERS

nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});

// Step 7: Do the same for the previous tag.

previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});

// Step 9: Attach an eventListener to the random button
// and randomly select a valid page number.

randomTag.addEventListener("click", function() {
  random();
  //console.log(pageNumber);
  updatePage();
});