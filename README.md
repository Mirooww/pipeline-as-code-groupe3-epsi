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