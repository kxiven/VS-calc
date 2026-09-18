const recipes = 
{
  refractory_brick_block: 
  {
    yieldPerCraft: 2,
    inputs: 
    [
      { item: "refractory_brick", qty: 8 },
      { item: "mortar", qty: 1 }
    ]
  },

  refractory_brick_grating: 
  {
    yieldPerCraft: 3,
    inputs: 
    [
      { item: "refractory_brick", qty: 6 },
      { item: "mortar", qty: 1 }
    ]
  },

  refractory_brick:
  {
    yieldPerCraft: 1,
    inputs:
    [
       { item: "fireclay", qty: 2 },
       { item: "crushed_quartz", qty: 1 },
       { item: "crushed_bauxite", qty: 1 } 
    ]
  },

  mortar:
  {
    yieldPerCraft: 4,
    inputs:
    [
        { item: "slaked_lime", qty: 1 },
        { item: "sand", qty: 1 },
    ]
  },

  fireclay:
  {
    yieldPerCraft: 8,
    inputs:
    [
        { item: "red_or_blue_clay", qty: 8 },
        { item: "powdered_calcinated_flint", qty: 1 }
    ]
  },

  slaked_lime:
  {
    yieldPerCraft: 4,
    inputs:
    [
        { item: "quicklime", qty: 4 },
        { item: "water", qty: 1 }
    ]
  },
  
  quicklime:
  {
    yieldPerCraft: 1,
    inputs:
    [
        { item: "lime", qty: 2}
    ]
  },
};