<html>
<head>
<title>Login</title>
</head>
<body>

<form action="${pageContext.servletContext.contextPath}/login" method="post">
<p>
<h2>Note</h2> passwords are sent in the clear unless you configure https.
BlueJ does not handle https with a self-signed certificate.
</p> 
Username: <input type="text" name="playerName"><br/>
Password: <input type="password" name="password"><br/>
<input type="submit" value="Login!">
</form>

</body>
</html>