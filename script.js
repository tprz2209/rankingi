"use strict";

//////// SELECTORS
// Lists of items
const navItems = document.querySelectorAll("ul.list-of-rankings li");
const tables = document.querySelectorAll("table");

// Nav elements
const navOom = document.querySelector(".nav_oom");
const navPt = document.querySelector(".nav_pt");
const navEt = document.querySelector(".nav_et");
const navCt = document.querySelector(".nav_ct");
const navDt = document.querySelector(".nav_dt");

// Tables
const tableOom = document.querySelector(".table-oom");
const tablePt = document.querySelector(".table-pt");
const tableEt = document.querySelector(".table-et");
const tableCt = document.querySelector(".table-ct");
const tableDt = document.querySelector(".table-dt");

// Ranking link
const rankingLink = document.querySelector(".ranking-link");

//////// EVENT LISTENERS
// Nav items - all
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navItems.forEach(function (li) {
      li.classList.remove("active-ranking");
    });
    item.classList.add("active-ranking");
  });
});

// Nav items - single
navOom.addEventListener("click", function () {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  });
  tableOom.classList.remove("hidden");
  rankingLink.setAttribute(
    "href",
    "https://www.pdc.tv/order-of-merit/pdc-order-merit"
  );
});

navPt.addEventListener("click", function () {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  });
  tablePt.classList.remove("hidden");
  rankingLink.setAttribute(
    "href",
    "https://www.pdc.tv/order-of-merit/protour-order-of-merit"
  );
});

navEt.addEventListener("click", function () {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  });
  tableEt.classList.remove("hidden");
  rankingLink.setAttribute(
    "href",
    "https://www.pdc.tv/order-of-merit/european-tour-order-of-merit"
  );
});

navCt.addEventListener("click", function () {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  });
  tableCt.classList.remove("hidden");
  rankingLink.setAttribute(
    "href",
    "https://www.pdc.tv/order-of-merit/challenge-tour-order-merit"
  );
});

navDt.addEventListener("click", function () {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  });
  tableDt.classList.remove("hidden");
  rankingLink.setAttribute(
    "href",
    "https://www.pdc.tv/order-of-merit/development-tour-order-of-merit"
  );
});
