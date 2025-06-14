#include <stdio.h>
int main(void)
{
	int t,p,cnt=1;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&p);
	    if(((p%100)+(p/100))<=10)
	    {
	        printf("%d\n",((p%100)+(p/100)));
	    }
	    else
	    {
	        printf("-1\n");
	    }
	}
	return 0;
}