const lengthValidation = (string, length , condition) => {
   if (condition == 'min') {
       
       if (string.toString().length >= length)
           return true;
        else
           return false;
       
   } 
   else if (condition == 'max' ) {
       
        if (string.toString().length <= length)
            return true;
        else
            return false;

   }
   else 
   return { msg: 'Error Invalid condition argument ' , response: false}
}

module.exports = lengthValidation;