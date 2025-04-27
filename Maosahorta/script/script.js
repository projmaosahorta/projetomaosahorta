let garden = [];
let plantStatus = "Nenhuma planta na horta."; 
let harvestCount = 0; 
let plantStage = "seed"; 

document.getElementById("plantButton").addEventListener("click", function() {
  if (garden.length === 0) {
    garden.push("Semente plantada");
    plantStage = "seed"; 
    updatePlant(); 
    document.getElementById("status").innerHTML = "Plantei uma semente. Regue e adube para ela crescer!";
  } else {
    document.getElementById("status").innerHTML = "Você já plantou uma semente!";
  }
});


document.getElementById("waterButton").addEventListener("click", function() {
  if (garden.length > 0 && plantStage === "seed") {
    plantStage = "sprout"; 
    updatePlant(); 
    document.getElementById("status").innerHTML = "A planta brotou! Agora adube para ela crescer mais!";
  } else if (garden.length > 0 && plantStage === "sprout") {
    document.getElementById("status").innerHTML = "A planta já está brotando. Agora adube para ela crescer!";
  } else {
    document.getElementById("status").innerHTML = "Plante uma semente antes de regar!";
  }
});

document.getElementById("fertilizeButton").addEventListener("click", function() {
  if (garden.length > 0 && plantStage === "sprout") {
    plantStage = "grown"; 
    updatePlant(); 
    document.getElementById("status").innerHTML = "A planta cresceu completamente!";
  } else if (garden.length > 0 && plantStage === "grown") {
    document.getElementById("status").innerHTML = "A planta já está madura. Colha-a!";
  } else {
    document.getElementById("status").innerHTML = "Plante uma semente e regue para adubar!";
  }
});

document.getElementById("harvestButton").addEventListener("click", function() {
  if (garden.length > 0 && plantStage === "grown") {
    harvestCount++;
    document.getElementById("harvestResults").innerHTML = `Você colheu ${harvestCount} alimentos!`;
    garden = []; 
    plantStage = "seed"; 
    document.getElementById("garden").innerHTML = "Planta colhida! Plante novamente.";
  } else {
    document.getElementById("harvestResults").innerHTML = "Plante e cuide da sua planta primeiro!";
  }
});

function updatePlant() {
  const gardenElement = document.getElementById("garden");
  gardenElement.innerHTML = ""; 
  
  const plant = document.createElement("div");
  plant.classList.add("plant");

  if (plantStage === "seed") {
    plant.classList.add("plant-seed"); 
  } else if (plantStage === "sprout") {
    plant.classList.add("plant-sprout"); 
  } else if (plantStage === "grown") {
    plant.classList.add("plant-grown"); 
  }
  gardenElement.appendChild(plant);
}
