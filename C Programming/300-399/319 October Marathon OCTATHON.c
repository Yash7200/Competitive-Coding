//Problem Simplification:
    //Gold Medal --> time taken < 3
    //Silver Medal --> time taken <= 3 && time taken < 6
    //Bronze Medal --> time taken > 6

//Logic:
    //use if else if ... else
    //If time is less then 3 then print "GOLD"
    //otherwise if time is greater or equal to 3 & less than 6 then print "SILVER"
    //otherwise print "BRONZE"

#include <stdio.h>
int main(void)
{
	int x;
	scanf("%d",&x);
	if(x<3)
	{
	    printf("GOLD\n");
	}
	else if(x>=3 && x<6)
	{
	    printf("SILVER\n");
	}
	else
	{
	    printf("BRONZE\n");
	}
	return 0;
}