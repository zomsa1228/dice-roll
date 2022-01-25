function dice(){
    rand = 6; //画像の枚数
    rand - 1;
    dice_file_name = Math.floor(Math.random()*rand);
    img = document.getElementById("dice_images");
    dice_file_name = "./image/" + dice_file_name + ".png";
    img.src = dice_file_name;
    return
}

function none(){
    img = document.getElementById("dice_images");
    img.src = "./image/null.png";
}

async function dice_roll(){
    for (let i = 1; i < 15; i++){
        dice();
        await wait();
        none();
        await wait();
        dice();

    }
}
async function wait () {
let wait_promise = new Promise( resolve => { setTimeout( resolve, 50 ) } );

await wait_promise;
}
