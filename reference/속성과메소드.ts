
const obj = {
    name: 'junui',
    age: 29,
    getAge: function() {
        return obj.age;
    }
}

class Person {
    _bloodType: string;

    constructor(_bloodType: string) {
        this._bloodType = _bloodType;
    }

    set bloodType(btype: string) {
        if(btype === 'A' || btype === 'B' || btype === 'AB' || btype === 'O'){
            this._bloodType = btype;
        }
    }
}

const p1 = new Person('A')
p1.bloodType = 'B';