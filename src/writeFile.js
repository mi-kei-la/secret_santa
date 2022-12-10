const { writeFileSync, readFileSync, existsSync } = require("fs")

// addData("Hugo", "no@mail.com")
// addData("Mica", "tieneunmailsiquesi")

// TODO: levantar server

function addData(req, res) {
  try {
    // Este bloque lee el contenido del archivo
    const path = "coso.json"
    console.log(req.body)
    let count = 0
    let allParticipants = {}

    if (existsSync(path)) {
      const fileData = readFileSync(path, { encoding: "utf-8" })
      allParticipants = JSON.parse(fileData)  
      count = Object.keys(allParticipants).length
    }

    // Este bloque genera el texto a appendear
    const participant = {
      name: req.body.name,
      email: req.body.email,
      givesTo: false,
      assignedGifter: false
    }

    allParticipants[count] = participant

    writeFileSync(path, JSON.stringify(allParticipants), {encoding: "utf-8"})

    res.status(200).send("Success saving participant\n")
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  addData
}
