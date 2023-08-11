// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha', 'Victor'];

// // Criar uma <ul></ul>
// // Iterar sobre os membros
// // Colocar cada membro em uma <li></li>
// // Colocar cada <li> na <ul>

// const list = document.createElement("ul"); // => <ul></ul>

// abba.forEach((member) => {
//   const listItem = document.createElement("li"); // => <li></li>
//   listItem.innerHTML = member; // => <li>Bjorn</li>
//   list.appendChild(listItem);
// });

// const container = document.querySelector(".container");
// container.appendChild(list);


// // Manipulating the DOM

// const elements = document.querySelectorAll("li");
// elements.forEach((element) => {
//   element.innerHTML += " 🎵"
// });

// list.style.listStyleType = "upper-roman";
// // list.style.display = "none";

// Dataset

// const abba = document.querySelectorAll(".abba");

// abba.forEach((member) => {
//   member.innerHTML += `: ${member.dataset.instrument}`
// });


// Events

// const image = document.querySelector("#romain");

// image.addEventListener("click", (event) => {
//   image.classList.toggle("img-circle");
// });

// const images = document.querySelectorAll(".galera");
// console.log(images);

// images.forEach((image) => {
//   image.addEventListener("click", (event) => {
//     image.classList.toggle("img-circle");
//   });
// });


// Putting it all together

const button = document.querySelector(".btn-light");

button.addEventListener("click", (event) => {
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  });
});
