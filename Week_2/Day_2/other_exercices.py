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