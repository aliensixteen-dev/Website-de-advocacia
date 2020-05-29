<!Doctype html>
<Html>
<head>
	<title> Painel Admnistrativo </title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="Css/painel.css"/>
</head>

<body class="body">
	<header>
		<nav class="navigatorheader">
			<ul class="headerUl">
				<li> <a href="index.php"> Index </a> </li>
				<li> <a href="emails.php"> Emails </a> </li>
				<li> <a href="galeria.php"> Galeria </a> </li>
			</ul>
		</nav>
	</header>

	<h1> Bem-vindo ao painel administrativo do seu site! </h1>

	<section>
		<?php 	
			$nome = $_POST['nome_usuario'];
			$email = $_POST['email_usuario'];
			$tel = $_POST['tel_usuario'];
			$localizacao = $_POST['localizacao_usuario'];
			$mensagem = $_POST['mensagem'];
		
		echo "Nome: " .$nome. "<br/> Email: " .$email. "<br/> Tel.: " .$tel. "<br/> Morada: " .$localizacao. "<br/> Mensagem: " .$mensagem. "<br/>";
		?>
	</section>

	
</body>

</Html>