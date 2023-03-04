let user = [
    {
        tendangnhap:"tuanlinh",
        pass:"1998",
        email:"tuanlinh@gmail.com"
    }
]
localStorage.setItem("user", JSON.stringify(user))
let userReturn = JSON.parse(localStorage.getItem('user'));
console.log(userReturn)
console.log(userReturn[0])
console.log(userReturn[0].tendangnhap)
let h1 = document.querySelector('.test')
console.log(h1);
function test(){
 h1.innerHTML = userReturn[0].tendangnhap
}