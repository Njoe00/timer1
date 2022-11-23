
const argv1 = process.argv.slice(2);

const timer = (argv) => {    
  for (let val of argv) {
    if (!Number(val) || Math.sign(val) === -1) {
      continue;
    }
    setTimeout(()=> {
      process.stdout.write("\x07");
    },val * 1000);
  }

};

   

timer(argv1);