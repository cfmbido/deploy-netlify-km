const btnAddElement = document.getElementById("btn-add");
const btnClearElement = document.getElementById("btn-clear");
const localStorageElement = document.getElementById("localstorage");

const btnAddSessionElement = document.getElementById("btn-add-session");
const btnClearSessionElement = document.getElementById("btn-clear-session");
const sessionStorageElement = document.getElementById("sessionstorage");

//Data Name Using Session Storage
const nameLocalStorage = localStorage.getItem("name");
localStorageElement.textContent = nameLocalStorage;

btnAddElement.onclick = function () {
  localStorage.setItem("name", "John");
  localStorageElement.textContent = localStorage.getItem("name");
};

btnClearElement.onclick = function () {
  localStorage.removeItem("name");
  localStorageElement.textContent = "";
};

//Data Age Using Session Storage
const nameSessionStorage = sessionStorage.getItem("age");
sessionStorageElement.textContent = nameSessionStorage;

btnAddSessionElement.onclick = function () {
  sessionStorage.setItem("age", "20");
  sessionStorageElement.textContent = sessionStorage.getItem("age");
};

btnClearSessionElement.onclick = function () {
  sessionStorage.removeItem("age");
  sessionStorageElement.textContent = "";
};
