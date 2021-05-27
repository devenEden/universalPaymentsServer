const isNumber = (num) => 
{
    if (num === parseInt(num, 10)) 
     return true;
     else
    return false;
}

module.exports = isNumber;