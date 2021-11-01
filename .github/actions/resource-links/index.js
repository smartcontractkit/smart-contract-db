const fetch = require('node-fetch');
const fs = require('fs');
const core = require('@actions/core');

async function validation(data) {
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

async function validateResourceLinks(files) {
    let resources

    files.map(async(file) => {
        resources = JSON.parse(fs.readFileSync(file))
        const updated = await validation(resources)
        return fs.writeFileSync(file, JSON.stringify(updated))
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