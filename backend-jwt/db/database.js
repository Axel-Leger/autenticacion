import {createPool} from "mysql2/promise"
import { DB_HOST, DB_NAME, DB_USER } from "../settings/environments"

const createMyPool = ()=>{
    try {
        const pool =createPool({
            database: DB_NAME,
            password:"",
            user: DB_USER,
            host: DB_HOST
        })

        console.log("conexion exitosa a la base de datos");
        
    } catch (error) {
        console.log("hubo un error al conectar la base de datos");
    }
}

const myPool = createMyPool()

export {myPool}