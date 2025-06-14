#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&a,&b);
	    if((a+b)==2||(a+b)==3||(a+b)==5||(a+b)==7||(a+b)==11)
	    {
	        printf("Alice\n");
	    }
	    else
	    {
	        printf("Bob\n");
	    }
	}
	return 0;
}