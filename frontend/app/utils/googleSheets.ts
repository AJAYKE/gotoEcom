export const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw4IEaUV-BhT3mu6acHqDgHYKFga8B0q_2RSeNdYp689qi0jkeSMwwK8xaN44ABckE/exec";

// function doPost(e) {
//   try {
//     const data = JSON.parse(e.postData.getDataAsString());
//     let sheet;
//     const row = [];

//     if (data.formType === "query") {
//       sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Queries");
//       if (!sheet) {
//         sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Queries");
//         sheet.appendRow(["Name", "Email", "Message", "Timestamp"]);
//       }
//       row.push(data.name || "");
//       row.push(data.email);
//       row.push(data.message || "");
//       row.push(new Date());
//     } else if (data.formType === "interest") {
//       sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interest");
//       if (!sheet) {
//         sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Interest");
//         sheet.appendRow(["Email", "Timestamp"]);
//       }
//       row.push(data.email);
//       row.push(new Date());
//     } else {
//       return ContentService.createTextOutput("Notok");
//     }

//     sheet.appendRow(row);
//     return ContentService.createTextOutput("ok");
//   } catch (error) {
//     return ContentService.createTextOutput("Notok");
//   }
// }
