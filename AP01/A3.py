def fizz_buzz():
	num = int(input())
	fizz = 'O número é divisível por 3 e 5'
	buzz = 'O número não é divisível por 3 e 5'

	return print(fizz if ((num % 3 == 0) and (num % 5 == 0)) else buzz)

fizz_buzz()