Docker is powerful tool that allows to install particular dependencies inside Docker's containers not directly in a developer machine.

Docker can handle various dependencies like:
- DBs (mongo, postgres, maria db)
- npm, yarn
- Redis databases
- NodeJS
- Basically everything that can be installed.

Also we can create our own images and store them e.g.: in AWS ECR.

For example. We can create an HTTP API in NodeJS. Do a docker image of the whole running application and export it to the AWS ECR.

The perfect example here is how Convox works. We build an image, upload it to ECR and then it is being downloaded and run on EC2.

Speaking of ECR. There is an option to store the same image in different AWS regions. That is how primary and fallback apps are handled in CNP Live system.

Using Docker has other strong advantages:
- Security - sometimes a company does not allow to install external deps on a local machine, use Docker then.
- Mirroring - we can easily download and run a docker image of production application on our local machine and debug it.

How to create a docker image? Simply define your Dockerfile and run particular command.