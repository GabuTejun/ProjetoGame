var wood = 0;
var stone = 0;
var metal = 0;
var multWood = 1;
var multStone = 1;
var multMetal = 1;

function takeResource(resource) {
    switch (resource) {
        case 1:
            wood += 1 * multWood
            document.getElementById('woodCount').innerHTML = "Madeira: " + wood;
            break;
        case 2:
            stone += 1 * multStone
            document.getElementById('stoneCount').innerHTML = "Pedra: " + stone;
            break;
        case 3:
            metal += 1 * multMetal
            document.getElementById('metalCount').innerHTML = "Metal: " + metal;
            break;
    }
}

function axe() {
    if (wood >= 5){
        wood += -5
        multWood = 5;
        document.getElementById('axe').disabled = true;
        document.getElementById('woodCount').innerHTML = "Madeira: " + wood;
    }
}