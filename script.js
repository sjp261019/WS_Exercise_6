// 6-1
document.write("Exercise 6-1:</br>")
let tag = "";
for (i=0; i<7; i++){
    tag += "#";
    document.write(tag + "</br>");
}

// 6-2
document.write("</br>Exercise 6-2:</br>")
let a = 0;
for (i=0; i<=100; i++){
    a++;
    if(a%3==0 &&a%5==0) {
        a = "FizzBuzz";
    } else if(a%3==0) {
        a = "Fizz";
    } else if(a%5==0) {
        a = "Buzz"
    } else {
        a = i+1;
    }
    document.write(a + "</br>");
}

// 6-3
document.write("</br>Exercise 6-3:</br>");
let space = "";
let size = 8;
for (i=0; i<size; i++){
    for(j=0; j<size; j++){
        if((i+j)%2==0){
            space += "&nbsp"
        } else {
            space += "#"
        }
    }
    space += "</br>"
}
document.write(space);
