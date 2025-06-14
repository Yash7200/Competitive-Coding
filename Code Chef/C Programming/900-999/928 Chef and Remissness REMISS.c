#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&a,&b);
	    if(a>=b)
	    {
	        printf("%d %d\n",a,(a+b));
	    }
	    else
	    {
	        printf("%d %d\n",b,(a+b));
	    }
	}
	return 0;
}
