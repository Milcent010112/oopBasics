const mydetails={
    "name" : "milly",
    "surname": "malatji"
};

myinfo = {
    "name ": "milly",
    "age": 17,
    "department" : "computer systems and engineering ",
    "year": "5th"

};

const Data = JSON.parse(myInfo) // returns json
console.log(Data);
const results= JSON.stringify(Data) ;
console.log(results.toUpperCase());
