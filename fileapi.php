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

if (isset($_POST['regist'])) {
    $image64Obj = $_POST['file_source'];
    $rawFileName = $_POST['sample_image'];
    $imageParts = explode(";base64,", $image64Obj);
    $imageTypeAux = explode("image/", $imageParts[0]);
    $mimeType = $imageTypeAux[1];
    $body = base64_decode($imageParts[1]);
    $aws3Util->putS3ContentsBinary(getenv('BUCKET_NAME'), 'sample_image/' . $rawFileName, $body, $mimeType);
}


?>
<html>
<head>
<meta charset="utf-8" />
<script src="./bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript">
    $(function(){
        $('.upload_button').on('click',()=> {
            $('input[type="file"][name="sample_image"]').trigger('click')
            return false
        })

        $('input[type="file"][name="sample_image"]').on('change', (event)=> {
            var obj = $(event.currentTarget)

            if (!obj || !obj.length || !obj[0].files || !obj[0].files.length) {
                return false
            }

            var fileObj = obj[0].files[0]

            var fr = new FileReader();
            fr.onload = function(e) {
                $('.image_hanei').attr('src', e.target.result)
                $('.file_source').val(e.target.result)
            }
            fr.readAsDataURL(fileObj)
            console.log('aaaa');
        })

        $('.delete_button').on('click', (event) =>{
            var element = $(event.currentTarget)
            element.parent().find('.fileinput').val('')
            element.parent().find('.image_hanei').attr('src', '')
            element.parent().find('.file_source').val('')
            return false
        })

    })
</script>
<style type="text/css">
.image_wrapper{
  width: 200px;
  height:200px;
}
.image_wrapper img{
    max-width: 100%;
}
.fileinput{
    display: none;
}
</style>
<body>
    <form action="" method="POST">
        <input type="file" name="sample_image" class="fileinput" >
        <button class="upload_button">UPLOAD</button>
        <button class="delete_button">DELETE</button>
        <input type="hidden" name="file_source" class="file_source" value="">
        <div class="image_wrapper">
            <img src="" class="image_hanei">
        </div>
        <input type="submit" name="regist" value="登録">
    </form>
</body>
</html>
