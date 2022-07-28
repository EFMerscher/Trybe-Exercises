Lista de comandos utilizados para solução dos exercícios

3. docker pull debian:stable-slim
4. docker container run -it debian:stable-slim || docker container create -it debian:stable-slim
5. cat /etc/*-release
6. exit
7. docker ps -l || docker container ls -l || docker container ps -a
8. docker start ID/NAME
9. docker attach ID/NAME
10. cat /etc/debian_version
11. exit
12. docker container rm ID/NAME
13. docker run -it --rm andrius/ascii-patrol
14. ctrl + c