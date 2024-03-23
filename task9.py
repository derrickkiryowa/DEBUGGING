def divide(a,b):
    return a / b


def main():
    try:
        x = int(input("Enter a number: "))
        y = int(input("Enter another number: "))
        
        result = divide(x, y)
        print("Result of division:", result)
        
    except ValueError:
        print("Please enter valid integers.")
    
    except ZeroDivisionError:
        print("Cannot divide by zero!")
    
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
     main()

#a scenario where we can avoid crashing of our 
#error handling incase the  user enters in data which incomplete to that one a computer expects.



