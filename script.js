/////////////////////////////////////////
// control the pages donation and history //

//////////////////////////////////////////////
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

///////////////////////////////////////////////////////
// Function to show the modal //

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

/////////////////////////////////////////////////////

////////////////////////////////////////////////////

assetsMoney = document.getElementById("assetsM");

console.log(assetsMoney.innerHTML);

var catchAssets = assetsMoney.innerHTML;
balance = parseFloat(catchAssets);
console.log(balance);
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

  const historyElement = document.getElementById("historyDiv");

  historyElement.classList.remove("hidden");

  const newEntry = document.createElement("div");
  newEntry.innerHTML = donationMessage;

  newEntry.classList.add("rounded-md");
  newEntry.classList.add("shadow");
  newEntry.classList.add("flex");
  newEntry.classList.add("items-center");
  newEntry.classList.add("justify-center");
  newEntry.classList.add("mb-4");

  historyElement.appendChild(newEntry); // Append the new donation card to the history
}

function donateMoney(platform) {
  console.log(platform);

  let inputValue;

  // Determine which input to read based on the platform
  if (platform == 1) {
    inputValue = document.getElementById("input1").value;
    document.getElementById("input1").value = "";
  } else if (platform == 2) {
    inputValue = document.getElementById("input2").value;
    document.getElementById("input2").value = "";
  } else {
    inputValue = document.getElementById("input3").value;
    document.getElementById("input3").value = "";
  }

  // Parse the input value and check if it's a valid number
  inputValue = parseFloat(inputValue);
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  // Calculate the new temporary balance
  const tempBalance = balance - inputValue;

  if (tempBalance >= 0) {
    miniAcControl(platform, balance - tempBalance);
    balance = tempBalance;
    assetsMoney.innerHTML = balance.toFixed(2); // Update display and format to two decimals
    showModal();

    if (platform == 1) {
      historyCard("Flood at Noakhali", inputValue);
    } else if (platform == 2) {
      historyCard("Flood Relief in Feni", inputValue);
    } else {
      historyCard("Aid for Injured in the Quota Movement", inputValue);
    }
  } else {
    alert("Insufficient balance");
  }
}

////////////////////////////////////////////////////
///////////////////////////////////////////////////

function miniAcControl(confirmPlatform, amount) {
  dataUpdate1 = document.getElementById("miniaca");
  dataUpdate2 = document.getElementById("miniacb");
  dataUpdate3 = document.getElementById("miniacc");
  console.log("adlk" + dataUpdate1.innerText);
  if (confirmPlatform == 1) {
    temp = parseFloat(dataUpdate1.innerHTML);
    dataUpdate1.innerText = parseFloat(dataUpdate1.innerText) + amount;
  } else if (confirmPlatform == 2) {
    temp = parseFloat(dataUpdate2.innerHTML);
    dataUpdate2.innerText = parseFloat(dataUpdate2.innerText) + amount;
  } else {
    temp = parseFloat(dataUpdate3.innerHTML);
    dataUpdate3.innerText = parseFloat(dataUpdate3.innerText) + amount;
  }
}

////////////////////////////////////////////////

function toggleHome() {
  var toggleName = document.getElementById("toggleName");
  console.log(toggleName.innerText);
  if (toggleName.innerText == "Blog") {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    toggleName.innerText = "Home";
  } else {
    toggleName.innerText = "Blog";
    document.getElementById("home").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
  }
  console.log("toggleHome");
}

//////////////////////////////////////////////////
