// const express = require('express')
import express from "express";
import autoPing from "./service/autoPing.mjs";
const app = express();
const port = 11600;

import fruitInfo from "./store/fruitInfo.mjs";

autoPing.servicePing();

app.get("/", (request, response) => {
  response.send("frinfo service");
});

app.get("/api/fruit/:id", (requets, response) => {
  let check = false;
  let id = "";
  for (let i = 0; i < 10; i++) {
    if (requets.params.id == i) {
      check = true;
      id = i;
    }
  }
  if (check) {
    console.log("================= BEGIN FUNC ================");
    let nutriData = fruitInfo.fruitNutri();
    console.log("GET >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nid =", id);
    let nameData = fruitInfo.fruitName();
    response.json(nutriData[id]);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("RES");
    console.log(nameData[id]);
    console.log("================== END FUNC =================");
  } else response.send("service fail");
});

app.get("/api/fruit/:name", (requets, response) => {
  let check = false;
  let id = "";
  for (let i = 0; i < 10; i++) {
    if (requets.params.id == i) {
      check = true;
      id = i;
    }
  }
  if (check) {
    let data = fruitInfo;
    response.json(data[id]);
  } else response.send("service fail");
});

app.listen(port, () => {
  // console.log(`Service running, port ${port}`)
  let d = new Date();
  let time1 = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
  let time2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(`[INFO]:`, time1, time2, `frinfo started, PORT: ${port}`);
});
