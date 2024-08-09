//Problem Simplification:
    //Check if team qualifies for next stage

//Logic:
    //x --> score of a team
    //if team scored 12 or more then it qualified & print "Yes"
    //otherwise print "No"
#include <stdio.h>
int main(void)
{
	int x;
	scanf("%d",&x);
	if(x>=12)
	{
	    printf("Yes\n");
	}
	else
	{
	    printf("No\n");
	}
	return 0;
}