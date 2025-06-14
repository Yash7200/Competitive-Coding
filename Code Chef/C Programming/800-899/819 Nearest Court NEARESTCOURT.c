#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    int z=((x+y)/2);
	    z=fmax(x-z,y-z);
	    printf("%d\n",z);
	}
	return 0;
}