<?php

    $json_file_path = 'dynamic_element.json';
    $furits = @$_POST['fruits'] ?: '';
    $names = @$_POST['name'] ?: '';

    //var_dump($furits);
    //var_dump($names);
    $elements = [];
    if (isset($_POST['sumit'])) {

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
    <body>
    <!-- jsはhtmlの後に読み込ませないとエラーになるので注意 -->
    <script src="./libs/js/main.js"></script>
    <script>
        $(function() {

            let line_count = $('#inbody tr').length
            let line_id;

            init()

            console.log(line_id);
            $(document).on("click", ".add", function(){
                add_row()
            })
            $(document).on("click", ".remove", function(){
                remove_row($(this))
            })

            function init() {
                if (line_count > 0) {
                    line_id = line_count
                } else {
                    line_id = 0;
                    add_row()
                }
            }

            function add_row() {
                line_id++;
                $('#raw_line tr').attr('id', 'line_' + line_id);
                let tr = $('#raw_line').html();
                $('#raw_line tr').attr('id', '');
                $('#inbody').append(tr);
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
                    <td>
                        <select name="fruits[]" class="select2">
                            <option value="1" <?php echo ($element['fruits'] === '1') ? 'selected' : ''; ?>>りんご</option>
                            <option value="2" <?php echo ($element['fruits'] === '2') ? 'selected' : ''; ?>>かき</option>
                            <option value="3" <?php echo ($element['fruits'] === '3') ? 'selected' : ''; ?>>みかん</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="name[]" value="<?php echo $element['name'];?>">
                    </td>
                    <td>
                        <input type="button" value="＋" class="add" >
                        <input type="button" value="×" class="remove">
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div>
        <input type="submit" name="submit" value="投稿">
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
                    <input type="text" name="name[]" value="">
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
