//  Class -> networkSelector
let networkClassSelected = document.querySelectorAll('.networkSelector')
let networkClassData = {
    'A': {
        'ipAddress' : '192.168.0.1',
        'firstOctetRange' : '192-223',
        'hexIPAddress' : '192-223',
        'subnetMask' : '255.255.255.0',
        'wildcardMask' : '0.0.0.255',
        'subnetBits': [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ],
        'maskBits': [
            24,
            25,
            26,
            27,
            28,
            29,
            30
        ]
        ,
        'maximumSubnets': [
            1,
            2,
            4,
            8,
            16,
            32,
            64
        ]
        ,
        'hostPerSubnet': [
            254,
            126,
            62,
            30,
            14,
            6,
            2
        ],
        'hostAddressRange': '0.0.0.255',
        'subnetID': '192.168.0.0',
        'broadcastAddress': '192.168.0.255',
        'subnetBitmap': '110nnnnn.nnnnnnnn.nnnnnnnn.hhhhhhhh'
    }

}
// function selectNetworkClass() {
//     console.log(networkClassSelected)
// }

function changeSubNetworkClass(classNetwork) {
    if (!networkClassData[classNetwork]) return;

    let data = networkClassData[classNetwork];

    for (let key in data) {
        
        if (typeof data[key] == 'object') {

            document.getElementById(key).innerHTML = '';

            data[key].forEach((value) => {
                console.log(key, value)
                let optionElem = document.createElement('option');
                optionElem.value = value;
                optionElem.innerText = value;

                document.getElementById(key).appendChild(optionElem);
            
            })

        } else {

            document.getElementById(key).innerText = data[key];
            document.getElementById(key).value = data[key];

        }
    }

}

for (let i = 0; i < networkClassSelected.length; i++) {
    networkClassSelected[i].addEventListener('click', () => {        

        for (let j = 0; j < networkClassSelected.length; j++) {
            if (j != i) {
                networkClassSelected[j].checked = false;
            }
        }

        changeSubNetworkClass(networkClassSelected[i].value)

    }) 
}