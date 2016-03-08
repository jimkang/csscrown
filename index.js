function Crown(createOpts) {
  var crownClass;

  if (createOpts) {
    crownClass = createOpts.crownClass;
  }

  var currentlyCrowned;

  function crown(el) {
    if (currentlyCrowned) {
      currentlyCrowned.classList.remove(crownClass);
    }

    if (el) {
      currentlyCrowned = el;
      currentlyCrowned.classList.add(crownClass);
    }
  }
  
  return crown; 
}

module.exports = Crown;
