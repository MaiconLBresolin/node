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
    .then((answer) => {
      const action = answer["action"]

      if (action === "Criar conta") {
        createAccount()
      }
    })
    .catch((err) => console.log(err))
}

//create account

function createAccount() {
  console.log(chalk.bgGreen.black("Parabens por escolher o nosso banco"))
  console.log(chalk.green("Defina as opções de sua conta a seguir"))
}
