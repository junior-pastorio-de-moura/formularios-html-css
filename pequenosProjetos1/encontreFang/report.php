<?php
$first_name = $_POST['firstname'];
$last_name = $_POST['lastname'];
$when_it_heppened = $_POST['whenithappened'];
$how_long = $_POST['howlong'];
$alien_description = $_POST['aliensdescriptions'];
$fang_spotted = $_POST['fangspotted'];
$email = $_POST['email'];
//$name = $_POST['firstname'] . '' . $_POST['lastname'];
$how_many = $_POST['howmany'];
$what_they_did = $_POST['whattheydid'];
$other = $_POST['other'];

echo 'Formulário de agradecimento enviado ao formulário </br>'; //Thanks form submitting the form
echo 'Nome: ' . $name . '<br>';
echo 'Você foi sequestrado' . $when_it_heppened; //You were abducted
echo 'e foram embora em ' . $how_long . '<br>'; //and were gone for
echo 'Descreva-os: ' . $alien_description . '<br>'; //Describe them
echo 'Fang estava lá? ' . $fang_spotted . '<br>'; //Was Fang there?
echo 'Quantidade de alienígenas vistos: ' . $how_many . '<br>';
echo 'O que eles fizeram com você? ' . $what_they_did . '<br>';
echo 'Informações complementares: ' . $other . '<br>';
echo 'Seu endereço de email é ' . $email . '<br>'; //Your email address is

//Mensagen a ser enviada para Owen por email
$msg = "Nome: $name\n" . "Você foi sequestrado $when_it_heppened" .
"e foram embora em $how_long\n" . "Descreva-os: $alien_description\n"
. "Fang estava lá? $fang_spotted\n" . "Quantidade de alienígenas vistos: $how_many\n" .
"O que eles fizeram com você? $what_they_did\n" . "Informações complementares: $other\n" .
"Seu endereço de email é $email\n";

echo $msg;

$to = "emial-para-enviar-o-formulario@gmail.com";
$subject = "Aliens me abduziram - Relatório de abdução";

//Enviando a mensagem com os dados do formulário por email
mail($to, $subject, $msg . 'From: ' . $email);

        mysql_connect (
            string $servidor = ini_get("localhost") ,
            string $username = ini_get("usuario") ,
            string $password = ini_get("senha") ,
            bool $new_link = false ,
            int $client_flags = 0
       ): recurso | falso

       $dbc = mysql_connect();
       

       //Conexão com o banco de dados
$dbc = mysqli_connect('localhost','nome_de_usuario','senha') or die('Erro ao conectar com o servidor mysql.');

$query = "insert into aliens_abduction (first_name, last_name, when_it_happened, how_logn, " .
        "how_many, alien_description, what_they_did, fang_spotted, other, email) " .
        "values ('first_name', 'last_name', 'when_it_happened', 'how_long', 'how_many', 'alien_description', " .
        "'what_they_did', 'fang_spotted', 'other', 'email') ";

$result = mysqli_query($dbc, $query) or die('Erro ao conectar com o servidor mysql.');
mysqli_close($dbc);

        /*
        Foi usado aqui, 3 funções php para operar o banco de dados mysql
        mysqli_connect();
        mysqli_query();
        mysqli_close();
        */
?>
