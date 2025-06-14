#include <stdio.h>
int main(void)
{
	int t,s;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&s);
	    if(s==0)
	    {
	        printf("-1\n");
	    }
	    else
	    {
	        printf("%d\n",(-1*(s+1)));
	    }
	}
	return 0;
}
