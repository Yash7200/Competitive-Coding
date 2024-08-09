//n --> no. of balls
//k --> no. of boxes

//divide balls into boxes such that
    //1 box have >= 1 ball
    //no box have same balls

//determine if it is possible
    //no. of balls in each box respectively with given criteria: 1,2,3,4,...,n
    //required balls: k*(k+1)/2  ==> (sum of 1 to n numbers)
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k;
	    scanf("%d %d",&n,&k);
	    if(n<k)
	    {
	        printf("NO\n");
	    }
	    else if( n >= ( (k*(k+1)/2)) )
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