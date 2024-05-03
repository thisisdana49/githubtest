const bcrypt = require('bcrypt')
const password = '12345678'
const saltRound = 10

let hashed = bcrypt.hashSync(password, saltRound)
console.log(`password: ${password}, hashed: ${hashed}`)
const result = bcrypt.compareSync('12345', hashed)
console.log(`Password is same: ${result}`)

const result1 = bcrypt.compareSync('12345000', hashed)
console.log(`Password is same: ${result}`)

const asyncFunc = async () => {
    let hashed = await bcrypt.hashSync(password, saltRound)
    console.log(`password: ${password}, hashed: ${hashed}`)
    const result = await bcrypt.compareSync(password, hashed)
    console.log(`Password is same: ${result}`)
}