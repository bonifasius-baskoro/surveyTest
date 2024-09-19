export const surveyJson = {
    title: "Survey Ini",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    showTimerPanelMode: "page", // or "page" | "survey"
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [{
      elements: [{
        type: "html",
        html: "<p>Anda mempunyai waktu <b>10 detik</b> untuk tiap soal, pencet <b>Mulai</b> ketika anda sudah siap.</p>"
      }]
    }, {
      elements: [{
        type: "radiogroup",
        name: "KesanMerek",
        title: "Kata apa yang cocok untuk Yamaha?",
        choices: [
          "Ngebut", "Semakin di depan", "Awet", "MotoGP"
        ]
      }]
    }, {
      elements: [{
        type: "radiogroup",
        name: "MerekMotorMenarik",
        title: "Merek motor apa yang paling menarik?",
        choicesOrder: "random",
        choices: [
          "Honda", "Yamaha", "Suzuki", "Lainnya"
        ],
      }]
    }, {
      elements: [{
        type: "checkbox",
        name: "MotorYamahaMenarik",
        title: "Motor Yamaha apa saja yang menarik?",
        choicesOrder: "random",
        choices: [
          "Nmax",
          "Aerox",
          "Mio",
          "Jupiter MX"
        ],
      }]
    }],
    completedHtml: "Finish ",
    // completedHtmlOnCondition: [{
    //   expression: "{correctAnswers} == 0",
    //   html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    // }, {
    //   expression: "{correctAnswers} == {questionCount}",
    //   html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
    // }]
  };
  