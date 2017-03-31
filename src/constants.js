//定数データを保管する。
export default {
  data: [
    {
      question: {
        id: 1,
        text: '自分は何系？'
      },
      answers: [
        {
          id: 0,
          text: 'ウェイ系',
        },
        {
          id: 1,
          text: 'クリエイター系'
        }
      ]
    },
    {
      question: {
        id: 2,
        text: '得意なことは？'
      },
      answers: [
        {
          id: 0,
          text: 'どでかいものを作る！'
        },
        {
          id: 1,
          text: 'コツコツと小さなものづくり！'
        }
      ]
    },
    {
      question: {
        id: 3,
        text: '当日はどんな楽しみ方をしたい？',
      },
      answers: [
        {
          id: 0,
          text: 'ウェイしたい'
        },
        {
          id: 1,
          text: '仕事してたい'
        },
        {
          id: 2,
          text: 'ゆっくり楽しみたい'
        },
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
