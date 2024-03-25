// For in Loop 

var billgates = {shirt: true, shirtColor: "ofWhite", chosma: true, chosmaColor: "gray"}

for(let props in billgates) {
    console.log(props+": "+billgates[props]);
}