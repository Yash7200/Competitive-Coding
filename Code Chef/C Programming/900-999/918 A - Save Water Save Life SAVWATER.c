#include <stdio.h>
int main(void)
{
	int t,h,x,y,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&h,&x,&y,&c);
	    if((h*(x+(y/2)))<=c)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}
