import {Request,Response,NextFunction} from 'express';
import logger from 'morgan';
const requestLogger=(req:Request,res:Response,next:NextFunction)=>{
    logger('dev')(req,res,next);
    console.log(`Request: ${req.method} ${req.url}`);
}
export default requestLogger;