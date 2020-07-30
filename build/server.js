// обект и его функция определяющие по какому url запросу какую страницу загружать
var Route = {};
Route.path = function (route, callback) {
    Route[route] = callback;
};

function doGet(e) {
    // проверка, указан ли пользователь в системе
    /* if (!setSessionParameters()) return; */
    // проверка налиция в таблицах данных для сессии
    //if(!setDataForSession()) return;
    // непосредственно сам роутинг
    Route.path("main", loadMainPage);
    if (Route[e.parameters.v]) {
        return Route[e.parameters.v]();
    };
}
// рендерит наши шаблоны (https://www.youtube.com/watch?v=9LHPU0dYyrU)
function render(file, argsObject) {
    var template = HtmlService.createTemplateFromFile(file)
    if (argsObject) {
        var keys = Object.keys(argsObject);
        keys.forEach(function (key) {
            template[key] = argsObject[key];
        });
        return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
};
// эта маленькая функция нужна для встраивания кода в  HTML страницу
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
};

function loadMainPage() {
    return render("index", {});
};



function replace() {
  let template = DriveApp.getFileById('17ArfFaQXLllDjEfsz_TLgPRQVkMPKpIm4YMGauAQ4V4');
  let templateName = template.getName();
  let newDocID = template.makeCopy().setName(templateName + ' copy').getId();
  let newDocFile = DocumentApp.openById(newDocID);
  
  var body = newDocFile.getBody();
  body.replaceText('{clientName}', "Apps Script");
}

