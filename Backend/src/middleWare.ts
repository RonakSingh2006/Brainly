import type { NextFunction , Request , Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"

export function authMiddleware(req :Request,res :Response,next : NextFunction){
  const auth = req.headers.authorization;

  if(!auth){
    return res.status(403).send("Not logged In");
  }

  if(auth.split(" ")[0] !== 'Bearer'){
    return res.status(400).send("Invalid Authorization")
  }

  const token = auth.split(" ")[1];

  try{
    const decoded = jwt.verify(token as string,process.env["JWT_SECRET"]!) as JwtPayload
    req.userId = decoded["id"];
    next();
    return;
  }
  catch(err){
    return res.status(403).send("Invalid Token");
  }
}