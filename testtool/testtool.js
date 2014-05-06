$(function(){

    //**************************************//
    // 同階層に作られたjsonデータをもとに
    // キーを押して自動的にテストデータを
    // 入れるモジュール
    //
    //
    //*************************************//

    var keyCode1;
    var keyCode2;
    var keyCodeExit;

    $(document).keypress(function(){
        takeTestData();
    
    });
    
    function takeTestData()
    {

        //keyCode1 + keyCode2 →<F9>+ 数字でテストデータを入れる
        if( keyCode1 === '')
        {
            keyCode1 = event.charCode;
        }
        else
        {
            if( keyCode1 === 92 )//\が92
            {
                keyCodeExit = event.charCode;
                
                keyCode2 = event.charCode;
                //keycodeを数字に対応させる
                var key_num = keyCode2 - 48;
            }
            else
            {
                keyCode1 ='';
            
            }
        
        }


        if( key_num > 0 )
        {
            $.ajax({
                url: 'sample2.json', 
                dataType:'json',
                scriptCharset: 'utf-8', //これ入れないと文字化けする    
                success: function (data) {
                    dataObj = data;
                    var formObj = document['form1'];

                    for( var i = 0 ; i< formObj.length; i++ )
                    {
                        ele = formObj.elements[i]; 
                        setTestDataEachEleType( ele , dataObj , key_num );
                    } 
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus);
                    console.log(errorThrown.message);
                }

            });
        }

    }

    function setTestDataEachEleType( ele , dataObj , key_num )
    {
          //要素名の取得
          var key_name = ele.name
          //jsonの配列を取得(dataObj2は連想配列)
          dataObj2 = dataObj[key_name];
          if( dataObj2 !== undefined )
          {  
              //ランダムな配列をあてる
              //   var arr_num = Object.keys(dataObj2).length;
              //   var ran_num = Math.ceil(Math.random() * arr_num );
              
              //値にjson形式のデータを入れる
              ele.value = dataObj2[key_num];
          }
    }


});
