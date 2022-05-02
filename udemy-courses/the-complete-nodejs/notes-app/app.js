import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import getNotes from './notes.js';

const yarg = yargs(hideBin(process.argv));

// Customize yargs version
yarg.version = '1.1.0';

//Create add command
yarg.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
    }
});
