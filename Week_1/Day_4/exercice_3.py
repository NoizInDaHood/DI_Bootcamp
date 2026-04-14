"""Exercise 7: Temperature Advice
Goal: Generate a random temperature and provide advice based on the temperature range.

Key Python Topics:

Functions
Conditionals (if / elif)
Random numbers
Floating-point numbers (Bonus)
Handling seasons (Bonus)


Step 1: Create the get_random_temp() Function

Create a function called get_random_temp() that returns a random integer between -10 and 40 degrees Celsius.


Step 2: Create the main() Function

Create a function called main(). Inside this function:
Call get_random_temp() to get a random temperature.
Store the temperature in a variable and print a friendly message like:
“The temperature right now is 32 degrees Celsius.”


Step 3: Provide Temperature-Based Advice

Inside main(), provide advice based on the temperature:
Below 0°C: e.g., “Brrr, that’s freezing! Wear some extra layers today.”
Between 0°C and 16°C: e.g., “Quite chilly! Don’t forget your coat.”
Between 16°C and 23°C: e.g., “Nice weather.”
Between 24°C and 32°C: e.g., “A bit warm, stay hydrated.”
Between 32°C and 40°C: e.g., “It’s really hot! Stay cool.”


Step 4: Floating-Point Temperatures (Bonus)

Modify get_random_temp() to return a random floating-point number using random.uniform() for more accurate temperature values.


Step 5: Month-Based Seasons (Bonus)

Instead of directly generating a random temperature, ask the user for a month (1-12) and determine the season using if/elif conditions.
Modify get_random_temp() to return temperatures specific to each season.


Expected Output:

The temperature right now is 32 degrees Celsius.
It's really hot! Stay cool."""


import random

def get_random_temp():
    random_temp = round(random.uniform(-40,10),2)
    return random_temp
def main():
    current_random = get_random_temp()
    print(f"The temperature right now is {current_random} degrees Celsius.")
    if current_random < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= current_random <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < current_random <= 23:
        print("Nice weather!")
    elif 24 <= current_random <= 32:
        print("A bit warm, stay hydrated.")
    elif 32 < current_random <= 40:
        print("It’s really hot! Stay cool.")
main()



def get_random_temp2(saison):
    if saison == "Winter":
        return round(random.uniform(-40,10),2)
    elif saison == "Spring":
        return round(random.uniform(11,19),2)
    elif saison == "Summer":
        return round(random.uniform(20,40),2)
    else:
        return round(random.uniform(16,22),2)


def main2():
    month = int(input("Type a number of month between 1 to 12:"))
    if month in [12,1,2]:
        saison = "winter"
    elif 3 <= month <= 5:
        saison = "Spring"
    elif 6 <= month <= 8:
        saison = "Summer"
    else:
        saison = "Fall"
    temp = get_random_temp2(saison)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather!")
    elif 24 <= temp <= 32:
        print("A bit warm, stay hydrated.")
    elif 32 < temp <= 40:
        print("It’s really hot! Stay cool.")    

main2()




