let counters = {
    resources : {
    wood : 0, stone : 0, metal : 0
    },
    multResources : {
        wood : 1, stone : 1, metal : 1
    },
    workers : {
        lumberjack : 0
    },
}

function load() {
    const resourcesCollect = localStorage.getItem('counters');
    counters = JSON.parse(resourcesCollect)
    document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
    document.getElementById('stoneCount').innerHTML = "Pedra: " + counters.resources.stone;
    document.getElementById('metalCount').innerHTML = "Metal: " + counters.resources.metal;
}
function restart() {
    const resourcesCollect = localStorage.removeItem('counters');
    counters = {
        resources : {
        wood : 0, stone : 0, metal : 0
        },
        multResources : {
            wood : 1, stone : 1, metal : 1
        },
        workers : {
            lumberjack : 0
        },
    }
    document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
    document.getElementById('stoneCount').innerHTML = "Pedra: " + counters.resources.stone;
    document.getElementById('metalCount').innerHTML = "Metal: " + counters.resources.metal;
}


function save() {
    const countersJSON = JSON.stringify(counters)
    localStorage.setItem('counters', countersJSON)
};


function takeResource(resource) {
    switch (resource) {
        case 1:
            if (counters.multResources.wood < 1){
                counters.resources.wood = 1
            }
            counters.resources.wood += 1 * counters.multResources.wood
            document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
            break;
        case 2:
            if (counters.multResources.stone < 1){
                counters.multResources.stone = 1
            }
            counters.resources.stone += 1 * counters.multResources.stone
            document.getElementById('stoneCount').innerHTML = "Pedra: " + counters.resources.stone;
            break;
        case 3:
            if (counters.multResources.metal < 1){
                counters.multResources.metal = 1
            }
            counters.resources.metal += 1 * counters.multResources.metal
            document.getElementById('metalCount').innerHTML = "Metal: " + counters.resources.metal;
            break;
    }
}

function axe() {
    if (counters.resources.wood >= 5){
        counters.resources.wood += -5
        counters.multResources.wood += 1;
        document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
    }
}

function buyLumberjack() {
    if (counters.resources.wood >= 50){
        counters.resources.wood += -50
        counters.workers.lumberjack += 1;
        document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
    }
}


setInterval(function woodLumberjack(){
    counters.resources.wood += counters.workers.lumberjack
    document.getElementById('woodCount').innerHTML = "Madeira: " + counters.resources.wood;
}, 1000)

setInterval(function allEvents(){
    if (counters.resources.wood < 5) {
        document.getElementById('axe').disabled = true;
    } else {
        document.getElementById('axe').disabled = false;
    }
    if (counters.resources.wood < 50) {
        document.getElementById('lumberjack').disabled = true;
    } else {
        document.getElementById('lumberjack').disabled = false;
    }
    
}, 0)
