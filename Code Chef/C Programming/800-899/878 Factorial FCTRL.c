#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int cnt=0;
	    while(n>0)
	    {
	        n=n/5;
	        cnt=cnt+n;
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
