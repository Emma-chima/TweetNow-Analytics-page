const toggleBtn = document.querySelectorAll(".bill__toggle");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const monthBill = document.querySelectorAll(".monthly__bill");
const yearBill = document.querySelectorAll(".yearly__bill");

const sideBar = document.querySelector(".side__bar");
const closeBtn = document.querySelector(".fa-times");
const menuBar = document.querySelector(".menu__icon");

menuBar.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  menuBar.classList.add("remove");
});
closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("active");
  menuBar.classList.remove("remove");
});

monthly.addEventListener("click", function () {
  monthly.classList.add("active");
  yearly.classList.add("active");
  month.classList.add("active");
  year.classList.add("active");
  monthBil();
});

function monthBil() {
  monthBill.forEach(function (e) {
    e.classList.add("active");
  });

  yearBill.forEach(function (e) {
    e.classList.add("active");
  });
}

yearly.addEventListener("click", function () {
  yearly.classList.remove("active");
  monthly.classList.remove("active");
  year.classList.remove("active");
  month.classList.remove("active");
  yearBil();
});

function yearBil() {
  yearBill.forEach(function (e) {
    e.classList.remove("active");
  });

  monthBill.forEach(function (e) {
    e.classList.remove("active");
  });
}
