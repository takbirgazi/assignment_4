function calculateMoney(ticketSale){
    //Problem-01 : Help The Zoo Manager
    if(0<=ticketSale){
       return (ticketSale * 120) - ( 500 + (8 * 50));
    }else{
        return "Invalid Number";
    }
}

function checkName(name){
    // Problem-02: Good Name , Bad Name
    if(typeof(name) == "string"){
        const nameLow = name.toLowerCase();
        const lastChr = nameLow.charAt(name.length - 1);
        if(lastChr == "a" || lastChr == "y" || lastChr == "i" || lastChr == "e" || lastChr == "o" || lastChr == "u" || lastChr == "w"){
            return "Good Name";
        }else{
            return "Bad Name";
        }
    }else{
        return "invalid";
    }
}

function deleteInvalids(array){
    // Problem 03 : Virus in my Array
    if(Array.isArray(array) == true){
        let newArry = [];
        for(const arr of array){
            if(Number.isInteger(arr) == true){
               newArry.push(arr);
            }
        }
        return newArry;
    }else{
        return "Invalid Array";
    }
}

function password(obj){
    // Problem 04 : Make A Great Password
    let birth = obj.birthYear;
    let birthLength = birth.toString().length;
    if(typeof(obj) == "object" && Object.keys(obj).length == 3 && birthLength == 4){
        let siteName = obj.siteName;
        let firstLetterUp= siteName[0].toUpperCase() + siteName.slice(1);
        let password = firstLetterUp+"#"+obj.name+"@"+obj.birthYear; 
        return password;
    }else{
        return "Invalid";
    }
}

function monthlySavings(arr, livingCost){
// Problem 05 : Monthly Savings of a Freelancer
    if(Array.isArray(arr) == true && typeof(livingCost) == "number"){
        let paymentWithTax = [];
        let totalIncome = 0;
        for(let payment of arr){
            if(payment >= 3000){
                const taxableMoney = payment - (payment /100)*20;
                paymentWithTax.push(taxableMoney);
            }else{
                paymentWithTax.push(payment);
            }
        }
        // paymentWithTax;
        for(const money of paymentWithTax){
            totalIncome = totalIncome + money;
        }
        // totalIncome;
        if((totalIncome - livingCost) >= 0){
            const totaSevings = (totalIncome - livingCost);
            return totaSevings;
        }else{
            return "Earn Money";
        }
    }else{
        return "Invalid Input";
    }
}
