interface I1 {
    item:number;
    item:number;
}

interface I2 {
    item:any;
    item:number;
}

interface I3 {
    prototype:number;
}

interface I4 {
    class:number;
    number:number;
    super:number;
    prototype:number;
}

/* BUG 13876
interface I5 extends I5 { 
    foo():void;
}
*/

/* BUG 13877
interface I6 {
	():void;
}

interface I7 extends I6 { }

var v1:I7;
v1();
*/

class C1 implements I3 {
    constructor() {
        var prototype: number = 3;
    }
}

/* BUG 13876
interface i8 extends i9 { }
interface i9 extends i8 { }
*/

/* BUG 12857
interface i10 {
	foo():number;
}

interface i11{
	foo():string;
}

interface i12 extends i10, i11 { }
*/
