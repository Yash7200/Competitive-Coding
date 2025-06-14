#include <stdio.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&a,&b,&c);
	    if((a+c)>=b)
	    {
	        printf("%d\n",(a+c));
	    }
	    else
	    {
	        printf("%d\n",b);
	    }
	}
	return 0;
}
