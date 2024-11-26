let liElements = document.querySelectorAll('.tabs li');
let tabsLi =Array.from(liElements);

let divElements = document.querySelectorAll('.content > div');
let tabsDivs =Array.from(divElements);

// console.log(tabsLi);
// console.log(tabsDivs);


tabsLi.forEach((ele)=>{
        ele.addEventListener("click",function(event){
                tabsLi.forEach((element)=>{
                        element.classList.remove("active");
                });
                event.currentTarget.classList.add("active");

                tabsDivs.forEach((ele)=>{
                        ele.style.display="none";
                });
              document.querySelector(event.currentTarget.dataset.cont).style.display="block";
                
        });
})