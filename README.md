# React Native for Web - Sample
This project is a demo of how React Native components can be used in a web browser to create web and mobile apps with only one codebase

## Install
```
cd react-native-web
yarn install
```

## Run
```
yarn start:expo     //Run expo console
yarn start:web      //Run web version
yarn start:ios      //Run IOS app (macOS only)
yarn start:android  //Run android app on emulator or a plugged device
```

### Docker Build

```
docker build -t docker.icasei.com.br/react-native-web .

docker run --name react-native-web -dit docker.icasei.com.br/react-native-web

docker exec -it react-native-web /bin/sh

docker stop react-native-web

docker rm -f react-native-web

docker run --name react-native-web -p 3000:3000 -d docker.icasei.com.br/react-native-web

docker logs react-native-web
```