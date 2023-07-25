//we'll receive 2 values & an operator to perform specific operation.
//To detect such operation we need to store that operator as a character
//Note:If we write scanf for that operator in a new line then enter key will be stored as input
//using if-else will decrease code readability so use switch case
//We're told that actual ans is not more than 10-6 as well as during division ans is in float so use .7f & multiply ans with 1.0

#include <stdio.h>
int main(void)
{
    int a,b;
    char c;
    scanf("%d %d %c",&a,&b,&c);
    switch(c)
    {
        case '+':
        printf("%d\n",a+b);
        break;
        
        case '-':
        printf("%d\n",a-b);
        break;
        
        case '*':
        printf("%d\n",a*b);
        break;
        
        case '/':
        printf("%.7f\n",1.0*a/b);
        break;
    }
	return 0;
}