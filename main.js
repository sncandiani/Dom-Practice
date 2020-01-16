/* Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to 
"Welcome to the {insert your name here} blog"
Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
Obtain a reference the element with a class of dashed and remove it.
Obtain a reference the element with a class of article_footer and add the class of goldenrod it. */

// Created a constant variable firstSection to hold the selection of the first section with class article__header
const firstSection = document.querySelector(".article__header");
// Changed the text content of the value of firstSection
firstSection.textContent = "Welcome to the Sofia blog";


// Created a constant variable changeArticles to select all elements with a class .article__header
const changeArticles = document.querySelectorAll(".article__header");
// Since I am wanting to select all of them I made a for loop to iterate through each value and affect them one by one
for (let i=0; i < changeArticles.length; i++) {
    // Iterates through the array as long as it has a value and add the class of important
    changeArticles[i].classList.add("important")
}
/* One way of doing it is iterating through an array again, but if there is only one value with .dashed
then we don't have to do this and can skip along to my other example 

Created a constant variable removeDashed to select all elements with a class .dashed

const removeDashed = document.querySelectorAll(".dashed");
Made a for loop to check all elements with the value of removeDashed

for (let i = 0; i < removeDashed.length; i++) {

Iterated through the array and removed all with class dashed
    removeDashed[i].classList.remove("dashed")
}
 */

 const removeDashed = document.querySelector(".dashed")
 removeDashed.classList.remove("dashed")

// Created a constant variable changeGoldenrod to select all elements wiht class .article__footer
const changeGoldenrod = document.querySelectorAll(".article__footer");
// Made a for loop to check all elements with the value of changeGoldenrod
for (let i=0; i < changeGoldenrod.length; i++) {
// Iterates through the array of the value of changeGoldenrod and adds class goldenrod 
    changeGoldenrod[i].classList.add("goldenrod");
}