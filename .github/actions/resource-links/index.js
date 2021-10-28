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
    // console.log(data[0])
    // return
    const updatedResourceList = await Promise.all(data[0].map(async (resourceItem) => {
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

async function validateResourceLinks(files) {
    let resources

    core.info('Hello Will!!!')
    files.map(async(file) => {
        resources = JSON.parse(fs.readFileSync(file))
        const updated = await validation(resources)
        const updatedResourceLinksList = []
        updatedResourceLinksList.push(updated)
        // console.log(file)
        // console.log(updatedResourceLinksList)
        return fs.writeFileSync(file, JSON.stringify(updatedResourceLinksList))
        // console.log(updatedResourceLinksList)
    })

}

const files = [
    './data/resources/education/books.json', 
    './data/resources/education/courses.json', 
    './data/resources/education/schools.json', 
    './data/resources/education/trainers.json', 
    './data/resources/education/tutorials.json', 
    './data/resources/education/workshops.json', 
    './data/resources/consultants.json', 
    './data/resources/events.json',
    './data/resources/tools/administration.json',
    './data/resources/tools/blockchain.json',
    './data/resources/tools/deploy.json',
    './data/resources/tools/exchanges.json',
    './data/resources/tools/frameworks.json',
    './data/resources/tools/ides.json',
    './data/resources/tools/languages.json',
    './data/resources/tools/libraries.json',
    './data/resources/tools/monitoring.json',
    './data/resources/tools/security.json',
    './data/resources/tools/tests.json',
    './data/resources/tools/validators.json',
    './data/resources/tools/wallets.json',
    './data/resources/communities/developer.json',
    './data/resources/communities/enterprise.json',
    './data/resources/communities/grant-program.json',
    './data/resources/communities/incubators-accelerators.json',
    './data/resources/communities/venture-capital-funds.json'
]
validateResourceLinks(files);