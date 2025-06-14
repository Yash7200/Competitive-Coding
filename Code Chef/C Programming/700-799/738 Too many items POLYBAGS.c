#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if(n%10==0)
	    {
	        printf("%d\n",(n/10));
	    }
	    else
	    {
	        printf("%d\n",((n/10)+1));
	    }
	}
	return 0;
}
