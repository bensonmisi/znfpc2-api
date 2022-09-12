import {diskStorage} from 'multer'
import {v4 as uuidV4} from 'uuid'
import path  = require('path')




export const uploadPropertDocument={

storage:diskStorage({
    destination:'./public/documents',
    filename:(req,file,cb)=>{
        const fileExtention:string = path.extname(file.originalname);
        const filename:string= uuidV4()+fileExtention;
        cb(null,filename)
    }  
}),
}

export const uploadRequiredDocument={

    storage:diskStorage({
        destination:'./public/requireddocument',
        filename:(req,file,cb)=>{
            const fileExtention:string = path.extname(file.originalname);
            const filename:string= uuidV4()+fileExtention;
            cb(null,filename)
        }  
    }),
}


