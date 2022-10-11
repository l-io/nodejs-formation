import chalk from "chalk";
import getNotes from "./notes.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      console.log("Title: " + argv.title);
      console.log("Body: " + argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {},
    handler: function (argv) {
      console.log("Removing a new note!");
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {},
    handler: function (argv) {
      console.log("Reading a new note!");
    },
  })
  .command({
    command: "list",
    describe: "List a note",
    builder: {},
    handler: function (argv) {
      console.log("Listing a new note!");
    },
  })
  .demandCommand(1)
  .parse();
