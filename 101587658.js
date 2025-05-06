function part1() {
    const details = {
        studentID: "101587658",
        fullName: "Zohra Mirzaiy",
        professor: "Mr. Leonard Zajaczkowski",
        labDay: "Thursday",
        semester: "Winter2025"
    };

    const encodeText = (text) => text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

    document.body.insertAdjacentHTML('beforeend', `
        <div style="position: fixed; bottom: 15px; right: 12px;">
            <p><b>Student ID:</b> ${details.studentID} <b>Full Name:</b> ${details.fullName}</p>
            <p><b>Professor:</b> ${details.professor} <b>Lab Session Day:</b> ${details.labDay}</p>
            <p><b>Encoded Student ID:</b> ${encodeText(details.studentID)} <b>Encoded Full Name:</b> ${encodeText(details.fullName)}</p>
            <p><b>Encoded Professor:</b> ${encodeText(details.professor)} <b>Encoded Lab Session Day:</b> ${encodeText(details.labDay)}</p>
        </div>
    `);
}

function part2(numA, numB) {
    return ((numA + 5) < (numB - 3)) ? -1 : ((numA + 5) === (numB - 3)) ? 0 : 1;
}

function part3(num1, num2) {
    let result = '';

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            result += i.toString();
        }
    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            result += i.toString();
        }
    } else {
        result = (num1 + num2).toString(); // Ensure correct sum when num1 === num2
    }

    // Convert result to a number and check divisibility by 3
    if (parseInt(result) % 3 === 0) {
        result = 'Magic' + result; // Correctly append "Magic"
    }

    return result;
}


function part4(index, arr) {
    if (index < 0 || index >= arr.length) return false;
    if (arr[index] === 0) return true;
    return arr[index] % 2 === 0 ? arr.slice(0, index).reduce((sum, val) => sum + val, 0) : arr.slice(index + 1).reduce((sum, val) => sum + val, 0);
}

function part5(arr) {
    let [odds, evens] = arr.reduce(([oddArr, evenArr], num) => (num % 2 === 0 ? [oddArr, [...evenArr, num]] : [[...oddArr, num], evenArr]), [[], []]);
    return [...odds, ...evens, odds.reduce((sum, num) => sum + num, 0), evens.reduce((sum, num) => sum + num, 0)];
}
