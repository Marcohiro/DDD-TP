import "reflect-metadata";
import {createConnection} from "typeorm";

const express = require('express');
const app = express();

const port = 3040;
createConnection().then(async connection => {



}).catch(error => console.log(error));
