
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:h="http://xmlns.jcp.org/jsf/html">
    <head>
        <title>test</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="./libs/js/main.js"></script>
    <script src="./input_test.js?time=<?php echo time();?>"></script>
    <script src="./screen_shot_html2canvas.js?time=<?php echo time();?>"></script>
    <style media="screen">
        div{
            margin-top: 20px;
        }
    </style>
    <body>
        <div>Testtool</div>
        <form name="inputform" id="inputForm">
            <div id="inputArea">
                <div>
                    <input type="text" name="name" value="">
                </div>
                <div>
                    <label for="sex_1">
                        <input id="sex_1" type="radio" name="sex" value="1">男
                    </label>
                    <label for="sex_2">
                        <input id="sex_2" type="radio" name="sex" value="2">女
                    </label>
                </div>

                <div>
                    <select name="occupation">
                        <option value=""></option>
                        <?php foreach (['自営業者', '会社員', '公務員'] as $index => $occupation) :?>
                            <option value="<?=($index+1);?>"><?=$occupation;?></option>
                            <?=$traffice;?>
                        </label>
                        <?php endforeach;?>
                    </select>
                </div>

                <div>
                    <label for="is_admin">
                        <input type="checkbox" id="is_admin" name="is_admin" value="1">許可する
                    </label>
                </div>

                <div>
                    <?php foreach (['徒歩', '自転車', '車'] as $index => $traffice) :?>
                    <label for="traffic_<?=($index+1);?>" style="display:block;">
                        <input type="checkbox" id="traffic_<?php echo ($index+1);?>" name="traffic[]" value="<?php echo ($index+1);?>">
                        <?=$traffice;?>
                    </label>
                    <?php endforeach;?>

                </div>

                <div >
                    <?php for ($i = 0; $i < 3; $i++) :?>
                    商品名<input type="text" name="product_arr[<?=$i;?>][product_name]" value="">
                    　金額<input type="text" name="product_arr[<?=$i;?>][price]" value=""><br>
                    <?php endfor;?>
                </div>


                <div>
                    <textarea name="comment" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </form>
    </body>
</html>
