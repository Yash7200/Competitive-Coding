#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if(n>=10)
	    {
	        printf("-1\n");
	    }
	    else
	    {
	        printf("Thanks for helping Chef!\n");
	    }
	}
	return 0;
}