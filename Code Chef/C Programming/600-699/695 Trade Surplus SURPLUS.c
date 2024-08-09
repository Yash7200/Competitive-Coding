//Problem Simplification:
    //3 countries: a,b,c
    //a exports a1 costs a2
    //b exports b1 costs b2
    //Trade surplus of 'c' occurs when combined exports of both countries 'A' & 'B' is less than 0
    //Note:Actually there is mistake in problem statement. You will come to know about it by reading explanation of solution.

//Logic:
    //create 4 variables 'a1', 'a2', 'b1', 'b2'
    //scan & store values in them
    //subtract 'a2' from 'a1' & subtract 'b2' from 'b1'
    //Addition of both subtractions is our answer, if it is less than 0 print 'YES' otherwise print 'NO'
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a1,a2,b1,b2;
	    scanf("%d %d %d %d",&a1,&a2,&b1,&b2);
	    if( ((a1-a2) + (b1-b2)) < 0 )
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}