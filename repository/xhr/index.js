var $input, $submit, $res;
window.onload = function(){
    $input = document.querySelector('input[name="keyword"]');
    $submit = document.querySelector('.submit');
    $title = document.querySelector('.res .title');
    $content = document.querySelector('.res .content');

    
    $submit.addEventListener('click', function(){
        keyword = $input ? $input.value : '';

        var xhr = createXHR();
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200) && xhr.status < 300 || xhr.status == 304) {
                    debugger;
                    var res;
                    try {
                        res = JSON.parse(xhr.responseText);
                        $title.innerText = res.title;
                        $content.innerText = res.content;
                    } catch (error) {
                        res = xhr.responseText;
                        $title.innerText = res;
                        $content.innerText = '';
                    }
                } else {
                    alert("Request Was unsuccessful: " + xhr.status);
                }
            }
        }
    
        xhr.open("get", "http://i.itpk.cn/api.php?question="+keyword, false);
        
        xhr.send();

    });


}