// for-in uses any kind of collection (object, array, string);
let student = {
    name: "Gloria",
    awesome: true,
    specialty: "JavaScript",
    week: 1
}

console.log(student.name);
console.log(student["awesome"]);

for ( x in student ){
    console.log(student[x]);
}

console.log(typeof student)

// For-in-loop will return to you the KEYS of some collection