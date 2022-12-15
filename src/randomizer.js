const { writeFileSync, readFileSync, existsSync } = require("fs")

/* 
Leer el json

en un loop infinito meterse al json con una número random entre 0 y length del json
asignar a ese key (a) un nuevo key random (b), mientras que el key a no tenga asignado, ni el b esté asignado ya.
guardar las asignaciones en un nuevo objeto
guardar el objeto en un nuevo json
subir el contador. Si el contador llega al length del json se corta el loop

checkear que todo tenga asignacion
*/

readData();

function readData() {
    try {
        const path = "../coso.json"
        let count = 0
        let allParticipants = {}

        if (existsSync(path)) {
        const fileData = readFileSync(path, { encoding: "utf-8" })
        allParticipants = JSON.parse(fileData)  
        count = Object.keys(allParticipants).length
        }

        mixer(allParticipants, count)
    } catch (err) {
        console.error(err)
    }
}

function mixer(participantsList, participantsCount) {
    let cloneList = JSON.parse(JSON.stringify(participantsList))

    const asigned = []

    for (const gifter in cloneList) {
        // Obtenemos el random recibidor

        let randomAsign = getRandomInt(0, participantsCount)
        while (cloneList[randomAsign]["assignedGifter"] == true || asigned.includes(randomAsign) || randomAsign == gifter) {
            randomAsign = getRandomInt(0, participantsCount)
        }

        asigned.push(randomAsign)
        cloneList[gifter]["givesTo"] = randomAsign
        cloneList[randomAsign]["assignedGifter"] = true
    };

    writeData(cloneList)
}


function writeData(mixedList) {
    const path = "../mixedList.json"
    try {
      writeFileSync(path, JSON.stringify(mixedList), {encoding: "utf-8"})
    } catch (err) {
      console.error(err)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  