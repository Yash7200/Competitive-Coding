#include <stdio.h>
int main(void)
{
	int t,x,m,d;
	scanf("%d",&t);
	for(int j=0;j<t;j++)
	{
	    scanf("%d%d%d",&x,&m,&d);
	    if((x*m)<=(x+d))
	    {
	        printf("%d\n",(x*m));
	    }
	    else
	    {
	        printf("%d\n",(x+d));
	    }
	}
	return 0;
}
