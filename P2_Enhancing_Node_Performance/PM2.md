### PM2 Installation

- Documentation for PM2 module,
    - https://github.com/Unitech/pm2

- Install pm2
    - `npm install -g pm2`


### PM2 Configuration

- `pm2 start pm2_index.js -i 0`
    - `-i 0` : Here it going to setup a number of instances equal to the number of logical CPU cores.
    - logical cores is the number of physical times the number of threads of that can process at any given point time.

- `pm2 list`
    - give health of all instances

- `pm2 show <name_of_one_of_instances>`
    - We will get some much more detailed information about everything that's going on in that set of childern.

- `pm2 monit`
    - It will give some cool looking deshboard.

- `pm2 delete  pm2_index`
