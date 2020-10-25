let flagUrl = [
    ['Indonesia', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg'],
    ['Singapore', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh31f0VNjhZtf3azSEpS65P29fEh8pNVBUNg&usqp=CAU'],
    ['Laos', 'https://www.asean.org/wp-content/uploads/2012/05/Flag_of_Laos-01.jpg'],
    ['Philippine', 'https://ae01.alicdn.com/kf/HTB17dxaaLfsK1RjSszgq6yXzpXai/Flaglink-90-150-The-Philippine-national-flag.jpg'],
    ['Brunei Darussalam', 'https://i.ytimg.com/vi/vA2lu0fq-yI/maxresdefault.jpg'],
    ['Myanmar', 'https://sites.google.com/site/aseanbyteachernuanprang/_/rsrc/1450476905678/9-myanmar/national-flag/125px-Flag_of_Myanmar.svg.png'],
    ['Malaysia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5zJhDbWukc0lBiVPP4DJD85Vec5ON0BvlIA&usqp=CAU'],
    ['Cambodia', 'https://www.maritimecyprus.com/wp-content/uploads/2014/09/cambodia_flag-1.gif'],
    ['Thailand', 'https://t3.ftcdn.net/jpg/01/08/88/60/360_F_108886037_5RMqRn0kavfVgfBFgeKWXdxlRSc6myci.jpg'],
    ['East Timor', 'https://cdn.britannica.com/60/72760-050-4F87197C/Flag-of-East-Timor.jpg'],
    ['Vietnam', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png'],
]



const textAnswer_1 = document.getElementById('text-answer1')
const textAnswer_2 = document.getElementById('text-answer2')
const textAnswer_3 = document.getElementById('text-answer3')
const textAnswer_4 = document.getElementById('text-answer4')
const inputId_1 = document.getElementById('option1')
const inputId_2 = document.getElementById('option2')
const inputId_3 = document.getElementById('option3')
const inputId_4 = document.getElementById('option4')
let buttonChange = document.getElementById('changeButton')
const answer_respons = document.getElementById('respons')
let right = 'Philippine'



buttonChange.addEventListener('click', function () {
    answer_respons.innerText = ''
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
    let randAnswer = Math.floor(Math.random() * 4)
    if (randAnswer == 0) {
        textAnswer_1.innerHTML = arrAnswer[randAnswer]
        inputId_1.value = arrAnswer[randAnswer]
        textAnswer_2.innerHTML = arrAnswer[randAnswer + 3]
        inputId_2.value = arrAnswer[randAnswer + 3]

        textAnswer_3.innerHTML = arrAnswer[randAnswer + 2]
        inputId_3.value = arrAnswer[randAnswer + 2]

        textAnswer_4.innerHTML = arrAnswer[randAnswer + 1]
        inputId_4.value = arrAnswer[randAnswer + 1]

    } else if (randAnswer == 1) {
        textAnswer_1.innerHTML = arrAnswer[randAnswer]
        inputId_1.value = arrAnswer[randAnswer]

        textAnswer_2.innerHTML = arrAnswer[randAnswer + 2]
        inputId_2.value = arrAnswer[randAnswer + 2]

        textAnswer_3.innerHTML = arrAnswer[randAnswer + 1]
        inputId_3.value = arrAnswer[randAnswer + 1]

        textAnswer_4.innerHTML = arrAnswer[randAnswer - 1]
        inputId_4.value = arrAnswer[randAnswer - 1]

    } else if (randAnswer == 2) {
        textAnswer_1.innerHTML = arrAnswer[randAnswer - 1]
        inputId_1.value = arrAnswer[randAnswer - 1]

        textAnswer_2.innerHTML = arrAnswer[randAnswer - 2]
        inputId_2.value = arrAnswer[randAnswer - 2]

        textAnswer_3.innerHTML = arrAnswer[randAnswer + 1]
        inputId_3.value = arrAnswer[randAnswer + 1]

        textAnswer_4.innerHTML = arrAnswer[randAnswer]
        inputId_4.value = arrAnswer[randAnswer]

    } else if (randAnswer == 3) {
        textAnswer_1.innerHTML = arrAnswer[randAnswer]
        inputId_1.value = arrAnswer[randAnswer]

        textAnswer_2.innerHTML = arrAnswer[randAnswer - 2]
        inputId_2.value = arrAnswer[randAnswer - 2]

        textAnswer_3.innerHTML = arrAnswer[randAnswer - 3]
        inputId_3.value = arrAnswer[randAnswer - 3]

        textAnswer_4.innerHTML = arrAnswer[randAnswer - 1]
        inputId_4.value = arrAnswer[randAnswer - 1]


    }
})

let buttonAnswer = document.getElementById('btnAnswer')
buttonAnswer.addEventListener('click', function () {
    let trueFlag = document.getElementById('flag').src
    let answer = ''
    let clientAns = ''
    var ele = document.getElementsByName('answersNat');
    for (let i = 0; i < flagUrl.length; i++) {
        if (flagUrl[i][1] == trueFlag) {
            answer += flagUrl[i][0]
        }
    }
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            clientAns+= ele[i].value
    }
    if (answer == clientAns) {
        document.getElementById('respons').innerHTML = `<h3>You're right. It's ${right.toUpperCase()}</h3>`
    } else {
        document.getElementById('respons').innerHTML = `<h3>You're wrong. It's ${right.toUpperCase()}</h3>`
    }    
})


