const age = parseInt(prompt("How old are you?"))
//자바스크립트의 실행을 일시적으로 멈춤. 잘안씀 못생기고 별로 안좋아서...

console.log(isNaN(age))

if(isNaN(age)){
    console.log("햄스터")
}else if(age < 18){
    console.log("진짠가요")
}else {
    console.log("환영합니다")
}

if((a && b) || (c && d)){
    console.log("이렇게도 할수있구나~")
}