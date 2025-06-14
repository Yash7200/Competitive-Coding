#include <stdio.h>
int main()
{
	// your code goes here
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&x,&y,&z);
	    if(x<=3)
	    {
	        printf("%d\n",(x*y));
	    }
	    else
	    {
	        if((x%3)==0)
	        {
	            printf("%d\n",((x*y)+(((x/3)-1)*z)));
	        }
	        else
	        {
	            printf("%d\n",((x*y)+((x/3)*z)));
	        }
	    }
	}
	return 0;
}

