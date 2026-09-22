const herName = "MeRcY"
console.log(herName.toLowerCase());
console.log(herName.toUpperCase());

function lowerCase (value){
    return value.toLowerCase();
}
console.log(lowerCase(herName));

const trimExample = "    Mercy Eyaife     "
console.log(trimExample.trim());
console.log(trimExample.trimStart());
console.log(trimExample.trimEnd());

const trimExamples = "Mercy Eyaife"
console.log(trimExamples.startsWith("Mercy"))
console.log(trimExamples.endsWith("Mercy"))
console.log(trimExamples.startsWith("Eyaife"))
console.log(trimExamples.endsWith("Eyaife"))

const extractExample = "MercyEyaife"
console.log(extractExample.slice(0, 3));
console.log(extractExample.slice(3));
console.log(extractExample.slice(-3));
console.log(extractExample.substring(0, 3));
console.log(extractExample.substring(3));
console.log(extractExample.substring(-3, 0));
