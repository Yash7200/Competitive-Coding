#include <stdio.h>
int main(void)
{
	int t,d,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&d,&n);
	    for(int j=0;j<d;j++)
	    {
	        n=(n*(n+1))/2;
	    }
	    printf("%d\n",n);
	}
	return 0;
}