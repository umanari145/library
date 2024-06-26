console.log("------------------thisの範囲について(開始)--------------------------");

console.log("---------オブジェクトがない場合はwindowオブジェクトをさす---------------");
console.log(this);

const objsample = {
    name:"sample name",
    test:function(){
        console.log("--thisはオブジェクト内部そのものをさす");
        console.log(this);
    }
}

class objsample2 {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    test() {
        console.log("--thisはインスタンス内部をさす");
        console.log(this);
    }
}

objsample.test()

let obj2 = new objsample2("id12345", "yamada tarou");
obj2.test();
console.log("------------------thisの範囲について(終了)--------------------------")

$(function(){
    $("#sampleId").click(function(){
        console.log("---thisはクリックしたオブジェクト内部--");    
        console.log(this);
    })
    //これ以外にjQueryで使う場合は関数内のオブジェクト

    $("#sampleId2").click(() => {
        console.log("---thisはオブジェクト全般--");    
        console.log(this);
    })
    //これ以外にjQueryで使う場合は関数内のオブジェクト
});