var data = [
    { id: 1, Fullname: 'Alice', Email: 'alice@gmail.com', Department: 'Sales', age: 25, city: 'New York' },
    { id: 2, Fullname: 'Bob', Email: 'bob@gmail.com', Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 3, Fullname: 'Charlie', Email: 'charlie@gmail.com', Department: 'Accounting', age: 28, city: 'Chicago' },
    { id: 4, Fullname: 'David', Email: 'david@gmail.com', Department: 'HR', age: 22, city: 'Houston' },
    { id: 5, Fullname: 'Eve', Email: 'eve@gmail.com',Department: 'HR', age: 27, city: 'Phoenix' },
    { id: 6, Fullname: 'Maria', Email: 'maria@gmail.com',Department: 'Accounting', age: 25, city: 'New York' },
    { id: 7, Fullname: 'jalyn', Email: 'jalyn@gmail.com',Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 8, Fullname: 'salma', Email: 'salma@gmail.com', Department: 'HR',age: 28, city: 'Chicago' },
    { id: 9, Fullname: 'fermin', Email: 'fermin@gmail.com',Department: 'Accounting', age: 22, city: 'Houston' },
    { id: 10, Fullname: 'Eva', Email: 'eva@gmail.com', Department: 'developer', age: 20, city: 'Phoenix' },
    { id: 11, Fullname: 'Alice', Email: 'alice@gmail.com', Department: 'Sales', age: 25, city: 'New York' },
    { id: 12, Fullname: 'Bob', Email: 'bob@gmail.com', Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 13, Fullname: 'Charlie', Email: 'charlie@gmail.com', Department: 'Accounting', age: 28, city: 'Chicago' },
    { id: 14, Fullname: 'David', Email: 'david@gmail.com', Department: 'HR', age: 22, city: 'Houston' },
    { id: 15, Fullname: 'Eve', Email: 'eve@gmail.com',Department: 'HR', age: 27, city: 'Phoenix' },
    { id: 16, Fullname: 'Maria', Email: 'maria@gmail.com',Department: 'dataanalyst', age: 25, city: 'New York' },
    { id: 17, Fullname: 'jalyn', Email: 'jalyn@gmail.com',Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 18, Fullname: 'salma', Email: 'salma@gmail.com', Department: 'HR',age: 28, city: 'Chicago' },
    { id: 19, Fullname: 'fermin', Email: 'fermin@gmail.com',Department: 'Accounting', age: 22, city: 'Houston' },
    { id: 20, Fullname: 'Eva', Email: 'eva@gmail.com', Department: 'developer', age: 20, city: 'Phoenix' },
    { id: 21, Fullname: 'Alice', Email: 'alice@gmail.com', Department: 'dataanalyst', age: 25, city: 'New York' },
    { id: 22, Fullname: 'Bob', Email: 'bob@gmail.com', Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 23, Fullname: 'Charlie', Email: 'charlie@gmail.com', Department: 'Accounting', age: 28, city: 'Chicago' },
    { id: 24, Fullname: 'David', Email: 'david@gmail.com', Department: 'developer', age: 22, city: 'Houston' },
    { id: 25, Fullname: 'Eve', Email: 'eve@gmail.com',Department: 'HR', age: 27, city: 'Phoenix' },
    { id: 26, Fullname: 'Maria', Email: 'maria@gmail.com',Department: 'dataanalyst', age: 25, city: 'New York' },
    { id: 27, Fullname: 'jalyn', Email: 'jalyn@gmail.com',Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 28, Fullname: 'salma', Email: 'salma@gmail.com', Department: 'HR',age: 28, city: 'Chicago' },
    { id: 29, Fullname: 'fermin', Email: 'fermin@gmail.com',Department: 'Accounting', age: 22, city: 'Houston' },
    { id: 30, Fullname: 'Evavly', Email: 'eva@gmail.com', Department: 'developer', age: 20, city: 'Phoenix' },
    { id: 31, Fullname: 'Alice', Email: 'alice@gmail.com', Department: 'Sales', age: 25, city: 'New York' },
    { id: 32, Fullname: 'Bob', Email: 'bob@gmail.com', Department: 'Sales', age: 30, city: 'Los Angeles' },
    { id: 33, Fullname: 'Charlie', Email: 'charlie@gmail.com', Department: 'Accounting', age: 28, city: 'Chicago' },
    { id: 34, Fullname: 'wayne', Email: 'david@gmail.com', Department: 'HR', age: 22, city: 'Houston' },
    { id: 35, Fullname: 'Eve', Email: 'eve@gmail.com',Department: 'HR', age: 27, city: 'Phoenix' },
    { id: 36, Fullname: 'Marially', Email: 'maria@gmail.com',Department: 'Accounting', age: 25, city: 'New York' },
    { id: 37, Fullname: 'jenny', Email: 'jalyn@gmail.com',Department: 'software engineer', age: 30, city: 'Los Angeles' },
    { id: 38, Fullname: 'sirpa', Email: 'salma@gmail.com', Department: 'HR',age: 28, city: 'Chicago' },
    { id: 39, Fullname: 'fermin', Email: 'fermin@gmail.com',Department: 'Accounting', age: 22, city: 'Houston' },
    { id: 40, Fullname: 'Eveish', Email: 'eva@gmail.com', Department: 'developer', age: 20, city: 'Phoenix' },
 ];

 var numofRow = 5;

 function renderTable(items){
    return items.map(function(item){
        return `<tr>
        <td>${item.id}</td>
        <td>${item.Fullname}</td>
        <td>${item.Email}</td>
        <td>${item.Department}</td>
        <td>${item.age}</td>
        <td>${item.city}</td>
        <td>
        <div class="trrow">
        <button class="editBtn" data-set=${item.id}>Edit</button>
         <button class="deleteBtn" onclick="dleteRowByClass(this)">Delete</button>
        </div>
        </td>
        </tr>`;
    }).join('');
 }

 var tableBody = document.getElementById("tableBody");
 tableBody.innerHTML = renderTable(data);

 function editingTable(){
 document.querySelector("#tableBody").addEventListener('click', function(event){
    console.log('event.target.classL', event.target.dataset.set);
    var editbtnid = event.target.dataset.set;
    var editableobj = data.filter(function(item){
    return  item.id == editbtnid; ///find the object to edit---
    })
    console.log(editableobj[0]);
    if (event.target.classList.contains('editBtn')){
        var row = event.target.closest('tr');
        var cells = row.querySelectorAll('td');
       if(event.target.innerText === 'Edit'){
        cells.forEach(function(cell){
            // console.log(cell);
            cell.contentEditable = true;
        });
        event.target.innerText = 'save';
       }else{
           cells.forEach(function(cell){
            cell.contentEditable = false;
           });
           event.target.innerText = 'Edit';
       }
    }
 });
}
editingTable();

///dleteRow---

 function dleteRowByClass(button){
    alert('delete row..?');
    var row = button.closest("tr");
    var rowIndex = Array.from(row.parentElement.children).indexOf(row);
     data.splice(rowIndex, 1);
     console.log('data after deletion:', data);
     
     row.remove();
     renderPagination(5);
 }

function filterTable(){
    var searchText = document.getElementById("filterinput").value.toLowerCase();
    var filterData = data.filter(function(item){
        return(
            item.id.toString().includes(searchText) ||
            item.Fullname.toLowerCase().includes(searchText) ||
            item.age.toString().includes(searchText)
        );
    })
    tableBody.innerHTML = renderTable(filterData);
}
document.getElementById('filterinput').addEventListener("keyup", filterTable);///

document.querySelector('#Desirableinput').addEventListener('change', function(event){
    var itemperpage = event.target.value;
    var sliceddata = data.slice(0, itemperpage);
    renderPagination(itemperpage);
});
 function renderPagination( itemPerPage){
    var numberofPages = Math.ceil(data.length/ itemPerPage);
    var pages = Array.from({length:numberofPages},function(item, index){
        return index + 1;
    });

    var pageTpl = pages.map(function(button){
        return `<button onclick="changePage(${button}, ${ itemPerPage})">${button}</button>`;
    }).join('');
    document.querySelector('#pagination').innerHTML = pageTpl;
}

function changePage(pageNumber,  itemPerPage){
    var startIndex = (pageNumber -1)*  itemPerPage;
    var endIndex = pageNumber *  itemPerPage;
    var slicedData = data.slice(startIndex, endIndex);
    tableBody.innerHTML = renderTable(slicedData);
}



function sortTable(order, column){
    data.sort(function(a, b){
        if(column=== 'id'){
            return order=== 'asc' ? a.id - b.id : b.id -a.id;
        }else if (column === 'Fullname'){
            return order === 'asc' ? a.Fullname.localeCompare(b.Fullname) : b.Fullname.localeCompare(a.Fullname);
        }else if (column === 'Email'){
            return order === 'asc' ? a.Email.localeCompare(b.Email) : b.Email.localeCompare(a.Email);
        }else if (column === 'Department'){
            return order === 'asc' ? a.Department.localeCompare(b.Department) : b.Department.localeCompare(a.Department) 
        }else if (column === 'age'){
            return order === 'asc' ? a.age - b.age : b.age - a.age;
        }else if(column === 'city'){
            return order === 'asc' ? a.city.localeCompare(b.city) : b.city.localeCompare(a.city);
        }
    });
    tableBody .innerHTML = renderTable(data);
}


function addRow(){
    var newRow = {
        id : data.length +1,
        Fullname : '',
        Email : '',
        Department : '',
        age : '',
        city : ''
    };
     data.unshift(newRow);
     tableBody.innerHTML = renderTable(data);
}
 document.querySelector('.addbtn').addEventListener('click', function(){
    addRow();
 })

document.getElementById('sortAscBtnId').addEventListener('click', function(){
  sortTable('asc',  'id');
});
document.getElementById('sortDescBtnId').addEventListener('click', function(){
    sortTable('desc',  'id');
});
 document.getElementById('sortAscBtnFullname').addEventListener('click', function(){
    sortTable ('asc',  'Fullname');
 })

 document.getElementById('sortDescBtnFullname').addEventListener('click', function(){
    sortTable ('desc',  'Fullname');
 })

 document.getElementById('sortAscBtnEmail').addEventListener('click', function () {
    sortTable('asc', 'Email');
});
document.getElementById('sortDescBtnEmail').addEventListener('click', function () {
    sortTable('desc', 'Email');
});

document.getElementById('sortAscBtnDepartment').addEventListener('click', function () {
    sortTable('asc', 'Department');
});
document.getElementById('sortDescBtnDepartment').addEventListener('click', function () {
    sortTable('desc', 'Department');
});

document.getElementById('sortAscBtnAge').addEventListener('click', function () {
    sortTable('asc', 'age');
});
document.getElementById('sortDescBtnAge').addEventListener('click', function () {
    sortTable('desc', 'age');
});

document.getElementById('sortAscBtnCity').addEventListener('click', function () {
    sortTable('asc', 'city');
});
document.getElementById('sortDescBtnCity').addEventListener('click', function () {
    sortTable('desc', 'city');
});
