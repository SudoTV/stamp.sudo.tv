/**
 * @author WMXPY
 */

const Readline = require('readline');

exports.readlineQuestion = (question) => {

    const readline = Readline.createInterface(
        process.stdin,
        process.stdout,
    );

    return new Promise((resolve) => {

        readline.question(`[~~~~] ${question}: `, (answer) => {

            resolve(answer);

            readline.close();
        });

    });
};