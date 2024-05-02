//External modules

//import inquirer from "inquirer"
const inquirer = require("inquirer")
const chalk = require("chalk")

//Internal modules
const fs = require("fs")

operation()

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer ?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then()
    .catch((err) => console.log(err))
}
