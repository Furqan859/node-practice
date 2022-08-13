module.exports = reqFile = (req,res,next) => {
    if(!req.query.age){
        res.send("Age is not entered!");

    }else if(req.query.age<18){
        res.send("Age is under 18 not allowed!")
    }else{
        next();
    }
}
