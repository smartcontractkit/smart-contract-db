// const fetch = require('node-fetch');
const fs = require('fs');
const core = require('@actions/core');

// function communityValidation() {
//     communities.map((communityItem) => (
  
//           Object.values(communityItem)[0]
//             .map(({ id, title, src, startDate, description, link }, communityItemIndex) => (
//                 console.log(link)
//             ))
//       ))
// }

// function validation() {
//     data.map(({ id, title, src, startDate, description, link }, index) => (
//         console.log(link)
//       ))
// }

async function validateResourceLinks(){

    core.info('Hello Will!!!')
    const data = fs.writeFileSync('./hello.txt', 'YO')

  
  }
  
  validateResourceLinks();