function replace() {
  let template = DriveApp.getFileById('17ArfFaQXLllDjEfsz_TLgPRQVkMPKpIm4YMGauAQ4V4');
  let templateName = template.getName();
  let newDocID = template.makeCopy().setName(templateName + ' copy').getId();
  let newDocFile = DocumentApp.openById(newDocID);
  
  var body = newDocFile.getBody();
  body.replaceText('{clientName}', "Apps Script");
}

