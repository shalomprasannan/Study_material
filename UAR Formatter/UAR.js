var allData=[];
var outData=[];

function addData(){
    entry={};
    hostname=document.getElementById("hostname").value
    users=document.getElementById("users").value
    output=document.getElementById("output")
    entry.hostname=hostname
    entry.users=users
    allData.push(entry)
    for (var i in allData){
        allData[i].users
    }
}

