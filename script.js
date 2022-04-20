/**npm install countries-phone-masks )Маски стран(*/

pokaz()
function pokaz() {
    var pretty = JSON.stringify(table6, undefined, 2);
    document.getElementById("text").value = pretty 
}

//Сортировка
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tbody");
    switching = true;
    // Установите направление сортировки по возрастанию::
    dir = "asc";
    /* Сделайте цикл, который будет продолжаться до тех пор, пока
    переключения не было: */
    while (switching) {
        // Начните с фразы: переключение не выполняется
        switching = false;
        rows = table.getElementsByTagName("TR");
        /* Перебрать все строки таблицы (кроме
        первый, который содержит заголовки таблиц) */
        for (i = 0; i < (rows.length - 1); i++) {
            // Начните с того, что не должно быть никаких переключений:
            shouldSwitch = false;
            /* Получите два элемента, которые вы хотите сравнить,
            один из текущей строки и один из следующего */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*  Проверьте, должны ли две строки поменяться местами,
            в зависимости от направления, по возрастанию или по убыванию:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // Если это так, пометьте как переключатель и разорвите цикл:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // Если это так, пометьте как переключатель и разорвите цикл
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* Если переключатель отмечен, сделайте его
            и отметьте, что переключение было сделано: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Каждый раз, когда выполняется переключение, увеличивайте это значение на 1:
            switchcount ++;
        } else {
            /* Если переключение не было выполнено И направление "возрастание",
            установите направление на «desc» и снова запустите цикл while. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//Валидация
function ValidName()
        {

            valid = true;

            if ( document.getElementById('name').value == "" )
            {
                alert ( "Пожалуйста заполните поле 'Ваше имя'." );
                valid = false;
            }
            else ValidMail();
};
function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('numbe').value;
    var valid = re.test(myPhone);
    if (valid) output = ValidMail()
    else output = alert ('Номер телефона введен неправильно!');

    return valid;
};
function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = f1()
    else output = alert ('Адрес электронной почты введен неправильно!');

    return valid;
}

//Редактирование
function edit_row(r) {

    r.style.display="none";

    var i = r.parentNode.parentNode.parentNode.parentNode;
    var j = r.parentNode.parentNode;

        const nodeSave = j.childNodes[3].childNodes[1];
            nodeSave.style.display="block";
        
        i.style.filter="brightness(90%)";

        var name=i.cells[1];
        var birth=i.cells[2];
        var numbe=i.cells[3];
        var email=i.cells[4];
        var country=i.cells[5]

        var name_data=name.innerHTML;
        var birth_data=birth.innerHTML;
        var numbe_data=numbe.innerHTML;
        var email_data=email.innerHTML;
        var country_data=country.innerHTML;

        name.innerHTML="<input type='text' id='name_text"+this.rowIndex+"' value='"+name_data+"' required><span class='form__erro'>Обязательное поле</span>";
        birth.innerHTML="<input type='text' id='birth_text"+this.rowIndex+"' value='"+birth_data+"'>";
        numbe.innerHTML="<input type='text' id='numbe_text"+this.rowIndex+"' value='"+numbe_data+"'><span class='form__erro'>Заполните полностью</span>";
        email.innerHTML="<input type='email' id='email_text"+this.rowIndex+"' value='"+email_data+"'><span class='form__erro'>example@site.com</span>";
        country.innerHTML="<input type='text' id='country_text"+this.rowIndex+"' value='"+country_data+"' list='lan'>";


        $( function() {
        $( "#birth_textundefined" ).datepicker();
        });

        $(function () {
            $('#numbe_textundefined').inputmask({"mask": "+7(999) 999-99-99"})
        });
}

//Сохранение
function save_row2(r)
    {

        valid = true;

        if ( document.getElementById('name_textundefined').value == "" )
        {
            alert ( "Пожалуйста заполните поле 'Ваше имя'." );
            valid = false;
        }
        else ValidMail2(r);
};
function ValidMail2(r) {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var myMail = document.getElementById('email_textundefined').value;
        var valid = re.test(myMail);
        if (valid) output = save_row(r)
        else output = alert ('Адрес электронной почты введен неправильно!');
    
        return valid;
}
function save_row(r)
{
   
    var i = r.parentNode.parentNode.parentNode.parentNode;

    var name_val=document.getElementById("name_textundefined").value;
    var birth_val=document.getElementById("birth_textundefined").value;
    var numbe_val=document.getElementById("numbe_textundefined").value;
    var email_val=document.getElementById("email_textundefined").value;
    var country_val=document.getElementById("country_textundefined").value;


    i.cells[1].innerHTML=name_val;
    i.cells[2].innerHTML=birth_val;
    i.cells[3].innerHTML=numbe_val;
    i.cells[4].innerHTML=email_val;
    i.cells[5].innerHTML=country_val;
    

    r.style.display="none";
    var j = r.parentNode.parentNode;
    const nodeEdit = j.childNodes[1].childNodes[1];
        nodeEdit.style.display="block";

    i.style.filter="none";
}

//Удалить ряд
function deleteRow(r) {
    var i = r.parentNode.parentNode.parentNode.parentNode;

    $( function() {
        $( "#dialog-confirm" ).dialog({
          resizable: false,
          height: "auto",
          width: 400,
          modal: true,
          buttons: {
            "Да": function() {
                document.getElementById("table").deleteRow(i.rowIndex);
              $( this ).dialog( "close" );
            },
            "Нет": function() {
              $( this ).dialog( "close" );
            }
          }
        });
        
    });




};

//Добавление ряда
function f1() {

    let tbody = document.getElementById('tbody');

    let nameInput = document.getElementById('name').value;
    let birthInput = document.getElementById('birth').value;
    let numbeInput = document.getElementById('numbe').value;
    let emailInput = document.getElementById('email').value;
    let countryInput = document.getElementById('country').value;

    let template = `
                <tr id="row" title="Перетащить" class="ui-state-default">
                    <td><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></td>
                    <td>${nameInput}</td>
                    <td>${birthInput}</td>
                    <td>${numbeInput}</td>
                    <td>${emailInput}</td>
                    <td>${countryInput}</td>
                    <td>
                        <div class="row">
                        <div class="col">
                            <button title="Редактировать" id="edit_button" value="Edit"  class="edit" onclick="edit_row(this)">
                            <span class="ui-icon ui-icon-pencil"><span></button>
                        </div>
                        <div class="col">
                            <button id="save_button" value="save" title="Сохранить" class="save" onclick="save_row2(this)">
                            <span class="ui-icon ui-icon-check"></span></button>
                        </div>
                        <div class="col">
                            <button title="Удалить" class="del" onclick = "deleteRow(this)"><span class="ui-icon ui-icon-trash"></span></button>
                        </div>
                        </div>
                    </td>
                </tr>`;

    tbody.innerHTML += template;
    $('.popup_inner').removeClass('active');
    $('.container').removeClass('active');

    $('form input[type="text"], form input[type="number"], form input[type="date"], form input[type="email"]').val('');
    //formClear()
    console.log (document.querySelectorAll('tr').length)


};
$('.add').on('click', () => {
    $('.container').addClass('active');
    $('.popup_inner').addClass('active');
}); 
$('.close').on('click', () => {
    $('.container').removeClass('active');
    $('.popup_inner').removeClass('active');
});
//Календарь
$( function() {
    $( "#birth" ).datepicker();
});

//Номер телефона
$(function () {
    $('#numbe').inputmask({"mask": "+7(999) 999-99-99"})
});

//Перетаскивание
$( function() {
    $( "#tbody" ).sortable({
    placeholder: "ui-state-highlight"
    });
    $( "#tbody" ).disableSelection();
});



//Загрузить JSON
function addJson() {

    //Объединение массивов без повтора
let tableElements = document.querySelectorAll("#row"), arrayWithData = [];

Array.from(tableElements, e => {
    let childNodes = e.getElementsByTagName("td");
  
    arrayWithData.push({
      name: childNodes[1].textContent,
      birth: childNodes[2].textContent,
      numbe: childNodes[3].textContent,
      email: childNodes[4].textContent,
      country: childNodes[5].textContent
    });
  });
    //Объединение массивов без повтора
function distinct(array, /*IEqualityComparer<TSource>*/ comparer) {
    let count = array.length;
    // if(!comparer) comparer = EqualityComparer.default(array[0]); // Для упрощения не используем компаратор по умолчанию
    let set = [];
    for (let i = 0; i < count; ++i) {
        let item = array[i];
        if (!set.some(e => comparer.equals(e, item))) {
            set.push(item);
        }
    }
    return set;
}
let arr3 = distinct(arrayWithData.concat(table6), { equals(v1, v2) { return v1.name === v2.name } })
    .sort((a, b) => (a.name > b.name) - (b.name > a.name));
    console.log (arr3)

    //Убирание из полученного массива того что есть в таблице
var arr3_values = Object.keys(arr3).map(function(key){
        return arr3[key];
    });
    
    var arrayWithData_values = Object.keys(arrayWithData).map(function(key){
        return arrayWithData[key];
    });
    
    var res = [];
    
    for (var arr3_key in arr3_values) {
        
        if (arrayWithData_values.indexOf(arr3_values[arr3_key]) == -1) {
            res.push(arr3_values[arr3_key]);
            
        }
    }

    //Собственно загрузка
    for(i = 0;i < res.length; i++){
        let template = `
                <tr id="row" title="Перетащить" class="ui-state-default">
                    <td><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></td>
                    <td>${res[i].name}</td>
                    <td>${res[i].birth}</td>
                    <td>${res[i].numbe}</td>
                    <td>${res[i].email}</td>
                    <td>${res[i].country}</td>
                    <td>
                        <div class="row">
                        <div class="col">
                            <button title="Редактировать" id="edit_button" value="Edit"  class="edit" onclick="edit_row(this)">
                            <span class="ui-icon ui-icon-pencil"><span></button>
                        </div>
                        <div class="col">
                            <button id="save_button" value="save" title="Сохранить" class="save" onclick="save_row2(this)">
                            <span class="ui-icon ui-icon-check"></span></button>
                        </div>
                        <div class="col">
                            <button title="Удалить" class="del" onclick = "deleteRow(this)"><span class="ui-icon ui-icon-trash"></span></button>
                        </div>
                        </div>
                    </td>
                </tr>`;
    
    tbody.innerHTML += template;
    }

$( function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
}

//Загрузить из ТекстАреа (НЕНУЖНАЯ)
function addJsonT() {

    var tabT = eval(document.getElementById("js-textarea").value)
    for(i = 0;i < tabT.length; i++){
        
        let template = `
                <tr id="row" title="Перетащить" class="ui-state-default">
                    <td><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></td>
                    <td>${tabT[i].name}</td>
                    <td>${tabT[i].birth}</td>
                    <td>${tabT[i].numbe}</td>
                    <td>${tabT[i].email}</td>
                    <td>${tabT[i].country}</td>
                    <td>
                        <div class="row">
                        <div class="col">
                            <button title="Редактировать" id="edit_button" value="Edit"  class="edit" onclick="edit_row(this)">
                            <span class="ui-icon ui-icon-pencil"><span></button>
                        </div>
                        <div class="col">
                            <button id="save_button" value="save" title="Сохранить" class="save" onclick="save_row2(this)">
                            <span class="ui-icon ui-icon-check"></span></button>
                        </div>
                        <div class="col">
                            <button title="Удалить" class="del" onclick = "deleteRow(this)"><span class="ui-icon ui-icon-trash"></span></button>
                        </div>
                        </div>
                    </td>
                </tr>`;

    tbody.innerHTML += template;
    }
}

//Сохранить
function saveJson() {

let tableElements = document.querySelectorAll("#row"), arrayWithData = [];

Array.from(tableElements, e => {
  let childNodes = e.getElementsByTagName("td");

  arrayWithData.push({
    name: childNodes[1].textContent,
    birth: childNodes[2].textContent,
    numbe: childNodes[3].textContent,
    email: childNodes[4].textContent,
    country: childNodes[5].textContent
  });
});
//Объединение массивов без повтора
function distinct(array, /*IEqualityComparer<TSource>*/ comparer) {
    let count = array.length;
    // if(!comparer) comparer = EqualityComparer.default(array[0]); // Для упрощения не используем компаратор по умолчанию
    let set = [];
    for (let i = 0; i < count; ++i) {
        let item = array[i];
        if (!set.some(e => comparer.equals(e, item))) {
            set.push(item);
        }
    }
    return set;
}
let arr3 = distinct(table6.concat(arrayWithData), { equals(v1, v2) { return v1.name === v2.name } })
    .sort((a, b) => (a.name > b.name) - (b.name > a.name));
    table6 = arr3
    pokaz()

}

//Удалить все
function delAll() {
    var tableHeaderRowCount = 0;
    var table = document.getElementById('tbody');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}














































/**
 * Добавление ряда $
 * function productUpdate() {
    if ($("#productname").val() != null && $("#productname").val() != '') {
        // Add product to Table
        productAddToTable();

        // Clear form fields
        formClear();

        // Focus to product name field
        $("#productname").focus();
    }
}


//Json
/**
function tableToJson() {
    let result = [];
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let trs = table.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++) {
        let tds = trs[i].getElementsByTagName("td");
        let obj = {};
            obj.name = tds[1].innerHTML;
            obj.birth = tds[2].innerHTML;
            obj.numbe = tds[3].innerHTML;
            obj.email = tds[4].innerHTML;
            obj.country = tds[5].innerHTML;

            result.push(obj);

    }
    return console.log(result), saveToPC()


    function saveToPC(){
        let str = result
    let blob = new Blob([str], {type: 'application/js'})
    let link = document.createElement("a")
    link.setAttribute("href", URL.createObjectURL(blob))
    link.setAttribute("download", "data.js")
    link.click()
    }



}


*/
/*
f3()
function f3() {
    var index, table = document.getElementById('tbody');
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[5].onclick = function ()
                {
                    var c = confirm("Точно удалить?");
                    if(c === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }

                    console.log(index);
                };

            };
};
*/



