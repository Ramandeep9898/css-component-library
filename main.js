 const showCode = document.querySelectorAll(".show-code");
 const codeSnippet = document.querySelector(".code-snippets");
const barBtn = document.querySelector(".bar-icon");
const phoneNavbar = document.querySelector(".phone-nav-body");

const showCodeBtnArr = Array.from(showCode);

showCodeBtnArr.forEach((btn)=>{
    btn.addEventListener("click", ()=>{    
        if(codeSnippet.style.display === "none"){
            codeSnippet.style.display = "block"
        }else{
            codeSnippet.style.display = "none"
        }
    })
})


console.log(phoneNavbar);
barBtn.addEventListener("click",()=>{
    if(phoneNavbar.style.display === "none"){
        phoneNavbar.style.display = "flex"
    }else{
        phoneNavbar.style.display = "none"
    }
})
// showCode.addEventListener("click", ()=>{    
//     if(codeSnippet.style.display === "none"){
//         codeSnippet.style.display = "block"
//     }else{
//         codeSnippet.style.display = "none"
//     }
// })
