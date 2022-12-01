// create an empty array to use when is first time

let anyTable=localStorage.getItem('table');
if (!anyTable){
    let table=[];
    localStorage.setItem('table',JSON.stringify(table));
}
// this is a logic to show a list with data saved
let list=document.getElementById('list');
console.log(list);
let tableList = JSON.parse(localStorage.getItem('table'));
let items= tableList.map((event,index) =>{
    return `<li>${event.name}
            <button onclick='deleteUser(${index})'>Delete</button>
            </li>`
});
// TODO check why is not returnig on the list
list.innerHTML = items.join(' ');
document.body.appendChild(list);
// this function create a new table on the json list
function newTable(){
    let inputName=document.getElementById('inputName').value;
    let savedTable= JSON.parse(localStorage.getItem('table'));
    const id = getNextId(savedTable);
    savedTable.push({name: inputName,id:id});
    localStorage.setItem('table',JSON.stringify(savedTable));
    fillTable();
    
}
function deleteUser(index){
    // let inputName = document.getElementById('inputName').value;
    // console.log('user to delete: '+inputName);
    let user2delete = JSON.parse(localStorage.getItem('table'));
    // console.log('los usuarios son: '+user2delete);
    // user2delete.substring(inputName);
    // console.log('los que quedaron son: '+user2delete);
    user2delete.splice(index,1)
    localStorage.setItem('table',JSON.stringify(user2delete)); 
    fillTable();
}
function getNextId(storage) {
    if (storage.length === 0) {
      return 1;
    }
    const orderedStorage = storage.sort((a, b) => a - b);
    return orderedStorage[orderedStorage.length - 1].id + 1
  }
  function fillTable(){
    let list=document.getElementById('list');
    list.innerHTML = '';
    let tableList = JSON.parse(localStorage.getItem('table'));
    let items= tableList.map((event,index) =>{
    return `<li>${event.name}
            <button onclick='deleteUser(${index})'>Delete</button>
            </li>`
    });
    list.innerHTML = items.join(' ');
  }