function convertBinToDec() {
    const binary = document.querySelector('#binaryInput').value
    if (binary == "") return alert('Please enter a binary number 001001!')
    binary.split('').map((element) => {
        if (element !== '0' && element !=='1') return alert('Please enter 0 or 1!')
    })

    const decimal = parseInt(binary, 2)
    document.querySelector('#decimalOutput').value = decimal
    return true
}

function convertDecToBin() {
    const decimal12 = document.querySelector('#decimalInput').value
    if ( decimal12 === ' ' || typeof Number(decimal12) !== 'number') {
        return alert('Please enter a binary number 586!')
    }

    const binary2 = (decimal12 >>> 0 ).toString(2)
    document.querySelector('#binaryOutput').value = binary2
    return true
}


function clearInput() {
    document.querySelectorAll('input').value = ""


}