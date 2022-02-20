require("dotenv").config()
let refreshTokens = []
const jwt = require("jsonwebtoken")
// const jwt = require("jwt-simple");

class Config {
      async generateRefreshToken(user) {
          const refreshToken = 
              jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
              refreshTokens.push(refreshToken)
          return refreshToken
       }
     async generateAccessToken(user) {
         return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
      }
      getverify(token) {
        if(refreshTokens) 
         var decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
         console.log(decoded)
         return decoded.email;
         
      }
      getTokenArray(){
        return refreshTokens;
      }
}
module.exports.Config = Config;

