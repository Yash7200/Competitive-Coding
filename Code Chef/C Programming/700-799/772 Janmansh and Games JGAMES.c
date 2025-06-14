#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    if(((x+y)%2)==0)
	    {
	        printf("Janmansh\n");
	    }
	    else
	    {
	        printf("Jay\n");
	    }
	}
	return 0;
}