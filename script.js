function compareNumeric(a, b) { // функция для метода sort
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
}

function createForm() { // создаем форму и вставляем на страницу
    var form = document.createElement("form");
    document.body.appendChild(form);

    function createField() { // создаем поле ввода и вставляем в форму
        var fieldInput = document.createElement("input");
        fieldInput.id = "field";
        fieldInput.type = "text";
        form.appendChild(fieldInput);
    }

    function createButton() { // создаем кнопку и вставляем в форму
        var button = document.createElement("input");
        button.id = "butt";
        button.type = "submit";
        button.value = "test";
        form.appendChild(button);
    }
    createField();
    createButton();
}

function textField() {
    /*Алгоритм если у нас по центру полиндрома 1 символ   */
    var str = document.getElementById("field").value;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 2]) {
            arrStr.push(str.substring(i, i + 3));
            for (var j = 1; j < str.length; j++) {
                   if (str[i - j] == str[i + 2 + j]) {
                    arrStr.push(str.substring(i - j, i + 3 + j));
                } else {
                    break;
                }

            }
        }
    }
    /*Алгоритм если у нас по центру полиндрома 2 символа   */
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            arrStr.push(str.substring(i, i + 2));
            for (var j = 1; j < str.length; j++) {
                if (str[i - j] == str[i + j + 1]) {
                    arrStr.push(str.substring(i - j, i + j + 2));
                } else {
                    break;
                }
            }
        }
    }
}
function qSort(){ // подготавливаем массив для вывода убарая лишние полиндромы
    arrStr.sort(compareNumeric);
    console.log(arrStr);
    for (var i = 1; i < arrStr.length; i++){
        if(arrStr[0] == arrStr[1]){
            arrStr.splice(1,1);
            console.log(arrStr);
        }else{
            break;
        }
    }
}
function createList() { // функция которая обавляет список на страницу
    var ol = document.createElement('ol');
    for (var i = 0; i < arrStr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arrStr[i];
        ol.appendChild(li);
    }
    document.body.appendChild(ol);
    console.log(ol);
}
var arrStr = [];
createForm();
var but = document.getElementById("butt");
var del = document.getElementsByTagName('ol');
but.onclick = function(e) { // обработчик события клика на кнопку
    e.preventDefault();
    try {
        document.body.removeChild(del[0]);//удаляем придыдущий список
    } catch (err) {
        console.log(err);
    }
    textField();
    qSort();
    createList();

    var li = document.getElementsByTagName('li');
    console.log(li[0]);
    li[0].innerHTML = "<strong>" + arrStr[0] + "</strong>";// закрышиваем жирным самый большой полиндром
    arrStr = [];

};