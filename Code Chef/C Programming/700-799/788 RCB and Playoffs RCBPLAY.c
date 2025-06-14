#include <stdio.h>
int main(void)
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&x,&y,&z);
	    if(x>=y)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        if((x+(2*z))>=y)
	        {
	            printf("YES\n");
	        }
	        else
	        {
	            printf("NO\n");
	        }
	    }
	}
	return 0;
}
