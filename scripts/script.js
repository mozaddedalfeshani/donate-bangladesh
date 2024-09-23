// control the pages donation and history
function goToDonation() {
  console.log("goto donation page");
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyDiv").classList;
  historyDiv.add("hidden");
  donationDiv.remove("hidden");
  console.log(donationDiv);
}
function goToHistory() {
  console.log("goto History page");
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyDiv").classList;
  historyDiv.remove("hidden");
  donationDiv.add("hidden");
}
