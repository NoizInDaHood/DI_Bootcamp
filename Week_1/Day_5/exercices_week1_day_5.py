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