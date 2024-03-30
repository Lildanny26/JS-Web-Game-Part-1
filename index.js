function newImage(src, left, bottom){
let image = document.createElement('img');
image.src = src;
image.style.position = 'fixed';
image.style.left = left;
image.style.bottom = bottom;
document.body.append(image);
return image
}

function newItem(src, left, bottom){
    let item = newImage(src, left, bottom)
    
    item.addEventListener('dblclick', function() {
        item.remove()
        })  
    }

function createAndStyleBackground(src, positionX, positionY) {
    let background = document.createElement('img');
    background.src = src;
    background.style.position = 'fixed';
    background.style.left = positionX + 'px';
    background.style.top = positionY + 'px';
    document.body.append(background);
}

const image_width = 100;
const image_height = 100;

const numHorizontalTiles = Math.ceil(window.innerWidth / image_width);
const numVerticalTiles = Math.ceil(window.innerHeight / image_height);

for (let i = 0; i < numHorizontalTiles; i++) {
    for (let j = 0; j < numVerticalTiles / 2; j++) {
        createAndStyleBackground('assets/sky.png', i * image_width, j * image_height);
    }
}

for (let i = 0; i < numHorizontalTiles; i++) {
    for (let j = numVerticalTiles / 2; j < numVerticalTiles; j++) {
        createAndStyleBackground('assets/grass.png', i * image_width, j * image_height);
    }
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');


newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')


/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/