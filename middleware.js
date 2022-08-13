
module.exports = reqFile = (req, res, next) => {
    if(!req.query.age){
        res.send("Pleaser provide age")
    }else if(req.query.age<18){
        res.send("you are under 18 years old")
    }
    else{
   next();
    }
}