const getDate = /(\w+):(\w+)/;
const date = "create:basin";
const output = date.match(getDate);

if (output) {
    const [, key, value] = output;
    console.log(key);
    console.log(value); 
} else {
    console.log("Errorrrrrrrrrrrrrrr");
}
