const fs = require('fs')
const axios = require('axios')

function cat(path) {

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:`, err)
            process.kill(1)

        }
        console.log(data)
    })

}

async function webCat(url) {

    try {
        res = await axios.get(url)
        console.log(res)
    } catch (error) {
        console.log(`Error fetching ${url}:`,  error.message)
    }

}

if (process.argv[2].includes('http')) {
    webCat(process.argv[2])
} else {
    cat(process.argv[2])
}
    