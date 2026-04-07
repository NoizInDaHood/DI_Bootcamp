""" Exercise 9: Cinemax Tickets
Key Python Topics:

Conditionals
Lists
Loops


Instructions:

Ask for the age of each person in a family who wants to buy a movie ticket.
Calculate the total cost based on the following rules:
Free for people under 3.
$10 for people aged 3 to 12.
$15 for anyone over 12.
Print the total ticket cost.


Bonus:

Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
Write a program to:
Ask for each person’s age.
Remove anyone who isn’t allowed to watch.
Print the final list of attendees. """

how_much = []
#how_many = int(input("\n\nHow many ticket would you like?: ")) # I ask the user how many tickets they want to buy and I convert the input to an integer. #
# I use a for loop to iterate through the number of tickets and ask for the age of each person. I then use if-elif statements to determine the cost of each ticket based on the age and append the cost to the how_much list. Finally, I print the total cost by summing the how_much list. #
#for i in range(how_many):
#    input_age = int(input(f"\nType the age of the person {i+1}: "))# I ask for the age of each person and convert the input to an integer. #
#    if input_age < 3:
#        print("The ticket is free for this person.")
#        how_much.append(0) # I use the fonction append to add the cost of the ticket to the how_much list. #
#    elif input_age <13:
#        print("$10 for people aged 3 to 12.")
#        how_much.append(10)
#    elif input_age > 12:
#        print("$15 for people over the age 12.")
#        how_much.append(15)   
# I use the sum function to calculate the total cost of the tickets by summing the values in the how_much list. I then print the total cost. #
#print(f"\n\nThe total cost of the tickets is: ${sum(how_much)}")

""" Bonus: Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).""" 

identity = {}
number_of_people = int(input("\n\nHow many people are in the group? ")) # I ask the user how many people are in the group and convert the input to an integer. #

for i in range(number_of_people):
    name = input("\nPlease type your full name: ")
    age = int(input("\nWhat is your age?: "))
    identity[name] = age

authorized_people = {name: age for name, age in identity.items() if 16 <= age <=21}

print(f"Here are the people authorized to watch the movie: {list(authorized_people.keys())}")












