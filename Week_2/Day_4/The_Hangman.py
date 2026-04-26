""" What you will learn
Conditionals
Loops
Functions
Modules

What you will create
Use python to create a Hangman game.

Instructions
The computer choose a random word and mark stars for each letter of each word.
Then the player will guess a letter.
If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
The player can’t guess the same letter twice.

Starter code
Here is a piece of code that will give you a random word.

    import random

    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist) 

    ### YOUR CODE STARTS FROM HERE ###

 """

import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

def display_word(word, guesses):
    """Crée la chaîne avec les étoiles et les lettres trouvées."""
    display = ""
    for char in word:
        if char in guesses:
            display += char
        else:
            display += "*"
    return display

def play_hangman():
    """Fonction principale qui contient la logique du jeu."""
    guesses = []
    errors = 0
    max_errors = 6

    print("--- BIENVENUE AU PENDU ---")

    while errors < max_errors:
        current_display = display_word(word, guesses)
        print(f"\nMot : {current_display}")
        
        # Vérification de victoire
        if "*" not in current_display:
            print("Félicitations, tu as gagné !")
            return # Sort de la fonction

        guess = input("Devine une lettre : ").lower()

        if guess in guesses:
            print("Déjà essayé !")
            continue
        
        guesses.append(guess)

        if guess not in word:
            errors += 1
            print(f"Raté ! Il te reste {max_errors - errors} chances.")
        else:
            print("Bien joué !")

    print(f"\nPerdu ! Le mot était : {word}")

play_hangman()