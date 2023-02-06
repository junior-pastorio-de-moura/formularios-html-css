<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontrem Fang</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="report.php" method="post">
        <h2>Compertilhe sua história de abdução alienínega:</h2><!--Shared your story of alien abducion:-->
        <div class="input-box">
            <label for="firstname">Primeiro nome:</label><!--First name-->
        <input type="text" id="firstname" name="firstname">
        </div>
        <div class="input-box">
            <label for="lastname">Sobrenome:</label><!--Last name-->
            <input type="text" id="lastname" name="lastname">
        </div>
        <div class="input-box">
            <label for="email">Qual é o seu endereço de email?</label><!--What is your email address?-->
            <input type="text" id="email" name="email">
        </div>
        <div class="input-box">
            <label for="whenithappened">Quando isso aconteceu?</label><!--When did it happen-->
            <input type="text" id="whenithappened" name="whenithappened">
        </div>
        <div class="input-box">
            <label for="howlong">Quanto tempo você se foi?</label><!--How long were you gone-->
        <input type="text" id="howlong" name="howlong">
        </div>
        <div class="input-box">
            <label for="howmany">Quantos você viu?</label><!--How many did you see-->
            <input type="text" id="howmany" name="howmany">
        </div>
        <div class="input-box">
            <label for="aliensdescriptions">Descreva-os:</label><!--Describe them-->
            <input type="text" id="aliensdescriptions" name="aliensdescriptions" size="32">
        </div>
        <div class="input-box">
            <label for="whattheydid">O que eles fizeram com você?</label><!--What did they do to you-->
            <input type="text" name="whattheydid" id="whattheydid" size="32">
        </div>
        <div class="input-box">
            <label for="fangspotted">Você viu meu cachorro Fang?</label><!--Have you seen my dog Fang-->
            <div class="opt">
                sim <input type="radio" value="sim" id="fangspotted" name="fangspotted">
            </div>
            <div class="opt">
                não <input type="radio" value="não" id="fangspotted" name="fangspotted">
            </div>
        </div>
        <div class="input-box">
            <img src="./fang.jpeg" alt="Cãozinho Fang"><br>
            <label for="other">Qualquer outra coisa que você queira adicionar?</label><!--Anything else you want to add-->
            <textarea name="other" id="other" cols="30" rows="10"></textarea><br>
        </div>
        <div class="btn">
            <input type="submit" value="Relatar sequestro" name="submit"><!--Report abduction-->
        </div>
    </form>
</body>
</html>