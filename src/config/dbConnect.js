import mongoose, {mongo} from "mongoose";

     async function conectNaDatabase(){
    
    mongoose.set('strictQuery', false)
    const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true , writeConcern: { w: 'majority' }, })
    const conectNaDatabase = mongoose.connection;

    conectNaDatabase.on('error', console.error.bind(console, 'Erro de conexão'));
    conectNaDatabase.once('open', () => {
      console.log('Conectado ao banco de dados')
    })
    
   return conectNaDatabase;
 }
 export default conectNaDatabase;
   
    /*





/*const url = 'mongodb://paulo:plml@localhost:27017/herois';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'Erro de conexão'));

connection.once('open', () => console.log('database rodando!'))

return connection*/