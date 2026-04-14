document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("treeCostForm");
  const resultBox = document.getElementById("calcResult");
  const rangeText = document.getElementById("calcRange");
  const noteText = document.getElementById("calcNote");

  if (!form || !resultBox || !rangeText || !noteText) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceType = document.getElementById("serviceType").value;
    const treeSize = document.getElementById("treeSize").value;
    const locationRisk = document.getElementById("locationRisk").value;
    const treeCount = document.getElementById("treeCount").value;
    const stumpAddOn = document.getElementById("stumpAddOn").checked;
    const urgentJob = document.getElementById("urgentJob").checked;

    const basePrices = {
      removal: [350, 650],
      trimming: [200, 450],
      stump: [125, 300],
      storm: [450, 850]
    };

    const sizeMultipliers = {
      small: [0.85, 0.9],
      medium: [1.0, 1.0],
      large: [1.45, 1.6],
      xlarge: [1.9, 2.25]
    };

    const riskAdders = {
      open: [0, 0],
      nearFence: [75, 150],
      nearHouse: [175, 350],
      highRisk: [300, 650]
    };

    const countMultipliers = {
      "1": [1.0, 1.0],
      "2": [1.85, 2.0],
      "3": [2.7, 2.95],
      "4": [3.5, 4.2]
    };

    let low = basePrices[serviceType][0];
    let high = basePrices[serviceType][1];

    low *= sizeMultipliers[treeSize][0];
    high *= sizeMultipliers[treeSize][1];

    low += riskAdders[locationRisk][0];
    high += riskAdders[locationRisk][1];

    low *= countMultipliers[treeCount][0];
    high *= countMultipliers[treeCount][1];

    if (stumpAddOn && serviceType !== "stump") {
      low += 125;
      high += 300;
    }

    if (urgentJob) {
      low += 150;
      high += 350;
    }

    low = Math.round(low / 25) * 25;
    high = Math.round(high / 25) * 25;

    let note = "This estimate is based on service type, tree size, access difficulty, and added services.";

    if (serviceType === "stump") {
      note = "Stump grinding cost usually depends on stump size, quantity, and how easy the area is to access.";
    } else if (serviceType === "trimming") {
      note = "Tree trimming cost depends on height, branch spread, and whether limbs are over the roof, driveway, or other structures.";
    } else if (serviceType === "storm") {
      note = "Storm cleanup jobs often cost more when trees are split, under tension, or close to structures and utility areas.";
    }

    if (locationRisk === "highRisk" || urgentJob) {
      note = "This appears to be a higher-risk or urgent job, which usually increases labor, safety precautions, and handling cost.";
    }

    noteText.textContent = note + " Most jobs fall within this range.";
    rangeText.textContent = "$" + low.toLocaleString() + " – $" + high.toLocaleString();
    resultBox.style.display = "block";

    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
