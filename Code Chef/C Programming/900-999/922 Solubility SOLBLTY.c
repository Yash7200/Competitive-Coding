#include <stdio.h>
int main(void)
{
	int t,x,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&x,&a,&b);
	    printf("%d\n",(10*(a+((100-x)*b))));
	}
	return 0;
}
