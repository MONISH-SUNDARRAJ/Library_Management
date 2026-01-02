let books = JSON.parse(localStorage.getItem("books")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];
let issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];

document.getElementById("totalBooks").innerText = books.length;
document.getElementById("issuedBooks").innerText = issued.length;

let available = books.reduce((sum, b) => sum + b.quantity, 0);
document.getElementById("availableBooks").innerText = available;

document.getElementById("totalStudents").innerText = students.length;

function logout() {
    window.location.href = "index.html";
}
