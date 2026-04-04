"""Exercise 1 : Hello World-I love Python
Instructions
Print the following output in one line of code:

Hello world
Hello world
Hello world
Hello world
I love python
I love python
I love python
I love python """
# I use /n to print the string in a new line and I multiply it by 4 to print it 4 times for both "Hello World" and "I Love Python" #
print("Hello, World!\n" * 4 + "I Love Python\n" * 4)

""" Exercise 2 : What is the Season ?
Instructions
Ask the user to input a month (1 to 12).
Display the season of the month received :
Spring runs from March (3) to May (5)
Summer runs from June (6) to August (8)
Autumn runs from September (9) to November (11)
Winter runs from December (12) to February (2)"""

# I use an if-elif-else statement to check the value of the month and print the corresponding season. I also check for invalid input if the month is not between 1 and 12. #
mois = int(input("Type a month between 1 and 12: "))
if mois >= 3 and mois <= 5:
    print("Spring")
elif mois >= 6 and mois <= 8:
    print("Summer")
elif mois >= 9 and mois <= 11:
    print("Autumn")
elif mois == 12 or mois == 1 or mois == 2:
    print("Winter")
else:
    print("Invalid month")  


