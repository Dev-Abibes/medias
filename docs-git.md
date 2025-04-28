# Documentation : Commandes Git Essentielles

## Initialisation et configuration
- `git init` : Initialiser un dépôt Git.
- `git config --global user.name "John Doe"` : Configurer le nom d'utilisateur.
- `git config --global user.email "johndoe@example.com"` : Configurer l'email.

## Travail avec des fichiers
- `git add fichier.txt` : Ajouter un fichier au suivi.
- `git rm fichier.txt` : Supprimer un fichier du suivi.
- `echo "logs/" >> .gitignore` : Ignorer des fichiers ou dossiers.

## Commit et historique
- `git commit -m "Message"` : Enregistrer les modifications.
- `git log` : Afficher l'historique des commits.
- `git log --oneline` : Historique condensé.

## Gestion des branches
- `git branch nouvelle-branche` : Créer une branche.
- `git checkout nouvelle-branche` : Basculer vers une branche.
- `git checkout -b nouvelle-branche` : Créer et basculer en une seule commande.
- `git merge nouvelle-branche` : Fusionner une branche.
- `git branch -d nouvelle-branche` : Supprimer une branche.

## Dépôts distants
- `git clone https://github.com/username/repo.git` : Cloner un dépôt distant.
- `git remote add origin https://github.com/username/repo.git` : Ajouter un dépôt distant.
- `git push origin main` : Pousser des commits vers le dépôt distant.
- `git pull origin main` : Récupérer les mises à jour depuis le dépôt distant.

## Résolution de conflits
- `git status` : Identifier les conflits.
- `git add fichier.txt` : Marquer un conflit comme résolu.
- `git merge --abort` : Annuler une fusion en cas de conflit.

## Réécriture de l'historique
- `git commit --amend` : Modifier le dernier commit.
- `git reset --soft HEAD~1` : Revenir à un état précédent sans perdre les modifications.
- `git reset --hard HEAD~1` : Supprimer définitivement les commits.
- `git rebase main` : Réorganiser l'historique avec rebase.

## Tags
- `git tag -a v1.0.0 -m "Message"` : Créer un tag annoté.
- `git push origin v1.0.0` : Pousser un tag vers le dépôt distant.
- `git tag` : Lister les tags disponibles.

## Stash (mise en attente)
- `git stash` : Mettre en attente les modifications non commitées.
- `git stash apply` : Appliquer les modifications mises en attente.
- `git stash list` : Lister les stashs disponibles.

## Inspection et débogage
- `git diff` : Afficher les différences entre le travail courant et le dernier commit.
- `git diff commit-hash1 commit-hash2` : Comparer deux commits spécifiques.
- `git log --stat` : Afficher les commits avec des statistiques détaillées.

## Nettoyage et maintenance
- `git clean -fd` : Supprimer les fichiers non suivis.
- `git gc` : Optimiser le dépôt local.
- `git fsck` : Réparer un dépôt corrompu.

## Sous-modules
- `git submodule add https://github.com/username/repo.git path/to/submodule` : Ajouter un sous-module.
- `git submodule update --remote` : Mettre à jour les sous-modules.

## Outils avancés
- `git cherry-pick commit-hash` : Appliquer un commit spécifique.
- `git blame fichier.txt` : Identifier qui a modifié chaque ligne d'un fichier.
- `git bisect start` : Trouver le commit responsable d'un bug.


1. `feat (feature)`
```bash
git commit -m "feat(auth): add login with Google OAuth" `# Ajout d'une nouvelle fonctionnalité.
```

2. `fix`
```bash
git commit -m "fix(api): resolve timeout issue on data fetching" // Correction d'un bug.
```

3. `docs`
```bash
git commit -m "docs(readme): update installation instructions" // Mise à jour de la documentation.
```
4. `style`
```bash
git commit -m "style(ui): apply consistent spacing in CSS" // Changements liés au style du code (formatage, indentation, etc.), sans impact fonctionnel.

```
5. `refactor`
```bash
git commit -m "refactor(core): simplify user authentication logic" // Refactorisation du code sans ajout de fonctionnalité ni correction de bug.

```
6. `test`
```bash
git commit -m "test(utils): add unit tests for string helper functions" // Ajout ou modification de tests.
```
7. `chore`

```bash
git commit -m "chore(deps): upgrade lodash to version 4.17.21" //Tâches de maintenance ou mises à jour de dépendances.
```
8. `perf`

```bash
git commit -m "perf(api): optimize database query for faster response" //Amélioration des performances.
```
9. `ci`
```bash
git commit -m "ci(pipeline): add GitHub Actions workflow for deployment" // Modifications liées à la configuration des outils CI/CD.
```
10. `build`
```bash
git commit -m "build(config): update webpack to support ES modules" //Changements liés à la construction du projet (ex. configuration de Webpack, Dockerfile).
```
11. `revert`

```bash
git commit -m "revert(feat): remove recently added feature due to issues" //Annulation d'un commit précédent.
```
## Exemples complets avec corps et pied de page
#### Exemple 1 : Ajout d'une fonctionnalité avec référence à une issue
```bash
git commit -m "feat(payment): implement Stripe integration
```
Introduces Stripe as a new payment gateway option.
Includes backend API and frontend UI changes.

- Closes #45"
- Description : Ajoute l'intégration de Stripe comme nouveau moyen de paiement, en fermant l'issue #45.

#### Exemple 2 : Correction d'un bug critique
```bash
git commit -m "fix(auth): prevent infinite redirect loop on login
```
Fixes an issue where users were redirected indefinitely
when logging in with invalid credentials.

`Refs #123"`
- Description : Corrige une boucle de redirection infinie lors de la connexion avec des identifiants invalides, référencée dans l'issue #123.



