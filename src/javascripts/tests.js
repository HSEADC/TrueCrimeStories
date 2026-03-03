console.clear()

let currentStage = 0
let resultCount = 0
const checkboxes = document.querySelectorAll('input[type=checkbox]')

function initTest(stages) {
    const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
    const question = document.querySelector('.A_Question')
    const answers = document.querySelectorAll('.A_AnswerText')

    numberOfQuestion.innerText = `вопрос №${currentStage + 1} из ${stages.length}`

    question.innerText = stages[currentStage].question

    for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = stages[currentStage].answers[i].text
    }

    for (let j = 0; j < checkboxes.length; j++) {
        checkboxes[j].dataset.count = stages[currentStage].answers[j].count
    }
}

function chooseAnswer(stages, results) {
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                setTimeout(() => {
                    resultCount += Number(checkbox.dataset.count)
                    updateStage(stages, results)
                    checkbox.checked = false
                }, 300)
            }
        })
    })
}

function updateStage(stages, results) {
    if (++currentStage < stages.length) {
        initTest(stages)
    } else {
        showResult(results)
    }
}

function showResult(results) {
    const testContainer = document.querySelector('.O_Test')
    testContainer.innerHTML = ''

    const resultWrapper = document.createElement('div')
    resultWrapper.classList.add('M_TestResult')

    const resultCnt = document.createElement('p')
    resultCnt.classList.add('A_TestResultCount')
    resultCnt.innerText = `итого: ${resultCount}`

    const resultHeader = document.createElement('h2')
    resultHeader.classList.add('A_TestResultHeader')

    const resultParagraph = document.createElement('p')
    resultParagraph.classList.add('A_TestResultParagraph')

    const resultImage = document.createElement('img')
    resultImage.classList.add('A_TestResultImage')

    if (resultCount == 4) {
        resultHeader.innerText = results[0].header
        resultParagraph.innerText = results[0].paragraph
        resultImage.src = results[0].img
    } else if (resultCount == 3 || resultCount == 2) {
        resultHeader.innerText = results[1].header
        resultParagraph.innerText = results[1].paragraph
        resultImage.src = results[1].img
    } else {
        resultHeader.innerText = results[2].header
        resultParagraph.innerText = results[2].paragraph
        resultImage.src = results[2].img
    }

    // switch (resultCount) {
    //   case 4:
    //     resultHeader.innerText = results[0].header
    //     resultParagraph.innerText = results[0].paragraph
    //     resultImage.src = results[0].image
    //     break
    //   case 3:
    //     resultHeader.innerText = results[1].header
    //     resultParagraph.innerText = results[1].paragraph
    //     resultImage.src = results[1].image
    //     break
    //   case 2:
    //     resultHeader.innerText = results[1].header
    //     resultParagraph.innerText = results[1].paragraph
    //     resultImage.src = results[1].image
    //     break
    //   default:
    //     resultHeader.innerText = results[2].header
    //     resultParagraph.innerText = results[2].paragraph
    //     resultImage.src = results[2].image
    //     break
    // }

    resultWrapper.appendChild(resultCnt)
    resultWrapper.appendChild(resultHeader)
    resultWrapper.appendChild(resultParagraph)
    resultWrapper.appendChild(resultImage)

    testContainer.appendChild(resultWrapper)
}

export { initTest, chooseAnswer }
