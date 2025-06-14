#include <stdio.h>
int main(void)
{
	int t,a,b,w,p;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&w,&p,&a,&b);
	    printf("%d\n",((a/w)+(b/p)));
	}
	return 0;
}
