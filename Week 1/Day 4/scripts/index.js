// console.log("Hello");
var formTag = document.querySelector("form").addEventListener("submit", saveData);
var studentDataLS = JSON.parse(localStorage.getItem("studentData")) || [];

function saveData(event){
    event.preventDefault();
    // console.log("Working");
    let name = form.name.value;
    let image = form.image.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let batch = form.batch.value;
    // console.log(name, image, course, unit, batch);
    StudentObj(name, image, course, unit, batch);
    let stu = new StudentObj(name, image, course, unit, batch);
    // console.log(stu);
    studentDataLS.push(stu);
    localStorage.setItem("studentData", JSON.stringify(studentDataLS));
    calculateBatch(studentDataLS);
}

function StudentObj(n, i, c, u, b){
    this.name = n;
    this.image = i;
    this.course = c;
    this.unit = u;
    this.batch = b;
}
calculateBatch(studentDataLS)
function calculateBatch(studentDataLS){
    let pTag = document.querySelector("#appendBatch");
    pTag.innerHTML = null;
    let batchObj = {};
    for(let i=0; i<studentDataLS.length; i++){
        if(!batchObj[studentDataLS[i].batch]){
            batchObj[studentDataLS[i].batch] = 0;
        }
    }
    for(let i=0; i<studentDataLS.length; i++){
        batchObj[studentDataLS[i].batch]++;
    }
    // console.log(batchObj);
    // pTag.append(batchObj);
    for(key in batchObj){
        pTag.append(key+" : "+batchObj[key]+" | ");
    }
}