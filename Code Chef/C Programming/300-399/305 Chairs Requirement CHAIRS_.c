#include <stdio.h>
int main() 
{
    int t,i,y,x;
    scanf("%d",&t);
	for(i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    if(x>y)
	    {
	        printf("%d\n",(x-y));
	    }
	    else
	    {
	        printf("0\n");
	    }
	}
	return 0;
}