#include <stdio.h>
int main(void)
{
	int t,a,b,c,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&a,&b,&c,&x);
	    if(((a+b)>=x)||((b+c)>=x)||((a+c)>=x))
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