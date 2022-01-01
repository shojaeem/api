import {createConnection} from 'typeorm';
import{User} from './entity/user-entity';
async function main () {
    try{
        await createConnection({
            type:"postgres",
            host:"localhost",
            port:5432,
            username:"postgres",
            password:"shjmry13",
            database:"post1",
            extra:{
                trustServerCertificate:true,
            },
            entities:[User],
            synchronize:true
        })
        console.log("database is connected!")
    }catch(e:any){
        console.error(e)
        console.log("connection error!")
    }
}
main()