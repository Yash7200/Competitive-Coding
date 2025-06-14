#include <stdio.h>
int main(void)
{
	int t,a,b,c,d;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&a,&b,&c,&d);
	    if(((a+c)>=180)&&((b+d)>=180))
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