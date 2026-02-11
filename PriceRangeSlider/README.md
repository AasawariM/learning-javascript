# Price Range Slider

This is a small UI project where I built a dual-thumb price range slider using HTML, CSS, and JavaScript. It allows users to select a minimum and maximum price using two slider thumbs and also supports manual value entry through number input fields.

## What I Built

I created a price range selector with two thumbs by overlapping two range input elements. Both sliders are placed in the same container and styled so they behave like a single range control.

Along with sliders, I added two number input boxes that stay synced with the slider values. Users can either drag the thumbs or type values manually.

## How the Dual Thumb Slider Works

- Used two separate range inputs — one for minimum value and one for maximum value
- Overlapped both sliders using absolute positioning inside the same container
- Disabled pointer events on the slider track and enabled them only on the thumbs so both can be dragged smoothly
- Made the top slider track transparent so it visually looks like one slider
- Added a custom thumb icon using CSS background image

## JavaScript Logic Implemented

- Initial values of sliders are copied to number input boxes on page load
- Slider → Input sync: when a slider moves, its value updates the corresponding number field
- Input → Slider sync: when a number is typed, the slider position updates
- Added validation to ignore invalid (NaN) typed values
- Implemented a crossing check so the two thumbs cannot overlap
- If thumbs come too close or cross, they are automatically pushed apart by a fixed gap

## Features

- Dual-thumb range slider
- Slider and input box value synchronization (both directions)
- Manual number entry support
- Thumb crossing prevention logic
- Custom styled slider thumbs
- Clean centered layout

## Tech Used

- HTML5
- CSS3
- JavaScript (Vanilla)
