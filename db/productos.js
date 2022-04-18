const fs = require('fs')
const { title } = require('process')

module.exports = class Contenedor {

    static id = 0 

    constructor(archivo) {

        this.save = function (object) {
            try {

                const tempFile = fs.readFileSync(archivo, 'utf-8')

                Contenedor.id++
                object.price = Number(object.price)
                let newObject = { ...object, id: Contenedor.id }
                let newFile = []
                newFile.push(newObject) 

                if (tempFile === '') { 

                    fs.appendFileSync(archivo, JSON.stringify(newFile, null, 2))
                }
                else { 

                    let parseFile = JSON.parse(tempFile) 

                    parseFile.forEach(n => {
                        if (Contenedor.id <= n.id) {
                            Contenedor.id = n.id + 1
                            newFile[0].id = Contenedor.id
                        }
                    })
                    parseFile = [...parseFile, ...newFile] 
                    fs.writeFileSync(archivo, JSON.stringify(parseFile, null, 2))

                    console.log(parseFile)
                }
            }
            catch (err) {
                throw new Error('No se pudo guardar')
            }
        }

        this.getById = async function (number) {
            try {
                const tempFile = await fs.promises.readFile(archivo, 'utf-8')

                let parseFile = JSON.parse(tempFile)
                let findOut = parseFile.find((n) => n.id === number)
                return (findOut)
            }
            catch (err) {
                throw new Error('No se encuentra dicho producto')
            }
        }

        this.getAll = async function () {
            try {
                const tempFile = await fs.promises.readFile(archivo, 'utf-8')
                let parseFile = JSON.parse(tempFile)

                
                return parseFile 
            }
            catch (err) {
                throw new Error('No hay resultados')
            }

        }

        this.deleteById = async function (number) {
            try {
                const tempFile = await fs.promises.readFile(archivo, 'utf-8')
                let parseFile = JSON.parse(tempFile)

                const toDelete = parseFile.findIndex((n) => n.id === number)

                if (toDelete >= 0) {
                    parseFile.splice(toDelete, 1)
                    await fs.promises.writeFile(archivo, JSON.stringify(parseFile, null, 2))
                    console.log('Se elimino correctamente')
                } else {
                    console.log('Id inexistente')
                }

            }
            catch (err) {
                throw new Error('No se encuentra Id')
            }
        }

        this.deleteAll = async function () {
            try {
                await fs.promises.writeFile(archivo, '')
                console.log('Se borro correctamente.')
            }
            catch (err) {
                throw new Error('Archivo inexistente')
            }
        }

        this.modifyById = async function (values) {
            try {
                const tempFile = await fs.promises.readFile(archivo, 'utf-8')
                values.id = Number(values.id)
                let parseFile = JSON.parse(tempFile)
                let found = parseFile.find(n => n.id === values.id)
                if (found) {
                    found.title = values.title
                    found.price = Number(values.price)
                    found.thumbnail = values.thumbail
                    console.log(parseFile)
                    fs.writeFileSync(archivo, JSON.stringify(parseFile, null, 2))
                } else { console.log('No se encuentra el producto que desea modificar') }
            }
            catch (err) {
                throw new Error('No se pudo guardar')
            }
        }
    }
}

