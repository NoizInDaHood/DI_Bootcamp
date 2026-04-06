""" Exercise 7: Favorite Fruits
Key Python Topics:

Input/output
Strings and lists
Conditionals


Instructions:

Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
Store these fruits in a list.
Ask the user to input the name of any fruit.
If the fruit is in their list of favorite fruits, print:
"You chose one of your favorite fruits! Enjoy!"
If not, print:
"You chose a new fruit. I hope you enjoy it!" """

fruits_list = input("Type all your favorite fruits: ").lower().split()

any_fruit = input("Type any fruit:").lower()

if any_fruit in fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")