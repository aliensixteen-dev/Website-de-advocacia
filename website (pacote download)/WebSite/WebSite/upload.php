<?php 	
	$arquivo = $_FILES['arquivo']['name'];
        
    echo $arquivo;

    move_uploaded_file($_FILES['arquivo']['tmp_name'], $arquivo);
?>