#include <stdio.h>
int main(void)
{
	int t,x,y,k,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&n,&k,&x,&y);
	    if(n==k)
	    {
	        printf("%d\n",(n*x));
	    }
	    else
	    {
	        if(x>y)
	        {
	            printf("%d\n",((k*x)+(y*(n-k))));
	        }
	        else
	        {
	            printf("%d\n",(n*x));
	        }
	    }
	}
	return 0;
}