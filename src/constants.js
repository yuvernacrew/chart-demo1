//定数データを保管する。
export default {
  data: [
    {
      question: {
        id: 1,
        text: '夜型だ'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 5, 3, 3, 4, 4, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 0, 2, 2, 1, 1, 1]
        }
      ]
    },
    {
      question: {
        id: 2,
        text: '頭の回転が早い'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [4, 3, 2, 4, 5, 5, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [4, 3, 2, 4, 5, 5, 3]
        }
      ]
    },
    {
      question: {
        id: 3,
        text: '支えられるより支える方だ'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 2, 4, 3, 4, 4, 5]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 3, 1, 2, 2, 2, 0]
        }
      ]
    },
    {
      question: {
        id: 4,
        text: '管理能力が高い'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 3, 4, 4, 5, 2, 5]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 2, 1, 1, 0, 3, 0]
        }
      ]
    },
    {
      question: {
        id: 5,
        text: 'お酒が好き'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 5, 4, 2, 4, 5, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 0, 1, 3, 1, 0, 2]
        }
      ]
    },
    {
      question: {
        id: 6,
        text: 'おしゃれが好き'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [5, 4, 3, 4, 2, 4, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 1, 2, 1, 3, 1, 1]
        }
      ]
    },
    {
      question: {
        id: 7,
        text: '大勢で盛り上がるのが好き'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [5, 4, 4, 3, 2, 4, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 1, 1, 2, 3, 1, 1]
        }
      ]
    },
    {
      question: {
        id: 8,
        text: '手先が器用'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [5, 3, 4, 4, 4, 4, 2]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 2, 1, 1, 1, 1, 3]
        }
      ]
    },
    {
      question: {
        id: 9,
        text: '細かい事務作業が苦ではない'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 4, 5, 5, 4, 2, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 1, 0, 0, 1, 3, 2]
        }
      ]
    },
    {
      question: {
        id: 10,
        text: '細かい事務作業が苦ではない'
      },
      answers: [
        {
          id: 0,
          text: 'はい',
          point: [3, 4, 4, 5, 3, 3, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 1, 1, 0, 2, 2, 1]
        }
      ]
    }
  ],
  results: [
    {
      choice: [0, 0, 0],
      item: {
        name: 'ステージ部署',
        chart: {
            labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
            datasets: [
              {
                label: '適部署チャート',
                backgroundColor: '#f87979',
                data: [ 4, 1, 2, 10, 6]
              }
            ]
          },
        discription: 'ばんばん当日も目立っていきたいあなたにオススメ！芸工祭をどんどん盛り上げてください！'
      }
    },
    {
      choice: [0, 0, 1],
      item: {
        name: 'ステージ部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 4, 1, 2, 10, 6]
            }
          ]
        },
        discription: 'ばんばん当日も目立っていきたいあなたにオススメ！芸工祭をどんどん盛り上げてください！'
      }
    },
    {
      choice: [0, 0, 2],
      item: {
        name: '運動会',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 2, 4, 4, 6, 10]
            }
          ]
        },
        discription: '当日はゆっくり、運動会の日にウェイウェイできる部署といえばこの部署！'
      }
    },
    {
      choice: [0, 1, 0],
      item: {
        name: 'ステージ部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 4, 1, 2, 10, 6]
            }
          ]
        },
        discription: 'ばんばん当日も目立っていきたいあなたにオススメ！芸工祭をどんどん盛り上げてください！'
      }
    },
    {
      choice: [0, 1, 1],
      item: {
        name: 'ステージ部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 4, 1, 2, 10, 6]
            }
          ]
        },
        discription: 'ばんばん当日も目立っていきたいあなたにオススメ！芸工祭をどんどん盛り上げてください！'
      }
    },
    {
      choice: [0, 1, 2],
      item: {
        name: '運動会',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 2, 4, 4, 6, 10]
            }
          ]
        },
        discription: '当日はゆっくり、運動会の日にウェイウェイできる部署といえばこの部署！'
      }
    },
    {
      choice: [1, 0, 0],
      item: {
        name: '会場部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 6, 2, 10, 5, 0]
            }
          ]
        },
        discription: '芸工祭の会場に彩りを。エクステリア、インテリア、ブース、ディレクションの4部署に分かれています。'
      }
    },
    {
      choice: [1, 0, 1],
      item: {
        name: 'カフェ部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 10, 1, 2, 4, 6]
            }
          ]
        },
        discription: 'カフェ部署は、インテリアの装飾などもします。当日も忙しいけど、達成感は一番味わえます！'
      }
    },
    {
      choice: [1, 0, 2],
      item: {
        name: '会場部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 2, 6, 10, 4, 4]
            }
          ]
        },
        discription: '芸工祭の会場に彩りを。エクステリア、インテリア、ブース、ディレクションの4部署に分かれています。'
      }
    },
    {
      choice: [1, 1, 0],
      item: {
        name: '広報部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 4, 10, 4, 4, 2]
            }
          ]
        },
        discription: '芸工祭を外部にアピール！映像、web、グラフィックの3部署に分かれています。'
      }
    },
    {
      choice: [1, 1, 1],
      item: {
        name: 'カフェ部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 10, 6, 2, 4, 2]
            }
          ]
        },
        discription: 'カフェ部署は、インテリアの装飾などもします。当日も忙しいけど、達成感は一番味わえます！'
      }
    },
    {
      choice: [1, 1, 2],
      item: {
        name: '広報部署',
        chart: {
          labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
          datasets: [
            {
              label: '適部署チャート',
              backgroundColor: '#f87979',
              data: [ 2, 10, 6, 2, 4]
            }
          ]
        },
        discription: '芸工祭を外部にアピール！映像、web、グラフィックの3部署に分かれています。'
      }
    }

  ]
}
