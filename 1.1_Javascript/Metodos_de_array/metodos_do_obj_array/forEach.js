//FOREACH - forEach(função(elem, ind, obj) [,thisObjeto])
/*Percorre os elementos do array e executa uma função callback*/

var arr = [21, 3, 18, "a", 290];

var msg = "";

function funcaoUm(elem, ind, obj){
    msg += "arr["+ ind +"] = " + elem + "\n";
}
arr.forEach(funcaoUm);
alert(msg);