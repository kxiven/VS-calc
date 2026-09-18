# Vintage Story Recipe Calculator
Web-based calculators for Vintage Story crafting chains that are
tedious to work out by hand.


## Tools
- Cementation Furnace: calculates every raw material and
  intermediate item (bricks, mortar, fireclay, etc.) needed for a
  given number of refractory brick blocks and gratings.
  

## How it works
Each calculator is built from three plain JS files:
- `recipes.js`           recipe data (what each item is made from, and yield per craft)
- `item-images.js`       image lookup per item, for display
- `engine.js`            the recursive function that cascades a target quantity down through recipes to a full materials list

No build tools, no frameworks — just static HTML/CSS/JS, hosted on
GitHub Pages.


## Status
Tier 1 cementation furnace only, for now. 
