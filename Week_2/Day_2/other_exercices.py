"""Challenge 2: Affordable Items
Goal: Create a program that prints a list of items that can be purchased with a given amount of money.



Key Python Topics:

Dictionaries
Loops (for loop)
Conditional statements (if, else)
String manipulation (replace())
Type conversion (int())
Lists
Sorting (sorted())


Instructions:
1. Store Data:

You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign). The priority is defined by the position of the iten on the dictionary: from the most important to the less important.
You will also be given a string (wallet) representing the amount of money you have.
2. Data Cleaning:

You need to clean the dollar sign and the commas using python. Don’t hard code it.
3. Determining Affordable Items:

create a list called basket and add there the items that you can buy with the money you have on the wallet
Don’t forget to update the wallet after buying an item.
If the basket is empty (no items can be afforded), return the string “Nothing”.
Otherwise, print the basket list in alphabetical order.
4. Examples:

Given:
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"


The output should be: ["Bread", "Fertilizer", "Water"].

Given:
items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$100"


The output should be: ["Apple", "Bananas", "Fan", "Honey", "Spoon"].

Given:
items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"


The output should be: "Nothing"."""

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"
wallet_clean = int(wallet.replace("$", ""))
print(wallet_clean)

