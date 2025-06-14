#include <stdio.h>
int main(void)
{
	int t,d,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&d,&x,&y,&z);
	    if((x*7)>=((d*y)+((7-d)*z)))
	    {
	        printf("%d\n",(x*7));
	    }
	    else
	    {
	        printf("%d\n",((d*y)+((7-d)*z)));
	    }
	}
	return 0;
}
