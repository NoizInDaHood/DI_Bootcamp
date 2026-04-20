"""Goal: Create a Tic Tac Toe game in Python where two players can play against each other.



👩‍🏫 👩🏿‍🏫 What You’ll learn
Conditionals (if, elif, else)
Loops (for, while)
Functions
List manipulation
User input


Key Python Topics:

Lists (2D lists)
Loops (while)
Conditional statements (if, elif, else)
Functions
User input (input())
String formatting


🛠️ What you will create
A command-line Tic Tac Toe game that allows two players to take turns marking a 3x3 grid.



tic-tac-toe



Instructions:
Tic Tac Toe is played on a 3x3 grid. Players take turns marking empty squares with their symbol (‘O’ or ‘X’). The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins. If all squares are filled and no player has three in a row, the game is a tie.



Step 1: Representing the Game Board

You’ll need a way to represent the 3x3 grid.
A list of lists (a 2D list) is a good choice.
Initially, each cell in the grid should be empty (e.g., represented by a space ‘ ‘).

Step 2: Displaying the Game Board

Create a function called display_board() to print the current state of the game board.
The output should visually represent the 3x3 grid.
Think about how to format the output to make it easy to read.


Step 3: Getting Player Input

Create a function called player_input(player) to get the player’s move.
The function should ask the player to enter a position (e.g., row and column numbers).
Validate the input to ensure it’s within the valid range and that the chosen cell is empty.
Think about how to ask the user for input, and how to validate that input.


Step 4: Checking for a Winner

Create a function called check_win(board, player) to check if the current player has won.
The function should check all possible winning combinations (rows, columns, diagonals).
If a player has won, return True; otherwise, return False.
Think about how to check every possible winning combination.


Step 5: Checking for a Tie

Create a function to check if the game has resulted in a tie.
The function should check if all positions of the board are full, without a winner.


Step 6: The Main Game Loop

Create a function called play() to manage the game flow.
Initialize the game board.
Use a while loop to continue the game until there’s a winner or a tie.
Inside the loop:
Display the board.
Get the current player’s input.
Update the board with the player’s move.
Check for a winner.
Check for a tie.
Switch to the next player.
After the loop ends, display the final result (winner or tie).


Tips:

Consider creating helper functions to break down the logic into smaller, manageable parts.
Follow the single responsibility principle: each function should do one thing and do it well.
Think about how to switch between players.
Think about how you will store the player’s symbol.

"""

row1 = ["_","_","_"]
row2 = ["_","_","_"]
row3 = ["_","_","_"]
board = [
    row1,
    row2, 
    row3
    ]
def display_board():
    print("\n.  TIC TAC TOE\n. *** BOARD ***")
    print("*" * 17)
    print(f"* {"-" * 13} *")
    for row in (board):
        print(f"* | {row[0][0]} | {row[1][0]} | {row[2][0]} | *")
        print(f"* {"-" * 13} *")
    print("*" * 17)

def round(player):
    while True:
        display_board()
        try:
            column = int(input(f"Player with symbole {player}, choose your column by taping a number from 1 to 3, starting from the left: "))
            if 1 <= column <= 3:
                raw = int(input("Now, choose which raw by taping a number from 1 to 3, starting from the top: "))
                if 1 <= raw <= 3:
                    if board[raw-1][column-1] == "_":
                        board[raw-1][column-1] = player
                        break
                    else:
                        print("\nSorry this position is already taken")
                else:
                    print("For the raw you must type a number between 1 to 3.\nFrom the top to the bottom.")
            else:
                print("For the column you must type a number between 1 to 3.\nFrom the left to the right.")
        except ValueError:
            print("Please, type a number from 1 to 3!")

def check_win():
# # row1 = [["_"],["_"],["_"]]
# # row2 = [["_"],["_"],["_"]]
# # row3 = [["_"],["_"],["_"]]
    for raw in board:
        if raw[0] == raw[1] == raw[2] and raw[0] != "_":
            return True
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != "_":
            return True
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != "_":
        return True
    if board[2][0] == board[1][1] == board[0][2] and board[2][0] != "_":
        return True
    else:
        return False

def play():
    player_2 = ""
    display_board()
    print("\nWelcome to the Tic Tac Toe game!")
    choose_icone_player1 = input("\nPlayer 1, please choose your symbole, type X or O: ")
    while choose_icone_player1 not in ["X","x","O","o"]:
        choose_icone_player1 = input("Please, type X or O: ")
    player_1 = choose_icone_player1
    if player_1.lower() == "x":
        player_2 = "O"
    else:
        player_2 = "X"
    while True:
        print(f"Player 1, its your turn, your are playing with the {player_1} symbol.")
        round(player_1.upper())
        if check_win():
            display_board()
            print(f"Congratulation Player 1! You won the game!!")
            break
        elif all(board[raw][col] != "_" for raw in range(3) for col in range(3)):
            display_board()
            print("It's a tie!!")
            break
        else:
            round(player_2)
            if check_win():
                display_board()
                print(f"Congratulation Player 2! You won the game!!")
                break

play()   
    
    
    



    

        






