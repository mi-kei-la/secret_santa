const { createWriteStream, createReadStream } = require("fs")

addData("Hugo", "no@mail.com")
addData("Mica", "tieneunmailsiquesi")

function addData(name, email) {
  // const count = req.count
  const path = "test.json"
  
  // Este bloque lee el contenido del archivo
  const readStream = createReadStream(path, "utf-8")
  const fileData = readStream.read()
  // Convierte fileData en un diccionario/objeto
  const allParticipants = JSON.parse(fileData)
  readStream.close()

  console.log(allParticipants)

  // Este bloque genera el texto a appendear
  const participant = {
    id: allParticipants.keys().length() || "error finding len",
    name: name,
    email: email,
    givesTo: false,
    assignedGifter: false
  }

  // Este bloque (idealmente) appendea el texto generado al archivo
  const fileStream = createWriteStream(path, "utf-8")
  // chequear si no sobreescribe
  fileStream.write(JSON.stringify(participant))
  fileStream.close()

  // res.status(200).send("success saving participant")
}

module.exports = {
  addData
}


/*
leer json
obtener length del json
ese length sería el nuevo count, y ese número va a ser el nuevo id
luego se sobreescribe el json
se cierra el file
*/
