# blogs
Quire Blogs

installation steps for mac:
(if the version is specified, please don't install other version)

install brew

install ruby at least v. 2.0.0

install node

install jekyll 2.5.3

install gem jekyll-paginate 1.1.0

install gem redcarpet 3.3.2

## Build with docker
### Prerequisite
* To improve Docker disk access speed on macOS, now require docker-sync to be installed, if you want to see live preview
* Use `sudo gem install docker-sync` or `gem install --user-install docker-sync` to install docker-sync
### Install docker image
`./installDockerBuild`

### Build with docker image
`./dockerBuild`

## Run blog server
### Start blog server
* `docker-sync start`
* `./startWebsite `
* Then access `http:localhost:4000`
### Stop blog server
* `./stopWebsite `
* `docker-sync stop`
