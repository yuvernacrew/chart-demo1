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
        text: '自分を変えたいと思っている'
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
      id: 0,
      name: '飲食',
      discription: '『カフェ』『BAR』の２つの部署のことです。BAR部署の募集はありません'
    },
    {
      id: 1,
      name: 'ステージ',
      discription: '芸工祭の当日のステージを企画する『昼ステ』『夜ステ』の２つの部署のことです。とにかく楽しく明るい部署です。'
    },
    {
      id: 2,
      name: '会場',
      discription: '芸工祭を彩る『インテリア』『エクステリア』『ディレクション』『ブース』『ワークショップ』の5つの部署のことです。MNO関係なくみんなで楽しく活動します'
    },
    {
      id: 3,
      name: '広報',
      discription: '芸工祭をみんなに発信する『グラフィック』『映像』『WEB』の３つの部署のことです。実際にみんなで制作をしていきます。'
    },
    {
      id: 4,
      name: 'PA',
      discription: 'これで君も『teamですやん』だ！'
    },
    {
      id: 5,
      name: '運動会',
      discription: 'みんなで運動会を盛り上げてこーぜ！！'
    },
    {
      id: 6,
      name: '幹部',
      discription: '芸工祭を支える『祭長』『副祭長』『会計』『書記』『総務』のことです。残念ながら１・２年の募集はないです。'
    }
  ]
}
