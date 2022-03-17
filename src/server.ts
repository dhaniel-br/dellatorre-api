import express from "express"

const app = express()

app.use(express.json())

// localhost:3333/machines

app.get("/machines", (request, response) => {
  return response.json([
    {
      "sell-machines": [
        {
          id: 0,
          title: "Pa Carregadeira CAT 930R 1990 (2. Un)",
          cover: "https://i.imgur.com/qbylLwK.png",
          list: {
            brand: "CAT",
            model: "930R",
            year: "1990",
          },
        },
        {
          id: 1,
          title: "Retroescavadeira CAT 416E 4x2 2003",
          cover: "https://i.imgur.com/r4p20HE.png",
          list: {
            brand: "CAT",
            model: "416E",
            year: "2003",
          },
        },
        {
          id: 2,
          title: "Pá Carregadeira CAT 924 2020",
          cover: "https://i.imgur.com/rtxbFVu.png",
          list: {
            brand: "CAT",
            model: "924",
            year: "2020",
          },
        },
        {
          id: 3,
          title: "Mini Carregadeira CAT 216B 2014",
          cover: "https://i.imgur.com/1etKedG.png",
          list: {
            brand: "CAT",
            model: "216B",
            year: "2014",
          },
        },
        {
          id: 4,
          title: "Trator esteira Komatsu D30 1982",
          cover: "https://i.imgur.com/c2meAbs.jpg",
          list: {
            brand: "Komatsu",
            model: "D30",
            year: "1982",
          },
        },
        {
          id: 5,
          title: "Motoniveladora CAT 120B 1982",
          cover: "https://i.imgur.com/ZM1NTdu.jpg",
          list: {
            brand: "CAT",
            model: "CA290",
            year: "1982",
          },
        },
      ],
      "rental-machines": [
        {
          id: 0,
          title: "Escavadeira CAT 320D 2020",
          cover: "https://i.imgur.com/2ydZHBZ.png",
          list: {
            brand: "CAT",
            model: "320D",
            year: "2020",
          },
        },
        {
          id: 1,
          title: "Retroescavadeira CAT 416E 2020",
          cover: "https://i.imgur.com/aHpIyeg.png",
          list: {
            brand: "CAT",
            model: "416E",
            year: "2020",
          },
        },
        {
          id: 2,
          title: "Pá Carregadeira CAT 924 2020",
          cover: "https://i.imgur.com/rtxbFVu.png",
          list: {
            brand: "CAT",
            model: "924",
            year: "2020",
          },
        },
        {
          id: 3,
          title: "Motoniveladora CAT 120K 2020",
          cover: "https://i.imgur.com/jrmhc6p.png",
          list: {
            brand: "CAT",
            model: "120K",
            year: "2020",
          },
        },
        {
          id: 4,
          title: "Mini Carregadeira CAT 216B 2020",
          cover: "https://i.imgur.com/fHrMcrq.png",
          list: {
            brand: "CAT",
            model: "216B",
            year: "2020",
          },
        },
        {
          id: 5,
          title: "Rolo Dynapac CA290 2020",
          cover: "https://i.imgur.com/jrmhc6p.png",
          list: {
            brand: "Dynapac",
            model: "CA290",
            year: "2020",
          },
        },
      ],
    },
  ])
})

app.listen("3333", () => {
  console.log("servidor no ar")
})
