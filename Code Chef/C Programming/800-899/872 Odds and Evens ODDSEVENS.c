#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&a,&b);
	    if(((a+b)%2)==0)
	    {
	        printf("Bob\n");
	    }
	    else
	    {
	        printf("Alice\n");
	    }
	}
	return 0;
}
