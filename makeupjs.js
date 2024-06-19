let sortHeader = document.querySelector(".sort-header");
console.log(sortHeader);

let flag = false ;

sortHeader.addEventListener("click" , handleDisplaySort);

function handleDisplaySort(event)
{
    flag = !flag ;
    const ulSortPrice = document.querySelector(".sort-price");
    const drop = document.querySelector(".drop");
    if(flag)
        {
            ulSortPrice.style.display = "block";
            ulSortPrice.style.opacity = "1";
            drop.style.rotate = "-180deg";
        }
        else{
            
            ulSortPrice.style.display = "none";
            ulSortPrice.style.opacity = "0";
            drop.style.rotate = "0deg";
    }
}