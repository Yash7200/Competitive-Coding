#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if((x%5)!=0)
	    {
	        printf("-1\n");
	    }
	    else
	    {
	        if((x%10)==0)
	        {
	            printf("%d\n",(x/10));
	        }
	        else
	        {
	            printf("%d\n",((x/10)+1));
	        }
	    }
	}
	return 0;
}