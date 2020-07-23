# AdvancedNodeStarter-blog-app

## Project Setup

- Run `npm install` on main route directory to install some dependecy.

- Run `npm install` in `client` folder where our ReactJs realted code exists.

- Start project serever: `npm run dev`


## Install redis on your system

- MacOS:
    - `brew install redis`
    - Start redis : `brew services start redis`
    - Check at it's running : `redis-cli ping`

- Windows:
    - Go to the releases page of the Redis for Windows repo: https://github.com/MicrosoftArchive/redis/releases
    - Download the 'Redis-x64-xxx.zip' file.  You can use any version.
    - Unzip the file.
    - n the newly created folder, run `redis-server.exe`
    - You should see a window appear that says redis is running on port 6379. 
