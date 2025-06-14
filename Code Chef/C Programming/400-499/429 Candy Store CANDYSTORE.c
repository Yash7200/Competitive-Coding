#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    if(y>x)
	    {
	        printf("%d\n",(x+((y-x)*2)));
	    }
	    else
	    {
	        printf("%d\n",y);
	    }
	}
	return 0;
}