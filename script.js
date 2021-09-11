let teamMember = function (name = "abcd", ID = "abcd", teamID = 000) {
    this.name = name;
    this.ID = ID;
    this.teamID = teamID;
}
let Team = function (name, ID)
{
    this.name = name;
    this.ID = ID;
    this.TeamMember;
    this.addMemeber = function () {
        this.TeamMember.push(teamMember())
    }
}

let user = [];

function createUser() {
    Name = document.getElementById('Name').value;
    ID = document.getElementById('ID').value;
    user.push(new teamMember(Name, ID));
    console.log(user[0]);
    localStorage.setItem(ID, JSON.stringify(user.pop()));
}