# Railsコンテナ用Dockerfile

# イメージのベースラインにRuby2.6.5を指定
FROM ruby:2.6.5

# Railsに必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# yarnパッケージ管理ツールをインストール
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
deb https://dl.yarnpkg.com/debian/ stable main | tee -a /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install -y yarn

# Node.jsをインストール
RUN apt-get install -y nodejs npm && npm install n -g && n latest

# ルートディレクトリを作成
RUN mkdir /DPWiki

# 作業ディレクトリを指定
WORKDIR /DPWiki

# ローカルのGemfileとGemfile.lockをコピー
ADD ./src/Gemfile /DPWiki/Gemfile
ADD ./src/Gemfile.lock /DPWiki/Gemfile.lock

# ローカルのsrcをコピー
ADD src/ /DPWiki

# Gemのインストール実行
RUN bundle install

#RUN npm install --prefix DPWikiWiki/frontend/ --save DPWikiWiki/frontend/ webpack webpack-dev-server webpack-cli html-webpack-plugin react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/register


# デバッグで使用するポートを公開する
EXPOSE 3000 1234 26162
