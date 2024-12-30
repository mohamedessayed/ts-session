type CarType = {
    model:string;
    year:number;
    manfacture?:string;
}

let car : CarType =  {
    model:'2',
    year:12
}



enum StatusCode {
    notFound = 404,
    ok = 200,
    unAuthorize = 401
}

function sayHell(user:string) :string|boolean{
    console.log('Hello ' + user);
    return true
}

sayHell('mohamed')
