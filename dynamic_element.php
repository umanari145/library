<?php

    $furits = @$_POST['fruits'] ?: '';
    $names = @$_POST['names'] ?: '';

    //var_dump($furits);
    //var_dump($names);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://xmlns.jcp.org/jsf/html">
    <head>
   <title>test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <body>
    <!-- jsはhtmlの後に読み込ませないとエラーになるので注意 -->
    <script src="./libs/js/main.js"></script>
    <script>
        $(function() {
            let line_id = 1;
            $(document).on("click", ".add", function(){
                line_id++;
                $('#raw_line tr').attr('id', 'line_' + line_id);
                let tr = $('#raw_line').html();
                $('#raw_line tr').attr('id', '');
                $('#inbody').append(tr);
            })
            $(document).on("click", ".remove", function(){
                $(this).parents('.line').remove()
            })
        })
    </script>
    <form action="" method="post">
    <div>
        <table>
            <thead>
                <tr>
                    <th>プルダウン</th>
                    <th>テキスト</th>
                    <th>ボタン</th>
                </tr>
            </thead>
            <tbody id="inbody">
                <tr class="line" id="line_1">
                    <td>
                        <select name="fruits[]" class="select2">
                            <option value="1">りんご</option>
                            <option value="2">かき</option>
                            <option value="3">みかん</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="names[]" value="">
                    </td>
                    <td>
                        <input type="button" value="＋" class="add" >
                        <input type="button" value="×" class="remove">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <input type="submit" value="投稿">
    </div>
    </form>
    <table style="display:none" >
        <tbody id="raw_line">
            <tr class="line" id="">
                <td>
                    <select name="fruits[]">
                        <option value="1">りんご</option>
                        <option value="2">かき</option>
                        <option value="3">みかん</option>
                    </select>
                </td>
                <td>
                    <input type="text" name="names[]" value="">
                </td>
                <td>
                    <input type="button" value="＋" class="add">
                    <input type="button" value="×" class="remove">
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </body>
</html>
