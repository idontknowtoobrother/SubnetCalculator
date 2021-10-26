let networkClassSelected = document.querySelectorAll('.networkSelector') // @ Class networkSelector

let calculateData = { // @ Result Data when calculated
    'classNet': null,
    'ipAddress': null,
    'firstOctetRange': null,
    'hexIPAddress': null,
    'subnetMask': null,
    'wildcardMask': null,
    'subnetBits': null,
    'maskBits': null,
    'maximumSubnets': null,
    'hostPerSubnet': null,
    'hostAddressRange': null,
    'subnetID': null,
    'broadcastAddress': null,
    'subnetBitmap': null
}

let networkClassData = { // @ Data of A, B, C Network Class
    'A': {
        'ipAddress': [10, 0, 0, 1],
        'firstOctetRange': '1 - 126',
        'hexIPAddress': '0A.00.00.01',
        'subnetMask': [
            [255, 0, 0, 0],
            [255, 128, 0, 0],
            [255, 192, 0, 0],
            [255, 224, 0, 0],
            [255, 240, 0, 0],
            [255, 248, 0, 0],
            [255, 252, 0, 0],
            [255, 254, 0, 0],
            [255, 255, 0, 0],
            [255, 255, 128, 0],
            [255, 255, 192, 0],
            [255, 255, 224, 0],
            [255, 255, 240, 0],
            [255, 255, 248, 0],
            [255, 255, 252, 0],
            [255, 255, 254, 0],
            [255, 255, 255, 0],
            [255, 255, 255, 128],
            [255, 255, 255, 192],
            [255, 255, 255, 224],
            [255, 255, 255, 240],
            [255, 255, 255, 248],
            [255, 255, 255, 252]
        ],
        'wildcardMask': [0, 255, 255, 255],
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
        ],
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
        ],
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
        'subnetID': [10, 0, 0, 0],
        'broadcastAddress': [10, 255, 255, 255],
        'subnetBitmap': '0nnnnnnn.hhhhhhhh.hhhhhhhh.hhhhhhhh'
    },
    'B': {
        'ipAddress': [172, 16, 0, 1],
        'firstOctetRange': '128 - 191',
        'hexIPAddress': 'AC.10.00.01',
        'subnetMask': [
            [255, 255, 0, 0],
            [255, 255, 128, 0],
            [255, 255, 192, 0],
            [255, 255, 224, 0],
            [255, 255, 240, 0],
            [255, 255, 248, 0],
            [255, 255, 252, 0],
            [255, 255, 254, 0],
            [255, 255, 255, 0],
            [255, 255, 255, 128],
            [255, 255, 255, 192],
            [255, 255, 255, 224],
            [255, 255, 255, 240],
            [255, 255, 255, 248],
            [255, 255, 255, 252]
        ],
        'wildcardMask': [0, 0, 255, 255],
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
        ],
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
            16384
        ],
        'hostPerSubnet': [
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
            2
        ],
        'hostAddressRange': '172.16.0.1 - 172.16.255.254',
        'subnetID': [172, 16, 0, 0],
        'broadcastAddress': [172, 16, 255, 255],
        'subnetBitmap': '10nnnnnn.nnnnnnnn.hhhhhhhh.hhhhhhhh'
    },
    'C': {
        'ipAddress': [192, 168, 0, 1],
        'firstOctetRange': '192 - 223',
        'hexIPAddress': 'C0.A8.00.01',
        'subnetMask': [
            [255, 255, 255, 0],
            [255, 255, 255, 128],
            [255, 255, 255, 192],
            [255, 255, 255, 224],
            [255, 255, 255, 240],
            [255, 255, 255, 248],
            [255, 255, 255, 252]
        ],
        'wildcardMask': [0, 0, 0, 255],
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
        ],
        'maximumSubnets': [
            1,
            2,
            4,
            8,
            16,
            32,
            64
        ],
        'hostPerSubnet': [
            254,
            126,
            62,
            30,
            14,
            6,
            2
        ],
        'hostAddressRange': '192.168.0.1 - 192.168.0.254',
        'subnetID': [192, 168, 0, 0],
        'broadcastAddress': [192, 168, 0, 255],
        'subnetBitmap': '110nnnnn.nnnnnnnn.nnnnnnnn.hhhhhhhh'
    }

}

function calculateSubNetwork() { // For calculate SubNetwork 

    calculateData['ipAddress'] = convertStrIP(document.getElementById('ipAddress').value);
    calculateData['subnetMask'] = convertStrIP(document.getElementById('subnetMask').value);
    calculateData['hexIPAddress'] = getHexIPAddress(calculateData['ipAddress']);
    calculateData['maskBits'] = getMaskBits(calculateData['subnetMask']);
    calculateData['wildcardMask'] = getWildcardMask(calculateData['subnetMask']);
    
    calculateData['subnetBits'] = getSubNetBits(calculateData['classNet'], calculateData['maskBits']);
    calculateData['maximumSubnets'] = getMaximumSubnets(calculateData['subnetBits']);
    calculateData['hostPerSubnet'] = getHostPerSubNets(calculateData['maskBits']);
    calculateData['subnetID'] = getSubNetID(calculateData['ipAddress'], calculateData['subnetMask']);
    calculateData['broadcastAddress'] = getBroadcastAddress(calculateData['ipAddress'], calculateData['wildcardMask']);
    calculateData['hostAddressRange'] = getHostAddressRange(calculateData['ipAddress'], calculateData['subnetMask'], calculateData['wildcardMask']);
    calculateData['subnetBitmap'] = getSubNetBitmap(calculateData['ipAddress'], calculateData['subnetMask']);


    document.getElementById('hexIPAddress').innerText = calculateData['hexIPAddress'].search('NAN') > 0 ? networkClassData[calculateData['classNet']]['hexIPAddress'] : calculateData['hexIPAddress'];
    
    document.getElementById('subnetMask').value = getStringIPAddress(calculateData['subnetMask']);

    document.getElementById('maskBits').value = calculateData['maskBits'];

    document.getElementById('wildcardMask').innerText = getStringIPAddress(calculateData['wildcardMask']);

    document.getElementById('subnetBits').value = calculateData['subnetBits'];

    document.getElementById('maximumSubnets').value = calculateData['maximumSubnets'];

    document.getElementById('hostPerSubnet').value = calculateData['hostPerSubnet'];

    document.getElementById('subnetID').innerText = getStringIPAddress(calculateData['subnetID']);

    document.getElementById('broadcastAddress').innerText = getStringIPAddress(calculateData['broadcastAddress']);

    document.getElementById('hostAddressRange').innerText = getStringIPAddress(calculateData['hostAddressRange'][0]) + ' - ' + getStringIPAddress(calculateData['hostAddressRange'][1]);

    document.getElementById('subnetBitmap').innerHTML = getHtmlLabelSubNetBitmap(calculateData['subnetBitmap']);

}


function octetToDecimal(arrays) {
    let d = 0;
    d = d + parseInt(arrays[0]) * 16777216;
    d = d + arrays[1] * 65536;
    d = d + arrays[2] * 256;
    d = d + arrays[3];
    return d;
}

function decimalToOctet(decimals) {
    var zeros = "00000000000000000000000000000000";
    var b = decimals.toString(2);
    var b = zeros.substring(0, 32 - b.length) + b;
    var a = [
        parseInt(b.substring(0, 8), 2), (decimals & 16711680) / 65536, (decimals & 65280) / 256, (decimals & 255)
    ];
    return a;
}

function getHtmlLabelSubNetBitmap(strSubNetBitMap) {

    var htmlCode = '';

    for (var i = 0; i < strSubNetBitMap.length; i++) {

        if (strSubNetBitMap[i] == '.') {

            htmlCode += '<span style="color:black";>' + strSubNetBitMap[i] + '</span>';

        } else if (strSubNetBitMap[i] == '0' || strSubNetBitMap[i] == 'n') {

            htmlCode += '<span style="color:red";>' + strSubNetBitMap[i];

        } else if (strSubNetBitMap[i] == 's') {

            htmlCode += '<span style="color:yellow";>' + strSubNetBitMap[i];

        } else if (strSubNetBitMap[i] == 'h') {

            htmlCode += '<span style="color:green";>' + strSubNetBitMap[i];

        }

    }

    return htmlCode;

}

function getSubNetBitmap(ipAddress, subnetMask) {
    var map = "";
    var i = 0;
    var cidr = getMaskBits(subnetMask);

    if (ipAddress[0] >= 1 && ipAddress[0] <= 126) {

        //class A
        map = "0nnnnnnn";
        i = map.length;

    } else if (ipAddress[0] >= 128 && ipAddress[0] <= 191) {

        //class B
        map = "10nnnnnn.nnnnnnnn";
        i = map.length - 1;

    } else if (ipAddress[0] >= 192 && ipAddress[0] <= 223) {

        //class C
        map = "110nnnnn.nnnnnnnn.nnnnnnnn";
        i = map.length - 2;

    }

    // subnet bits
    while (i < cidr) {
        if (i % 8 == 0) map += ".";
        map += "s";
        i++;
    }

    // host bits
    while (i < 32) {
        if (i % 8 == 0) map += ".";
        map += "h";
        i++;
    }

    return map;
}

function getHostAddressRange(ipAddress, subnetMask, wildcardMask) {

    var subnetid = getSubNetID(ipAddress, subnetMask);
    var start = octetToDecimal(subnetid);
    start = start + 1;
    start = decimalToOctet(start);


    var broadcast = new getBroadcastAddress(ipAddress, wildcardMask);
    var stop = octetToDecimal(broadcast);
    stop = stop - 1;
    stop = decimalToOctet(stop)


    return [start, stop];
}

function getBroadcastAddress(ipAddress, wildcardMask) {

    var a = [];

    for (var i = 0; i < 4; i++) {
        a[i] = ipAddress[i] | wildcardMask[i];
    }

    return a;
}

function getSubNetID(ipAddress, subnetMask) {

    var a = [];

    for (var i = 0; i < 4; i++) {
        a[i] = ipAddress[i] & subnetMask[i];
    }

    return a;
}

function getMaximumSubnets(subNetBits) {
    return Math.pow(2, subNetBits)
}

function getHostPerSubNets(maskBits) {
    return Math.pow(2, 32 - maskBits) - 2;
}

function getSubNetBits(classNet, maskBits) {

    return classNet == 'A' ? maskBits - 8 :
        classNet == 'B' ? maskBits - 16 :
        maskBits - 24;
}


function getMaskBits(subnetMask) {

    let mask = octetToDecimal(subnetMask);

    mask = mask.toString(2);

    return mask.indexOf(0);
}

function getWildcardMask(subnetMask) {
    let a = [];

    for (let i = 0; i < subnetMask.length; i++) {
        a[i] = 255 - subnetMask[i];
    }

    return a;
}


function getStringIPAddress(arr) {
    let ipLabel = '';
    for (let i = 0; i < arr.length; i++) {
        ipLabel += i == 0 ? arr[i] : '.' + arr[i];
    }
    return ipLabel;
}


function convertStrIP(strIP) {

    let arrIP = [];
    let numberSet = '';

    for (let i = 0; i < strIP.length; i++) {
        if (strIP[i] != '.') {
            numberSet += strIP[i];
        } else {
            arrIP[arrIP.length] = parseInt(numberSet);
            numberSet = '';
        }

    }

    arrIP[arrIP.length] = parseInt(numberSet);

    return arrIP;
}

function getHexIPAddress(ipAddress) {

    var hexIPAddress = '';

    for (var i = 0; i < ipAddress.length; i++) {
        var storeStr = ipAddress[i].toString(16);

        if (storeStr.length - 1 < 1) {
            storeStr = '0' + storeStr;
        }

        if (i == ipAddress.length - 1) {
            hexIPAddress += storeStr.toUpperCase();
        } else {
            hexIPAddress += storeStr.toUpperCase() + '.';
        }

    }



    return hexIPAddress;
}

function changeSubNetworkClass(classNetwork, selectedPos) {

    // @ Radio changed
    networkClassSelected[selectedPos].checked = true;
    for (let j = 0; j < networkClassSelected.length; j++) {
        if (j != selectedPos) {
            networkClassSelected[j].checked = false;
        }
    }

    if (!networkClassData[classNetwork]) return;

    let data = networkClassData[classNetwork];

    for (let key in data) {

        if (key == 'wildcardMask') {

            document.getElementById(key).innerText = getStringIPAddress(data[key]);
            document.getElementById(key).value = getStringIPAddress(data[key]);

        } else if (key == 'ipAddress' || key == 'subnetID' || key == 'broadcastAddress') {

            document.getElementById(key).value = getStringIPAddress(data[key]);

        } else if (key == 'subnetMask') {

            document.getElementById(key).innerHTML = '';


            for (let i = 0; i < data[key].length; i++) {

                let optionElem = document.createElement('option');

                optionElem.innerText = getStringIPAddress(data[key][i]);
                optionElem.value = getStringIPAddress(data[key][i]);

                document.getElementById(key).appendChild(optionElem);
            }

        } else if (typeof data[key] == 'object') {

            document.getElementById(key).innerHTML = '';

            data[key].forEach((value) => {

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

    calculateData['classNet'] = classNetwork;

    calculateSubNetwork();

}


// Event Handler of HTML


for (let i = 0; i < networkClassSelected.length; i++) {

    networkClassSelected[i].addEventListener('click', () => {
        changeSubNetworkClass(networkClassSelected[i].value, i)
    })

}


document.getElementById('ipAddress').addEventListener('onchange', calculateSubNetwork);

document.addEventListener('DOMContentLoaded', () => {
    changeSubNetworkClass('A', 0);
});