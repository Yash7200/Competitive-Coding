#include <stdio.h>
int main(void)
{
	int t,x,y,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&a,&b,&x,&y);
	    if(a<b)
	    {
	        if((a+x)>=b)
	        {
	            printf("YES\n");
	        }
	        else
	        {
	            printf("NO\n");
	        }
	    }
	    else
	    {
	        if((a-y)>b)
	        {
	            printf("NO\n");
	        }
	        else
	        {
	            printf("YES\n");
	        }
	    }
	}
	return 0;
}