const categories = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories:${categories.length}`);
for (const category of categories) {
  const title = category.querySelector("h2").textContent;
  const count = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
}
