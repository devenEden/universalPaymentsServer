const apiError = require('./apiErrors');

const apiErrorHandler  = (err,req,res,next) => 
{
    if(err instanceof apiError) 
    {
        res.status(err.code).json(err.message);
        return;
    }
    res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;