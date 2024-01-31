const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here

  const fruits = document.querySelectorAll("li.seed");

  // console.log(fruits);

  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.querySelectorAll("li.seedless");
  // console.log(seedless);
  // 3. Get first seedless fruit element
  // Your code here

  const firstSeedless = document.querySelector("li.seedless");
  // console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const span =
    document.getElementById("wrapper").children[0].children[0].innerHTML;
  // console.log(span);

  // 5. Get all children of element "wrapper"
  // Your code here
  const allChildren = document.getElementById("wrapper").children;
  // console.log(allChildren);
  // 6. Get all odd number list items in the list
  // Your code here
  const odds = document.querySelectorAll("li.odd");
  // console.log(odds);

  // 7. Get all even number list items in the list
  // Your code here
  const evens = document.querySelectorAll(".odd + *");
  // console.log(evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  const section3 = document
    .getElementById("three")
    .children[1].querySelectorAll("a:not([class])");
  console.log(section3);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.getElementById("three").children[1].children[2];
  console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = document.querySelectorAll("img.unicorn");
  console.log(unicorns);
};

window.onload = select;
