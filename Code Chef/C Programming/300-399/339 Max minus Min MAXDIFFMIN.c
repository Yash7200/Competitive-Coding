#include <stdio.h>
int main(void)
{
	int t,a,b,c,max,min;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&a,&b,&c);
	    printf("%d\n",(c-a));
	}
	return 0;
}