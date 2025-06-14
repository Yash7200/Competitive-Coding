#include <stdio.h>
int main()
{
	int t,n,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&n,&m);
	    if((n%m)==0)
	    {
	        if(((n/m)%2)==0)
	        {
	            printf("Yes\n");
	        }
	        else
	        {
	            printf("No\n");
	        }
	    }
	    else
	    {
	        printf("No\n");
	    }
	}
	return 0;
}

