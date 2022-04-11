<?php require_once 'header.php'  ?>
<section>
    <h1>Formulaire d'inscription</h1>
    <p id="erreur">(*) Champ obligatoite</p>
    <form action="" method="post" id="inscription">
        <div class="input">
            <label for="nom">*Nom : </label>
            <input type="text" name="nom" id="nom" placeholder="Votre nom" required>
        </div>
        <div class="input">
            <label for="prenom">*Prenom : </label>
            <input type="text" name="prenom" id="prenom" placeholder="Votre prenom" required>
        </div>
        <div class="input">
            <label for="email">*Email : </label>
            <input type="email" name="email" id="email" placeholder="Votre mail" required>
        </div>
        <div class="input">
            <label for="confirmemail">*Confirmer votre email : </label>
            <input type="email" name="confirmemail" id="confirmemail" placeholder="Confirmer le mail" required>
        </div>
        <div class="input">
            <label for="password">*Mot de passe : </label>
            <input type="password" name="password" id="password" placeholder="Votre mot de passe" required value="Magass22*">
        </div>
        <div class="input">
            <label for="confirm">*Confirmer le mot de passe : </label>
            <input type="password" name="confirm" id="confirm" placeholder="Confirmer le mot de passe" required value="Magass22*">
        </div>

        <input class="input2" id="input2" type="button" name="valider" value="Inscription">

    </form>

</section>
<?php require_once 'footer.php'  ?>