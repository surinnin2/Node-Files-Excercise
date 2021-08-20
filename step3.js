const fs = require('fs')
const axios = require('axios')

function cat(path, param) {

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:`, err)
            process.kill(1)

        } else {
            console.log(data)
        }
        
    })

}

function catWrite(path, content) {

    fs.writeFile(path, content, 'utf8', err => {
        if (err) {
            console.log('Error:', err)
            process.kill(1)
        }
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

function copyFileContents(path, output) {

    fs.readFile(path, 'utf8', (err, data) => {

        if (err) {
            console.log(`Error reading ${path}:`, err)
            process.kill(1)

        } else {
            catWrite(output, data)
        }
        
    })

}


if (process.argv[2] == '--out') {
    copyFileContents(process.argv[4], process.argv[3])

} else {
    if (process.argv[2].slice(0, 4) === 'http') {
        webCat(process.argv[2])
    } else {
        cat(process.argv[2])
    }
}



    