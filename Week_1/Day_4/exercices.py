""" Instructions:

Create a set called my_fav_numbers and populate it with your favorite numbers.
Add two new numbers to the set.
Remove the last number you added to the set.
Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
Note: Sets are unordered collections, so ensure no duplicate numbers are added."""

my_fave_numbers = {1,5,9}
my_fave_numbers.add(3)
print(my_fave_numbers)
my_fave_numbers.add(15)
print(my_fave_numbers)

my_fave_numbers.remove(15)
print(my_fave_numbers)

friend_fav_numbers = {1,15,9,7}
print(friend_fav_numbers)

our_fav_numbers = my_fave_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

"""Exercise 2: Tuple
Key Python Topics:

Tuples (immutability)


Instructions:

Given a tuple of integers, try to add more integers to the tuple.
Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple."""

my_tuple = (1, 2, 3)

try:    my_tuple.append(4) # This will raise an AttributeError because tuples do not have an append method. its imutable#

"""Exercise 3: List Manipulation
Key Python Topics:

Lists
List methods: append, remove, insert, count, clear


Instructions:

You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
Remove "Banana" from the list.
Remove "Blueberries" from the list.
Add "Kiwi" to the end of the list.
Add "Apples" to the beginning of the list.
Count how many times "Apples" appear in the list.
Empty the list.
Print the final state of the list."""

basket = ["Banana", "Apple", "Oranges", "Blueberries"]
print(basket)
basket.remove("Banana")
basket.remove("Blueberries")
basket.insert(0, "Apple")
basket.append("Kiwi")
print(basket)
print(basket.count("Apple"))
basket.clear()
print(basket)


""" Exercice Lists
Floats and integers
Range generation


Instructions:

Recap: What is a float? What’s the difference between a float and an integer?
Create a list containing the following sequence of mixed types: floats and integers:
1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
Avoid hard-coding each number manually.
Think: Can you generate this sequence using a loop or another method? """

# integer are round numbers when float are for not rounded numbers kind of data
my_list = []
for i in range(1, 6):
    my_list.append(i + 0.5) # I use the append method to add the numbers to the list and I add 0.5 to each integer to get the float numbers. #

print(my_list) #with the use of range I'm not able to get the integers numbers only the float this is an issue for the exercie.

# i can use an other method with while loop to get both the integers and the floats numbers in the list. # 

my_list2 = []
sequenced_number = 1.5

while sequenced_number <= 5:
    if sequenced_number.is_integer():
        my_list2.append(int(sequenced_number))# I use the is_integer method to check if the number is an integer and if it is, I add it to the list as an integer. #
    else:
        my_list2.append(sequenced_number) # if the number is not an integer, I add it to the list as a float. #
    sequenced_number += 0.5

print(my_list2)

""" Exercise 5: For Loop
Key Python Topics:

Loops (for)
Range and indexing


Instructions:

Write a for loop to print all numbers from 1 to 20, inclusive.
Write another for loop that prints every number from 1 to 20 where the index is even."""

for i in range(1,21):
    print i

for x in range(1,21):
    if x % 2 == 0:
        print(x)


"""Exercise 6: While Loop
Key Python Topics:

Loops (while)
Conditionals


Instructions:

Use an input to ask the user to enter their name.
Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
hint: check for the method isdigit()
if the input is incorrect, keep asking for the correct input until it is correct
if the input is correct print “thank you” and break the loop"""



name = input("Enter your name: ")

while True:
    if len(name) < 3 or not name.isalpha(): # I use the isalpha method to check if the name contains only letters and no digits. # I also check if the length of the name is less than 3 characters. #
        name = input("Please enter a valid name (at least 3 letters and no digits): ")
    else: # if the name is valid, I print thank you and break the loop. #
        print("Thank you very much!")
        break


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

fruits_list = input("Type all your favorite fruits: ").lower().split() # I use the split method to split the input into a list of fruits. #

any_fruit = input("Type any fruit:").lower() # I use the lower method to make sure that the comparison is not case sensitive. #

if any_fruit in fruits_list: # I use the in keyword to check if the any_fruit is in the fruits_list and I use the lower method to make sure that the comparison is not case sensitive. #
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

    """ Exercise 8: Pizza Toppings

Key Python Topics:

Loops
Lists
String formatting


Instructions:

Write a loop that asks the user to enter pizza toppings one by one.
Stop the loop when the user types 'quit'.
For each topping entered, print:
"Adding [topping] to your pizza."
After exiting the loop, print all the toppings and the total cost of the pizza.
The base price is $10, and each topping adds $2.50. """

print("\nEnter pizza toppings one by one.\n\nPIZZA COST $10\n\nEach topping cost $2,50\n")
print("\n\nType 'quit' when you are done\n")

total_topping = []
base_cost = 10

# I use a while loop to keep asking the user for toppings until they type 'quit'. I also use a list to store the toppings and calculate the total cost at the end. #
while True:
    new_topping = input("Add your topping or type 'exit' to finish: ")
    if new_topping.lower() == "exit":
        total_cost = base_cost + (len(total_topping) * 2.5)# I calculate the total cost by adding the base cost and the cost of the toppings (number of toppings multiplied by 2.5). #
        print(f"\nThanks for your order!\n\nThe total price is ${total_cost}. ")
        print(f"Details:\nPizza base: $10\n +{total_topping}: ${len(total_topping) * 2.5:.2f}")#
        break
    else:
        total_topping.append(new_topping)
        print(f"\n\nYou added {new_topping}")


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
how_many = int(input("\n\nHow many ticket would you like?: ")) # I ask the user how many tickets they want to buy and I convert the input to an integer. #
# I use a for loop to iterate through the number of tickets and ask for the age of each person. I then use if-elif statements to determine the cost of each ticket based on the age and append the cost to the how_much list. Finally, I print the total cost by summing the how_much list. #
for i in range(how_many):
    input_age = int(input(f"\nType the age of the person {i+1}: "))# I ask for the age of each person and convert the input to an integer. #
    if input_age < 3:
        print("The ticket is free for this person.")
        how_much.append(0) # I use the fonction append to add the cost of the ticket to the how_much list. #
    elif input_age <13:
        print("$10 for people aged 3 to 12.")
        how_much.append(10)
    elif input_age > 12:
        print("$15 for people over the age 12.")
        how_much.append(15)   
# I use the sum function to calculate the total cost of the tickets by summing the values in the how_much list. I then print the total cost. #
print(f"\n\nThe total cost of the tickets is: ${sum(how_much)}")

""" Bonus: Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).""" 

identity = {}
number_of_people = int(input("\n\nHow many people are in the group? ")) # I ask the user how many people are in the group and convert the input to an integer. #

for i in range(number_of_people): # I use a for loop to iterate through the number of people in the group and ask for their name and age. I then store the name and age in a dictionary called identity. #
    name = input("\nPlease type your full name: ")
    age = int(input("\nWhat is your age?: "))
    identity[name] = age # I use the name as the key and the age as the value in the identity dictionary. #

authorized_people = {name: age for name, age in identity.items() if 16 <= age <=21} # I use a dictionary comprehension to create a new dictionary called authorized_people that contains only the people who are between the ages of 16 and 21. I check if the age is between 16 and 21 using a conditional statement in the comprehension. #

print(f"Here are the people authorized to watch the movie: {list(authorized_people.keys())}") # I print the names of the authorized people by using the keys() method on the authorized_people dictionary and converting it to a list. #












