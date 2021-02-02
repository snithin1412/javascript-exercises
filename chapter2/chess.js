// CHESS BOARD EXERCISE
console.log("\n\ CHESS BOARD EXERCISE");

let count = 8;
for (let i =1; i<=count; i++) {
    let chess = "";
    if (i%2 != 0) chess = " ";
    for ( let j=1; j<=count; j++ ) {
        if (j%2 != 0) {
            chess = chess + (j==count && i%2 != 0  ? "" : "#");
        }
        else {
            chess = chess + (j==1 ? "" : " ");
        }
    }
    console.log(chess);
}