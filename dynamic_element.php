<?php

$json_file_path = 'dynamic_element.json';
$furits = @$_POST['fruits'] ?: '';
$name = @$_POST['name'] ?: '';

//var_dump($furits);
//var_dump($names);
$elements = [];
if (isset($_POST['submit'])) {
    // バリデーションで引っかかってきた時
    $count = count($furits);
    for ($i = 0; $i < $count; $i++) {
        $elements[] = [
            'fruits' => $furits[$i],
            'name' => $name[$i]
        ];
    }
} else {
    // 投稿ボタン押してない時
    if (file_exists($json_file_path)) {
        $elements = json_decode(file_get_contents($json_file_path), true);
    }
}
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://xmlns.jcp.org/jsf/html">
    <head>
   <title>test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="./css/bundle.css" />
    <body>
    <!-- jsはhtmlの後に読み込ませないとエラーになるので注意 -->
    <script src="./libs/js/main.js"></script>
    <script>
        $(function() {

            let line_count = $('#inbody tr').length
            let line_id;

            init()

            $(document).on("click", ".add", function(){
                add_row()
            })
            $(document).on("click", ".remove", function(){
                remove_row($(this))
            })

            function init() {
                
                $('.select2').select2();
                if (line_count > 0) {
                    line_id = line_count
                } else {
                    line_id = 0;
                    add_row()
                }
            }

            function add_row() {
                line_id++;
                // 古いやり方
                //$('#raw_line tr').attr('id', 'line_' + line_id);
                //let tr = $('#raw_line').html();
                //$(tr).find('.select2').select2()
                //$('#raw_line tr').attr('id', '');
                //$('#inbody').append(tr);

                // https://qiita.com/betti/items/da622a6e5af7135f3e67
                $clone = $("#raw_line tr").clone(true);
                $clone.attr('id', 'line_' + line_id);
                // 動的要素に対して付与
                $clone.find("select").select2();
                $clone.appendTo("#inbody");
            }

            function remove_row(ele) {
                $(ele).parents('.line').remove()
            }
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
                <?php foreach ($elements as $index => $element) : ?>
                <tr class="line" id="line_<?php echo ($index + 1); ?>">
                    <td width="100px">
                        <select name="fruits[]" class="select2" value="" style="width:80px;">
                            <option value="1" <?php echo ($element['fruits'] === '1') ? 'selected' : ''; ?>>りんご</option>
                            <option value="2" <?php echo ($element['fruits'] === '2') ? 'selected' : ''; ?>>かき</option>
                            <option value="3" <?php echo ($element['fruits'] === '3') ? 'selected' : ''; ?>>みかん</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="name[]" value="<?php echo $element['name'];?>">
                    </td>
                    <td>
                        <input type="button" value="×" class="remove">
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div>
        <input type="button" value="＋" class="add">
        <input type="submit" name="submit" value="投稿">
    </div>
    </form>
    <table style="display:none" >
        <tbody id="raw_line">
            <tr class="line" id="">
                <td width="100px">
                    <select name="fruits[]" style="width:80px;">
                        <option value="1">りんご</option>
                        <option value="2">かき</option>
                        <option value="3">みかん</option>
                    </select>
                </td>
                <td>
                    <input type="text" name="name[]" value="">
                </td>
                <td>
                    <input type="button" value="×" class="remove">
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </body>
</html>
