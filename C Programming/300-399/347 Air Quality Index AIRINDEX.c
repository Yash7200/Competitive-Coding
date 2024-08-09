//Problem Simplification:
    //Government decides to maintain AQI (Air Quality Index) under 100
    //Check if it is maintained or not.

//Logic:
    //Declare a variable
    //use if condition to check if it is below 100
    //when it follows print "YES".
    //otherwise print "NO" in else part.
#include <stdio.h>
int main(void)
{
	int x;
	scanf("%d",&x);
	if(x<100)
	{
	    printf("YES\n");
	}
	else
	{
	    printf("NO\n");
	}
	return 0;
}