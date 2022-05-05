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

## 4. Użyte komendy

```
1. sudo apt install qemu-user-static
```

```
2. docker buildx create --name zadanie1
```

```
3. docker buildx use zadanie1
```

```
4. docker buildx inspect --bootstrap
```

```
5. docker buildx build -t piotrpozarowszczyk1/zad1:sv --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .
```

# DODATEK 1

https://github.com/pzrwk/zadanie1/tree/main/.github/workflows/main.yml

https://github.com/pzrwk/zadanie1/blob/main/.github/workflows/dod1_2.yml
