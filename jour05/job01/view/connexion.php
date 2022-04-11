<?php require_once '../Controllers/ConnexionController.php';
require_once 'header.php';
?>

<form action="" method="post">

    <label for="email">Email : </label>
    <input type="email" name="email" id="email">

    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password">

    <input type="submit" name="submit" value="Connexion">

</form>



<?php require_once 'footer.php'  ?>