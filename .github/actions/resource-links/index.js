const fetch = require('node-fetch');
const fs = require('fs');
const core = require('@actions/core');

// function communityValidation(data) {
//     data.map((communityItem) => (
  
//           Object.values(communityItem)[0]
//             .map(({ id, title, src, startDate, description, link }, communityItemIndex) => (
//                 console.log(link)
//             ))
//       ))
// }

async function validation(data) {
    // console.log(data)
    // data.map(({ link }) => (
    //     console.log(link)
    //     // curl link, check resp, if good then nothing, if bad then remove resource attached to link, then pr
    //   ))

    const updatedResourceList = await Promise.all(data.map(async (resourceItem) => {
        return await fetch(resourceItem.link).then(
            response => {
                return response.status === 200 ? resourceItem : null
            }
        ).catch(error => {
            return null
        })
    }))
    return updatedResourceList.filter(item => item)

}

async function validateResourceLinks(){

    core.info('Hello Will!!!')
    const resources = JSON.parse(fs.readFileSync('./data/resources/education/resources.json'))
    const updatedResourceLinksList = await validation(resources[0].Books)
    console.log(updatedResourceLinksList)
    return fs.writeFileSync('./data/resources/education/resources.json', JSON.stringify(updatedResourceLinksList))
  }
  
  validateResourceLinks();