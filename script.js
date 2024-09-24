///////////////////////////////////////////////////////
// Function to show the modal
//////////////////////////////////////////////////////
function showModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.remove("hidden");
  modal.classList.add("modal-open"); // Enable modal behavior
}
// Function to close the modal
function closeModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.add("hidden"); // Hide modal
  modal.classList.remove("modal-open");
}
///////////////////////////////////////////////////////
// Global used //
//////////////////////////////////////////////////////

assetsMoney = document.getElementById("assetsM");

console.log(assetsMoney.innerHTML);

var catchAssets = assetsMoney.innerHTML;
balance = parseFloat(catchAssets);

///////////////////////////////////
// Function to add donation history
///////////////////////////////////
function historyCard(platform, donateValue) {
  const currentDate = new Date();
  const donationMessage = `
    <div class="card shadow h-[138px] md:w-[1000px] text-start rounded-md bg-[#ffffff] p-4 items-start justify-center flex">
      <p class="text-[20px] font-bold">${donateValue.toFixed(
        2
      )} Taka is donated for ${platform}</p>
      <p class="text-[14px]">Date: ${currentDate.toString()}</p>
    </div>
  `;

  // Get the history container
  const historyElement = document.getElementById("historyDiv");

  // Hide the "You haven't donated yet" message if it exists
  const emptyMessage = document.getElementById("noDonationsMessage");
  if (emptyMessage) {
    emptyMessage.classList.add("hidden");
  }

  const newEntry = document.createElement("div");
  newEntry.innerHTML = donationMessage;

  newEntry.classList.add("rounded-md");
  newEntry.classList.add("shadow");
  newEntry.classList.add("flex");
  newEntry.classList.add("items-center");
  newEntry.classList.add("justify-center");
  newEntry.classList.add("mb-4");
  historyElement.appendChild(newEntry);
}

// Function to show the "You haven't donated yet" message on screen .....
function showEmptyHistoryMessage() {
  const historyElement = document.getElementById("historyDiv");
  if (historyElement.children.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.id = "noDonationsMessage";
    emptyMessage.innerHTML = `
      <div class="text-center text-gray-500 py-4">
        <p class="text-[20px]">You haven't donated yet</p>
      </div>
    `;
    historyElement.appendChild(emptyMessage);
  }
}
///////////////////////////////////////////////////////
// Function to donate //
//////////////////////////////////////////////////////

function donateMoney(platform) {
  let inputValue;
  let tempBalance;

  switch (platform) {
    case 1:
      inputValue = parseFloat(document.getElementById("input1").value);
      document.getElementById("input1").value = "";
      tempBalance = balance - inputValue;

      if (tempBalance >= 0) {
        miniAcControl(platform, inputValue);
        balance = tempBalance;
        assetsMoney.innerHTML = balance.toFixed(2);
        showModal();
        historyCard("Flood at Noakhali", inputValue);
      } else {
        alert("Insufficient balance");
      }
      break;

    case 2:
      inputValue = parseFloat(document.getElementById("input2").value);
      document.getElementById("input2").value = "";
      tempBalance = balance - inputValue;

      if (tempBalance >= 0) {
        miniAcControl(platform, inputValue);
        balance = tempBalance;
        assetsMoney.innerHTML = balance.toFixed(2);
        showModal();
        historyCard("Flood Relief in Feni", inputValue);
      } else {
        alert("Insufficient balance");
      }
      break;

    case 3:
      inputValue = parseFloat(document.getElementById("input3").value);
      document.getElementById("input3").value = ""; // Clear the input field
      tempBalance = balance - inputValue;

      if (tempBalance >= 0) {
        miniAcControl(platform, inputValue);
        balance = tempBalance;
        assetsMoney.innerHTML = balance.toFixed(2);
        showModal();
        historyCard("Aid for Injured in the Quota Movement", inputValue);
      } else {
        alert("Insufficient balance");
      }
      break;

    default:
      alert("Invalid platform selected");
  }
}

////////////////////////////////////////////////////
// Function to update mini account balances
///////////////////////////////////////////////////

function miniAcControl(confirmPlatform, amount) {
  let dataUpdate1 = document.getElementById("miniaca");
  let dataUpdate2 = document.getElementById("miniacb");
  let dataUpdate3 = document.getElementById("miniacc");

  if (confirmPlatform == 1) {
    dataUpdate1.innerText = (
      parseFloat(dataUpdate1.innerText) + amount
    ).toFixed(2);
  } else if (confirmPlatform == 2) {
    dataUpdate2.innerText = (
      parseFloat(dataUpdate2.innerText) + amount
    ).toFixed(2);
  } else {
    dataUpdate3.innerText = (
      parseFloat(dataUpdate3.innerText) + amount
    ).toFixed(2);
  }
}

////////////////////////////////////////////////
// Page control for donation and history toggle
////////////////////////////////////////////////

function goToDonation() {
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyhide").classList;
  historyDiv.add("hidden");
  donationDiv.remove("hidden");

  colord = document.getElementById("buttondColor");
  colord.classList.add("bg-[#B4F461]");
  colorh = document.getElementById("buttonhColor");
  colorh.classList.remove("bg-[#B4F461]");
}

function goToHistory() {
  donationDiv = document.getElementById("donationDiv").classList;
  historyDiv = document.getElementById("historyhide").classList;
  historyDiv.remove("hidden");
  donationDiv.add("hidden");

  colord = document.getElementById("buttondColor");
  colord.classList.remove("bg-[#B4F461]");
  colorh = document.getElementById("buttonhColor");
  colorh.classList.add("bg-[#B4F461]");

  // Show the placeholder message if no donations have been made
  showEmptyHistoryMessage();
}

////////////////////////////////////////////////
// Toggle between home and blog views
////////////////////////////////////////////////

function toggleHome() {
  var toggleName = document.getElementById("toggleName");
  if (toggleName.innerText == "Blog") {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    toggleName.innerText = "Home";
  } else {
    toggleName.innerText = "Blog";
    document.getElementById("home").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
  }
}
