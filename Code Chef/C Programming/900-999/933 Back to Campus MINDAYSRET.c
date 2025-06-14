#include <stdio.h>
int main(void)
{
	int t,n,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&k);
	    int cnt=0;
	    while(n>0)
	    {
	        n=n-k;
	        cnt++;
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
