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
          point: [2, 5, 3, 3, 2, 1, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [3, 0, 2, 2, 3, 4, 1]
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
          point: [5, 4, 2, 3, 4, 1, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 1, 3, 2, 1, 4, 2]
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
          point: [4, 3, 4, 5, 2, 2, 5]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [1, 2, 1, 0, 3, 3, 0]
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
          point: [5, 5, 3, 1, 4, 5, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 0, 2, 4, 1, 0, 2]
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
          point: [5, 2, 3, 4, 1, 2, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [0, 3, 2, 1, 4, 3, 1]
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
          point: [3, 5, 4, 2, 2, 5, 2]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 0, 1, 3, 3, 0, 3]
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
          point: [4, 3, 5, 3, 3, 2, 3]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [1, 2, 0, 2, 2, 3, 2]
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
          point: [3, 2, 5, 5, 4, 1, 4]
        },
        {
          id: 1,
          text: 'いいえ',
          point: [2, 3, 0, 0, 1, 4, 1]
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
      item: {
        name: '飲食',
        discription: 'カフェとバーです。'
      },
      item: {
        name: 'ステージ',
        discription: '昼ステと夜ステがあるよ'
      },
      item: {
        name: '会場',
        discription: 'インテリア、エクステリア、WS、ブース'
      },
      item: {
        name: 'PA',
        discription: 'PAだよ、ですやんだよ'
      },
      item: {
        name: '運動会',
        discription: '運動会は楽だよ'
      },
      item: {
        name: '幹部',
        discription: '大変！'
      }
    }
  ]
}
