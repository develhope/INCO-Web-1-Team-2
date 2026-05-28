const user = {
  id: 1,
  name: "John",
  age: 25,
};

// Save object in localStorage
function saveUser() {
  localStorage.setItem("user", JSON.stringify(user));
}

saveUser();

// Example of retrieving the object
const savedUser = JSON.parse(localStorage.getItem("user"));

console.log(savedUser);
