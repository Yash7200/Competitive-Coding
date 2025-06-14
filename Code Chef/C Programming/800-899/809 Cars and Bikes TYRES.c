#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if((n%4)==0)
	    {
	        printf("NO\n");
	    }
	    else if(((n%4)!=0)&&((n%2)==0))
	    {
	        printf("YES\n");
	    }
	}
	return 0;
}