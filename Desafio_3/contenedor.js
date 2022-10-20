const fs = require('fs')

class Contenedor {
constructor(fileName) {
    this.fileName = fileName
}
async save(obj) {
    try {
    const data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8'),
        jsonData = JSON.parse(data)

    if (jsonData.length > 0) {
        const lastId = jsonData[jsonData.length - 1].id
        obj.id = lastId + 1
    } else {
        obj.id = 1
    }

    jsonData.push(obj)
    fs.writeFileSync(`./${this.fileName}`, JSON.stringify(jsonData, null, 2))
    } catch (err) {
    throw new Error(err)
    }
}
async getById(num) {
    try {
    const data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8'),
        jsonData = JSON.parse(data),
        found = jsonData.find(element => element.id === num)
    if (found) {
        return found
    } else {
        console.log(`ID "${num}" not found`)
    }
    } catch (err) {
    throw new Error(err)
    }
}
async getAll() {
    try {
    const data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8'),
        jsonData = JSON.parse(data)
    //console.log(`All the data: ${JSON.stringify(jsonData, null, 2)}`)
    //const stringData = JSON.stringify(jsonData, null, 2)
    return jsonData
    } catch (err) {
    throw new Error(err)
    }
}
async deleteById(num) {
    try {
    const data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8'),
        jsonData = JSON.parse(data),
        foundIndex = jsonData.findIndex(element => element.id === num)
    if (foundIndex !== -1) {
        jsonData.splice(foundIndex, 1)
        fs.writeFileSync(
        `./${this.fileName}`,
        JSON.stringify(jsonData, null, 2)
        )
    } else {
        console.log(`ID "${num}" not found`)
    }
    } catch (err) {
    throw new Error(err)
    }
}
deleteAll() {
    fs.writeFileSync(`./${this.fileName}`, '[]')
}
}

module.exports = Contenedor