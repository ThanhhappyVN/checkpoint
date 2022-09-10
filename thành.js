var number = [4,5,6,7,8,9,10,11,12]
function findEven(number) {
    for(var l = 0; l < number.length; l++){
        var items = number[l]
        if(items%2==0){
            document.write(items);
        }
    }
}
findEven(number);