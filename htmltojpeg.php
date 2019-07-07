<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/AWSS3Util.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$aws3Util = new AWSS3Util([
    'aws_access_key' => getenv('ACCESS_KEY'),
    'aws_secret_key' => getenv('SECRET_KEY'),
    'region' => getenv('REGION')
]);

if (isset($_POST['raw_image'])) {
    $image64Obj = $_POST['raw_image'];
    $imageParts = explode(";base64,", $image64Obj);
    $imageTypeAux = explode("image/", $imageParts[0]);
    $mimeType = $imageTypeAux[1];
    $body = base64_decode($imageParts[1]);
    $aws3Util->putS3ContentsBinary(getenv('BUCKET_NAME'), 'sample_image/' . 'hogehoge.png', $body, $mimeType);
}

?>
<html>
<head>
<meta charset="utf-8" />
<script src="./bower_components/jquery/dist/jquery.min.js"></script>
<script src="./html2canvas.min.js" charset="utf-8"></script>
<script type="text/javascript">
    $(function(){
        $('.send').on('click',() =>{

            var target = document.getElementById("target");
            html2canvas(target).then(function(canvas){
                let imgData = canvas.toDataURL();
                document.getElementById("hogehoge").value = imgData
                $('#form1').submit();
            }).catch(function(err){
                alert(err);
            });
            return false;
        })

    })
</script>
<style type="text/css">
#target{
    width:682px;
    height: 539px;
    background: url('./sample_image/matui_rena.jpg') center top;
    background-size: cover;
    position: relative;
}
.main_title{
    border: none;
    background: transparent;
    padding: 10px;
    position: absolute;
    bottom:20px;
    right:30px;
    font-size: 1.4rem;
    min-width: 300px;
}

</style>
<body>
    <form action="" method="POST" id="form1">
        <div id="target">
            <input type="text" name="main_title" value="" class="main_title" placeholder="コメントを入れてください。">
        </div>
        <input type="hidden" name="raw_image" id="hogehoge" value="">
        <input type="submit" name="regist" class="send" value="送信する">
    </form>
</body>
</html>
