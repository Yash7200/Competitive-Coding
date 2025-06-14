#include <stdio.h>
int main(void)
{
	int t,x,p,y,q;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&x,&y,&p,&q);
	    if((x+(10*p))==(y+(10*q)))
	    {
	        printf("Draw\n");
	    }
	    else if((x+(10*p))<(y+(10*q)))
	    {
	        printf("Chef\n");
	    }
	    else
	    {
	        printf("Chefina\n");
	    }
	}
	return 0;
}
