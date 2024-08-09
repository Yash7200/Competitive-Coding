//Problem Simplification:
    //chef prepared brunch for 20 neighbors
    //x --> no. of plates prepared by Chef
    //y --> no. of plates taken by each neighbor
    //Find how many neighbor chef can feed (mistake in comments of code)

//Logic:
    //We need to distribute all required plates to each guest
    //which can be done via division
    //If number is higher or equal to 20 then we'll print "20" as a string
    //otherwise we'll print the division

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int x,y;
	    scanf("%d %d",&x,&y);
	    if( (x/y) >= 20)
	    {
	        printf("20\n");
	    }
	    else
	    {
	        printf("%d\n",x/y);
	    }
	}
	return 0;
}