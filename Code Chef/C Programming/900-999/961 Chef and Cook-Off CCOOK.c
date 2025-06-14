#include <stdio.h>
int main(void)
{
	int t,a,b,c,d,e;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
	    if((a+b+c+d+e)==0)
	    {
	        printf("Beginner\n");
	    }
	    else if((a+b+c+d+e)==1)
	    {
	        printf("Junior Developer\n");
	    }
	    else if((a+b+c+d+e)==2)
	    {
	        printf("Middle Developer\n");
	    }
	    else if((a+b+c+d+e)==3)
	    {
	        printf("Senior Developer\n");
	    }
	    else if((a+b+c+d+e)==4)
	    {
	        printf("Hacker\n");
	    }
	    else if((a+b+c+d+e)==5)
	    {
	        printf("Jeff Dean\n");
	    }
	}
	return 0;
}
