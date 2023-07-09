# Welcome!!!, Welcome to the TA Academy "Archnet" local dev, you have chosen, or have been chosen........Freeman!

### What is ArchNet?
It's an Architecture assessment framework tool.

---
# 🐞🐞🐞 Local Dev setup 🐞🐞🐞

To make life "easier" we're utilising git sub modules to keep track and integrate all 4 repositories for rapid development.


## Case study repositories
[CS1 Git Hub Link](https://github.com/waliur/TA-Academy-ArchNet-CS1) --- [CS2 Git Hub Link](https://github.com/waliur/TA-Academy-ArchNet-CS2) --- [CS3 Git Hub Link](https://github.com/waliur/TA-Academy-ArchNet-CS3) --- [CS4 Git Hub Link](https://github.com/waliur/TA-Academy-ArchNet-CS4)


```
git@github.com:waliur/TA-Academy-ArchNet-CS1.git
git@github.com:waliur/TA-Academy-ArchNet-CS3.git
git@github.com:waliur/TA-Academy-ArchNet-CS4.git
git@github.com:waliur/TA-Academy-ArchNet-CS4.git
```

Once downloaded, the submodule paths are /CS1, /CS2, /CS3, /CS4:

```
drwxr-xr-x@ 7 waliur.rahman  staff   224B  9 Jul 21:47 CS1
drwxr-xr-x@ 7 waliur.rahman  staff   224B  9 Jul 21:52 CS2
drwxr-xr-x@ 7 waliur.rahman  staff   224B  9 Jul 21:53 CS3
drwxr-xr-x@ 7 waliur.rahman  staff   224B  9 Jul 21:53 CS4
-rwx------@ 1 waliur.rahman  staff   1.8K  8 Jul 14:18 docker-compose.yml
drwx------  3 waliur.rahman  staff    96B 17 Jun 12:05 nginx
```

> You can you can push, pull etc, as normal for each submodule

---
# Setup and install

```
git clone --recursive git@github.com:waliur/TA-Academy-ArchNet-Docker-SuperProject.git
```

> Note: the `--recursive` flag auto pulls all git sub modules! yay!

### MAC: Add ssh key to Keychain

To avoid having to enter your SSH password constantly you could add your SSH key to Keychain:

```
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

## Node install & React build

You'll need to install node packages for all 4 code bases.

### Windows & Mac

cd into each Node codebase, `/CS1/node/`, `/CS2/node/`, `/CS3/node/`, `/CS4/node/` and run:

```
npm install 
```

cd into each React codebase, `/CS1/react/`, `/CS2/react/`, `/CS3/react/`, `/CS4/react/` and run:

```
npm install && npm run build
```

### Mac

**Single onliner for all 4 codebases:** 

**cd into base docker directory**

```
cd TA-Academy-ArchNet-Docker-SuperProject/docker
```
Then run this super oneliner install Node/React modules and build react for all 4 code bases:

```
for d in CS*/node/; do ( cd "$d" && npm install ); done && for d in CS*/react/; do ( cd "$d" && npm install && npm run build ); done
```

# Run docker

Oneliner to stop, start and display all docker containers.

```
docker-compose down; docker-compose up -d ; docker-compose ps
```

# Load pages

```
http://localhost:8080/
http://localhost:8080/CS1/
http://localhost:8080/CS2/
http://localhost:8080/CS3/
http://localhost:8080/CS4/
```



---
# Submodule Commands

Manually pull, initialise and display status of submodules
```
git submodule update --init --recursive ; git submodule status
```

Check status

```
git submodule status
```

Checkout branch on all repos

```
git submodule foreach 'git checkout master'
```

# Frequently used Git commands

Add everything, replace last commit
```
git add -A && git commit --amend && git push --force
```

Remove tracked files ignored by `.gitignore` entry

```
git rm -r --cached .
```