# nodeExpressBasics

前提：
		Express
			npm install --save express (実施済み)
			用途：Express利用にあたっては必須。
		EJS
			npm install --save ejs (実施済み)
			用途：EJSテンプレートの利用。
		Body-parser (POSTのパラメータ取得)
			npm install --save body-parser (実施済み)
			用途：POSTのパラメータ取得。
		Express-session
			npm install --save express-session (実施済み)
			用途：セッションの利用。

構成：
	index.js
		メインプログラム
	/public
		style.css
			ビューのスタイルシート
	/views
		index.ejs
			ビューのテンプレート

使用方法(ローカル環境)：
	起動方法：
		node index.js

	URI：
		GET)
			localhost:3000 
			(localhost:3000/echo)
		POST)
			(localhost:3000/echo)

使用方法(コンテナ)：
	コンテナ・イメージ作成：
		docker build -t ＜コンテナ・イメージ名＞:＜バージョン番号＞ .
	コンテナ作成(初回)：
		docker run -p <ブラウザーで指定するポート番号>:3000 ＜コンテナ・イメージ名＞:＜バージョン番号＞
	コンテナ起動(2回目以降)：
		docker start ＜コンテナID or コンテナ名＞

	URI：
		GET)
			localhost:＜ポート番号＞ 
			(localhost:＜ポート番号＞/echo)
		POST)
			(localhost:＜ポート番号＞/echo)

App Serviceへの導入(ZIP)：
	0.Aure上でApp Serviceをデプロイ。
	0.bash(WSL)にzipを導入。
	1.Applicationのルートディレクトリーで次のコマンドを実行。
		zip -r nodeExpressBasic.zip .
	2.次のコマンドを実行。
		az webapp deploy --resource-group <リソース・グループ名> --name <App Service名> --src-path ./nodeExpressBasic.zip
	999.(番外) App Service > Settings > Configuration > Application Settingsで次のようにポート番号を指定できるが、当該ポートでリクエスト送信しても失敗する。Log Streamを見る限りListenしているようには見える・・・
		Nama : PORT
		Value : <ポート番号>
		[参考]https://docs.microsoft.com/ja-jp/azure/app-service/configure-language-nodejs?pivots=platform-linux#get-port-number

JMeterテスト構成ファイル
	nodeExpressBasics.jmxを適宜編集の上で使用する。特に・・・
        <stringProp name="HTTPSampler.domain">hitarusa-webapplinux-nodeexpressbasics.azurewebsites.net</stringProp>
        <stringProp name="HTTPSampler.port"></stringProp>
        <stringProp name="HTTPSampler.protocol">https</stringProp>
        <stringProp name="HTTPSampler.path"></stringProp>
        <stringProp name="HTTPSampler.method">GET</stringProp>
