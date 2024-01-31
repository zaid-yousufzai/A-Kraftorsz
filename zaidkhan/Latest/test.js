let str="    my      name    is   zaid    ";

let splittext=str.split(" ");
console.log(splittext)

let filtertext=splittext.filter(s=>s);
console.log(filtertext)


let jointext=filtertext.join(" ");
console.log(jointext)