import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CheckUserPassword } from "../util/HashPassword";

const prisma = new PrismaClient();

class AuthController{
    constructor(){

    }

    async SignIn(req: Request, res: Response){
        try {
            const { email, passworld } = req.body;

            if(!email || !passworld){
                return res.json({
                    status: 400,
                    message: "Email ou senha não encontrados."
                });
            }

            const user = await prisma.user.findFirst({
                where: {
                    email,
                },
            });

            if(!user){
                return res.json({
                    status: 401,
                    message: "Email não existe."
                });
            }

            const passwordCheck = await CheckUserPassword(passworld, user.passworld);

            if(!passwordCheck){
                return res.json({
                    status: 401,
                    message: "Usuário ou senha inválidos."
                });
            }

            return res.json({
                status: 200,
                message: "Autenticação bem sucedida!"
            });
        }

        catch(error) {
            console.log(error);
            res.json({
                status: 500,
                message: error,
            });
        }
    }

    async SignUp(){

    }

    async SignOut(){
        
    }

}

export default new AuthController();