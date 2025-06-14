#include <stdio.h>
int main(void)
{
	int t,n,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&n,&a,&b);
	    int cnt=0;
	    while(n>0)
	    {
	        n=n/2;
	        cnt++;
	    }
	    printf("%d\n",((a*(cnt-1))+(b*(cnt-2))));
	}
	return 0;
}
