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

function findTemplateID(options) {
    let docType = options["select-doc-type"];
    let docSubType = options["select-doc-subtype"];
    let devObject = options["select-development-project"];
    return (googleDocTemlatesID[docType][docSubType][devObject]);
};

function createFolderForNewDocs(folderName) {
    const folders = DriveApp.getFolders();
    // проверяем, есть ли у нас в корневой директории родительская папка
    let finalFolder;
    folderName = `${folderName} (от ${("0" + new Date().getDate()).slice(-2)}.${("0" + (new Date().getMonth() + 1)).slice(-2)}.${new Date().getFullYear()})`;
    while (folders.hasNext()) {
        const parentFolder = folders.next();
        if (parentFolder.getName() === 'Генератор документов') {
            finalFolder = parentFolder.createFolder(folderName);
            return finalFolder;
        }
    };
    const newParentFolder = DriveApp.createFolder("Генератор документов");
    finalFolder = newParentFolder.createFolder(folderName);
    return finalFolder;
}


function generateDocs(selectedOptions, tableData) {
    const options = JSON.parse(selectedOptions);
    const data = JSON.parse(tableData);

    let folderName = "";
    for (let key in options) {
        folderName += Dictionary[options[key]] + " "
    }



    const templateID = findTemplateID(options);
    const folderForDocs = createFolderForNewDocs(folderName)
    const folderURL = folderForDocs.getUrl();
    // проход по строкам таблицы
    data.forEach((elem, index) => {
        // создаем копию шаблона
        const template = DriveApp.getFileById(templateID);
        const templateName = template.getName();
        const newDocID = template.makeCopy(folderForDocs).setName(`${elem.clientName} (${templateName})`).getId();
        const newDocFile = DocumentApp.openById(newDocID);
        const body = newDocFile.getBody();
        // выполняем замену текста для каждого поля
        for (let key in elem) {
            body.replaceText("{" + key + "}", elem[key]);
        }
    })
    return folderURL;
}

