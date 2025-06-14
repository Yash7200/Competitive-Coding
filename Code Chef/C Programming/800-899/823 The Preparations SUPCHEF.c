#include <stdio.h>
int main(void)
{
	int t,m,n,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&m,&n,&k);
	    if((n*k)>=m)
	    {
	        printf("NO\n");
	    }
	    else
	    {
	        printf("YES\n");
	    }
	}
	return 0;
}
