function 기계(이름){
    this.name = 이름;
    this.age=15;
    this.sayHi=function(){
        console.log("안녕하세요"+this.name+"입니다")
    }
}
this는 새로 생성되는 object를 뜻함 

var 학생1 = new 기계('park');
