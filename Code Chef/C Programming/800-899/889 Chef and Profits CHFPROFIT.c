#include <stdio.h>
int main(void)
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&x,&y,&z);
	    printf("%d\n",((x*z)-(x*y)));
	}
	return 0;
}