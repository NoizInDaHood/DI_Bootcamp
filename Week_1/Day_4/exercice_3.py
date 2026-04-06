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


while True:
    new_topping = input("Add your topping or type 'exit' to finish: ")
    if new_topping.lower() == "exit":
        total_cost = base_cost + (len(total_topping) * 2.5)
        print(f"\nThanks for your order!\n\nThe total price is ${total_cost}. ")
        print(f"Details:\nPizza base: $10\n +{total_topping}: ${len(total_topping) * 2.5:.2f}")
        break
    else:
        total_topping.append(new_topping)
        print(f"\n\nYou added {new_topping}")


