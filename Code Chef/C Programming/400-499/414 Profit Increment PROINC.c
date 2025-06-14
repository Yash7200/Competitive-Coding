#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    printf("%d\n",((x+((10*x)/100))-(x-y)));
	}
	return 0;
}