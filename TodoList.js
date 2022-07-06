let ulTag = document.querySelector("wrapper").querySelector(".TodoList").querySelector(".list").querySelector(".items");
let liTag = document.createElement('li');
let liText = document.createTextNode('');

let add = function add(first="") {
    liTag = document.createElement('li');
    liText = document.createTextNode(first);

    liTag.appendChild(liText);
    ulTag.appendChild(liTag);

    //리턴 없어도 0이나 true 넣어주기
    return true;
}

let remove = function remove(first="") {
    ulTag.lastElementChild.remove();
    //console.log(ulTag.children[0]);

    //리턴 없어도 0이나 true 넣어주기
    return true;
}

let addEvent = document.querySelector("wrapper").querySelector(".TodoList").querySelector(".inputwindow").querySelector("#add");
addEvent.addEventListener('click', add)

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove)