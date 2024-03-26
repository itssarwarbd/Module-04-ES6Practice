// SET
var mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
mySet.add("Pakistan");
mySet.add("Thailand");
mySet.add("Bhutan");
mySet.add("India");

//-----------==========mySet.clear(); Set method-----=
//-----------==========mySet.delete("India"); Set method-----=
//-----------==========console.log(mySet.size); Set method-----=
//-----------==========console.log(mySet.values()); Set method-----=

/// Has Method

if(mySet.has("India")) {
    console.log("Yes");
}else {
    console.log("No");
}