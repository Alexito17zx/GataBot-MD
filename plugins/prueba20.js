import fs from 'fs'
import yaoiImages from 'module-gatadios'

let handler = async (m, { conn }) => {
const resultJson = JSON.parse(yaoiImages.getRandomImage())
//const jsonText = JSON.stringify(resultJson, null, 2)
m.reply(resultJson.name)
}

handler.command = /^(prueba36)$/i
export default handler