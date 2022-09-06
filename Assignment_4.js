const matchHouses = (n)=>{
    if(n===0 || n < 0 || typeof n !== "number")
    {
        return("Please Enter A Vailed Number")
    }
    else
    {
        let result;
        result =(5*n)+1;
        return result
    }
}
console.log(matchHouses(4))
