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