//t --> test cases
//n --> no. of people
//x --> people coming in party

//party will be hosted in a hall if coming people are less than or equal to hall capacity
// n<=x
#include <stdio.h>
int main(void)
{
	int t,n,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&x);
	    if(n<=x)
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