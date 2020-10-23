let flagUrl = [
    ['Indonesia', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg'],
    ['Singapore', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh31f0VNjhZtf3azSEpS65P29fEh8pNVBUNg&usqp=CAU'],
    ['Laos', 'https://www.asean.org/wp-content/uploads/2012/05/Flag_of_Laos-01.jpg'],
    ['Philippine', 'https://ae01.alicdn.com/kf/HTB17dxaaLfsK1RjSszgq6yXzpXai/Flaglink-90-150-The-Philippine-national-flag.jpg'],
    ['Brunei Darussalam', 'https://i.ytimg.com/vi/vA2lu0fq-yI/maxresdefault.jpg'],
    ['Myanmar', 'https://sites.google.com/site/aseanbyteachernuanprang/_/rsrc/1450476905678/9-myanmar/national-flag/125px-Flag_of_Myanmar.svg.png'],
    ['Malaysia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5zJhDbWukc0lBiVPP4DJD85Vec5ON0BvlIA&usqp=CAU'],
    ['Cambodia', 'https://www.maritimecyprus.com/wp-content/uploads/2014/09/cambodia_flag-1.gif'],
    ['Thailand', 'https://lh3.googleusercontent.com/proxy/8zJ6jgFfTXB3EVqipX5cmZgNACg2fXincbCgOZ1VRGDVchE0A9-WDcVKbXO6I0JDzhkB6msV3ECEddFqyBP1n9JZjCc7JJc98-zQ8UA6kqYiBZ9juFMKjg'],
    ['East Timor', 'https://cdn.britannica.com/60/72760-050-4F87197C/Flag-of-East-Timor.jpg'],
    ['Vietnam', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png'],
]



let jawab1 = ''
let jawab2 = ''
let jawab3 = ''
let jawab4 = ''


let right = 'Philippine'
let buttonChange = document.getElementById('changeButton')
buttonChange.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * 11)
    document.getElementById('flag').src = flagUrl[rand][1]
    right = ''
    let rightAnswer = flagUrl[rand][0]
    right += rightAnswer
    let arrAnswer = [rightAnswer]
    if (rand > 7) {
        for (let i = 1; i < 4; i++) {
            arrAnswer.push(flagUrl[rand - i][0])
        }
    } else {
        for (let i = 1; i < 4; i++) {
            arrAnswer.push(flagUrl[rand + i][0])
        }
    }
    let randAnswer = Math.floor(Math.random() * 3.9)
    if (randAnswer == 0) {
        document.getElementById('text-answer1').innerHTML = arrAnswer[randAnswer]
        document.getElementById('option1').value = arrAnswer[randAnswer]
        document.getElementById('text-answer2').innerHTML = arrAnswer[randAnswer + 3]
        document.getElementById('option1').value = arrAnswer[randAnswer + 3]

        document.getElementById('text-answer3').innerHTML = arrAnswer[randAnswer + 2]
        document.getElementById('option1').value = arrAnswer[randAnswer + 2]

        document.getElementById('text-answer4').innerHTML = arrAnswer[randAnswer + 1]
        document.getElementById('option1').value = arrAnswer[randAnswer + 1]

    } else if (randAnswer == 1) {
        document.getElementById('text-answer1').innerHTML = arrAnswer[randAnswer]
        document.getElementById('option1').value = arrAnswer[randAnswer]

        document.getElementById('text-answer2').innerHTML = arrAnswer[randAnswer + 2]
        document.getElementById('option1').value = arrAnswer[randAnswer + 2]

        document.getElementById('text-answer3').innerHTML = arrAnswer[randAnswer + 1]
        document.getElementById('option1').value = arrAnswer[randAnswer + 1]

        document.getElementById('text-answer4').innerHTML = arrAnswer[randAnswer - 1]
        document.getElementById('option1').value = arrAnswer[randAnswer - 1]

    } else if (randAnswer == 2) {
        document.getElementById('text-answer1').innerHTML = arrAnswer[randAnswer - 1]
        document.getElementById('option1').value = arrAnswer[randAnswer - 1]

        document.getElementById('text-answer2').innerHTML = arrAnswer[randAnswer - 2]
        document.getElementById('option1').value = arrAnswer[randAnswer - 2]

        document.getElementById('text-answer3').innerHTML = arrAnswer[randAnswer + 1]
        document.getElementById('option1').value = arrAnswer[randAnswer + 1]

        document.getElementById('text-answer4').innerHTML = arrAnswer[randAnswer]
        document.getElementById('option1').value = arrAnswer[randAnswer]

    } else if (randAnswer == 3) {
        document.getElementById('text-answer1').innerHTML = arrAnswer[randAnswer]
        document.getElementById('option1').value = arrAnswer[randAnswer]

        document.getElementById('text-answer2').innerHTML = arrAnswer[randAnswer - 2]
        document.getElementById('option1').value = arrAnswer[randAnswer - 2]

        document.getElementById('text-answer3').innerHTML = arrAnswer[randAnswer - 3]
        document.getElementById('option1').value = arrAnswer[randAnswer - 3]

        document.getElementById('text-answer4').innerHTML = arrAnswer[randAnswer - 1]
        document.getElementById('option1').value = arrAnswer[randAnswer - 1]

    }
})


function myFunction() {
    var ele = document.getElementsByName('answerNat');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("bla").innerHTML = "Country: " + ele[i].value;
    }
}

console.log(document.getElementsByName('answerNat').value);



let buttonAnswer = document.getElementById('btnAnswer')
buttonAnswer.addEventListener('click', function () {
    let trueFlag = document.getElementById('flag').src
    let answer = ''
    for (let i = 0; i < flagUrl.length; i++) {
        if (flagUrl[i][1] == trueFlag) {
            answer += flagUrl[i][0]
        }
    }
    console.log(answer);
    document.getElementById('respons').innerHTML = `<h3>It's ${right.toUpperCase()}</h3>`
})


function myFunction() {
    var x = document.getElementById("option1").nextSibling.innerHTML;
    document.getElementById("respons").innerHTML = x;
}

let y = document.getElementById("option1").nextSibling.innerText
console.log(y);