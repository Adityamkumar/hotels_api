import jwt from 'jsonwebtoken'

export const jwtAuthMiddleware = (req,res,next)=>{
     //chek the authoriztion header
     const authorization = req.headers.authorization;

     if(!authorization) return res.status(401).json({error:"Invalid token"})

     //Extract jwt token from the request header
     const token = req.headers.authorization.split(' ')[1]
     
     if(!token) return res.status(401).json({error:"Unauthorized"});

     try {
             const decodedData = jwt.verify(token,process.env.JWT_SECRET);

             req.userPayload = decodedData
             next()
     } catch (error) {
         console.log(error)
         req.status(401).json({error:"Invalid token"})
     }
}

//mehtod to generate JWT token

export const generateJwtToken = (userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:30000});

}


