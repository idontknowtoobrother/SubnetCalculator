//  Class -> networkSelector
let networkClassSelected = document.querySelectorAll('.networkSelector')

let networkClassData = { // Data of A, B, C Network Class
    'A': {
        'ipAddress': '10.0.0.1',
        'firstOctetRange': '1 - 126',
        'hexIPAddress': '0A.00.00.01',
        'subnetMask': [
            '255.0.0.0',
            '255.128.0.0',
            '255.192.0.0',
            '255.224.0.0',
            '255.240.0.0',
            '255.248.0.0',
            '255.252.0.0',
            '255.254.0.0',
            '255.255.0.0',
            '255.255.128.0',
            '255.255.192.0',
            '255.255.224.0',
            '255.255.240.0',
            '255.255.248.0',
            '255.255.252.0',
            '255.255.254.0',
            '255.255.255.0',
            '255.255.255.128',
            '255.255.255.192',
            '255.255.255.224',
            '255.255.255.240',
            '255.255.255.248',
            '255.255.255.252'
        ],
        'wildcardMask': '0.255.255.255',
        'subnetBits': [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22
        ],
        'maskBits': [
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
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
            64,
            128,
            256,
            512,
            1024,
            2048,
            4096,
            8192,
            16384,
            32768,
            65536,
            131072,
            262144,
            524288,
            1048576,
            2097152,
            4194304
        ]
        ,
        'hostPerSubnet': [
            16777214,
            8388606,
            4194302,
            2097150,
            1048574,
            524286,
            262142,
            131070,
            65534,
            32766,
            16382,
            8190,
            4094,
            2046,
            1022,
            510,
            254,
            126,
            62,
            30,
            14,
            6,
            2,
        ],
        'hostAddressRange': '10.0.0.1 - 10.255.255.254',
        'subnetID': '10.0.0.0',
        'broadcastAddress': '10.255.255.255',
        'subnetBitmap': '0nnnnnnn.hhhhhhhh.hhhhhhhh.hhhhhhhh'
    },
    'B': {
        'ipAddress' : '172.16.0.1',
        'firstOctetRange' : '128 - 191',
        'hexIPAddress' : 'AC.10.00.01',
        'subnetMask': [
            '255.255.0.0' , 
		    '255.255.128.0' , 
		    '255.255.192.0' , 
		    '255.255.224.0' , 
		    '255.255.240.0' , 
		    '255.255.248.0' , 
		    '255.255.252.0' , 
		    '255.255.254.0' , 
		    '255.255.255.0' , 
		    '255.255.255.128' , 
		    '255.255.255.192' , 
		    '255.255.255.224' , 
		    '255.255.255.240' , 
		    '255.255.255.248' , 
		    '255.255.255.252'
        ],
        'wildcardMask' : '0.0.255.255',
        'subnetBits': [
            0,
		    1,
		    2,
		    3,
		    4,
		    5,
		    6,
		    7,
		    8,
		    9,
		    10,
		    11,
		    12,
		    13,
		    14
        ],
        'maskBits': [
            16 ,
            17 ,
            18 ,
            19 ,
            20 ,
            21 ,
            22 ,
            23 ,
            24 ,
            25 ,
            26 ,
            27 ,
            28 ,
            29 ,
            30 
        ]
        ,
        'maximumSubnets': [
            1 ,
            2 ,
            4 ,
            8 ,
            16 ,
            32 ,
            64 ,
            128 ,
            256 ,
            512 ,
            1024 ,
            2048 ,
            4096 ,
            8192 ,
            16384
        ]
        ,
        'hostPerSubnet': [
            65534 ,
            32766 ,
            16382 ,
            8190 ,
            4094 ,
            2046 ,
            1022 ,
            510 ,
            254 ,
            126 ,
            62 ,
            30 ,
            14 ,
            6 ,
            2
        ],
        'hostAddressRange': '172.16.0.1 - 172.16.255.254',
        'subnetID': '172.16.0.0',
        'broadcastAddress': '172.16.255.255',
        'subnetBitmap': '10nnnnnn.nnnnnnnn.hhhhhhhh.hhhhhhhh'
    },
    'C': {
        'ipAddress' : '192.168.0.1' ,
        'firstOctetRange' : '192 - 223' ,
        'hexIPAddress' : 'C0.A8.00.01' ,
        'subnetMask': [
            '255.255.255.0' ,
            '255.255.255.128' ,
            '255.255.255.192' ,
            '255.255.255.224' ,
            '255.255.255.240' ,
            '255.255.255.248' ,
            '255.255.255.252' 
        ],
        'wildcardMask' : '0.0.0.255',
        'subnetBits': [
            0 ,
            1 ,
            2 ,
            3 ,
            4 ,
            5 ,
            6 
        ],
        'maskBits': [
            24 , 
            25 , 
            26 , 
            27 , 
            28 , 
            29 , 
            30 
        ]
        ,
        'maximumSubnets': [
            1 ,
            2 ,
            4 ,
            8 ,
            16 ,
            32 ,
            64
        ]
        ,
        'hostPerSubnet': [
            254 ,
            126 ,
            62 ,
            30 ,
            14 ,
            6 ,
            2
        ],
        'hostAddressRange': '192.168.0.1 - 192.168.0.254',
        'subnetID': '192.168.0.0',
        'broadcastAddress': '192.168.0.255',
        'subnetBitmap': '110nnnnn.nnnnnnnn.nnnnnnnn.hhhhhhhh'
    }

}


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