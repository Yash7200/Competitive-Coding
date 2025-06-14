#include <stdio.h>
int main(void)
{
	int t,n,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&k);
	    if(n==0)
	    {
	        printf("0\n");
	    }
	    else if(n==k)
	    {
	        printf("1\n");
	    }
	    else if((n%k)==0)
	    {
	        printf("%d\n",(n/k));
	    }
	    else
	    {
	        printf("-1\n");
	    }
	}
	return 0;
}
