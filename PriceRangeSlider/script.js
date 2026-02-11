"use strict";

// Get range(thumb) values
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

// Get number input box values
const input_1 = document.getElementById("input-1");
const input_2 = document.getElementById("input-2");

// ---------- Sync sliders to inputs ----------
// Copies current slider values into number input boxes
function syncInputsFromSliders() {
  input_1.value = minRange.value;
  input_2.value = maxRange.value;
}
// Run once on load to initialize inputs from sliders
syncInputsFromSliders();
// ----------Prevent thumb crossing ----------
// Ensures min slider is always less than max slider
// If they overlap or cross, push them apart by 10 step
const crossingCheck = function () {
  let current_min = Number(minRange.value);
  let current_max = Number(maxRange.value);

  if (current_min >= current_max) {
    minRange.value = current_max - 10;
  } else if (current_max <= current_min) {
    maxRange.value = current_min + 10;
  }
};

// ---------- Slider to Input Sync ----------
// When either slider moves:
// Enforce no-cross rule
// Update number inputs

minRange.addEventListener("input", () => {
  crossingCheck();
  syncInputsFromSliders();
});

maxRange.addEventListener("input", () => {
  crossingCheck();
  syncInputsFromSliders();
});

// ---------- Input to Slider Sync ----------
// When user types in number boxes:
// Validate number (avoid NaN)
// Update corresponding slider
// Enforce no-cross rule
// Re-sync inputs

input_1.addEventListener("input", () => {
  const val = parseInt(input_1.value);
  if (!isNaN(val)) {
    minRange.value = val;
  }
  crossingCheck();
  syncInputsFromSliders();
});

input_2.addEventListener("input", () => {
  const val = parseInt(input_2.value);
  if (!isNaN(val)) {
    maxRange.value = val;
  }
  crossingCheck();
  syncInputsFromSliders();
});
