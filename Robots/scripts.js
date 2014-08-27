var app = {};
app.robots = [];

app.Robot = function (model, manufacturer, type) {
    this.model = model,
    this.manufacturer = manufacturer,
    this.type = type
}
app.Robot.prototype.editing = false;

app.create = function () {
    var model = document.getElementById("model").value;
    var manufacturer = document.getElementById("manufacturer").value;
    var type = document.getElementById("type").value;


    app.robots.push(new app.Robot(model, manufacturer, type));
    document.getElementById("model").value = "";
    document.getElementById("manufacturer").value = "";
    document.getElementById("type").value = "";

    app.read();

};
app.read = function () {
    var holder = "";
    for (var i in app.robots) {
        holder += "<tr>";
        if (app.robots[i].editing) {
            holder += "<td><input id='edit-model' type='text' class='form-control' value='" + app.robots[i].model + "'></td>";
            holder += "<td><input id='edit-manufacturer' type='text' class='form-control' value='" + app.robots[i].manufacturer + "'></td>";
            holder += "<td><input id='edit-type' type='text' class='form-control' value='" + app.robots[i].type + "'></td>";
            holder += "<td><button class='btn-success btn' onclick='app.save(" + i + ")'>Save</button>"

        } else {
            holder += "<td>" + app.robots[i].model + "</td>";
            holder += "<td>" + app.robots[i].manufacturer + "</td>";
            holder += "<td>" + app.robots[i].type + "</td>";
            holder += "<td><button class='btn-warning btn' onclick='app.edit(" + i + ")'>Edit</button>"

        }
            holder += "&nbsp<button class='btn-danger btn' onclick='app.delete(" + i + ")'>Delete</button></td>"
            holder += "</tr>";
        
        
    }
    document.getElementById("output").innerHTML = holder;
    
    
};
app.edit = function (index) {
    for (var i in app.robots) {
        delete app.robots[i].editing;
    }

    app.robots[index].editing = true;
    app.read();

};
app.save = function (index) {
    var model = document.getElementById("edit-model").value;
    var manufacturer = document.getElementById("edit-manufacturer").value;
    var type = document.getElementById("edit-type").value;

    app.robots[index].model = model;
    app.robots[index].manufacturer = manufacturer;
    app.robots[index].type = type;
    
    delete app.robots[index].editing;
    app.read();

};


app.delete = function (index) {
    app.robots.splice(index, 1);
    app.read();

};