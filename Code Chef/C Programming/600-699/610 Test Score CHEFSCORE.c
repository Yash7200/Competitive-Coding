#include <stdio.h>
int main(void)
{
	int t,n,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&n,&x,&y);
	    if(((y%x)==0)||((y%(n*x))==0))
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