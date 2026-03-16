

let helloDone = document.getElementsByClassName("hello")[0]

//lấy giá trị ô input
let getInput = document.getElementsByClassName("input")[0]

//lấy giá trị ô submit
let subInput = document.getElementsByClassName("submit")[0]

subInput.addEventListener("click", () => {
    let valueInput = getInput.value
    
    //lưu trên local
    localStorage.setItem("name", valueInput)
    //in ra màn hình
    helloDone.innerHTML = `Xin chào bạn ${valueInput} !`;
})


