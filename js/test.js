/*


*/

this.p = document.getElementById("test");
this.person = {
    id: "",
    name: ""
};

person.id = "41";
person.name = "Brad";
p.innerHTML = personDetails(person);

function personDetails(person, event) {
    return person.name + " " + person.id;
}