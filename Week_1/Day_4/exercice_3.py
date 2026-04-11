"""Write a program that prints the frequency of the words from the input.

Suppose the following input is supplied to the program:
New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

Then, the output should be:

    2:2
    3.:1
    3?:1
    New:1
    Python:5
    Read:1
    and:1
    between:1
    choosing:1
    or:2
    to:1 """

paragraph = ("Le numéro 2 mondial Jannik Sinner s'est qualifié pour la finale du Masters 1000 de Monte-Carlo, la troisième en autant de tournois de cette catégorie cette année, en éliminant facilement l'Allemand Alexander Zverev (6-1, 6-4). L'Italien de 24 ans est le premier à se hisser trois fois en finale lors des trois premiers Masters 1000 de l'année depuis Novak Djokovic en 2015. Il pourrait retrouver en finale en Principauté le numéro 1 mondial et tenant du titre Carlos Alcaraz, qui affronte samedi après-midi le Monégasque Valentin Vacherot (23e). Il s'agirait de la première confrontation entre les deux meilleurs joueurs du monde cette saison.")
words = paragraph.split()
frequency = {}
for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word, count in frequency.items():
    print(f"{word}:{count}")