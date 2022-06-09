var studentDataLS = JSON.parse(localStorage.getItem("studentData")) || [];

function showData(studentDataLS){
    var studentDataLS = JSON.parse(localStorage.getItem("studentData")) || [];
    let appendDiv = document.querySelector("#appendStu");
    appendDiv.innerHTML = null;
    studentDataLS.forEach(function(ele, idx){
        let ntd = document.createElement("td");
        ntd.innerText = ele.name;
        let itd = document.createElement("td");
        itd.innerText = ele.image;
        let ctd = document.createElement("td");
        ctd.innerText = ele.course;
        let utd = document.createElement("td");
        utd.innerText = ele.unit;
        let btd = document.createElement("td");
        btd.innerText = ele.batch;

        let delbtn = document.createElement("button");
        delbtn.innerText = "DELETE";
        delbtn.addEventListener("click", function(){
            deleteData(ele, idx);
        });

        let tr = document.createElement("tr");
        tr.append(ntd, itd, ctd, utd, btd, delbtn);
        appendDiv.append(tr);
    });
}

function deleteData(ele, idx){
    let newData = studentDataLS.filter(function (element, index){
        if(idx === index){
            let trash = JSON.parse(localStorage.getItem("studentDataTrash")) || [];
            trash.push(ele);
            localStorage.setItem("studentDataTrash", JSON.stringify(trash));
        }else{
            return idx !== index;
        }
    });
    localStorage.setItem("studentData",JSON.stringify(newData));
    window.location.reload()
    showData(studentDataLS);
}

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
    for(key in batchObj){
        pTag.append(key+" : "+batchObj[key]+" | ");
    }
}

calculateBatch(studentDataLS);
showData(studentDataLS);