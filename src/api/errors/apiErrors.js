class apiError
{
    constructor(code , message) 
    {
      this.code = code;
      this.message = message;
    }

    static badRequest(msg) 
    {
      return new apiError(400,msg);
    }

    static internalServerError(msg) 
    {
        return new apiError(500,msg);
    }
}

module.exports = apiError;