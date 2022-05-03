# Zadanie1
*Zadanie 1 z Programowanie Aplikacji w Chmurze Obliczeniowej*

## 1. Program serwera
https://github.com/pzrwk/zadanie1/blob/main/index.js

## 2. Dockerfile
https://github.com/pzrwk/zadanie1/blob/main/Dockerfile

## 3. Użyte komendy


```
1. docker build -t zad1:v0.1 .
```

```
2. docker run -d --rm --name zad1 -p 3000:3000 zad1:v0.1
```

```dockerfile
3. docker logs zad1
```

```
4. docker history zad1:v0.1
```

![Wynik dzialania strony](https://imgur.com/JW5G6JL)