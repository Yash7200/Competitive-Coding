#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&a,&b);
	    int min=a,max=b;
	    if(b<min)
	    {
	        min=b;
	        max=a;
	    }
	    while(min<max)
	    {
	        min=min*2;
	        if(min==max||min>max)
	        {
	            break;
	        }
	    }
	    if(min==max)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}
