#include <stdio.h>
int main(void)
{
	int t,n,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&n,&x);
	    int pizza=1,slice=n*x;
	    while(slice!=0)
	    {
	        if(slice>(pizza*4))
	        {
	            pizza++;
	        }
	        else
	        {
	            break;
	        }
	    }
	    printf("%d\n",pizza);
	}
	return 0;
}
