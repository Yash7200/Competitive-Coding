//Problem Simplification:
    //We bought a calculator which prints extra 1 after all answer.

//Logic:
    //Declare 2 variables
    //Store input in them
    //Compute addition
    //print addition & 1 in same line
#include <stdio.h>
int main(void)
{
    int a,b;
    scanf("%d %d",&a,&b);
    printf("%d1\n",(a+b));
	return 0;
}