const { writeFileSync, readFileSync, existsSync } = require("fs")

function addData(name, email) {
  try {
    // Este bloque lee el contenido del archivo
    const path = "../coso.json"
    let count = 0
    let allParticipants = {}

    if (existsSync(path)) {
      const fileData = readFileSync(path, { encoding: "utf-8" })
      allParticipants = JSON.parse(fileData)
      count = Object.keys(allParticipants).length
    }

    // Este bloque genera el texto a appendear
    const participant = {
      name: name,
      email: email,
      givesTo: false,
      assignedGifter: false
    }

    allParticipants[count] = participant

    writeFileSync(path, JSON.stringify(allParticipants), {encoding: "utf-8"})

  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  addData
}
