<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP 6 | Introduction au PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>ℹ Introduction aux Variables PHP</h1>
        <nav>
            <a href="index.html">Retour à la Calculatrice</a>
        </nav>
    </header>

    <main>
        <section id="php-info" class="card">
            <h2>Affichage de Variables Simples</h2>

            <?php
            // Déclaration de chaînes de caractères
            $etablissement = "Institut Supérieur de Technologie Appliquée";
            $module = "Développement Web Avancé (TP 6)";
            $annee = 2025;
            $enseignant = "Mme/M. Votre Nom";

            // Déclaration de variables numériques
            $nombreA = 42;
            $nombreB = 18;
            $nombreC = 5.5;

            // Effectuer des calculs simples
            $resultat_addition = $nombreA + $nombreB;
            $resultat_multiplication = $nombreA * $nombreC;
            $resultat_modulo = $nombreA % 5;
            ?>

            <div class="info-group">
                <h3>Informations Générales</h3>
                <ul>
                    <li><strong>Nom de l’établissement :</strong> <?php echo $etablissement; ?></li>
                    <li><strong>Module :</strong> <?php echo $module; ?></li>
                    <li><strong>Année :</strong> <?php echo $annee; ?></li>
                    <li><strong>Enseignant :</strong> <?php echo $enseignant; ?></li>
                </ul>
            </div>

            <div class="info-group">
                <h3>Exemples de Variables Numériques</h3>
                <ul>
                    <li>Variable \$nombreA : **<?php echo $nombreA; ?>** (Entier)</li>
                    <li>Variable \$nombreB : **<?php echo $nombreB; ?>** (Entier)</li>
                    <li>Variable \$nombreC : **<?php echo $nombreC; ?>** (Flottant)</li>
                </ul>
            </div>

            <div class="info-group">
                <h3>Résultats des Opérations PHP</h3>
                <ul>
                    <li>Addition ($nombreA + $nombreB) : **<?php echo $resultat_addition; ?>**</li>
                    <li>Multiplication ($nombreA * $nombreC) : **<?php echo $resultat_multiplication; ?>**</li>
                    <li>Modulo ($nombreA % 5) : **<?php echo $resultat_modulo; ?>**</li>
                </ul>
            </div>

            <style>
                /* Style interne pour cette page spécifique, en complément du style.css */
                .info-group {
                    background-color: #f7f7f7;
                    padding: 15px;
                    border-radius: 6px;
                    margin-bottom: 20px;
                    border-left: 4px solid var(--primary-color);
                }
                .info-group h3 {
                    color: var(--primary-color);
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                .info-group ul {
                    list-style: none;
                    padding: 0;
                }
                .info-group li {
                    padding: 5px 0;
                    border-bottom: 1px dotted #ccc;
                }
                .info-group li:last-child {
                    border-bottom: none;
                }
            </style>
        </section>
    </main>

    <footer>
        <p>&copy; TP 6 - Affichage PHP</p>
    </footer>

</body>
</html>