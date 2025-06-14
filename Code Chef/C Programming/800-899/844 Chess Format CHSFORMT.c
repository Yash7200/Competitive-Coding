#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&a,&b);
	    if((a+b)<3)
	    {
	        printf("1\n");
	    }
	    else if((3<=(a+b))&&((a+b)<=10))
	    {
	        printf("2\n");
	    }
	    else if((11<=(a+b))&&((a+b)<=60))
	    {
	        printf("3\n");
	    }
	    else if(60<(a+b))
	    {
	        printf("4\n");
	    }
	}
	return 0;
}
