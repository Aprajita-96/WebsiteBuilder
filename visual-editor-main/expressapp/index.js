const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


let webPageData = null;

// let savedWebpages = [
//   {
//   webPage: {
//     config: { activeTab: 9, previewMode: 0 },
//     layout: {
//       blocks: [
//         {
//           blockId: "header2",
//           data: {
//             button: "Click here1",
//             link: "Read more1",
//             tagline: "lorem ipsum dolor sit amet1",
//             title: "Hello Swathi1",
//             uuid: "d6fe879e-d5fa-4c01-8a3a-45eab12acf13"
//           }
//       }
//       ],
//       selectedBlockUuid: 'd6fe879e-d5fa-4c01-8a3a-45eab12acf13',
//       documentId: 'document1',
//       webpageName: '',
//       currentBlockID: 'header2'
//     }
//   },
//   fileName: 'swathi1'
// },

//   {
//   webPage: {
//     config: { activeTab: 9, previewMode: 0 },
//     layout: {
//       blocks: [
//         {
//           blockId: "header2",
//           data: {
//             button: "Click here2",
//             link: "Read more2",
//             tagline: "lorem ipsum dolor sit amet2",
//             title: "Hello Swathi2",
//             uuid: 'd6fe879e-d5fa-4c01-8a3a-45eab12acf13'
//           }
//       }
//       ],
//       selectedBlockUuid: 'd6fe879e-d5fa-4c01-8a3a-45eab12acf13',
//       documentId: 'document1',
//       webpageName: '',
//       currentBlockID: 'header2'
//     }
//   },
//   fileName: 'swathi2'
// },
//   {
//   webPage: {
//     config: { activeTab: 9, previewMode: 0 },
//     layout: {
//       blocks: [
//         {
//           blockId: "header2",
//           data: {
//             button: "Click here3",
//             link: "Read more3",
//             tagline: "lorem ipsum dolor sit amet3",
//             title: "Hello Swathi3",
//             uuid: 
//           }
//       }
//       ],
//       selectedBlockUuid: 'd6fe879e-d5fa-4c01-8a3a-45eab12acf13',
//       documentId: 'document1',
//       webpageName: '',
//       currentBlockID: 'header2'
//     }
//   },
//   fileName: 'swathi3'
// },  {
//   webPage: {
//     config: { activeTab: 9, previewMode: 0 },
//     layout: {
//       blocks: [
//         {
//           blockId: "header2",
//           data: {
//             button: "Click here4",
//             link: "Read more4",
//             tagline: "lorem ipsum dolor sit amet4",
//             title: "Hello Swathi4"
//           }
//       }
//       ],
//       selectedBlockUuid: 'd6fe879e-d5fa-4c01-8a3a-45eab12acf13',
//       documentId: 'document1',
//       webpageName: '',
//       currentBlockID: 'header2'
//     }
//   },
//   fileName: 'swathi4'
// },

// ]

let savedWebpages = [];

app.use(bodyParser.json());

app.use(cors());
app.get('/', (req, res) => {
  res.send(webPageData);
});

app.get('/savedWebPages', (req, res) => {
  res.send(savedWebpages);
});

app.post('/', (req, res) => {
  console.log("req", req);
  webPageData = req.body;

  savedWebpages.push(webPageData);

  console.log("req body", req.body);
  res.send(req.body);
});

const port = 5000; // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});