function namehold(craftable, quantity) 
{
    const total_materials = { };

    if (recipes[craftable] === undefined)
    {
            //if it's a raw material, then just record the value
            total_materials[craftable] = quantity;
            return total_materials;
    } 
    else 
    {
        const rcp = recipes[craftable];
        const craftsNeeded = Math.ceil(quantity / rcp.yieldPerCraft);

        for (const ingredient of rcp.inputs)
        {
            const amountNeeded = ingredient.qty * craftsNeeded;

            // record the intermediate item itself before cascading
            if (recipes[ingredient.item] !== undefined) 
            {
            total_materials[ingredient.item] = (total_materials[ingredient.item] || 0) + amountNeeded;
            }

            //recursive call the func to check for "lower" recipies
            const subResult = namehold(ingredient.item, amountNeeded);

             //add subResult's keys into total_materials
            for (const key in subResult) 
            {
                total_materials[key] = (total_materials[key] || 0) + subResult[key];
            }
        }
        
        return total_materials;
    }
}

function mergeInto(target, source) {
    for (const key in source) {
        target[key] = (target[key] || 0) + source[key];
    }
}

function recalculate() {
    const blockQty = Number(document.getElementById("blockQty").value);
    const gratingQty = Number(document.getElementById("gratingQty").value);

    const blockResult = namehold("refractory_brick_block_t1", blockQty);
    const gratingResult = namehold("refractory_brick_grating_t1", gratingQty);

    const master = {};
    mergeInto(master, blockResult);
    mergeInto(master, gratingResult);

    renderOutput(master);
}

function renderOutput(materials) {
    const outputEl = document.getElementById("output");
    outputEl.innerHTML = ""; //clear whatever was there before

    for (const itemName in materials) {
        const quantity = materials[itemName];
        const imgSrc = itemImages[itemName]; //may be undefined if no image exists yet

        const row = document.createElement("div");
        row.className = "material-row";

        if (imgSrc) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = itemName;
            img.width = 32;
            row.appendChild(img);
        }

        const label = document.createElement("span");
        label.textContent = `${itemName}: ${quantity}`;
        row.appendChild(label);

        outputEl.appendChild(row);
    }
}