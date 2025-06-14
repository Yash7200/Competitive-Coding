#include <stdio.h>
int main(void)
{
	int t,p;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&p);
	    printf("%d\n",((p/2)+1));
	}
	return 0;
}
