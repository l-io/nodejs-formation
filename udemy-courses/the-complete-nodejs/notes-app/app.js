import chalk from "chalk";
import getNotes from "./notes.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "remove",
    "Remove a note",
    () => {},
    (argv) => {
      console.log("Removing a new note!");
    }
  )
  .command(
    "add",
    "Add a note",
    () => {},
    (argv) => {
      console.log("Adding a new note!");
    }
  )
  .command(
    "list",
    "List your notes",
    () => {},
    (argv) => {
      console.log("Listing out all notes!");
    }
  )
  .command(
    "read",
    "Read a note",
    () => {},
    (argv) => {
      console.log("Reading a note!");
    }
  )
  .demandCommand(1)
  .parse();
