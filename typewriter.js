const sentence = "hello there from lighthouse labs";

let i = 0;

let flash = setInterval(() => {
  process.stdout.write(sentence[i]);
    i++
    if (i >= sentence.length){
    clearInterval(flash);
    console.log("\n")
}}, 50);