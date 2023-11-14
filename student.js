const student ={
    name : 'milly' ,
    age : 17,
    course : 'CSE',
    module : 'artificial intelligence'

};

const fs = require('fs');

function writeData(obj){
    fs.writeFile('./student.json', JSON.stringify(obj), err=>{
        if(err){
            console.log(err);
        }
            else
                {
                    console.log('success');
                 }
      })
    }

    function readData(){
        fs.readFile('./student.json' , 'utf-8' , (err,jsonString) => {
            if(err){
                console.log(err);
            }
            else{
                try{
                    const data= JSON.parse(jsonString)
                    console.log(data);
                    console.log('success');
                }
                catch (error){
                    console.log('error parsing JSON' , err);
                }
            }
        });
    }
    writeData(student);
    readData();
            
        

       
    
