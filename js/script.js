let age = prompt('How old are you?');
if (age <= 17){
    confirm('Do you stady at school?');
}else if(age > 17 && age < 25){
    confirm('Do you stady at university?');
}else if(age >= 25 && age <60){
    confirm('Do you have a gob?');
}else{
    confirm('What are you doing?');
}

let DisplayProperty = prompt('What property?')
switch(DisplayProperty){
    case 'block':
        alert('Display-block');
        break;
    case 'flex':
        alert('display-flex');
        break;
    case 'grid':
        alert('display-grid');
        break;
    case 'inline':
        alert('display-inline');
        break;
    case 'none':
        alert('display-none');
        break;
    default:
        alert("Set 'display:inline-block;'");
}
    
let num = prompt('Please enter your number');
while(!Number(num)){
    num=prompt('Yor number is incorect,please enter corect number');    
}
alert(`Number ${num} times 12 equals: ${num *12}`);

for(let number=2;number < 52;number += 2){
    console.log(number)
}
