# Price Range Slider

This is a small UI project where I built a price range slider using HTML, CSS, and JavaScript. It allows selecting a minimum and maximum price using two slider thumbs and also supports manual input through number fields.

## What I Built

I created a range slider with **two thumbs** by using two range inputs instead of one. Both sliders are placed on top of each other and styled in a way that they behave like a single price range selector.

I also added number input boxes so the values can be typed manually and synced with the sliders.

## How I Made the Two Thumbs Work

- Used two separate range inputs (min and max)
- Placed them in the same container and overlapped them using absolute positioning
- Disabled pointer events on the slider bar and enabled them only on the thumb so both sliders can be dragged properly
- Made the top slider background transparent so it looks like one combined slider
- Styled the thumb using a custom image icon

## Features

- Two-thumb price range slider
- Custom thumb design
- Min and max value selection
- Number input fields linked with slider values
- Simple centered layout

## Tech Used

- HTML
- CSS
- JavaScript
