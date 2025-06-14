#include <stdio.h>
int main(void)
{
	int t,n,x,p;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&n,&x,&p);
	    if(((3*x)-(n-x))>=p)
	    {
	        printf("PASS\n");
	    }
	    else
	    {
	        printf("FAIL\n");
	    }
	}
	return 0;
}