const { MailtrapClient } = require("mailtrap");
const { readFileSync, existsSync } = require("fs")

getMixedList()

function getMixedList() {
  try {
    const path = "../mixedList.json"
    let allParticipants = {}

    if (existsSync(path)) {
    const fileData = readFileSync(path, { encoding: "utf-8" })
    allParticipants = JSON.parse(fileData)  
    }

    for (const gifter in allParticipants) {
      let gifterName = allParticipants[gifter]["name"]

      let gifterMail = allParticipants[gifter]["email"]

      let receiverInt = allParticipants[gifter]["givesTo"]
      let receiverName = allParticipants[receiverInt]["name"]

      emailSend(gifterName, gifterMail, receiverName)
    }
  } 
  catch (err) {
      console.error(err)
  }
}


function emailSend(gifterName, gifterMail, receiverName) {
  const TOKEN = "";
  const ENDPOINT = "https://send.api.mailtrap.io/";
  
  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });
  
  const mensaje = "Hola " + gifterName + ". Te toca darle un regalito a " + receiverName + ". Y esta vez sin fallas!!!!"

  const sender = {
    email: "",
    name: "",
  };
  const recipients = [
    {
      email: gifterMail,
    }
  ];
  
  client
    .send({
      from: sender,
      to: recipients,
      subject: "Regalo amigo imaginario banda n° 8",
      text: mensaje,
      category: "Mensaje",
    })
    .then(console.log, console.error);

}


  