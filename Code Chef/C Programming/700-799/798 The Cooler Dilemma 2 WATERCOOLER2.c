#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    if((x==y)||(x>y))
	    {
	        printf("0\n");
	    }
	    else
	    {
	        if(y%x==0)
	        {
	            printf("%d\n",((y/x)-1));
	        }
	        else
	        {
	            printf("%d\n",(y/x));
	        }
	    }
	}
	return 0;
}
