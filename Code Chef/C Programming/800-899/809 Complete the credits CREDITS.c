#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if(x<35)
	    {
	        printf("Underload\n");
	    }
	    else if(x>65)
	    {
	        printf("Overload\n");
	    }
	    else
	    {
	        printf("Normal\n");
	    }
	}
	return 0;
}
