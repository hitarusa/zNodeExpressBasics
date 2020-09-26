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

起動方法：
	node index.js

URI：
	GET)
		localhost:3000 
		(localhost:3000/echo)
	POST)
		(localhost:3000/echo)