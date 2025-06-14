#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int cnt=0;
	    cnt=n/100;
	    n=n%100;
	    cnt=cnt+(n/50);
	    n=n%50;
	    cnt=cnt+(n/10);
	    n=n%10;
	    cnt=cnt+(n/5);
	    n=n%5;
	    cnt=cnt+(n/2);
	    n=n%2;
	    cnt=cnt+n;
	    printf("%d\n",cnt);
	}
	return 0;
}
