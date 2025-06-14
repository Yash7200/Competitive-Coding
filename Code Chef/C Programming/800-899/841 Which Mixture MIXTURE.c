#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&a,&b);
	    if(a==0)
	    {
	        printf("Liquid\n");
	    }
	    else if(b==0)
	    {
	        printf("Solid\n");
	    }
	    else if((a>0)&&(b>0))
	    {
	        printf("Solution\n");
	    }
	}
	return 0;
}
