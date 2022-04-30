# zadanie1
Zadanie 1 z Programowanie Aplikacji w Chmurze Obliczeniowej

# 3. Użyte komendy

```
docker build -t zad1:v0.1 .
```

```
docker run -d --rm --name zad1 -p 3000:3000 zad1:v0.1
```

```dockerfile
docker logs zad1
```

```
docker history zad1:v0.1
```