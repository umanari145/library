$(function(){
     // sample
     var objChild =[
                    //form
                   {tag:"form",name:"hogehoge",method:"post",target:"_blank","action":"http://hogehoge"},
                   //input
                   {tag:"input",type:"hidden",name:"MBC",value:"aaaa"},
                   //select
                   {tag:"select",id:"outPutSelect",onchange:"aaaaa(this.value)", option:[ {value:1,text:"日本"},{value:2,text:"中国"},{value:3,text:"アメリカ"}]}
                   ];
      
     //formの作成
     var objForm = setObjFrom( objChild );
    
     //ターゲット場所にformを追加
     $("#newform").append(objForm);

     /************************************************
     // formObjectの作成
     //
     // @param object objData 
     // formのデータを作る元のオブジェクトを含んだ配列
     // @return object objForm formObject
     //
     ************************************************/
     function setObjFrom( objData )
     {
         //form作成
         var objForm =$("<form>");
         var objDataLength = objData.length;
     
         //要素分だけforを回す
         for( i=0;i < objDataLength; i++ )
         {
             var tagName = objData[i]['tag'];
             var objAttr  = objData[i];

             //formの場合はobjFormに属性を追加
             if( tagName === 'form' ) 
             {
                 objForm = setFormAttr(objAttr,objForm);    
             }
             //form以外は属性をセットする
             else
             {
                 //属性をセットしてFormにセット
                 var objHtmlTag = setAttr( tagName, objAttr ,objForm );
                 objForm.append(objHtmlTag);
             
             }
         
         }
     
         return objForm;
     
     }
     
     /************************************************
     // formに各属性を追加する
     //
     // @param object objAttr 属性のobject
     // @param object objForm formObject
     // @return object objForm formObject(属性追加)
     //
     ************************************************/
     function setFormAttr(objAttr, objForm )
     {
         objForm = setAttrDetail( objAttr, objForm);
         return objForm;
     }
     
     /************************************************
     // formに各属性を追加する
     //
     // @param string tagName タグ名
     // @param object objAttr 属性のobject
     // @return object objHtmlTag HTMLObject 
     //
     ************************************************/
     function setAttr( tagName, objAttr )
     {
         var objHtmlTag =$("<" + tagName + ">");
             objHtmlTag = setAttrDetail(objAttr ,objHtmlTag, tagName);
         
         return objHtmlTag;
     }

     /************************************************
     // 属性をセットして戻す
     //
     // @param object objAttr 属性のobject
     // @param object objHtmlTag HTMLObject
     // @param string tagName タグ名
     // @return object objHtmlTag HTMLObject 
     //
     ************************************************/
     function setAttrDetail( objAttr, objHtmlTag, tagName )
     {  
         tagName = tagName || '';

         for( var key in objAttr )
         {
             //タグ属性は必要ないので次に行く
             if( key === 'tag' ) continue;
             
             //selectはoptionでさらにループを回す必要があり
             if( tagName === 'select')
             {
                 objHtmlTag = setSelectAttr(objHtmlTag, key, objAttr[key] );
             }
             //select以外
             else
             {
                 objHtmlTag.attr( key , objAttr[key] );
             }

         }
         return objHtmlTag;
     }

     /************************************************
     // select属性をセットして戻す
     //
     // @param object objHtmlTag HTMLObject
     // @param key 各属性名
     // @param objAttrDetail 各属性の値
     // @return object objHtmlTag HTMLObject 
     //
     ************************************************/
     function setSelectAttr(objHtmlTag, key, objAttrDetail )
     {
         //まずはoption以外の属性をセット
         if( key !== 'option')
         {
             objHtmlTag.attr( key , objAttrDetail );
         }
         //optionタグをセット
         else if( key === 'option')
         {
             var ObjOption = objAttrDetail;
             var objObiotnLength = ObjOption.length;

             for( var j=0; j < objObiotnLength; j++ )
             {
                 //optionタグの生成
                 var optionTag =$('<option>');
                 optionTag.attr("value",ObjOption[j]['value']);
                 optionTag.text( ObjOption[j]['text']);

                 //selectに追加
                 objHtmlTag.append(optionTag);
             }

         }

         return objHtmlTag;

     }
});
