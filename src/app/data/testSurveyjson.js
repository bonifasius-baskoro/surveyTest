export const json = {
    "showCompleteButton":false,
    "questionsOnPageMode": "questionPerPage",
    "triggers": [
          {
            "type": "complete",
            "expression": "{domisili} == 6 || {umur}<18 || {umur} >50 || ({itembeli}= ['rumah','motor'] || {itembeli}= ['motor'] || {itembeli}= ['rumah'])"
            // || {umur}<18 || {umur} >50 || !{itembeli} contains 2
          }
        ],
    pages: [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": "Siapa nama Anda"
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "title": "Jenis Kelamin",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Pria"
              },
              {
                "value": "Item 2",
                "text": "Wanita"
              }
            ]
          },
          {
            "type": "text",
            "name": "question3",
            "title": "No Telepon",
            "inputType": "tel"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "radiogroup",
            "name": "domisili",
            "title": "Domisili Anda",
            "choices": [
              {
                "value": 1,
                "text": "Jakarta"
              },
              {
                "value": 2,
                "text": "Bekasi"
              },
              {
                "value": 3,
                "text": "Medan"
              },
              {
                "value": 4,
                "text": "Surabaya"
              },
              {
                "value": 5,
                "text": "Kalimantan"
              },
              {
                "value": 6,
                "text": "Tidak Satupun"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "text",
            "name": "umur",
            "title": "Berapa Usia Anda?",
            "inputType": "number"
          },
          {
            "type": "checkbox",
            "name": "itembeli",
            "title": "Item mana saja yang akan anda beli dalam waktu dekat?",
            "choices": [
              {
                "value": "rumah",
                "text": "Rumah"
              },
              {
                "value": "mobil",
                "text": "Mobil"
              },
              {
                "value": "motor",
                "text": "Motor"
              }
            ],
            "choicesOrder": "random"
          },
          {
            "type": "radiogroup",
            "name": "hargarumah",
            "visibleIf": "{itembeli} contains 'rumah'",
            "title": "Berapa kisaran harga rumah?",
            "choices": [
              {
                "value": "Item 1",
                "text": "<250 JT"
              },
              {
                "value": "Item 2",
                "text": "250 Jt - 500 Jt"
              },
              {
                "value": "Item 3",
                "text": ">500 Jt"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "hargamotor",
            "visibleIf": "{itembeli} contains 'motor'",
            "title": "Berapa kisaran harga motor?",
            "choices": [
              {
                "value": "Item 1",
                "text": "<10 Jt"
              },
              {
                "value": "Item 2",
                "text": "10 Jt - 25 Jt"
              },
              {
                "value": "Item 3",
                "text": ">25 Jt"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "hargamobil",
            "visibleIf": "{itembeli} contains 'mobil'",
            "title": "Berapa kisaran harga mobil?",
            "choices": [
              {
                "value": "Item 1",
                "text": "<250 JT"
              },
              {
                "value": "Item 2",
                "text": "250 Jt - 500 Jt"
              },
              {
                "value": "Item 3",
                "text": ">500 Jt"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "question10",
            "title": "Apakah Pekerjaan anda saat ini?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Bekerja"
              },
              {
                "value": "Item 2",
                "text": "Wiraswasta"
              },
              {
                "value": "Item 3",
                "text": "Ibu Rumah tangga"
              },
              {
                "value": "Item 4",
                "text": "Tidak Bekerja"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "question11",
            "title": "Apakah Jabatan Anda saat ini?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Staff"
              },
              {
                "value": "Item 2",
                "text": "Manager"
              },
              {
                "value": "Item 3",
                "text": "Jabatan diatas Manager"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "question12",
            "title": "Seberapa besar pengeluaran per bulan?",
            "choices": [
              {
                "value": "Item 13",
                "text": ">7 Juta"
              },
              {
                "value": "Item 2",
                "text": "6 Juta - 7 Juta"
              },
              {
                "value": "Item 3",
                "text": "5 Juta - 6 Juta"
              },
              {
                "value": "Item 4",
                "text": "4 Juta - 5 Juta"
              },
              {
                "value": "Item 5",
                "text": "3 Juta - 4 Juta"
              },
              {
                "value": "Item 6",
                "text": "<3 Juta"
              }
            ]
          }
        ]
      }
    ]
  };
  