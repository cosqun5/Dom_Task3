const InputName = document.getElementById("namee");
const InputSurname = document.getElementById("surname");
const InputAge = document.getElementById("age");
const selectNationality = document.getElementById("nationality");
const selectDeveloper = document.getElementById("developer");
const Tbody= document.getElementById("tbody");
const Button = document.getElementById("btn");
let users =[];
let id = 1;
let innerHTML = "";
function addUser(name,surname,age,nationality,developer){
    let newUser ={
        id: id,
        name: name,
        surname: surname,
        age: age,
        nationality: nationality,
        developer: developer,

    };
    id++;
    users.push(newUser);
    renderList(users);
}
function renderList(users){
    innerHTML="";
    for (let i = 0; i < users.length; i++) {
        innerHTML +=`
             <tr>
             <th scope="row">${users[i].id}</th>
             <td>${users[i].name}</td>
             <td>${users[i].surname}</td>
             <td>${users[i].age}</td>
             <td>${users[i].nationality}</td>
             <td>${users[i].developer}</td>
             <td><button type="button" class="btn btn-danger" onclick="deleteUser(${users[i].id})">Delete</button></td>
             </tr>
             `;
             namee.value= "";
             surname.value="";
             age.value="";
             Tbody.innerHTML= innerHTML;
    };
}
Button.onclick=(e)=>{
    e.preventDefault();
    addUser(namee.value,surname.value,age.value,nationality.value,developer.value)
};

function deleteUser(id){
    const target = users.find(user=>user.id==id);
    const indexOfTarget = users.indexOf(target);
    users.splice(indexOfTarget,1);
    renderList(users);

};
