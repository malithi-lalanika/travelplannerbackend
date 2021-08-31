const User = require('../models/userModle')

module.exports = {

    SignUp(memail, mpassword, callback) {
        User.findOne({email:memail},
          (err, user) => {
            if (err) {
              return callback(err);
            } else {
                if(user==null){
                    const user = User({
                        email:memail,
                        password:mpassword
                    })

                    user.save(
                        (err, user) => {
                          if (err) {
                            return callback(err);
                          } else {
                            return callback(null, user);
                          }
                        }
                          );

                }else{
    
                    return callback("Invalid Email");   
                }
              
            }
          }
        );
      },


      SignIn(memail, mpassword, callback) {
        User.findOne({email:memail,password:mpassword},(err,user)=>{
            if(err){
                //console.log("errrr");
                console.log(err)
                return callback(err);
            }else{
                //console.log("hhjyeee");
                return callback(null, user);  
            }
        })
      },


};