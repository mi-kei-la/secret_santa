const { writeFileSync, readFileSync } = require("fs")

addData("Hugo", "no@mail.com")
addData("Mica", "tieneunmailsiquesi")
// TODO: try/catch or stat para ver si el archivo existe --> no romper todo si no existe el archivo
// TODO: no chequear length ni parsear un objeto inexistente
// TODO: convertir en endpoint
// TODO: levantar server

function addData(name, email) {
  try {
    // Este bloque lee el contenido del archivo
    const path = "test.json"
    const fileData = readFileSync(path, { encoding: "utf-8" })
    const allParticipants = JSON.parse(fileData)

    const count = Object.keys(allParticipants).length

    // Este bloque genera el texto a appendear
    const participant = {
      name: name,
      email: email,
      givesTo: false,
      assignedGifter: false
    }

    allParticipants[count] = participant

    writeFileSync(path, JSON.stringify(allParticipants), {encoding: "utf-8"})

    // res.status(200).send("success saving participant")
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  addData
}
