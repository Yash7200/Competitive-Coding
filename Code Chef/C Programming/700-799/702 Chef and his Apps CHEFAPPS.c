#include <stdio.h>
int main(void)
{
	int t,s,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&s,&x,&y,&z);
	    int space=s;
	    space=space-x-y;
	    if(space>=z)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        if(x>y)
	        {
	            space=space+x;
	            if(space>=z)
	            {
	                printf("1\n");
	            }
	            else
	            {
	                printf("2\n");
	            }
	        }
	        else
	        {
	            space=space+y;
	            if(space>=z)
	            {
	                printf("1\n");
	            }
	            else
	            {
	                printf("2\n");
	            }
	        }
	    }
	    
	}
	return 0;
}
