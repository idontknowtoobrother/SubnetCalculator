//  Class -> networkSelector
let networkClassSelected = document.querySelectorAll('.networkSelector')

// function selectNetworkClass() {
//     console.log(networkClassSelected)
// }

for (let i = 0; i < networkClassSelected.length; i++) {
    networkClassSelected[i].addEventListener('click', () => {

        for (let j = 0; j < networkClassSelected.length; j++) {
            if (j != i) {
                networkClassSelected[j].checked = false;
            }
        }
        
    }) 
}