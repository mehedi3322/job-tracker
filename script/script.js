var cards;

var interviewCount = document.getElementById("interviewCount");
var rejectedCount = document.getElementById("rejectedCount");
var totalCount = document.getElementById("totalCount");
var sectionCount = document.getElementById("sectionCount");
var noData = document.getElementById("noData");

var tabAll = document.getElementById("tabAll");
var tabInterview = document.getElementById("tabInterview");
var tabRejected = document.getElementById("tabRejected");
// UPDATE COUNT
function updateCount() {

    cards = document.getElementsByClassName("job-card");

    var interview = 0;
    var rejected = 0;

    for (var i = 0; i < cards.length; i++) {

        if (cards[i].dataset.status === "interview") {
            interview++;
        }

        if (cards[i].dataset.status === "rejected") {
            rejected++;
        }

    }

    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
    totalCount.innerText = cards.length;
    sectionCount.innerText = cards.length + " Jobs";
}
// FILTER JOBS
function filterJobs(type) {

cards = document.getElementsByClassName("job-card");

var found = false;

for (var i = 0; i < cards.length; i++) {

if (type === "all") {
cards[i].style.display = "block";
found = true;
}

else if (cards[i].dataset.status === type) {
cards[i].style.display = "block";
found = true;
}

else {
cards[i].style.display = "none";
}

}

if (!found) {
noData.classList.remove("hidden");
}
else {
noData.classList.add("hidden");
}

}

// BUTTON EVENTS
document.addEventListener("click", function (e) {

if (e.target.closest(".interview")) {

var card = e.target.closest(".job-card");

card.dataset.status = "interview";

updateCount();
}

if (e.target.closest(".rejected")) {

var card = e.target.closest(".job-card");

card.dataset.status = "rejected";

updateCount();
}

if (e.target.closest(".delete")) {

var card = e.target.closest(".job-card");

card.remove();

updateCount();

filterJobs("all");
}

});
// TAB EVENTS
tabAll.addEventListener("click", function () {
filterJobs("all");
});

tabInterview.addEventListener("click", function () {
filterJobs("interview");
});

tabRejected.addEventListener("click", function () {
filterJobs("rejected");
});

updateCount();