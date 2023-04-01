const mongodb = require('mongoose')
mongodb.set("strictQuery", true)

const connectToDatabase = async () => {

    await mongodb.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aula-sabado-api.pwyvbaa.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {

            if (error) {

                return console.log('Erro ao conectar com o banco : ', error)

            }

            return console.log('Conexão ralizada com sucesso.')

        }

    )
    
}

module.exports = connectToDatabase