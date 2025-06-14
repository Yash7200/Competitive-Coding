#include <stdio.h>
int main(void)
{
	int t,n,fact;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if((n==0)||(n==1))
	    {
	        printf("1\n");
	    }
	    else
	    {
	        int fact=1;
	        for(int j=1;j<=n;j++)
	        {
	            fact=fact*j;
	        }
	        printf("%d\n",fact);
	    }
	}
	return 0;
}
