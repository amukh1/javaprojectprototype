const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let servers = ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop']

let scannings = {
    home: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop'],
    n00dles: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop'],
    sushi_shop: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop'],
    eps_security: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop'],
    toyshop: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop'],
    ramenshop: ['home', 'n00dles', 'sushi_shop', 'eps_security', 'toyshop', 'ramenshop']
}

let dataModel = ['RAM', 'MEMORY', 'ARCHITECTURE', 'OS']
let serverData = {
    home: ["16gb", "32gb", "x86", "Linux x GNU"],
    n00dles: ["8gb", "16gb", "x64", "Linux x GNU"],
    sushi_shop: ["8gb", "16gb", "x64", "Linux x GNU"],
    eps_security: ["8gb", "16gb", "x64", "Linux x GNU"],
    toyshop: ["8gb", "16gb", "x64", "Linux x GNU"],
    ramenshop: ["8gb", "16gb", "x64", "Linux x GNU"]
}

function scan(server) {
    console.log('Scanning.. ' + server + '..');
    let scanning = scannings[server]
    let result = "------------------\n";
    scanning.forEach((element,i) => {
        result += i + ". " + element + "\n"
    });
    result += "------------------\n";
    return result;
}

function analyze(server) {
    console.log('Analyzing.. ' + server + '..');
    let data = serverData[server]
    let result = "------------------\n";
    data.forEach((element,i) => {
        result += dataModel[i] + ": " + element + "\n"
    });
    result += "------------------\n";
    return result;
}

function main(server) {
    console.log('You are currently in.. ' + server + '! ' + serverData[server][3] + "\n\n");
    readline.question('>', command => {
        switch(command.toLowerCase().split(" ")[0]) {
            case 'scan':
                console.log(scan(server));
                main(server);
                break;
            case 'analyze':
                console.log(analyze(server));
                main(server);
                break;
            case 'connect':
                main(command.toLowerCase().split(" ")[1]);
                break
            default:
                console.log('Command not found!');
                main(server);
        }
        // readline.close();
      });
}

main("home");