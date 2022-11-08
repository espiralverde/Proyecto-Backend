const fs = require('fs')

class Contenedor {
constructor(archivo) {
    this.archivo = archivo
}
async save(object) {
    try {
    const data = await fs.promises.readFile(`./${this.archivo}`, 'utf-8'),
        jsonData = JSON.parse(data)

    if (jsonData.length > 0) {
        const lastId = jsonData[jsonData.length - 1].id
        object.id = lastId + 1
    } else {
        object.id = 1
    }

    jsonData.push(object)
    fs.writeFileSync(`./${this.archivo}`, JSON.stringify(jsonData, null, 2))
    } catch (err) {
    throw new Error(err)
    }
}
async getById(num) {
    try {
    const data = await fs.promises.readFile(`./${this.archivo}`, 'utf-8'),
        jsonData = JSON.parse(data),
        found = jsonData.find(element => element.id === num)
    if (found) {
        return found
    } else {
        console.log(`ID "${num}" no existe`)
    }
    } catch (err) {
    throw new Error(err)
    }
}
async getAll() {
    try {
    const data = await fs.promises.readFile(`./${this.archivo}`, 'utf-8'),
        jsonData = JSON.parse(data)
    /* console.log(`${JSON.stringify(jsonData, null, 2)}`) */
    return jsonData
    } catch (err) {
    throw new Error(err)
    }
}
async deleteById(num) {
    try {
    const data = await fs.promises.readFile(`./${this.archivo}`, 'utf-8'),
        jsonData = JSON.parse(data),
        foundIndex = jsonData.findIndex(element => element.id === num)
    if (foundIndex !== -1) {
        jsonData.splice(foundIndex, 1)
        fs.writeFileSync(
        `./${this.archivo}`,
        JSON.stringify(jsonData, null, 2)
        )
    } else {
        console.log(`ID "${num}" no existe`)
    }
    } catch (err) {
    throw new Error(err)
    }
}
deleteAll() {
    fs.writeFileSync(`./${this.archivo}`, '[]')
}
}

module.exports = Contenedor