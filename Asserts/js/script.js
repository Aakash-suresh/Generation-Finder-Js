function FindGeneration(age_code,gender)
{
    if((gender == 'm' || gender == 'M') && age_code<0)
    {
        relation = " father"
    }
    else if((gender == 'f' || gender == 'f') && age_code<0)
    {
        relation = " mother"
    }
    else if((gender == 'm' || gender == 'M') && age_code>0)
    {
        relation = " son"
    }
    else if((gender == 'f' || gender == 'f') && age_code>0)
    {
        relation = " daughter"
    }

    switch(age_code)
    {
        case -3:
            console.log("great grand"+relation)
            break
        case -2:
            console.log("grand"+relation)
            break
        case -1:
            console.log(relation)
            break
        case 0:
            console.log("me")
            break
        case 1:
            console.log(relation)
            break
        case 2:
            console.log("grand"+relation)
            break
        case 3:
            console.log("great grand"+relation)
            break
    }
}

var age_code = 3
var gender = 'm'
var relation
FindGeneration(age_code,gender)