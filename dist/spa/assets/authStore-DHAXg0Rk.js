import{E as t}from"./index-DzhYKUcU.js";const a=t("counter",{state:()=>({auth:!!localStorage.getItem("auth"),adminEmail:"admin@example.com",adminPass:"123456"}),actions:{login(){this.auth=!0,localStorage.setItem("auth","enabled")},logout(){this.auth=!1,localStorage.removeItem("auth")}}});export{a as u};
