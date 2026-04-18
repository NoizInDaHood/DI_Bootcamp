"""Instructions
You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.



Lists:

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]


Expected Output:

{'Ten': 10, 'Twenty': 20, 'Thirty': 30}"""

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
tuple_keys = tuple(keys)
print(tuple_keys)
dictionnary = {key: value for key, value in zip(tuple_keys, values)}
print(dictionnary)

"""Instructions
Write a program that calculates the total cost of movie tickets for a family based on their ages.

Family members’ ages are stored in a dictionary.
The ticket pricing rules are as follows:
Under 3 years old: Free
3 to 12 years old: $10
Over 12 years old: $15


Family Data:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


Loop through the family dictionary to calculate the total cost.
Print the ticket price for each family member.
Print the total cost at the end.

Bonus:

Allow the user to input family members’ names and ages, then calculate the total ticket cost.

"""

price_ticket_under_3 = 0
price_ticket_between_3_to_12 = 10
price_ticket_over_12 = 15
final_cost = 0
cinema_group = {}
how_many = int(input("Hello and welcome to the Cinema!\nHow many people are you? : "))
for i in range(how_many):
    name = input("What's your name? : ")
    age = int(input("What's your age? : "))
    cinema_group[name] = age
    if age < 3:
        print(f"This ticket cost ${price_ticket_under_3} for {name}")
    elif 3 <= age <= 12:
        print(f"This ticket cost ${price_ticket_between_3_to_12} for {name}")
        final_cost += price_ticket_between_3_to_12
    else:
        print(f"This ticket cost ${price_ticket_over_12} for {name}")
        final_cost += price_ticket_over_12
    

print(f"\nFinal total cost is: {final_cost}")

"""Exercise 3: Zara
Key Python Topics:

Creating dictionaries
Accessing and modifying dictionary elements
Dictionary methods like .pop() and .update()


Instructions
Create and manipulate a dictionary that contains information about the Zara brand.



Brand Information:

name: Zara
creation_date: 1975
creator_name: Amancio Ortega Gaona
type_of_clothes: men, women, children, home
international_competitors: Gap, H&M, Benetton
number_stores: 7000
major_color: 
    France: blue, 
    Spain: red, 
    US: pink, green


Create a dictionary called brand with the provided data.
Modify and access the dictionary as follows:
Change the value of number_stores to 2.
Print a sentence describing Zara’s clients using the type_of_clothes key.
Add a new key country_creation with the value Spain.
Check if international_competitors exists and, if so, add “Desigual” to the list.
Delete the creation_date key.
Print the last item in international_competitors.
Print the major colors in the US.
Print the number of keys in the dictionary.
Print all keys of the dictionary.


Bonus:

Create another dictionary called more_on_zara with creation_date and number_stores. 
Merge this dictionary with the original brand dictionary and print the result."""

zara = {"name": "Zara", "creation_date": "1975", "type_of_clothes": ("men", "women", "children", "home"), "international_competitors": ["Gap", "H&M", "Benetton"], "number_stores": 7000, "major_colors": {"france": "blue", "spain": "red", "us": ("pink", "green")}}
print(zara)
zara["number_stores"]= 2

print(f"\nJennifer is browsing around the {zara["type_of_clothes"][1]}'s clothes section in th Zara store.")

zara["country_creation"]= "Spain"
print(f"This is the Zara's items: \n\n{zara.items()}")

if zara["international_competitors"]:
    zara["international_competitors"].append("Desigual")
creation_date_stored = zara.pop("creation_date")
print(f"\nThe last international competitor to Zara is {zara["international_competitors"][-1]}")
print(f"\nThe major colors in the U.S are {",".join(zara['major_colors']["us"])}")

print(f"\nThe number of keys in the Zara's dictionary is {len(zara)}")
print(f"\nThe keys of the Zara's dictionary are: {zara.keys()}")

more_on_zara = {"creation_date": "1975", "number_stores": 600}
zara.update(more_on_zara)
print(f"\nThe updated Zara's dictionary is: \n\n{zara}")

"""Exercise 4: Disney Characters
Key Python Topics:

Looping with indexes
Dictionary creation
Sorting


Instructions
You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:



Character List:

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]


Expected Results:

1. Create a dictionary that maps characters to their indices:

{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}


2. Create a dictionary that maps indices to characters:

{0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}


3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:

{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}"""


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Create a dictionary that maps characters to their indices:
char_to_index = {user: index for index, user in enumerate(users)}
print(f"\nDictionary mapping characters to their indices: \n\n{char_to_index}")
index_to_char = {index: nom for index, nom in enumerate(users)}
print(f"\nDictionnary mapping index to their characters: \n\n{index_to_char}")
sorted_dict = {user: index for index, user in enumerate(sorted(users))}
print(f"\nThis is the sorted name dictionnary {sorted_dict}")