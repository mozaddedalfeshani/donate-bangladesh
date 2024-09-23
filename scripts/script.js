// control the pages donation and history
function goToDonation() {
  console.log("goto donation page");
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyhide").classList;
  historyDiv.add("hidden");
  donationDiv.remove("hidden");
  console.log(donationDiv);
}
function goToHistory() {
  console.log("goto History page");
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyhide").classList;
  historyDiv.remove("hidden");
  donationDiv.add("hidden");
}
/////////////////////////////////////////////////////
assetsMoney = document.getElementById("assetsM");

console.log(assetsMoney.innerHTML);

var catchAssets = assetsMoney.innerHTML;
balance = parseFloat(catchAssets);
console.log(balance);
function historyCard(platform, donateValue) {
  const currentDate = new Date();
  const donationMessage = `
    <div class="card shadow h-[138px] md:w-[1000px] text-start bg-[#ffffff] p-4 items-start justify-center flex">
      <p class="text-[20px] font-bold">${donateValue.toFixed(
        2
      )} Taka is donated for ${platform}</p>
      <p class="text-[14px]">Date: ${currentDate.toString()}</p>
    </div>
  `;

  // Assuming you want to display this in an element, e.g., with id "historyDiv"
  const historyElement = document.getElementById("historyDiv");

  // Make sure historyDiv is visible (remove 'hidden' class if it exists)
  historyElement.classList.remove("hidden");

  const newEntry = document.createElement("div"); // Create a new div to hold the card
  newEntry.innerHTML = donationMessage; // Set the innerHTML to allow HTML rendering

  // Add the necessary classes to newEntry for rounding and centering
  newEntry.classList.add("rounded-md"); // Add rounded corners to the outer div
  newEntry.classList.add("shadow"); // Add shadow for better visual separation
  newEntry.classList.add("flex"); // Flexbox to handle potential centering
  newEntry.classList.add("items-center");
  newEntry.classList.add("justify-center");

  historyElement.appendChild(newEntry); // Append the new donation card to the history
}

function donateMoney(platform) {
  console.log(platform);

  if (platform == 1) {
    inputValue = document.getElementById("input1").value;
    document.getElementById("input1").value = "";
    inputValue = parseFloat(inputValue);
    tempBalance = balance - inputValue;
  } else if (platform == 2) {
    inputValue = document.getElementById("input2").value;
    document.getElementById("input2").value = "";
    inputValue = parseFloat(inputValue);
    tempBalance = balance - inputValue;
  } else {
    inputValue = document.getElementById("input3").value;
    document.getElementById("input3").value = "";
    inputValue = parseFloat(inputValue);
    tempBalance = balance - inputValue;
  }

  if (tempBalance >= 0) {
    balance = tempBalance;
    assetsMoney.innerHTML = balance.toFixed(2); // Update display and format to two decimals

    // Log donation history

    if (platform == 1) historyCard("Flood at Noakhali", inputValue);
    else if (platform == 2) {
      historyCard("Flood Relief in Feni", inputValue);
    } else {
      historyCard("Aid for Injured in the Quota Movement", inputValue);
    }
  } else {
    alert("Insufficient balance");
  }

  console.log(balance);
  console.log(inputValue);
}
