//Problem Simplification:
    //chef wants to test performance of new judging system
    //x --> miliseconds of testing for old judging server
    //y --> miliseconds of testing for new judging server
    //Determine which system is fast
    //Print: Old, New, Same for specific results

//Logic:
    //If both judging systems are having same speed then print "Same". Use if condition for comparison.
    //If old judging system is fast then print "Old". Use else if condition for checking
    //If all other conditions are false then New machine is faster.

#include <stdio.h>
int main(void)
{
	int x,y;
	scanf("%d %d",&x,&y);
	if(x==y)
	{
	    printf("Same\n");
	}
	else if(x<y)
	{
	    printf("Old\n");
	}
	else
	{
	    printf("New\n");
	}
	return 0;
}