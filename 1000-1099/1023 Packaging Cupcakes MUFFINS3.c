// n --> no. of cupcakes

// Chef needs to decide how many cupcakes should be placed in each package

// a --> int **between 1 to n

// we're supposed to print integer which is between of given number

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    if(n%2==0)
	    {
	        printf("%d\n", ((n/2) + 1) );
	    }
	    else
	    {
	        printf("%d\n",( (n+1)/2) );
	    }
	}
	return 0;
}