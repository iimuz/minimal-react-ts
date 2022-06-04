# Minimal webpack + typescript + react

Webpack + React + Typescript の環境をなるべく依存関係を少なくして実現するサンプルコード。

環境構築にあたってインストールに利用したコマンドは下記の通り。
複数行のコマンドをまとめても問題はない。

```sh
npm init
npm i -D webpack webpack-cli typescript ts-loader
npm i -S react react-dom
npm i -D @types/react @types/react-dom
npm i -D html-webpack-plugin
npm i -D webpack-dev-server
npm i -D @types/node
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import prettier
npm i -D eslint
```

- 開発時にサーバーを立ち上げるために webpack-dev-server も利用
- htmlをsrcディレクトリからbuildディレクトリへコピーするために html-webpack-pluginを利用

下記のコマンドが利用できるように設定している。

- `npm run build`: buildディレクトリ以下にファイル群を作成する。
- `npm run start`: サーバーを起動し、ファイル変更を検知してリロードする。

- [最新版TypeScript+webpack 5の 環境構築まとめ][link00]: 主に参考にさせてもらったサイト。

[link00]: https://ics.media/entry/16329/#webpack-ts-react
