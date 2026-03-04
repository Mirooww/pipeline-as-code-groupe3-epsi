## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn more

Cett application est hébergé en ligne grâce à Heroku,
Acceccible ici : [https://pipeline-as-code-groupe3-b4fd657baa23.herokuapp.com/](https://pipeline-as-code-groupe3-b4fd657baa23.herokuapp.com/)


## Télécharger Jenkins

Lancer docker sur sa machine

Créer le network jenkins
```bash
docker network create jenkins
```
```bash
docker run \
  --name jenkins-docker \
  --rm \
  --detach \
  --privileged \
  --network jenkins \
  --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 2376:2376 \
  docker:dind \
  --storage-driver overlay2
```
Ensuite vous devrez lancer l'image de Jenkins :
```bash
docker build -t myjenkins-blueocean:2.541.2-1 .
```
Ensuite vous devrez lancer un autre container qui est :
```bash
docker run \
--name jenkins-blueocean \
--restart=on-failure \
--detach \
--network jenkins \
--env DOCKER_HOST=tcp://docker:2376 \
--env DOCKER_CERT_PATH=/certs/client \
--env DOCKER_TLS_VERIFY=1 \
--publish 8080:8080 \
--publish 50000:50000 \
--volume jenkins-data:/var/jenkins_home \
--volume jenkins-docker-certs:/certs/client:ro \
myjenkins-blueocean:2.541.2-1 
```

Le premier permet de build des app avec jenkins en utilisant docker,
et l'autre permet de se connecter à l'UI jenkins

Après avoir lancé le 2éme container,
dans les logs docker, vous trouverez votre mdp admin