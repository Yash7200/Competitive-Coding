#include <stdio.h>
int main(void)
{
	int t,g,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&g,&c);
	    printf("%d\n",((c*c)/(2*g)));
	}
	return 0;
}
