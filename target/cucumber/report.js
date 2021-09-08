$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlueBackground.feature");
formatter.feature({
  "line": 2,
  "name": "Validate the background color will change to sky blue",
  "description": "",
  "id": "validate-the-background-color-will-change-to-sky-blue",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ChangeBackground"
    }
  ]
});
formatter.before({
  "duration": 7281435100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.Set_SkyBlue_Background_button_exist()"
});
formatter.result({
  "duration": 3181689300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "White Background Change",
  "description": "",
  "id": "validate-the-background-color-will-change-to-sky-blue;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User clicks on \"Set White Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the background color will change to white  blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 16
    }
  ],
  "location": "StepsDefinitions.user_clicks_on(String)"
});
formatter.result({
  "duration": 50511600,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.StepsDefinitions.user_clicks_on(StepsDefinitions.java:57)\r\n\tat ✽.When User clicks on \"Set White Background\" button(features/SkyBlueBackground.feature:15)\r\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 967479900,
  "status": "passed"
});
});